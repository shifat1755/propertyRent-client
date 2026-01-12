"use client";
import { useState } from "react";
import CountrySelector, { Country } from "./CountrySelector";
import LocationInput from "./LocationInput";
import PropertyTypeSelector, { PropertyType } from "./PropertyTypeSelector";
import SearchButton from "./SearchButton";

export interface SearchParams {
  country: Country;
  location: string;
  propertyType: PropertyType;
}

interface SearchBarProps {
  onSearch?: (params: SearchParams) => void;
  initialValues?: Partial<SearchParams>;
  className?: string;
}

export default function SearchBar({
  onSearch,
  initialValues,
  className = "",
}: SearchBarProps) {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    country: initialValues?.country || {
      code: "US",
      name: "United States",
      flag: "🇺🇸",
    },
    location: initialValues?.location || "",
    propertyType: initialValues?.propertyType || {
      value: "buy-apartment",
      label: "Buy Apartment",
    },
  });

  const handleSearch = () => {
    onSearch?.(searchParams);
  };

  const handleCountryChange = (country: Country) => {
    setSearchParams((prev) => ({ ...prev, country }));
  };

  const handleLocationChange = (location: string) => {
    setSearchParams((prev) => ({ ...prev, location }));
  };

  const handlePropertyTypeChange = (propertyType: PropertyType) => {
    setSearchParams((prev) => ({ ...prev, propertyType }));
  };

  return (
    <div className={`w-100 ${className}`}>
      <div
        className="bg-white shadow-lg search-bar-container"
        style={{
          borderRadius: "2rem",
          padding: "0.75rem 1rem",
        }}
      >
        <div className="d-flex flex-column flex-md-row align-items-center gap-2 gap-md-2">
          {/* Country Selector */}
          <div
            className="d-flex align-items-center border-end border-md-end pe-2 pe-md-2 flex-shrink-0"
            style={{ height: "2.5rem" }}
          >
            <CountrySelector
              selectedCountry={searchParams.country}
              onSelect={handleCountryChange}
            />
          </div>

          {/* Location Input */}
          <div className="flex-grow-1 d-flex align-items-center">
            <LocationInput
              value={searchParams.location}
              placeholder="Enter city or location"
              onChange={handleLocationChange}
            />
          </div>

          {/* Property Type Selector */}
          <div
            className="d-flex align-items-center border-start border-md-start border-end border-md-end ps-2 ps-md-2 pe-2 pe-md-2 flex-shrink-0"
            style={{ height: "2.5rem" }}
          >
            <PropertyTypeSelector
              selectedType={searchParams.propertyType}
              onSelect={handlePropertyTypeChange}
            />
          </div>

          {/* Search Button */}
          <div className="flex-shrink-0">
            <SearchButton onClick={handleSearch} />
          </div>
        </div>
      </div>
    </div>
  );
}
