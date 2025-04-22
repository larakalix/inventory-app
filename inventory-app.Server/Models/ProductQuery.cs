namespace inventory_app.Server.Models
{
    public class ProductQuery
    {
        public string Order { get; set; } = "asc";
        public string? SortBy { get; set; }
        public int Page { get; set; } = 1;
        public int PageSize { get; set; } = 10;
    }
}
