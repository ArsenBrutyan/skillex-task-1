import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
  category: string[];
  brand: string[];
  minPrice: number;
  maxPrice: number;
  minRating: number;
}

interface ProductsState {
  filters: FiltersState;
  page: number;
  limit: number;
}

const initialState: ProductsState = {
  filters: { category: [], brand: [], minPrice: 0, maxPrice: 0, minRating: 0 },
  page: 1,
  limit: 10,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<Partial<FiltersState>>) => {
      state.filters = { ...state.filters, ...action.payload };
      state.page = 1;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
  },
});

export const { setFilters, setPage, setLimit } = productsSlice.actions;

export default productsSlice.reducer;
