import type { Product } from "../../types/product.type";
import { formatCurrency } from "../../utils/utils";

type Props = {
    product: Product;
};

export const ProductTableRow = ({ product }: Props) => {
    return (
        <tr className="*:text-gray-900 *:first:font-medium">
            <td className="px-3 py-2 whitespace-nowrap capitalize">{product.name}</td>
            <td className="px-3 py-2 whitespace-nowrap">
                {formatCurrency(product.price)}
            </td>
            <td className="px-3 py-2 whitespace-nowrap">{product.qty}</td>
        </tr>
    );
};
