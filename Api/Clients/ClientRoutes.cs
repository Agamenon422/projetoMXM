using System;


namespace Api.Clients
{
    public static class ClientRoutes
    {
        public static void AddRoutesClients(this WebApplication app)
        {
            app.MapPost("clients", (ExecuteSqlRequest request, AppDbContext context) =>
            {

                var result = context.Database.SqlQueryRaw<Client>(request.SqlCode).ToList();

                return result;

            });
        }
    }
}
