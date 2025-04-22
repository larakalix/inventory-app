import type { Pagination as TPagination } from "../../types/api.type";
import { usePagination } from "./use-pagination";

type Props = {
    pagination: TPagination;
    setPage?: (page: number) => void;
};

export const Pagination = ({ pagination, setPage }: Props) => {
    const { page, totalPages, pageNumbers } = usePagination(pagination);

    return (
        <ul className="flex justify-center gap-1 text-gray-900">
            <li>
                <button
                    disabled={page === 1}
                    onClick={() => page > 1 && setPage && setPage(page - 1)}
                    className="grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180 disabled:bg-gray-100 disabled:text-gray-400"
                    aria-label="Previous page"
                >
                    <svg
                        className="size-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </li>

            {pageNumbers.map((item, index) =>
                typeof item === "number" ? (
                    <li key={index}>
                        <button
                            onClick={() => setPage && setPage(item)}
                            className={`block size-8 rounded border text-sm font-medium text-center transition-colors ${
                                page === item
                                    ? "bg-indigo-600 text-white"
                                    : "border-gray-200 hover:bg-gray-50"
                            }`}
                        >
                            {item}
                        </button>
                    </li>
                ) : (
                    <li
                        key={index}
                        className="grid size-8 place-content-center text-gray-500"
                    >
                        ...
                    </li>
                )
            )}

            <li>
                <button
                    disabled={page === totalPages}
                    onClick={() =>
                        page < totalPages && setPage && setPage(page + 1)
                    }
                    className="grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180 disabled:text-gray-400"
                    aria-label="Next page"
                >
                    <svg
                        className="size-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </li>
        </ul>
    );
};
