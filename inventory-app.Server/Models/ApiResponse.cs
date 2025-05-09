﻿namespace inventory_app.Server.Models;

public class ApiResponse<T>
{
    public string? Message { get; set; }
    public T? Data { get; set; }
    public int TotalItems { get; set; }
    public int Page { get; set; }
    public int PageSize { get; set; }
}
