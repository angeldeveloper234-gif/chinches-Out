import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface MethodItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}
