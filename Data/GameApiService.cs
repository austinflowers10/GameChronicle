namespace GameChronicle.Data;

public class GameApiService
{
    private HttpClient _httpClient;

    private IConfiguration _configuration;

    public GameApiService(IConfiguration config)
    {
        _httpClient = new HttpClient();
        _configuration = config;
    }

    public async Task<GameResultsObject> GetGameResultsObject()
    {
        var uri = $"https://api.rawg.io/api/games?key={_configuration["gameAPIKey"]}";
        var gameResultsObject = await _httpClient.GetFromJsonAsync<GameResultsObject>(uri);

        return gameResultsObject;
    }

    public async Task<GameSingle> GetById(int id)
    {
        var uri = $"https://api.rawg.io/api/games/{id}?key={_configuration["gameAPIKey"]}";
        var foundGame = await _httpClient.GetFromJsonAsync<GameSingle>(uri);

        return foundGame; 
    }

    public async Task<GameResultsObject> GetSearchedGames(int page, string search)
    {
        
        var uri = $"https://api.rawg.io/api/games?key={_configuration["gameAPIKey"]}&search_precise=true&exclude_additions=true&page_size=20";

        if (search != null) 
        {
            uri += $"&search={search}";
        }

        var gameResultsObject = await _httpClient.GetFromJsonAsync<GameResultsObject>(uri);

        return gameResultsObject;
    }
}

