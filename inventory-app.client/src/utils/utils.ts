export const formatCurrency = (
    value: number,
    locale: string = "en-US",
    options?: Intl.NumberFormatOptions
): string => {
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
        ...options,
    }).format(value);
};
