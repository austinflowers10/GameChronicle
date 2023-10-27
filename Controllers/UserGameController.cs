using GameChronicle.Data;
using GameChronicle.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration.UserSecrets;

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

    [HttpGet("{id}")] //UserProfileId
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

    [HttpPut("{id}")]
    public IActionResult PutUserGame(UserGame userGame, int id)
    {
        UserGame foundUserGame = _dbContext.UserGames.SingleOrDefault(ug => ug.Id == id);
        if (foundUserGame == null)
        {
            return NotFound();
        }
        else if (userGame.Id != id)
        {
            return BadRequest();
        }
        foundUserGame.LastKnownPrice = userGame.LastKnownPrice;
        foundUserGame.DateStarted = userGame.DateStarted;
        foundUserGame.DateFinished = userGame.DateFinished;
        foundUserGame.ReplayabilityRating = userGame.ReplayabilityRating; 
        foundUserGame.FavoriteRanking = userGame.FavoriteRanking;
        foundUserGame.TimeCategoryId = userGame.TimeCategoryId;
        foundUserGame.isCompleted = userGame.isCompleted;
        _dbContext.SaveChanges();
        return NoContent();
    }

    [HttpPut]
    public IActionResult PutUserGames(List<UserGame> userGames)
    {
        foreach (var game in _dbContext.UserGames)
        {
            _dbContext.UserGames.Remove(game); // Remove each existing user game
        }

        foreach (var game in userGames)
        {
            game.GameSingle = null; 
            game.UserProfile = null; 
            game.TimeCategory = null;
            _dbContext.UserGames.Add(game); // Add each game from the userGames list
        }

        _dbContext.SaveChanges(); // Save changes to the database
        return NoContent(); 
    }

    [HttpDelete("{id}")] 
    public IActionResult DeleteUserGame(int id)
    {
        UserGame foundUserGame = _dbContext.UserGames.SingleOrDefault(ug => ug.Id == id);
        if (foundUserGame == null)
        {
            return NotFound();
        }
        _dbContext.Remove(foundUserGame);
        _dbContext.SaveChanges();
        return NoContent();
    }
    
    [HttpPost]
    public async Task<IActionResult> PostUserGame(UserGame userGame)
    {
        _dbContext.UserGames.Add(userGame);
        _dbContext.SaveChanges();

        userGame.UserProfile = _dbContext.UserProfiles.SingleOrDefault(up => up.Id == userGame.UserProfileId);
        userGame.GameSingle = await _apiService.GetById(userGame.GameNumber);
        userGame.TimeCategory = _dbContext.TimeCategories.SingleOrDefault(t => t.Id == userGame.TimeCategoryId);
        
        return Created($"api/usergame/{userGame.Id}", userGame);
    }
}


