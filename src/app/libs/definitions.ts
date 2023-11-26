import { ImageProps } from "next/image";

export interface NavigationItem {
    title: string;
    href: string;
}

export interface Keyword {
    title: string;
    icon: any;
  }
  
export interface Project {
    id: number;
    href: string;
    image: any;
    title: string;
    description: string;
    role: string;
    keywords: Keyword[];
  }