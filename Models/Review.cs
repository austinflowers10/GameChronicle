using System.ComponentModel.DataAnnotations;

namespace GameChronicle.Models;

public class Review  
{
    public int Id {get;set;}
    public int GameId {get;set;}
    public GameSingle GameSingle {get;set;}
    public int UserProfileId {get;set;}
    public UserProfile UserProfile {get;set;}
    [Required]
    public string Text {get;set;}
    public int CumulativeRating {get;set;}
    public int StoryRating {get;set;}
    public int WorldDesignRating {get;set;}
    public int GameplayRating {get;set;}
    public int VisualsRating {get;set;}
    public int CohesionRating {get;set;}
    public int SoundtrackRating {get;set;}

}