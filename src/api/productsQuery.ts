import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchProducts, fetchFilterOptions } from "./productsApi";
import type { FilterOptions } from "../types";

export const useProducts = (filters = {}, page = 1, limit = 10) => {
  return useQuery({
    queryKey: ["products", filters, page, limit],
    queryFn: () => fetchProducts({ ...filters, page, limit }),
    placeholderData: keepPreviousData,
    staleTime: 30000,
  });
};

export const useFilterOptions = () => {
  return useQuery<FilterOptions, Error>({
    queryKey: ["filterOptions"],
    queryFn: fetchFilterOptions,
    staleTime: 10000,
  });
};
