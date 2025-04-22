using inventory_app.Server.Models;

namespace inventory_app.Server.Repositories.Interfaces
{
    public interface IProductRepository
    {
        Task<List<Product>> GetAll();
    }
}
