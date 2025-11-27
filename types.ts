export interface LibraryItem {
  id: string;
  title: string;
  author: string;
  type: 'Book' | 'Article';
  cover_url: string;
  file_url: string;
  uploaded_by?: string;
  created_at?: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image_url: string;
  uploaded_by?: string;
  created_at?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  type: 'image' | 'youtube';
  file_url: string; // URL for image or YouTube link
  thumbnail_url?: string;
  uploaded_by?: string;
  created_at?: string;
}

export interface HistoryItem {
  id: string;
  title: string;
  year_or_date: string;
  description: string;
  image_url?: string;
  uploaded_by?: string;
  created_at?: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at?: string;
}

export interface PopulationData {
  region: string;
  population: number;
}

export interface AdminUser {
  email: string;
  role: 'admin';
}
