using System.ComponentModel;
using System.Text.Json.Serialization;
using GameChronicle.Models;

public class GameResultsObject {
    
    [JsonPropertyName("results")]
    public List<Game> Games {get;set;}
    
    public class Game 
    {
        [JsonPropertyName("id")]
        public int Id {get;set;}
        [JsonPropertyName("name")]
        public string Name {get;set;}
        [JsonPropertyName("released")]
        public DateTime DateReleased {get;set;}
        [JsonPropertyName("parent_platforms")]
        public List<ParentPlatform> ParentPlatforms {get;set;}
        [JsonPropertyName("genres")]
        public List<Genre> Genres {get;set;}
        [JsonPropertyName("background_image")]
        public string ImageURL {get;set;}
        
        public class ParentPlatform 
        {
            [JsonPropertyName("platform")]
            public Platform Platform {get;set;}
        }
        
        public class Platform 
        {
            [JsonPropertyName("id")]
            public int Id {get;set;}
            [JsonPropertyName("name")]
            public string Name {get;set;}
        }

        public class Genre 
        {
            [JsonPropertyName("id")]
            public int Id {get;set;}
            [JsonPropertyName("name")]
            public string Name {get;set;}
        }
    }
}