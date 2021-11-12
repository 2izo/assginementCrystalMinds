using assignement.Entities;
using Microsoft.EntityFrameworkCore;

namespace assignement.Data
{
     public class DataContext:DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Customer> Customers{set;get;}
    }
}