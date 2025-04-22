import { ProductTableRow } from "../product-table-row";
import { InventoryProvider } from "../../providers/inventory-provider";
import { InventoryTable } from "./table";
import { Pagination } from "../../ui/pagination";
import { Select } from "../../ui/select";

export const ProductInventory = () => {
    return (
        <InventoryProvider>
            {(data, handlePageChange, handlePageSizeChange) => (
                <div className="overflow-x-auto rounded border border-gray-300 shadow-sm p-4">
                    <InventoryTable caption="Products">
                        {data.data.map((product) => (
                            <ProductTableRow
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </InventoryTable>

                    <footer className="flex justify-between items-center">
                        <Select
                            defaultValue={data.pageSize.toString()}
                            options={[
                                { value: "5", label: "5" },
                                { value: "10", label: "10" },
                                { value: "20", label: "20" },
                                { value: "50", label: "50" },
                            ]}
                            setPage={handlePageSizeChange}
                        />

                        <Pagination pagination={data} setPage={handlePageChange} />
                    </footer>
                </div>
            )}
        </InventoryProvider>
    );
};
