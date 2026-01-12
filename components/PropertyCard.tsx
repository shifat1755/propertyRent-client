"use client";
import { Property } from "@/types/property";
import { Heart, MapPin, Maximize, Bed, Bath } from "lucide-react";

export default function PropertyCard(property: Property) {
  const {
    title,
    price,
    city,
    state,
    bedrooms,
    bathrooms,
    area_sqft,
    image_urls,
  } = property;

  const image = image_urls?.[0] ?? "/placeholder.jpg";

  return (
    <div className="col-12 col-sm-6 col-lg-3">
      <div
        className="card h-100 border-0 shadow-sm property-card"
        style={{
          cursor: "pointer",
          borderRadius: "1rem",
          overflow: "hidden",
        }}
      >
        <div
          className="position-relative property-img"
          style={{ height: "200px", overflow: "hidden" }}
        >
          <img
            src={image}
            alt={title}
            className="w-100 h-100"
            style={{
              objectFit: "cover",
            }}
          />
          <button
            className="btn btn-light rounded-circle position-absolute top-0 end-0 m-3 shadow-sm border-0 d-flex align-items-center justify-content-center heart-btn"
            style={{ width: "2.5rem", height: "2.5rem" }}
          >
            <Heart size={18} />
          </button>
        </div>

        <div className="card-body">
          <h3 className="h4 fw-bold text-warning mb-1">${price}</h3>
          <h4 className="h6 fw-bold text-dark mb-2">{title}</h4>
          <div className="d-flex align-items-center text-secondary mb-3 small">
            <MapPin size={14} className="me-1" />
            <span>
              {city}, {state}
            </span>
          </div>

          <div className="d-flex align-items-center justify-content-between text-secondary small pt-3 border-top">
            <div className="d-flex align-items-center">
              <Bed size={16} className="me-1" />
              <span>{bedrooms} Room</span>
            </div>
            <div className="d-flex align-items-center">
              <Bath size={16} className="me-1" />
              <span>{bathrooms}</span>
            </div>
            <div className="d-flex align-items-center">
              <Maximize size={16} className="me-1" />
              <span>{area_sqft} ft²</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
