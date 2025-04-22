namespace inventory_app.Server.Services.Interfaces
{
    public interface IErrorService
    {
        void Add(string message);
        bool HasErrors();
        List<string> GetAll();
        void Clear();
    }
}
