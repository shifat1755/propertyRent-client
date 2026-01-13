import { SearchParams } from "@/components/search/SearchBar";
import apiClient from "@/lib/axios";

export const searchProperties = (params: any) => {
    const queryString = new URLSearchParams(params).toString();
    console.log("Search_query:", queryString);
    return apiClient.get(`/properties/search?${queryString}`);
};