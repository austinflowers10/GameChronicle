using System.ComponentModel.DataAnnotations;

namespace GameChronicle.Models;

public class TimeCategory  
{
    public int Id {get;set;}
    [Required]
    public string Name {get;set;}
}