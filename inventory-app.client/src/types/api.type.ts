export type Pagination = {
    sortBy?: string;
    totalItems: number;
    page: number;
    pageSize: number;
};

export type ApiResponse<T> = Pagination & {
    message?: string;
    data: T;
};
