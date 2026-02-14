import toast from "react-hot-toast";
import type { FilterOptions, PaginatedResponse, Product } from "../types";
import { api } from "./axiosInstance";
import type { AxiosError } from "axios";

export const fetchProducts = async ({
  page = 1,
  limit = 10,
  category,
  brand,
  minPrice,
  maxPrice,
  minRating,
}: {
  page?: number;
  limit?: number;
  category?: string[];
  brand?: string[];
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
}): Promise<PaginatedResponse<Product>> => {
  const params: {
    page?: number;
    limit?: number;
    category?: string;
    brand?: string;
    minPrice?: number;
    maxPrice?: number;
    minRating?: number;
  } = { page, limit };

  if (category?.length) params.category = category.join(",");
  if (brand?.length) params.brand = brand.join(",");
  if (minPrice) params.minPrice = minPrice;
  if (maxPrice) params.maxPrice = maxPrice;
  if (minRating) params.minRating = minRating;

  try {
    const { data } = await api.get("/products", { params });
    return data;
  } catch (e) {
    const err = e as AxiosError;
    toast.error(err.message || "Failed to fetch products");
    return { data: [] };
  }
};

export const fetchFilterOptions = async (): Promise<FilterOptions> => {
  try {
    const { data } = await api.get<FilterOptions>("/filters");
    return data;
  } catch (e) {
    const err = e as AxiosError;
    toast.error(err.message || "Failed to fetch filter options");
    return { categories: [], brands: [], minPrice: 0, maxPrice: 0 };
  }
};
