using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace RestaurantAPI.Models
{
    public class Menu
    {
        [Key]
        public int foodId { get; set; }
        public string foodName { get; set; }
        public int foodPrice { get; set; }
        public string foodCategory { get; set; }
    }
}