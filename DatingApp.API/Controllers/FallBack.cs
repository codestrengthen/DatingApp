using System.IO;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers
{
    public class FallBack : ControllerBase
    {
        public IActionResult Index()
        {
            // redirect and pass from MVC to Angular router. This fixes the 404 NotFound error when reloading page
            return PhysicalFile(Path.Combine(Directory.GetCurrentDirectory(), 
                "wwwroot", "index.html"), "text/HTML");
        }
    }
}