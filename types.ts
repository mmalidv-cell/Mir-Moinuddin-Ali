import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  image: string;
  icon: LucideIcon;
  subCategories?: {
    title: string;
    description: string;
    image: string;
  }[];
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
}

export interface NavLink {
  label: string;
  path: string;
}
