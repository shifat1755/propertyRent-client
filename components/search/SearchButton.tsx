"use client";
import { Search } from "lucide-react";

interface SearchButtonProps {
  onClick?: () => void;
  label?: string;
  className?: string;
  variant?: "primary" | "outline";
}

export default function SearchButton({
  onClick,
  label = "Search",
  className = "",
  variant = "primary",
}: SearchButtonProps) {
  const buttonClass =
    variant === "primary"
      ? "btn btn-primary fw-semibold d-flex align-items-center justify-content-center"
      : "btn btn-outline-primary fw-semibold d-flex align-items-center justify-content-center";

  return (
    <button
      type="button"
      className={`${buttonClass} ${className}`}
      onClick={onClick}
      style={{
        backgroundColor: variant === "primary" ? "#00d9ff" : "transparent",
        borderColor: "#00d9ff",
        color: variant === "primary" ? "#fff" : "#00d9ff",
        borderRadius: "1.5rem",
        padding: "0.5rem 1.25rem",
        height: "2.5rem",
        fontSize: "0.9rem",
      }}
      onMouseEnter={(e) => {
        if (variant === "primary") {
          e.currentTarget.style.backgroundColor = "#00c5e5";
        }
      }}
      onMouseLeave={(e) => {
        if (variant === "primary") {
          e.currentTarget.style.backgroundColor = "#00d9ff";
        }
      }}
    >
      <Search size={18} className="me-2" />
      <span className="d-none d-sm-inline">{label}</span>
      <span className="d-inline d-sm-none">
        <Search size={18} />
      </span>
    </button>
  );
}
