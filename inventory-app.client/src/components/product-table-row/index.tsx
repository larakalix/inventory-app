import type { Product } from "../../types/product.type";
import clsx from "clsx";
import { formatCurrency } from "../../utils/utils";

type Props = {
    product: Product;
};

export const ProductTableRow = ({ product }: Props) => {
    return (
        <tr
            className={`
                *:first:font-medium
                ${clsx({
                    "*:bg-red-700 *:text-white": product.qty > 3,
                    "*:text-gray-900 *:bg-transparent": product.qty <= 3,
                })}
            `}
        >
            <td className="px-3 py-2 whitespace-nowrap capitalize">
                {product.name}
            </td>
            <td className="px-3 py-2 whitespace-nowrap">
                {formatCurrency(product.price)}
            </td>
            <td className="px-3 py-2 whitespace-nowrap">{product.qty}</td>
        </tr>
    );
};
