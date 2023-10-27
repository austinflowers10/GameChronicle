using System.Text.Json.Serialization;
using GameChronicle.Models;

public class GameSingle
    {
        [JsonPropertyName("id")]
        public int Id {get;set;}
        [JsonPropertyName("name")]
        public string Name {get;set;}
        [JsonPropertyName("description")]
        public string Description {get;set;}
        [JsonPropertyName("released")]
        public DateTime? DateReleased {get;set;}
        [JsonPropertyName("platforms")]
        public List<OuterPlatform> OuterPlatforms {get;set;}
        [JsonPropertyName("genres")]
        public List<Genre> Genres {get;set;}
        [JsonPropertyName("background_image")]
        public string ImageURL {get;set;}
        public List<Developer> Developers {get;set;}
        
        public class OuterPlatform 
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

        public class Developer
        {
            [JsonPropertyName("id")]
            public int Id {get;set;}
            [JsonPropertyName("name")]
            public string Name {get;set;}
        }
    }