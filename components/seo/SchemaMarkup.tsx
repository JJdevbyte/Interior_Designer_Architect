import React from "react";

export function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Studio Structural",
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    "description": "Exquisite interior design and architecture focusing on structural comfort and aesthetic precision based in Berlin.",
    "@id": "https://studiostructural.com/#organization",
    "url": "https://studiostructural.com",
    "telephone": "+493012345678",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Linienstraße 123",
      "addressLocality": "Berlin",
      "postalCode": "10115",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.5284,
      "longitude": 13.3986
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.instagram.com/studiostructural",
      "https://www.linkedin.com/company/studiostructural"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
