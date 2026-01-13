"use client";
import SearchBar, { SearchParams } from "@/components/search/SearchBar";

export default function Home() {
  // const handleSearch = (params: SearchParams) => {
  //   console.log("Search params:", params);
  //   // Navigate to properties page with search params or handle search
  //   // Example: router.push(`/properties?location=${params.location}&type=${params.propertyType.value}`);
  // };

  return (
    <main>
      <div className="container py-5">
        {/* <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h1 className="text-center mb-4 fw-bold">
              Find Your Perfect Property
            </h1>
            <SearchBar onSearch={handleSearch} />
          </div>
        </div> */}
      </div>
    </main>
  );
}
