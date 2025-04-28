import type { Product } from "../types/product.type";
import type { ApiResponse } from "../types/api.type";
import type { GetInventoryProps } from "../services/get-inventory";
import { ReactNode, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getInventory } from "../services/get-inventory";
import { Loading } from "../components/common/loading";
import { Error } from "../components/common/error";
import { NoData } from "../components/common/no-data";

type Props = {
    children: (
        data: ApiResponse<Product[]>,
        handlePageChange?: (page: number) => void,
        handlePageSizeChange?: (pageSize: number) => void,
        handleSortChange?: (sortBy: string) => void
    ) => ReactNode;
};

export const InventoryProvider = ({ children }: Props) => {
    const [query, setQuery] = useState<GetInventoryProps>({
        sortBy: "name",
        page: 1,
        pageSize: 5,
    });

    const handlePageChange = (page: number) => {
        setQuery((prev) => ({ ...prev, page }));
    };

    const handlePageSizeChange = (pageSize: number) => {
        setQuery((prev) => ({ ...prev, page: 1, pageSize }));
    };

    const handleSortChange = (sortBy: string) => {
        setQuery((prev) => {
            if (prev.sortBy === sortBy) return prev;

            return { ...prev, sortBy, page: 1 };
        });
    };

    const {
        data: result,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["getInventory", query],
        queryFn: () => getInventory(query),
    });

    if (isLoading) return <Loading />;
    if (error) return <Error error={error} />;
    if (!result || !result.data || result.data?.length === 0) return <NoData />;

    return (
        <>
            {children(
                result,
                handlePageChange,
                handlePageSizeChange,
                handleSortChange
            )}
        </>
    );
};
