import productsReducer, { setFilters, setPage } from "./productsSlice";

describe("productsSlice reducer", () => {
  const initialState = {
    filters: {
      category: [],
      brand: [],
      minPrice: 0,
      maxPrice: 0,
      minRating: 0,
    },
    page: 1,
    limit: 10,
  };

  it("should return the initial state", () => {
    expect(productsReducer(undefined, { type: "" })).toEqual(initialState);
  });

  it("should handle setFilters and reset page to 1", () => {
    const stateWithPageTwo = { ...initialState, page: 2 };
    const actual = productsReducer(
      stateWithPageTwo,
      setFilters({ category: ["Electronics"] }),
    );
    expect(actual.filters.category).toEqual(["Electronics"]);
    expect(actual.page).toBe(1);
  });

  it("should handle setPage", () => {
    const actual = productsReducer(initialState, setPage(5));
    expect(actual.page).toBe(5);
  });
});
