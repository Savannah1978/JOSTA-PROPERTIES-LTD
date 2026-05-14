export type PropertyType = 'Land' | 'Residential' | 'Commercial' | 'Accommodation';
export type AvailabilityStatus = 'Available' | 'Sold' | 'Reserved' | 'Booked';

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  county: string;
  size?: string;
  rooms?: number;
  type: PropertyType;
  status: AvailabilityStatus;
  images: string[];
  features: string[];
  coordinates?: {
    lat: number;
    lng: number;
  };
  createdAt: string;
  accommodationType?: 'Airbnb' | 'Hotel' | 'Guest House' | 'Vacation Home';
}
