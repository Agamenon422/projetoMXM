using Microsoft.EntityFrameworkCore;
using Api.Client;

namespace Api.Data
{
    public class AppDbContext: DbContext
    {
        private  DbSet<Api.Client.Client> Clients { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=DATABASE.sqlite");
            base.OnConfiguring(optionsBuilder);
        }
    }
}
