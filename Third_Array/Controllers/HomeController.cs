using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Diagnostics;
using Third_Array.Models;
using Third_Array.Services;

namespace Third_Array.Controllers
{
    public class HomeController : Controller
    {
        private readonly IArrayApiService arrayApiService;

        public HomeController(IArrayApiService arrayApiService)
        {
            this.arrayApiService = arrayApiService;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }
        public async Task<IActionResult> ModalArray(string array1)
        {
            int[] numbers = JsonConvert.DeserializeObject<int[]>(array1);

            ArrayNumbers array = new ArrayNumbers();

            try
            {
                array = await arrayApiService.GetArrayThird(numbers);
            }
            catch (Exception ex)
            {
                ViewBag.errorMessage = ex.Message;
            }

            return PartialView("_MovieModalPartial", array);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}