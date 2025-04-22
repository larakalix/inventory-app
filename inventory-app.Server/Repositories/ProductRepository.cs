using System.Xml.Linq;
using inventory_app.Server.Models;
using inventory_app.Server.Repositories.Interfaces;
using inventory_app.Server.Services.Interfaces;

namespace inventory_app.Server.Repositories
{
    /// <summary>
    /// Product schema repository
    /// </summary>
    public class ProductRepository : IProductRepository
    {
        private readonly string _filePath;
        private readonly IErrorService _errors;

        public ProductRepository(IWebHostEnvironment env, IErrorService errors)
        {
            _filePath = Path.Combine(env.ContentRootPath, "Data", "inventory.xml");
            _errors = errors;
        }

        /// <summary>
        /// Get all products from data xml inventory file
        /// </summary>
        /// <returns></returns>
        public async Task<List<Product>> GetAll()
        {
            var doc = XDocument.Load(_filePath);
            var descendants = doc.Descendants("product");

            if (!descendants.Any())
            {
                _errors.Add("File not found");

                return new List<Product>();
            }

            var data = descendants
                .Where(p => Extensions.XmlExtensions.HasAttributes(p, "name", "price", "qty"))
                .Select(p => new Product
                {
                    Id = Guid.NewGuid(),
                    Name = (string)p.Attribute("name")!,
                    Price = decimal.Parse((string)p.Attribute("price")!),
                    Qty = int.Parse((string)p.Attribute("qty")!)
                })
                .ToList();

            return data;
        }

    }
}
