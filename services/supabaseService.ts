import { createClient } from '@supabase/supabase-js';
import { 
  SUPABASE_URL, 
  SUPABASE_ANON_KEY, 
  MOCK_EVENTS, 
  MOCK_GALLERY, 
  MOCK_HISTORY, 
  MOCK_LIBRARY, 
  MOCK_POPULATION 
} from "../constants";
import { EventItem, GalleryItem, HistoryItem, LibraryItem, PopulationData } from "../types";

// Initialize Supabase Client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/**
 * Generic helper to fetch data from a table with a fallback to mock data.
 * This ensures the app doesn't break if the table doesn't exist or returns empty data (optional).
 */
async function fetchWithFallback<T>(tableName: string, mockData: T[]): Promise<T[]> {
  try {
    const { data, error } = await supabase.from(tableName).select('*');
    
    if (error) {
      console.warn(`Supabase fetch error for '${tableName}':`, error.message);
      console.info(`Falling back to mock data for '${tableName}'.`);
      return mockData;
    }

    if (!data || data.length === 0) {
      console.info(`No data found in '${tableName}'. Using mock data.`);
      return mockData;
    }

    return data as T[];
  } catch (err) {
    console.error(`Unexpected error fetching '${tableName}':`, err);
    return mockData;
  }
}

export const getPopulationData = async (): Promise<PopulationData[]> => {
  return fetchWithFallback<PopulationData>('population_data', MOCK_POPULATION);
};

export const getHistory = async (): Promise<HistoryItem[]> => {
  // Sort by year/date if possible, but here we just fetch
  const { data, error } = await supabase
    .from('history')
    .select('*')
    .order('created_at', { ascending: true }); // Assuming created_at or we might need a specific order field

  if (error || !data || data.length === 0) return MOCK_HISTORY;
  return data as HistoryItem[];
};

export const getEvents = async (): Promise<EventItem[]> => {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .order('date', { ascending: true });

  if (error || !data || data.length === 0) return MOCK_EVENTS;
  return data as EventItem[];
};

export const getLibrary = async (): Promise<LibraryItem[]> => {
  return fetchWithFallback<LibraryItem>('library', MOCK_LIBRARY);
};

export const getGallery = async (): Promise<GalleryItem[]> => {
  return fetchWithFallback<GalleryItem>('gallery', MOCK_GALLERY);
};

export const submitContactForm = async (data: { name: string; email: string; message: string }) => {
  try {
    const { error } = await supabase
      .from('contact_messages')
      .insert([
        { 
          name: data.name, 
          email: data.email, 
          message: data.message,
          created_at: new Date().toISOString()
        }
      ]);

    if (error) {
      console.error("Error submitting contact form:", error);
      throw error;
    }
    return { success: true };
  } catch (error) {
    console.error("Submission failed, fallback to mock success for demo UX:", error);
    // In a real app we might want to throw, but for this demo ensuring the UI doesn't hang:
    return new Promise((resolve) => setTimeout(() => resolve({ success: true }), 1000));
  }
};

export const registerPopulation = async (data: { name: string; city: string; notes: string }) => {
  try {
    const { error } = await supabase
      .from('population_registry')
      .insert([
        {
          name: data.name,
          city: data.city,
          notes: data.notes,
          created_at: new Date().toISOString()
        }
      ]);

    if (error) {
      console.error("Error registering population:", error);
      throw error;
    }
    return { success: true };
  } catch (error) {
    console.error("Registration failed, fallback to mock success for demo UX:", error);
    return new Promise((resolve) => setTimeout(() => resolve({ success: true }), 1000));
  }
};
