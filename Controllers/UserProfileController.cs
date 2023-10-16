using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using GameChronicle.Data;
using GameChronicle.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace GameChronicle.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserProfileController : ControllerBase
{
    private GameChronicleDbContext _dbContext;

    public UserProfileController(GameChronicleDbContext context)
    {
        _dbContext = context;
    }

    [HttpGet]
    [Authorize]
    public IActionResult Get()
    {
        return Ok(_dbContext.UserProfiles.ToList());
    }

    [HttpGet("withroles")]
[Authorize(Roles = "Admin")]
public IActionResult GetWithRoles()
{
    return Ok(_dbContext.UserProfiles
    .Include(up => up.IdentityUser)
    .Select(up => new UserProfile
    {
        Id = up.Id,
        FirstName = up.FirstName,
        LastName = up.LastName,
        Address = up.Address,
        Email = up.IdentityUser.Email,
        UserName = up.IdentityUser.UserName,
        IdentityUserId = up.IdentityUserId,
        Roles = _dbContext.UserRoles
        .Where(ur => ur.UserId == up.IdentityUserId)
        .Select(ur => _dbContext.Roles.SingleOrDefault(r => r.Id == ur.RoleId).Name)
        .ToList()
    }));
}

[HttpPost("promote/{id}")]
[Authorize(Roles = "Admin")]
public IActionResult Promote(string id)
{
    IdentityRole role = _dbContext.Roles.SingleOrDefault(r => r.Name == "Admin");
    // This will create a new row in the many-to-many UserRoles table.
    _dbContext.UserRoles.Add(new IdentityUserRole<string>
    {
        RoleId = role.Id,
        UserId = id
    });
    _dbContext.SaveChanges();
    return NoContent();
}

[HttpPost("demote/{id}")]
[Authorize(Roles = "Admin")]
public IActionResult Demote(string id)
{
    IdentityRole role = _dbContext.Roles
        .SingleOrDefault(r => r.Name == "Admin"); 
    IdentityUserRole<string> userRole = _dbContext
        .UserRoles
        .SingleOrDefault(ur =>
            ur.RoleId == role.Id &&
            ur.UserId == id);

    _dbContext.UserRoles.Remove(userRole);
    _dbContext.SaveChanges();
    return NoContent();
}
}