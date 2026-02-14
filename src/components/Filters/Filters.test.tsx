import { screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Filters } from "./index";
import { renderWithProviders } from "../../test-utils";
import * as productsQuery from "../../api/productsQuery";

vi.mock("../../api/productsQuery");

const mockOptions = {
  categories: ["Electronics", "Fashion"],
  brands: ["Apple", "Samsung"],
};

describe("Filters Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    (productsQuery.useFilterOptions as any).mockReturnValue({
      data: mockOptions,
      isLoading: false,
    });
  });

  it("renders filter categories and brands from API", () => {
    renderWithProviders(<Filters />);

    expect(screen.getByText("Electronics")).toBeInTheDocument();
    expect(screen.getByText("Fashion")).toBeInTheDocument();
    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Samsung")).toBeInTheDocument();
  });

  it("toggles checkbox when clicked", () => {
    renderWithProviders(<Filters />);

    const checkbox = screen.getByLabelText("Electronics") as HTMLInputElement;

    expect(checkbox.checked).toBe(false);

    fireEvent.click(checkbox);

    expect(checkbox.checked).toBe(true);
  });

  it("shows loading state correctly", () => {
    (productsQuery.useFilterOptions as any).mockReturnValue({
      data: null,
      isLoading: true,
    });

    renderWithProviders(<Filters />);

    expect(screen.getByText(/Loading Filters/i)).toBeInTheDocument();
  });
});
