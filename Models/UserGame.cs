using System.ComponentModel.DataAnnotations.Schema;

namespace GameChronicle.Models;

public class UserGame 
{
    public int Id {get;set;}
    public int UserProfileId {get;set;}
    public UserProfile UserProfile {get;set;}
    public int GameNumber {get;set;}
    [NotMapped]
    public GameSingle GameSingle {get;set;}
    public decimal? LastKnownPrice {get;set;}
    public DateTime? DateStarted {get;set;}
    public DateTime? DateFinished {get;set;}
    public int? ReplayabilityRating {get;set;}
    public int? FavoriteRanking {get;set;}
    public int TimeCategoryId {get;set;}
    public TimeCategory TimeCategory {get;set;}
    public bool isCompleted {get;set;}
}