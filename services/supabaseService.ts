// This service abstracts the data fetching.
// In a real production build, this would import the supabase client and make async calls.
// For this demo environment, we return promises that resolve to mock data.

import { MOCK_EVENTS, MOCK_GALLERY, MOCK_HISTORY, MOCK_LIBRARY, MOCK_POPULATION } from "../constants";
import { EventItem, GalleryItem, HistoryItem, LibraryItem, PopulationData } from "../types";

// NOTE: To enable real Supabase:
// 1. Install @supabase/supabase-js
// 2. Initialize client with createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_KEY)
// 3. Replace the resolvers below with supabase.from('table').select('*')

export const getPopulationData = async (): Promise<PopulationData[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(MOCK_POPULATION), 500));
};

export const getHistory = async (): Promise<HistoryItem[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(MOCK_HISTORY), 500));
};

export const getEvents = async (): Promise<EventItem[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(MOCK_EVENTS), 500));
};

export const getLibrary = async (): Promise<LibraryItem[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(MOCK_LIBRARY), 500));
};

export const getGallery = async (): Promise<GalleryItem[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(MOCK_GALLERY), 500));
};

export const submitContactForm = async (data: { name: string; email: string; message: string }) => {
  console.log("Submitting to Supabase table 'contact_messages':", data);
  return new Promise((resolve) => setTimeout(() => resolve({ success: true }), 1000));
};

export const registerPopulation = async (data: { name: string; city: string; notes: string }) => {
  console.log("Submitting to Supabase table 'population_registry':", data);
  return new Promise((resolve) => setTimeout(() => resolve({ success: true }), 1000));
};
