type Props = {
    caption: string;
    children: React.ReactNode;
    filter?: (sortBy: string) => void;
};

export const InventoryTable = ({ caption, children, filter }: Props) => {
    return (
        <table className="min-w-full divide-y-2 divide-gray-200 ">
            {caption && (
                <caption className="p-3 text-lg font-semibold text-gray-900">
                    {caption}
                </caption>
            )}
            <thead className="ltr:text-left rtl:text-right">
                <tr className="*:font-medium *:text-gray-900">
                    <th className="px-3 py-2 whitespace-nowrap">
                        <button onClick={() => filter && filter("name")}>
                            Name
                        </button>
                    </th>
                    <th className="px-3 py-2 whitespace-nowrap">
                        <button onClick={() => filter && filter("price")}>
                            Price
                        </button>
                    </th>
                    <th className="px-3 py-2 whitespace-nowrap">
                        <button onClick={() => filter && filter("qty")}>
                            Quantity
                        </button>
                    </th>
                </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">{children}</tbody>
        </table>
    );
};
