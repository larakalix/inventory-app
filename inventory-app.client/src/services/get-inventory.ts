import type { Product } from "../types/product.type";
import type { ApiResponse, Pagination } from "../types/api.type";

export type GetInventoryProps = Partial<Omit<Pagination, "totalItems">>;

export const getInventory = async ({
    sortBy = "name",
    page = 1,
    pageSize = 5,
}: GetInventoryProps): Promise<ApiResponse<Product[]>> => {
    try {
        const params = new URLSearchParams({
            sortBy,
            page: page.toString(),
            pageSize: pageSize.toString(),
        });

        const response = await fetch(`inventory?${params.toString()}`);

        if (!response.ok) throw new Error("Failed to fetch products");

        const data = await response.json();

        return data as ApiResponse<Product[]>;
    } catch (error) {
        console.error("Error fetching inventory:", error);

        return {
            data: [],
            message: "Failed to fetch inventory",
            page: 1,
            pageSize: 5,
            totalItems: 0,
        };
    }
};
