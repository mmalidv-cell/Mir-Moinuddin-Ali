import { 
  Blinds, 
  Layers, 
  Grid, 
  ShieldCheck, 
  Hammer, 
  Scissors,
  Home
} from 'lucide-react';
import { ServiceItem, Testimonial, BlogPost, NavLink } from './types';

export const COMPANY_INFO = {
  name: "Valuria Shades",
  tagline: "We Bring the Showroom to Your Doorstep.",
  email: "mmali.dv@gmail.com",
  phone: "+91 9908815465",
  address: "Surya Nilaya, 39th Cross, HBR Layout, Bangalore 560043",
  whatsappUrl: "https://wa.me/919908815465"
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "curtains",
    title: "Curtains & Drapery",
    shortDescription: "Elegant fabrics tailored to perfection.",
    fullDescription: "Transform your living space with our premium collection of curtains and drapes. We offer a wide range of fabrics including linen, velvet, blackout, and sheer materials, all custom-tailored to fit your windows perfectly.",
    image: "https://picsum.photos/id/301/800/600",
    icon: Layers,
    features: ["Eyelet", "Pleated", "Sheer", "Blackout", "Linen", "Velvet", "Motorized Options"],
    subCategories: [
      { title: "Sheer Elegance", description: "Light filtering fabrics for a breezy feel.", image: "https://picsum.photos/id/302/600/400" },
      { title: "Luxury Blackout", description: "Complete privacy and light control.", image: "https://picsum.photos/id/306/600/400" }
    ]
  },
  {
    id: "blinds",
    title: "Premium Blinds",
    shortDescription: "Modern functionality meets style.",
    fullDescription: "Our range of blinds offers the perfect balance of light control and privacy. From sleek roller blinds to textured wooden blinds, we have solutions for every room.",
    image: "https://picsum.photos/id/312/800/600",
    icon: Blinds,
    features: ["Roller", "Zebra", "Honeycomb", "Wooden", "Roman"],
    subCategories: [
      { title: "Wooden Blinds", description: "Natural warmth and texture.", image: "https://picsum.photos/id/314/600/400" },
      { title: "Zebra Blinds", description: "Modern day-night control.", image: "https://picsum.photos/id/318/600/400" }
    ]
  },
  {
    id: "wallpapers",
    title: "Designer Wallpapers",
    shortDescription: "Walls that tell a story.",
    fullDescription: "Make a statement with our imported wallpapers. Whether you want a subtle texture or a bold 3D design, our collection includes options for feature walls, kids' rooms, and corporate spaces.",
    image: "https://picsum.photos/id/324/800/600",
    icon: Grid,
    features: ["Luxury Textured", "Kids Wallpapers", "3D Designs", "Wall Panels", "Custom Murals"]
  },
  {
    id: "flooring",
    title: "Flooring Solutions",
    shortDescription: "Ground your space in luxury.",
    fullDescription: "Step onto luxury with our premium flooring solutions. We provide high-quality wooden, vinyl, and synthetic options that are durable and aesthetically pleasing.",
    image: "https://picsum.photos/id/338/800/600",
    icon: Layers,
    features: ["Wooden Flooring", "Vinyl Flooring", "Grass Mats", "Synthetic Flooring", "Carpet Tiles"]
  },
  {
    id: "screens",
    title: "Mosquito Screens",
    shortDescription: "Keep pests out, let breeze in.",
    fullDescription: "Enjoy fresh air without the worry of insects. Our mosquito screens are designed to be unobtrusive and highly effective, available in various mechanisms.",
    image: "https://picsum.photos/id/342/800/600",
    icon: ShieldCheck,
    features: ["Magnetic", "Sliding", "Pleated", "Velcro Fit"]
  },
  {
    id: "grills",
    title: "Invisible Safety Grills",
    shortDescription: "Safety without compromising the view.",
    fullDescription: "Secure your high-rise balconies and windows with our invisible safety grills. Made from high-tensile steel cables, they offer robust protection while maintaining an unobstructed view.",
    image: "https://picsum.photos/id/349/800/600",
    icon: Grid,
    features: ["Balcony Safety", "Window Protection", "Staircase Safety", "Bird Protection"]
  },
  {
    id: "interior",
    title: "Complete Interiors",
    shortDescription: "Turnkey interior design services.",
    fullDescription: "From concept to creation, we handle your entire home interior project. Our team manages design, fabrication, and installation to deliver a ready-to-move-in home.",
    image: "https://picsum.photos/id/364/800/600",
    icon: Home,
    features: ["Turnkey Projects", "Furniture Design", "Space Planning", "Renovations"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Aditi Rao",
    location: "HBR Layout",
    rating: 5,
    comment: "Valuria Shades completely transformed our living room. The curtains are exquisite and the installation was flawless. Highly recommended!"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Indiranagar",
    rating: 5,
    comment: "Professional team and great quality invisible grills. I feel much safer in my apartment now, and the view is still perfect."
  },
  {
    id: 3,
    name: "Sneha Gupta",
    location: "Whitefield",
    rating: 4.8,
    comment: "Loved the wallpaper collection. It was hard to choose because they had so many good designs. The finish is premium."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Top Interior Design Trends for 2024",
    date: "October 12, 2023",
    excerpt: "Discover the latest color palettes, textures, and sustainable materials taking the design world by storm.",
    image: "https://picsum.photos/id/401/800/600",
    category: "Trends"
  },
  {
    id: "2",
    title: "How to Choose the Right Curtains",
    date: "November 5, 2023",
    excerpt: "A comprehensive guide on fabric selection, pleating styles, and how to measure your windows correctly.",
    image: "https://picsum.photos/id/402/800/600",
    category: "Guide"
  },
  {
    id: "3",
    title: "Benefits of Invisible Grills",
    date: "December 1, 2023",
    excerpt: "Why modern high-rise apartments are switching from traditional grills to invisible safety solutions.",
    image: "https://picsum.photos/id/403/800/600",
    category: "Safety"
  }
];
