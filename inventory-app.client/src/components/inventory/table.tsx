type Props = {
    caption: string;
    children: React.ReactNode;
};

export const InventoryTable = ({ caption, children }: Props) => {
    return (
        <table className="min-w-full divide-y-2 divide-gray-200">
            {caption && (
                <caption className="p-3 text-lg font-semibold text-gray-900">
                    {caption}
                </caption>
            )}
            <thead className="ltr:text-left rtl:text-right">
                <tr className="*:font-medium *:text-gray-900">
                    <th className="px-3 py-2 whitespace-nowrap">Name</th>
                    <th className="px-3 py-2 whitespace-nowrap">Price</th>
                    <th className="px-3 py-2 whitespace-nowrap">Quantity</th>
                </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">{children}</tbody>
        </table>
    );
};
