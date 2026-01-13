"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export interface Country {
  code: string;
  name: string;
  flag: string;
}

interface CountrySelectorProps {
  selectedCountry?: Country;
  countries?: Country[];
  onSelect?: (country: Country) => void;
  className?: string;
}

const defaultCountries: Country[] = [
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
  { code: "FR", name: "France", flag: "🇫🇷" },
  { code: "ES", name: "Spain", flag: "🇪🇸" },
];

export default function CountrySelector({
  selectedCountry = defaultCountries[0],
  countries = defaultCountries,
  onSelect,
  className = "",
}: CountrySelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (country: Country) => {
    onSelect?.(country);
    setIsOpen(false);
  };

  return (
    <div className={`position-relative ${className}`}>
      <button
        className="btn btn-link text-decoration-none text-dark d-flex align-items-center p-0 border-0 bg-transparent"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        style={{ fontSize: "0.9rem" }}
      >
        <span className="me-2" style={{ fontSize: "1.2rem" }}>
          {selectedCountry.flag}
        </span>
        <ChevronDown size={16} />
      </button>

      {isOpen && (
        <>
          <div
            className="position-fixed top-0 start-0 w-100 h-100"
            style={{ zIndex: 1040 }}
            onClick={() => setIsOpen(false)}
          />
          <div
            className="position-absolute start-0 mt-2 bg-white border rounded shadow-lg"
            style={{ zIndex: 1050, minWidth: "200px" }}
          >
            {countries.map((country) => (
              <button
                key={country.code}
                className="btn btn-link text-decoration-none text-dark w-100 text-start d-flex align-items-center px-3 py-2"
                onClick={() => handleSelect(country)}
                style={{ fontSize: "0.9rem" }}
              >
                <span className="me-2" style={{ fontSize: "1.2rem" }}>
                  {country.flag}
                </span>
                <span>{country.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
