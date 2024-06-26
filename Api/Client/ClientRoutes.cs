﻿using Api.Client;
using Api.Data;
using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore;
using System;


namespace Api.Client
{
    public static class ClientRoutes
    {
        [DisableCors]
        public static void AddRoutesClients(this WebApplication app)
        {
            app.MapPost("clients", (ExecuteSqlRequest request, AppDbContext context) =>
            {

                var result = context.Database.SqlQueryRaw<Client>($"{request.SqlCode}").ToList();

                return result;

            });
        }
    }
}
