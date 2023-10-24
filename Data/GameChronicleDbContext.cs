using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using GameChronicle.Models;
using Microsoft.AspNetCore.Identity;

namespace GameChronicle.Data;
public class GameChronicleDbContext : IdentityDbContext<IdentityUser>
{
    private readonly IConfiguration _configuration;
    public DbSet<UserProfile> UserProfiles { get; set; }
    public DbSet<UserGame> UserGames { get; set; }
    public DbSet<TimeCategory> TimeCategories { get; set; }
    public DbSet<Review> Reviews {get;set;}

    public GameChronicleDbContext(DbContextOptions<GameChronicleDbContext> context, IConfiguration config) : base(context)
    {
        _configuration = config;
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<IdentityRole>().HasData(new IdentityRole
        {
            Id = "c3aaeb97-d2ba-4a53-a521-4eea61e59b35",
            Name = "Admin",
            NormalizedName = "admin"
        });

        modelBuilder.Entity<IdentityUser>().HasData(new IdentityUser
        {
            Id = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
            UserName = "Administrator",
            Email = "admina@strator.comx",
            PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
        });

        modelBuilder.Entity<IdentityUserRole<string>>().HasData(new IdentityUserRole<string>
        {
            RoleId = "c3aaeb97-d2ba-4a53-a521-4eea61e59b35",
            UserId = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f"
        });
        modelBuilder.Entity<UserProfile>().HasData(new UserProfile
        {
            Id = 1,
            IdentityUserId = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
            FirstName = "Admina",
            LastName = "Strator",
            Address = "101 Main Street",
            CreateDateTime = new DateTime(2023, 10, 16)
        });

        modelBuilder.Entity<TimeCategory>().HasData(new TimeCategory[]
        {
            new () {Id = 1, Name = "In Progress"},
            new () {Id = 2, Name = "Up Next"},
            new () {Id = 3, Name = "Later"},
            new () {Id = 4, Name = "Eventually"},
            new () {Id = 5, Name = "Done"},
        });

        modelBuilder.Entity<UserGame>().HasData(new UserGame[]
        {
            new () {Id = 1, UserProfileId = 1, GameNumber = 326243, LastKnownPrice = 39.59M, ReplayabilityRating = 8, FavoriteRanking = 1, TimeCategoryId = 5},
            new () {Id = 2, UserProfileId = 1, GameNumber = 2551, LastKnownPrice = 59.99M, ReplayabilityRating = 8, FavoriteRanking = 2, TimeCategoryId = 5},
            new () {Id = 3, UserProfileId = 1, GameNumber = 3387, LastKnownPrice = 19.99M, ReplayabilityRating = 8, FavoriteRanking = 3, TimeCategoryId = 5}, 
            new () {Id = 4, UserProfileId = 1, GameNumber = 50734, LastKnownPrice = 59.99M, ReplayabilityRating = 8, FavoriteRanking = 4, TimeCategoryId = 5}, 
            new () {Id = 5, UserProfileId = 1, GameNumber = 3990, LastKnownPrice = 19.99M, ReplayabilityRating = 8, FavoriteRanking = 5, TimeCategoryId = 5}, 
            new () {Id = 6, UserProfileId = 1, GameNumber = 28, ReplayabilityRating = 6, FavoriteRanking = 6, TimeCategoryId = 5}, 
            new () {Id = 7, UserProfileId = 1, GameNumber = 638654, ReplayabilityRating = 8, FavoriteRanking = 7, TimeCategoryId = 5}, 
            new () {Id = 8, UserProfileId = 1, GameNumber = 3070, ReplayabilityRating = 9, FavoriteRanking = 8, TimeCategoryId = 5}, 
            new () {Id = 9, UserProfileId = 1, GameNumber = 22513, ReplayabilityRating = 5, FavoriteRanking = 9, TimeCategoryId = 5}, 
            new () {Id = 10, UserProfileId = 1, GameNumber = 3556, ReplayabilityRating = 7, FavoriteRanking = 10, TimeCategoryId = 5}, 
            new () {Id = 11, UserProfileId = 1, GameNumber = 579507, DateStarted = new DateTime(2023, 10, 01), TimeCategoryId = 1}, 
            new () {Id = 12, UserProfileId = 1, GameNumber = 2454, DateStarted = new DateTime(2023, 09, 20), TimeCategoryId = 1}, 
            new () {Id = 13, UserProfileId = 1, GameNumber = 58861, DateStarted = new DateTime(2023, 07, 15), DateFinished = new DateTime(2023, 09, 10), TimeCategoryId = 5}, 
            new () {Id = 14, UserProfileId = 1, GameNumber = 452635, DateStarted = new DateTime(2023, 09, 11), DateFinished = new DateTime(2023, 09, 30), TimeCategoryId = 5}, 
            new () {Id = 15, UserProfileId = 1, GameNumber = 368952, DateStarted = new DateTime(2023, 08, 11), DateFinished = new DateTime(2023, 09, 30), TimeCategoryId = 5}, 
            new () {Id = 16, UserProfileId = 1, GameNumber = 892902, TimeCategoryId = 3}, 
            new () {Id = 17, UserProfileId = 1, GameNumber = 605674, TimeCategoryId = 3}, 
            new () {Id = 18, UserProfileId = 1, GameNumber = 840776, TimeCategoryId = 3}, 
            new () {Id = 19, UserProfileId = 1, GameNumber = 452639, DateStarted = new DateTime(2022, 01, 01), TimeCategoryId = 5}, 
            new () {Id = 20, UserProfileId = 1, GameNumber = 278, DateStarted = new DateTime(2022, 01, 01), DateFinished = new DateTime(2022, 03, 01), TimeCategoryId = 5}, 
            new () {Id = 21, UserProfileId = 1, GameNumber = 58175, DateStarted = new DateTime(2022, 07, 01), DateFinished = new DateTime(2022, 08, 01), TimeCategoryId = 5}, 
            new () {Id = 22, UserProfileId = 1, GameNumber = 258322, DateStarted = new DateTime(2022, 07, 20), DateFinished = new DateTime(2022, 08, 27), TimeCategoryId = 5}, 
            new () {Id = 23, UserProfileId = 1, GameNumber = 864, DateStarted = new DateTime(2021, 05, 12), DateFinished = new DateTime(2021, 06, 27), TimeCategoryId = 5}, 
            new () {Id = 24, UserProfileId = 1, GameNumber = 4248, DateStarted = new DateTime(2021, 01, 10), DateFinished = new DateTime(2021, 02, 27), TimeCategoryId = 5}, 
            new () {Id = 25, UserProfileId = 1, GameNumber = 8146, DateStarted = new DateTime(2021, 03, 07), DateFinished = new DateTime(2021, 04, 14), TimeCategoryId = 5}, 
            new () {Id = 26, UserProfileId = 1, GameNumber = 4286, DateStarted = new DateTime(2022, 03, 03), DateFinished = new DateTime(2021, 05, 21), TimeCategoryId = 5}, 
            new () {Id = 27, UserProfileId = 1, GameNumber = 4427, DateStarted = new DateTime(2022, 05, 30), DateFinished = new DateTime(2021, 06, 30), TimeCategoryId = 5}, 
            new () {Id = 28, UserProfileId = 1, GameNumber = 638650, DateStarted = new DateTime(2022, 10, 15), DateFinished = new DateTime(2022, 12, 20), TimeCategoryId = 5}, 
            new () {Id = 29, UserProfileId = 1, GameNumber = 28154, DateStarted = new DateTime(2022, 10, 15), DateFinished = new DateTime(2022, 12, 20), FavoriteRanking = 11, TimeCategoryId = 5}, 
            new () {Id = 30, UserProfileId = 1, GameNumber = 19590, DateStarted = new DateTime(2023, 02, 09), DateFinished = new DateTime(2022, 04, 12), TimeCategoryId = 5}, 
            new () {Id = 31, UserProfileId = 1, GameNumber = 28199, DateStarted = new DateTime(2023, 04, 13), DateFinished = new DateTime(2022, 06, 09), TimeCategoryId = 5},
            new () {Id = 32, UserProfileId = 1, GameNumber = 58773, TimeCategoryId = 2},
            new () {Id = 33, UserProfileId = 1, GameNumber = 564757, TimeCategoryId = 2},
            new () {Id = 34, UserProfileId = 1, GameNumber = 846303, TimeCategoryId = 2},
            new () {Id = 35, UserProfileId = 1, GameNumber = 650621, TimeCategoryId = 2},
            new () {Id = 36, UserProfileId = 1, GameNumber = 793647, TimeCategoryId = 2},
            new () {Id = 37, UserProfileId = 1, GameNumber = 9767, TimeCategoryId = 2},
            new () {Id = 38, UserProfileId = 1, GameNumber = 22121, TimeCategoryId = 2},
            new () {Id = 39, UserProfileId = 1, GameNumber = 2093, TimeCategoryId = 2}
        });
    }
}