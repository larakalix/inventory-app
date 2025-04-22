import { QueryProvider } from "./providers/query-provider";
import { ProductInventory } from "./components/inventory";

function App() {
    return (
        <QueryProvider>
            <main className="p-4 w-full max-w-7xl mx-auto">
                <ProductInventory />
            </main>
        </QueryProvider>
    );
}

export default App;
