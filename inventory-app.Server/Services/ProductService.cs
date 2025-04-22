using inventory_app.Server.Models;
using inventory_app.Server.Repositories.Interfaces;
using inventory_app.Server.Services.Interfaces;

namespace inventory_app.Server.Services
{
    /// <summary>
    /// Service to handle product schema
    /// </summary>
    public class ProductService : IProductService
    {
        private readonly IProductRepository _repo;
        private readonly IErrorService _errors;

        public ProductService(IProductRepository repo, IErrorService errors)
        {
            _repo = repo;
            _errors = errors;
        }

        public async Task<ApiResponse<List<Product>>> GetProducts(ProductQuery query)
        {
            var products = await _repo.GetAll();

            if (!products.Any())
            {
                return new ApiResponse<List<Product>>
                {
                    Message = "No valid products found.",
                    Data = null,
                    TotalItems = 0,
                    Page = query.Page,
                    PageSize = query.PageSize
                };
            }

            products = query.SortBy?.ToLower() switch
            {
                "price" => query.Order == "desc" ? products.OrderByDescending(p => p.Price).ToList() : products.OrderBy(p => p.Price).ToList(),
                "qty" => query.Order == "desc" ? products.OrderByDescending(p => p.Qty).ToList() : products.OrderBy(p => p.Qty).ToList(),
                "name" => query.Order == "desc" ? products.OrderByDescending(p => p.Name).ToList() : products.OrderBy(p => p.Name).ToList(),
                _ => products
            };
            var total = products.Count;
            var data = products
                .Skip((query.Page - 1) * query.PageSize)
                .Take(query.PageSize)
                .ToList();

            return new ApiResponse<List<Product>>
            {
                Data = data,
                TotalItems = total,
                Page = query.Page,
                PageSize = query.PageSize,
                Message = "Inventory "
            };
        }
    }
}
