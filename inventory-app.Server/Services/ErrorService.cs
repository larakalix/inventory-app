using inventory_app.Server.Services.Interfaces;

namespace inventory_app.Server.Services
{
    /// <summary>
    /// Service to manage errors
    /// </summary>
    public class ErrorService : IErrorService
    {
        private readonly List<string> _errors = new();

        /// <summary>
        /// Add an error
        /// </summary>
        public void Add(string message) => _errors.Add(message);

        /// <summary>
        /// Validate if any
        /// </summary>
        public bool HasErrors() => _errors.Any();

        /// <summary>
        /// Get all errors in store
        /// </summary>
        public List<string> GetAll() => _errors.ToList();

        /// <summary>
        /// Remove all errors
        /// </summary>
        public void Clear() => _errors.Clear();
    }
}
