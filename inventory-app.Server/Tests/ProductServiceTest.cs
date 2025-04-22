using Xunit;
using Moq;
using inventory_app.Server.Repositories.Interfaces;
using inventory_app.Server.Models;
using inventory_app.Server.Services.Interfaces;
using inventory_app.Server.Services;

namespace inventory_app.Server.Tests
{
    public class ProductServiceTest
    {
        private readonly Mock<IProductRepository> _mockRepo;
        private readonly Mock<IErrorService> _mockErrors;
        private readonly ProductService _service;

        public ProductServiceTest()
        {
            _mockRepo = new Mock<IProductRepository>();
            _mockErrors = new Mock<IErrorService>();
            _service = new ProductService(_mockRepo.Object, _mockErrors.Object);
        }

        [Fact]
        public async Task GetInventory_ReturnsPaginatedAndSorted()
        {
            var products = new List<Product>
            {
                new() { Id = Guid.NewGuid(), Name = "Chair", Price = 15.5m, Qty = 5 },
                new() { Id = Guid.NewGuid(), Name = "Table", Price = 45.0m, Qty = 2 },
                new() { Id = Guid.NewGuid(), Name = "Lamp", Price = 9.0m, Qty = 10 },
            };

            _mockRepo.Setup(r => r.GetAll()).ReturnsAsync(products);

            var query = new ProductQuery
            {
                SortBy = "name",
                Order = "asc",
                Page = 1,
                PageSize = 2
            };

            var result = await _service.GetProducts(query);

            Assert.NotNull(result.Data);
            Assert.Equal(3, result.TotalItems);
            Assert.Equal(2, result.Data.Count);
            Assert.Equal("Chair", result.Data[0].Name);
            Assert.Equal("Lamp", result.Data[1].Name);
        }

        [Fact]
        public async Task GetProducts_HandlesEmptyResult()
        {
            _mockRepo.Setup(r => r.GetAll()).ReturnsAsync(new List<Product>());

            var query = new ProductQuery
            {
                SortBy = "price",
                Order = "desc",
                Page = 1,
                PageSize = 5
            };

            var result = await _service.GetProducts(query);

            Assert.Null(result.Data);
            Assert.Equal(0, result.TotalItems);
            Assert.Equal("No valid products found.", result.Message);
        }
    }
}
