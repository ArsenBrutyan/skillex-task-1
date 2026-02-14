export interface PaginatedResponse<T> {
  data: T[];
  pagination?: {
    page: number;
    limit: number;
    totalCount: number;
    totalPages: number;
  };
}

export interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  rating: number;
}

export interface FilterOptions {
  categories: string[];
  brands: string[];
  minPrice: number;
  maxPrice: number;
}

export interface ProductFilters {
  category: string[];
  brand: string[];
  minPrice: number;
  maxPrice: number;
  minRating: number;
}
