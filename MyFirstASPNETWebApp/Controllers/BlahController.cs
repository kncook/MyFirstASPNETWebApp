using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MyFirstASPNETWebApp.Models;

namespace MyFirstASPNETWebApp.Controllers
{
    public class BlahController : Controller
    {
        public IActionResult Index()
        {
            //tests the error page. vid 4
            //throw new IndexOutOfRangeException();
            return View();
        }
        //will return the gradecakcview /page
        [HttpGet]
        public IActionResult GradeCalculator()
        {
            return View();
        }

        /*add on to to be able to use model*/
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult GradeCalculator(calculatormodel model)
        {

            return View();
        }
    }
}
