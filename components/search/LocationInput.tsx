"use client";
import { X } from "lucide-react";
import { useState, useEffect } from "react";

interface LocationInputProps {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  onClear?: () => void;
  className?: string;
  suggestions?: string[];
}

const defaultUSCities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
  "Austin",
  "Jacksonville",
  "Fort Worth",
  "Columbus",
  "Charlotte",
  "San Francisco",
  "Indianapolis",
  "Seattle",
  "Denver",
  "Boston",
  "Miami",
  "Atlanta",
  "Detroit",
  "Las Vegas",
  "Portland",
  "Nashville",
  "Oklahoma City",
  "Memphis",
  "Louisville",
  "Baltimore",
];

export default function LocationInput({
  value = "",
  placeholder = "Enter city or location",
  onChange,
  onClear,
  className = "",
  suggestions = defaultUSCities,
}: LocationInputProps) {
  const [inputValue, setInputValue] = useState(value);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange?.(newValue);

    if (newValue.length > 0) {
      const filtered = suggestions
        .filter((city) => city.toLowerCase().startsWith(newValue.toLowerCase()))
        .slice(0, 5);
      setFilteredSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleClear = () => {
    setInputValue("");
    setShowSuggestions(false);
    onChange?.("");
    onClear?.();
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
    onChange?.(suggestion);
  };

  return (
    <div className={`position-relative flex-grow-1 ${className}`}>
      <input
        type="text"
        className="form-control border-0 w-100"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        onFocus={() => {
          if (inputValue.length > 0 && filteredSuggestions.length > 0) {
            setShowSuggestions(true);
          }
        }}
        style={{
          fontSize: "0.9rem",
          paddingRight: inputValue ? "2.5rem" : "0.75rem",
          paddingLeft: "0.75rem",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          height: "2.5rem",
        }}
      />
      {inputValue && (
        <button
          className="btn btn-link text-secondary text-decoration-none position-absolute end-0 top-50 translate-middle-y p-0 me-2 border-0 bg-transparent"
          type="button"
          onClick={handleClear}
          style={{ lineHeight: 1, zIndex: 10 }}
        >
          <X size={18} />
        </button>
      )}
      {showSuggestions && filteredSuggestions.length > 0 && (
        <>
          <div
            className="position-fixed top-0 start-0 w-100 h-100"
            style={{ zIndex: 1040 }}
            onClick={() => setShowSuggestions(false)}
          />
          <div
            className="position-absolute start-0 end-0 mt-1 bg-white border rounded shadow-lg"
            style={{ zIndex: 1050, maxHeight: "200px", overflowY: "auto" }}
          >
            {filteredSuggestions.map((suggestion, index) => (
              <button
                key={index}
                className="btn btn-link text-decoration-none text-dark w-100 text-start px-3 py-2"
                onClick={() => handleSuggestionClick(suggestion)}
                style={{ fontSize: "0.9rem" }}
              >
                {suggestion}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
