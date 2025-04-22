namespace inventory_app.Server.Models;

public class Product
{
    public Guid Id { get; set; }
    public string Name { get; set; } = default!;
    public decimal Price { get; set; }
    public int Qty { get; set; }
}