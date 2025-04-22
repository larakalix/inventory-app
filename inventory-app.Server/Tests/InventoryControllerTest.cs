using inventory_app.Server.Models;
using inventory_app.Server.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Moq;
using TestStoreApp.Server.Controllers;
using Xunit;

namespace inventory_app.Server.Tests
{
    public class InventoryControllerTest
    {
        private readonly Mock<IProductService> _mockService;
        private readonly Mock<IErrorService> _mockErrors;
        private readonly Mock<ILogger<InventoryController>> _mockLogger;
        private readonly InventoryController _controller;

        public InventoryControllerTest()
        {
            _mockService = new Mock<IProductService>();
            _mockErrors = new Mock<IErrorService>();
            _mockLogger = new Mock<ILogger<InventoryController>>();
            _controller = new InventoryController(_mockLogger.Object, _mockService.Object, _mockErrors.Object);
        }

        [Fact]
        public async Task GetAll_ReturnsOk_WhenNoErrors()
        {
            var query = new ProductQuery { Page = 1, PageSize = 10 };
            var response = new ApiResponse<List<Product>>
            {
                Data = new List<Product> { new() { Name = "Chair", Price = 10, Qty = 2 } },
                Page = 1,
                PageSize = 10,
                TotalItems = 1,
                Message = "Inventory"
            };

            _mockService.Setup(s => s.GetProducts(query)).ReturnsAsync(response);
            _mockErrors.Setup(e => e.HasErrors()).Returns(false);

            var result = await _controller.GetAll(query);
            var okResult = Assert.IsType<OkObjectResult>(result);
            var apiResponse = Assert.IsType<ApiResponse<List<Product>>>(okResult.Value);

            Assert.Equal("Inventory", apiResponse.Message);
            Assert.Single(apiResponse.Data);
        }

        [Fact]
        public async Task GetAll_ReturnsBadRequest_WhenErrorsExist()
        {
            var query = new ProductQuery { Page = 1, PageSize = 5 };
            var response = new ApiResponse<List<Product>>
            {
                Data = null,
                Page = 1,
                PageSize = 5,
                TotalItems = 0,
                Message = "Inventory"
            };

            _mockService.Setup(s => s.GetProducts(query)).ReturnsAsync(response);
            _mockErrors.Setup(e => e.HasErrors()).Returns(true);
            _mockErrors.Setup(e => e.GetAll()).Returns(new List<string> { "Invalid XML", "Missing attributes" });

            var result = await _controller.GetAll(query);
            var badRequest = Assert.IsType<BadRequestObjectResult>(result);
            var apiResponse = Assert.IsType<ApiResponse<List<Product>>>(badRequest.Value);

            Assert.Contains("Invalid XML", apiResponse.Message);
            Assert.Contains("Missing attributes", apiResponse.Message);
        }
    }
}
