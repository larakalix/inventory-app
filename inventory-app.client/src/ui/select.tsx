type Props = {
    emptyMessage?: string;
    defaultValue?: string;
    options: {
        value: string;
        label: string;
    }[];
    setPage?: (page: number) => void;
};

export const Select = ({
    defaultValue,
    options,
    emptyMessage = "Please select",
    setPage,
}: Props) => {
    return (
        <div>
            <label htmlFor="Headline">
                <span className="text-sm font-medium text-gray-700"> </span>

                <select
                    defaultValue={defaultValue}
                    className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
                    onChange={(e) => {
                        const value = e.target.value;
                        if (setPage) setPage(Number(value));
                    }}
                >
                    <option value="">{emptyMessage}</option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    );
};
