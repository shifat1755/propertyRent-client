"use client";
import PropertyCard from "@/components/PropertyCard";
import SearchBar, { SearchParams } from "@/components/search/SearchBar";
import { useState } from "react";
import { Property } from "@/types/property";

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([
    {
      id: 1,
      title: "Modern 4-Room Apartment",
      description: "",
      address: "", // unknown
      city: "Berlin",
      state: "Mitte",
      zip_code: "",
      country: "Germany",
      price: 1200, // numeric value
      property_type: "apartment",
      status: "rent",
      bedrooms: 4,
      bathrooms: 2,
      area_sqft: 85,
      lot_size_sqft: 0,
      parking_spaces: 0,
      heating_type: "",
      cooling_type: "",
      amenities: [],
      year_built: 0,
      image_urls: [
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600",
      ],
      posted_by: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      is_featured: false,
    },
    {
      id: 2,
      title: "Elegant Single-Family House",
      description: "",
      address: "",
      city: "Munich",
      state: "Schwabing",
      zip_code: "",
      country: "Germany",
      price: 680000,
      property_type: "house",
      status: "sale",
      bedrooms: 5,
      bathrooms: 3,
      area_sqft: 180,
      lot_size_sqft: 0,
      parking_spaces: 0,
      heating_type: "",
      cooling_type: "",
      amenities: [],
      year_built: 0,
      image_urls: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600",
      ],
      posted_by: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      is_featured: false,
    },
    {
      id: 3,
      title: "Central 2-Room Apartment",
      description: "",
      address: "",
      city: "Hamburg",
      state: "HafenCity",
      zip_code: "",
      country: "Germany",
      price: 850,
      property_type: "apartment",
      status: "rent",
      bedrooms: 2,
      bathrooms: 1,
      area_sqft: 65,
      lot_size_sqft: 0,
      parking_spaces: 0,
      heating_type: "",
      cooling_type: "",
      amenities: [],
      year_built: 0,
      image_urls: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600",
      ],
      posted_by: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      is_featured: false,
    },
    {
      id: 4,
      title: "Cozy Townhouse",
      description: "",
      address: "",
      city: "Frankfurt",
      state: "Westend",
      zip_code: "",
      country: "Germany",
      price: 550000,
      property_type: "house",
      status: "sale",
      bedrooms: 3,
      bathrooms: 2,
      area_sqft: 120,
      lot_size_sqft: 0,
      parking_spaces: 0,
      heating_type: "",
      cooling_type: "",
      amenities: [],
      year_built: 0,
      image_urls: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600",
      ],
      posted_by: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      is_featured: false,
    },
  ]);

  const handleSearchResults = (params: Property[]) => {
    setProperties(params);
  };

  return (
    <main>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h1 className="text-center mb-4 fw-bold text-secondary">
              Find Your Perfect Property
            </h1>
            <SearchBar onSearch={handleSearchResults} />
          </div>
        </div>
      </div>
      <div className="container py-4">
        <div className="row g-4">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </main>
  );
}
