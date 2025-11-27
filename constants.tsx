import { LibraryItem, EventItem, GalleryItem, HistoryItem, PopulationData } from './types';
import React from 'react';
import { Book, Users, MapPin, Calendar, Image as ImageIcon, History } from 'lucide-react';

export const ADMIN_EMAILS = [
  '369farhadali@gmail.com',
  'farhadaliturkofficial@gmail.com'
];

export const MOCK_POPULATION: PopulationData[] = [
  { region: 'Punjab', population: 45000 },
  { region: 'Sindh', population: 32000 },
  { region: 'KPK', population: 18000 },
  { region: 'Balochistan', population: 5000 },
  { region: 'Islamabad', population: 8000 },
  { region: 'Gilgit-Baltistan', population: 12000 },
  { region: 'Azad Kashmir', population: 9000 },
];

export const MOCK_HISTORY: HistoryItem[] = [
  {
    id: '1',
    title: 'Migration to South Asia',
    year_or_date: '1000 AD - 1500 AD',
    description: 'Various waves of Turkic migrations into the Indian subcontinent, establishing cultural and political roots.',
    image_url: 'https://picsum.photos/id/1015/800/400'
  },
  {
    id: '2',
    title: 'Establishment of Community Centers',
    year_or_date: '1947',
    description: 'Post-independence consolidation of Turk families in major cities of Pakistan.',
    image_url: 'https://picsum.photos/id/1016/800/400'
  },
  {
    id: '3',
    title: 'First Cultural Exchange Program',
    year_or_date: '1985',
    description: 'Formal delegation sent to Turkey to reconnect with ancestral roots.',
    image_url: 'https://picsum.photos/id/1036/800/400'
  }
];

export const MOCK_EVENTS: EventItem[] = [
  {
    id: '1',
    title: 'Annual Cultural Gala',
    date: '2023-12-15',
    location: 'Islamabad Club',
    description: 'A night of traditional music, food, and networking for the community.',
    image_url: 'https://picsum.photos/id/203/600/400'
  },
  {
    id: '2',
    title: 'Youth Leadership Summit',
    date: '2024-01-20',
    location: 'PC Hotel, Lahore',
    description: 'Empowering the next generation of leaders.',
    image_url: 'https://picsum.photos/id/204/600/400'
  }
];

export const MOCK_LIBRARY: LibraryItem[] = [
  {
    id: '1',
    title: 'Heritage of the Turks',
    author: 'Dr. Ahmet Yilmaz',
    type: 'Book',
    cover_url: 'https://picsum.photos/id/1073/300/450',
    file_url: '#'
  },
  {
    id: '2',
    title: 'Linguistic Evolution in Pakistan',
    author: 'Sarah Khan',
    type: 'Article',
    cover_url: 'https://picsum.photos/id/1074/300/450',
    file_url: '#'
  }
];

export const MOCK_GALLERY: GalleryItem[] = [
  {
    id: '1',
    title: 'Community Dinner 2023',
    description: 'Highlights from our annual dinner.',
    type: 'image',
    file_url: 'https://picsum.photos/id/301/800/600',
  },
  {
    id: '2',
    title: 'Traditional Dance Performance',
    description: 'Performance by the youth group.',
    type: 'image',
    file_url: 'https://picsum.photos/id/302/800/600',
  },
  {
    id: '3',
    title: 'History Documentary',
    description: 'A short film about our origins.',
    type: 'youtube',
    file_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', 
    thumbnail_url: 'https://picsum.photos/id/304/800/600'
  }
];

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Library', path: '/library' },
  { name: 'Events', path: '/events' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'History', path: '/history' },
  { name: 'Population', path: '/population' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export const FEATURES = [
  { title: "Library", icon: <Book className="w-6 h-6" />, desc: "Access historical records and literature." },
  { title: "Events", icon: <Calendar className="w-6 h-6" />, desc: "Stay updated with community gatherings." },
  { title: "Population", icon: <Users className="w-6 h-6" />, desc: "Demographics and distribution data." },
  { title: "Gallery", icon: <ImageIcon className="w-6 h-6" />, desc: "Visual memories of our journey." },
];