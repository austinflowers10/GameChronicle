using GameChronicle.Data;
using GameChronicle.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class TimeCategoryController : ControllerBase 
{
    private GameChronicleDbContext _dbContext;

    public TimeCategoryController(GameChronicleDbContext dbContext, GameApiService apiService)
    {
        _dbContext = dbContext;
    }

    [HttpGet]
    public IActionResult Get()
    {
        return Ok(_dbContext.TimeCategories.ToList());
    }
}