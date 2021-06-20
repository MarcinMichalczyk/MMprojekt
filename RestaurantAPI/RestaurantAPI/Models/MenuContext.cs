using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace RestaurantAPI.Models
{
    public class MenuContext : DbContext
    {

            public MenuContext() : base("name=Menu")
            {

            }

            public DbSet<Menu> Menu { get; set; }
 
    }
}