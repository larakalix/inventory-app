using inventory_app.Server.Models;

namespace inventory_app.Server.Services.Interfaces
{
    public interface IProductService
    {
        Task<ApiResponse<List<Product>>> GetProducts(ProductQuery query);
    }
}
