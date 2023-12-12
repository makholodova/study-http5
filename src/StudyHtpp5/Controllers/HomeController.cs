using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using StudyHtpp5.Models;

namespace StudyHtpp5.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult StudyCss()
    {
        return View();
    }
    public IActionResult StudyJS()
    {
        return View();
    }
    public IActionResult StudyJQuery()
    {
        return View();
    }
    public IActionResult StudyVue()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }

    
}