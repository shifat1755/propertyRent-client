"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export interface PropertyType {
  value: string;
  label: string;
}

interface PropertyTypeSelectorProps {
  selectedType?: PropertyType;
  types?: PropertyType[];
  onSelect?: (type: PropertyType) => void;
  className?: string;
}

const defaultTypes: PropertyType[] = [
  { value: "buy-apartment", label: "Buy Apartment" },
  { value: "rent-apartment", label: "Rent Apartment" },
  { value: "buy-house", label: "Buy House" },
  { value: "rent-house", label: "Rent House" },
  { value: "buy-commercial", label: "Buy Commercial" },
  { value: "rent-commercial", label: "Rent Commercial" },
];

export default function PropertyTypeSelector({
  selectedType = defaultTypes[0],
  types = defaultTypes,
  onSelect,
  className = "",
}: PropertyTypeSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (type: PropertyType) => {
    onSelect?.(type);
    setIsOpen(false);
  };

  return (
    <div className={`position-relative ${className}`}>
      <button
        className="btn btn-link text-decoration-none text-dark d-flex align-items-center justify-content-between p-0 border-0 bg-transparent w-100"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        style={{ fontSize: "0.9rem" }}
      >
        <span>{selectedType.label}</span>
        <ChevronDown size={16} className="ms-2" />
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
            style={{ zIndex: 1050, minWidth: "220px" }}
          >
            {types.map((type) => (
              <button
                key={type.value}
                className="btn btn-link text-decoration-none text-dark w-100 text-start px-3 py-2"
                onClick={() => handleSelect(type)}
                style={{ fontSize: "0.9rem" }}
              >
                {type.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
