import type { Pagination } from "../../types/api.type";

export const usePagination = (pagination: Pagination) => {
    const { page, pageSize, totalItems } = pagination;
    const totalPages = Math.ceil(totalItems / pageSize);

    const generatePageNumbers = () => {
        const pages: (number | string)[] = [];

        if (totalPages <= 7) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        pages.push(1);

        if (page > 4) {
            pages.push("...");
        }

        const start = Math.max(2, page - 2);
        const end = Math.min(totalPages - 1, page + 2);

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        if (page < totalPages - 3) {
            pages.push("...");
        }

        pages.push(totalPages);

        return pages;
    };

    const pageNumbers = generatePageNumbers();

    return { totalPages, pageNumbers, ...pagination };
};
