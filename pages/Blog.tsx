import React, { useState, useEffect } from 'react';
import { BLOG_POSTS } from '../constants';
import { Calendar, Sparkles, Loader2, Lock, Settings, ChevronDown, ChevronUp, Upload } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const Blog: React.FC = () => {
  const [postImages, setPostImages] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({});
  const [hasApiKey, setHasApiKey] = useState(false);

  // Generator Settings State
  const [showSettings, setShowSettings] = useState(false);
  const [aspectRatio, setAspectRatio] = useState("16:9");
  const [quality, setQuality] = useState("1K");
  const [roomType, setRoomType] = useState("Living Room");
  const [customPrompt, setCustomPrompt] = useState("");

  useEffect(() => {
    const checkKey = async () => {
      if (window.aistudio) {
        const hasKey = await window.aistudio.hasSelectedApiKey();
        setHasApiKey(hasKey);
      } else {
        // Fallback: Assume environment variable is present if not using the studio wrapper
        setHasApiKey(!!process.env.API_KEY);
      }
    };
    checkKey();
  }, []);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>, postId: string) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setPostImages(prev => ({ ...prev, [postId]: reader.result as string }));
        }
      };
      reader.readAsDataURL(file);
    }
    // Reset the input value so the same file can be selected again if needed
    event.target.value = '';
  };

  const handleGenerateImage = async (postId: string, title: string, category: string) => {
    // Ensure key selection for high-quality models
    if (window.aistudio && !hasApiKey) {
      try {
        await window.aistudio.openSelectKey();
        setHasApiKey(true);
      } catch (e) {
        console.error("Key selection failed", e);
        return;
      }
    }

    setLoading(prev => ({ ...prev, [postId]: true }));

    try {
      // Create new instance to ensure latest key is used
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const prompt = `
        Generate a highly detailed, ultra-photorealistic image showcasing premium curtains and blinds installed in a modern home interior.

        CONTEXT:
        • Blog Topic: ${title} (${category})
        • Room Type: ${roomType}
        ${customPrompt ? `• Specific User Instructions: ${customPrompt}` : ''}

        CURTAINS & BLINDS DETAILS:
        • Highlight premium fabric curtains with deep folds, realistic stitching, and perfect fall.
        • Include elegant sheer curtains layered behind the main drapes.
        • Show designer blinds (zebra blinds / roller blinds / Roman blinds) as optional combinations.
        • Fabrics must display rich texture — linen, velvet, cotton blends, or silk-touch materials.
        • Colors should be aesthetically pleasing: beige, ivory, warm grey, charcoal, olive, cocoa brown, or pastel tones.

        VISUAL STYLE:
        • Ultra-realistic soft lighting from windows.
        • Sunlight glow filtering through sheers.
        • Sharp shadows, clean highlights.
        • Reflections on polished floors or glass where suitable.
        • Premium interior styling with tasteful décor (sofa, bed, flooring, plants, lamps).

        CAMERA STYLE:
        • High dynamic range photography.
        • 35–50mm lens cinematic depth.
        • Sharp focus, full-scene clarity.

        MOOD & FINISH:
        • Luxurious, Modern, Minimalist, Warm and elegant ambiance.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-image-preview',
        contents: {
          parts: [{ text: prompt }],
        },
        config: {
          imageConfig: {
            aspectRatio: aspectRatio,
            imageSize: quality
          }
        },
      });

      if (response.candidates?.[0]?.content?.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            const base64String = part.inlineData.data;
            const imageUrl = `data:image/png;base64,${base64String}`;
            setPostImages(prev => ({ ...prev, [postId]: imageUrl }));
            break; 
          }
        }
      }
    } catch (error: any) {
      console.error("Error generating image:", error);
      if (error.message?.includes("Requested entity was not found") && window.aistudio) {
        setHasApiKey(false);
        await window.aistudio.openSelectKey();
      }
    } finally {
      setLoading(prev => ({ ...prev, [postId]: false }));
    }
  };

  return (
    <div className="bg-neutral-50 min-h-screen py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-8">
            <h1 className="font-serif text-4xl font-bold text-center mb-4">Interior Design Insights</h1>
            
            <div className="flex flex-wrap justify-center gap-4 mb-6">
                {!hasApiKey && window.aistudio && (
                    <button 
                        onClick={() => window.aistudio.openSelectKey().then(() => setHasApiKey(true))}
                        className="flex items-center text-sm bg-neutral-900 text-white px-4 py-2 rounded-full hover:bg-neutral-800 transition-colors shadow-md"
                    >
                        <Lock size={14} className="mr-2" /> Enable AI Features
                    </button>
                )}
                
                <button 
                    onClick={() => setShowSettings(!showSettings)}
                    className="flex items-center text-sm bg-white text-neutral-700 border border-neutral-300 px-4 py-2 rounded-full hover:bg-neutral-50 transition-colors shadow-sm"
                >
                    <Settings size={14} className="mr-2" /> 
                    AI Generator Settings
                    {showSettings ? <ChevronUp size={14} className="ml-2" /> : <ChevronDown size={14} className="ml-2" />}
                </button>
            </div>

            {/* AI Settings Panel */}
            {showSettings && (
                <div className="bg-white p-6 rounded-xl shadow-lg border border-neutral-200 w-full max-w-2xl animate-in slide-in-from-top-2 mb-8">
                    <h3 className="font-bold text-neutral-800 mb-4 flex items-center">
                        <Sparkles size={16} className="text-secondary mr-2" /> Image Generation Preferences
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-xs font-bold text-neutral-500 uppercase mb-2">Room Type</label>
                            <select 
                                value={roomType} 
                                onChange={(e) => setRoomType(e.target.value)}
                                className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                            >
                                <option>Living Room</option>
                                <option>Master Bedroom</option>
                                <option>Dining Room</option>
                                <option>Kids Room</option>
                                <option>Home Office</option>
                                <option>Balcony</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-neutral-500 uppercase mb-2">Aspect Ratio</label>
                            <select 
                                value={aspectRatio} 
                                onChange={(e) => setAspectRatio(e.target.value)}
                                className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                            >
                                <option value="16:9">Landscape (16:9)</option>
                                <option value="9:16">Portrait (9:16)</option>
                                <option value="1:1">Square (1:1)</option>
                                <option value="4:3">Standard (4:3)</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-neutral-500 uppercase mb-2">Quality</label>
                            <select 
                                value={quality} 
                                onChange={(e) => setQuality(e.target.value)}
                                className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                            >
                                <option value="1K">Standard (1K)</option>
                                <option value="2K">High (2K)</option>
                            </select>
                        </div>
                    </div>

                    <div className="mt-6 border-t border-neutral-100 pt-4">
                        <label className="block text-xs font-bold text-neutral-500 uppercase mb-2">Custom Details & Instructions (Optional)</label>
                        <textarea 
                            value={customPrompt}
                            onChange={(e) => setCustomPrompt(e.target.value)}
                            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                            rows={3}
                            placeholder="Add specific details (e.g., 'Blue velvet curtains with gold tie-backs', 'Morning sunlight coming from the left window')..."
                        ></textarea>
                    </div>
                </div>
            )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map(post => {
            const currentImage = postImages[post.id] || post.image;
            const isGenerating = loading[post.id];

            return (
              <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-neutral-100 flex flex-col group">
                <div className={`relative overflow-hidden ${aspectRatio === "9:16" ? "h-96" : "h-56"} transition-all duration-300`}>
                    {isGenerating ? (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-100 text-neutral-500 z-10">
                            <Loader2 className="animate-spin mb-2 text-secondary" size={32} />
                            <span className="text-xs font-bold uppercase tracking-wider">Rendering Room...</span>
                        </div>
                    ) : (
                        <>
                           <img 
                                src={currentImage} 
                                alt={post.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                            />
                           
                           {/* Upload Button */}
                           <label 
                                className="absolute top-3 right-14 bg-white/90 hover:bg-white text-neutral-700 hover:text-primary p-2 rounded-full shadow-lg backdrop-blur-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all transform md:translate-y-2 md:group-hover:translate-y-0 z-20 cursor-pointer"
                                title="Upload Custom Image"
                           >
                                <Upload size={18} />
                                <input 
                                    type="file" 
                                    accept="image/*" 
                                    className="hidden" 
                                    onChange={(e) => handleImageUpload(e, post.id)}
                                />
                           </label>

                           {/* Generate Button */}
                           <button
                                onClick={() => handleGenerateImage(post.id, post.title, post.category)}
                                className="absolute top-3 right-3 bg-white/90 hover:bg-white text-secondary hover:text-primary p-2 rounded-full shadow-lg backdrop-blur-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all transform md:translate-y-2 md:group-hover:translate-y-0 z-20"
                                title="Generate AI Preview"
                           >
                                <Sparkles size={18} />
                           </button>
                        </>
                    )}
                </div>
                <div className="p-6 flex flex-col flex-grow relative">
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider">{post.category}</span>
                  <h3 className="font-serif text-xl font-bold text-neutral-900 mt-2 mb-3">{post.title}</h3>
                  <div className="flex items-center text-neutral-500 text-sm mb-4">
                    <Calendar size={14} className="mr-2" />
                    {post.date}
                  </div>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-4 flex-grow">{post.excerpt}</p>
                  <button className="text-primary font-bold text-sm hover:text-teal-900 transition-colors text-left">Read More &rarr;</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;