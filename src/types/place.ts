export interface Place {
  id: number;
  name: string;
  location: string;
  activity: string; // We will use this field for the new dropdown
  pricePerHour: number;
  imageUrl: string;
  rating: number;
  description: string;
}