import { ProductTableRow } from "../product-table-row";
import { InventoryProvider } from "../../providers/inventory-provider";
import { InventoryTable } from "./table";
import { Pagination } from "../../ui/pagination";
import { Select } from "../../ui/select";

const PAGE_SIZES = [
    { value: "5", label: "5" },
    { value: "10", label: "10" },
    { value: "20", label: "20" },
    { value: "50", label: "50" },
];

export const ProductInventory = () => {
    return (
        <InventoryProvider>
            {(
                data,
                handlePageChange,
                handlePageSizeChange,
                handleSortChange
            ) => (
                <div className="overflow-x-auto rounded border border-gray-300 shadow-sm">
                    <div className="p-4">
                        <InventoryTable
                            caption="Products"
                            filter={handleSortChange}
                        >
                            {data.data.map((product) => (
                                <ProductTableRow
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </InventoryTable>
                    </div>

                    <footer className="mt-8 border-t border-gray-300 pt-8 flex justify-end items-center p-4">
                        <div className="hidden">
                            <Select
                                defaultValue={data.pageSize.toString()}
                                options={PAGE_SIZES}
                                setPage={handlePageSizeChange}
                            />
                        </div>

                        <Pagination
                            pagination={data}
                            setPage={handlePageChange}
                        />
                    </footer>
                </div>
            )}
        </InventoryProvider>
    );
};
