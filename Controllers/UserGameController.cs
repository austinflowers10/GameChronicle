using GameChronicle.Data;
using GameChronicle.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class UserGameController : ControllerBase 
{
    private GameChronicleDbContext _dbContext;
    private GameApiService _apiService;

    public UserGameController(GameChronicleDbContext dbContext, GameApiService apiService)
    {
        _dbContext = dbContext;
        _apiService = apiService;
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetUserGamesPerUser(int id)
    {
        var matchingUserGames = _dbContext.UserGames
            .Include(ug => ug.UserProfile)
            .Include(ug => ug.TimeCategory)
            .Where(ug => ug.UserProfileId == id);

        foreach (UserGame userGame in matchingUserGames) 
        {
            userGame.GameSingle = await _apiService.GetById(userGame.GameNumber);
        }
        
        return Ok(matchingUserGames);
    }
}
