using Microsoft.AspNetCore.Mvc;
using inventory_app.Server.Models;
using inventory_app.Server.Services.Interfaces;

namespace TestStoreApp.Server.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class InventoryController : ControllerBase
    {
        private readonly ILogger<InventoryController> _logger;
        private readonly IProductService _service;
        private readonly IErrorService _errors;

        public InventoryController(ILogger<InventoryController> logger, IProductService service, IErrorService errors)
        {
            _logger = logger;
            _service = service;
            _errors = errors;
        }

        [HttpGet(Name = "GetInventory")]
        public async Task<IActionResult> GetAll([FromQuery] ProductQuery query)
        {
            var result = await _service.GetProducts(query);

            if (_errors.HasErrors())
            {
                result.Message += "\n" + string.Join("; ", _errors.GetAll());
                return BadRequest(result);
            }

            return Ok(result);
        }
    }
}
