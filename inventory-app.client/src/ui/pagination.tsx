import type { Pagination as TPagination } from "../types/api.type";

type Props = {
    pagination: TPagination;
    setPage?: (page: number) => void;
};

export const Pagination = ({
    pagination: { page, pageSize, totalItems },
    setPage,
}: Props) => {
    const totalPages = Math.ceil(totalItems / pageSize);

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

            {Array.from({ length: totalPages }, (_, i) => (
                <li key={i}>
                    <button
                        onClick={() => setPage && setPage(i + 1)}
                        className={`block size-8 rounded border border-gray-200 text-center text-sm/8 font-medium transition-colors hover:bg-gray-50 ${
                            page === i + 1 ? "bg-indigo-600 text-white" : ""
                        }`}
                    >
                        {i + 1}
                    </button>
                </li>
            ))}

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
