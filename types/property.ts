export interface Property {
    id: number;
    title: string;
    description: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    country: string;
    price: number;
    property_type: string;
    status: string;
    bedrooms: number;
    bathrooms: number;
    area_sqft: number;
    lot_size_sqft: number;
    parking_spaces: number;
    heating_type: string;
    cooling_type: string;
    amenities: string[];
    year_built: number;
    image_urls: string[];
    posted_by: number;
    created_at: string;   // ISO string
    updated_at: string;   // ISO string
    is_featured: boolean;
}
