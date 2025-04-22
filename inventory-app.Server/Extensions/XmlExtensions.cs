using System.Xml.Linq;

namespace inventory_app.Server.Extensions
{
    public static class XmlExtensions
    {
        public static bool HasAttributes(this XElement element, params string[] names)
        {
            return names.All(name => !string.IsNullOrWhiteSpace((string?)element.Attribute(name)));
        }
    }
}
