using GameChronicle.Data;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class GameController : ControllerBase 
{
    private GameChronicleDbContext _dbContext;
    private GameApiService _apiService;

    public GameController(GameApiService apiService, GameChronicleDbContext dbContext)
    {
        _apiService = apiService;
        _dbContext = dbContext;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        var gameResultsObject = await _apiService.GetGameResultsObject();
        var gamesWithPlatforms = gameResultsObject.Games.Select(game => new
        {
            Id = game.Id, 
            Name = game.Name,
            DateReleased = game.DateReleased, 
            Platforms = game.OuterPlatforms.Select(pp => (new { Id = pp.Platform.Id, Name = pp.Platform.Name })).ToList(),
            Genres = game.Genres,
            ImageURL = game.ImageURL
        }).ToList();

        return Ok(gamesWithPlatforms);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        var foundGame = await _apiService.GetById(id);
        return Ok(foundGame);
    }
    // This will need to be reworked to return a custom object similar to the first endpoint

    [HttpGet("search")]
    public async Task<IActionResult> GetPaginatedResultsBySearch(int page = 1, string search = null)
    {
        var gameResultsObject = await _apiService.GetSearchedGames(page, search);
        var gamesWithPlatforms = gameResultsObject.Games.Select(game => new
        {
            Id = game.Id, 
            Name = game.Name,
            DateReleased = game.DateReleased, 
            Platforms = game.OuterPlatforms.Select(pp => (new { Id = pp.Platform.Id, Name = pp.Platform.Name })).ToList(),
            Genres = game.Genres,
            ImageURL = game.ImageURL
        }).ToList();

        return Ok(gamesWithPlatforms);
    }
}


