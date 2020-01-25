using Microsoft.Extensions.Configuration;
using Rent_Easy.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;

namespace Rent_Easy.DataAccess
{
    public class UserRepo
    {
        string _connectionString;
        public UserRepo(IConfiguration configuration)
        {
            _connectionString = configuration.GetValue<string>("ConnectionString");
        }

        public User GetUser(int id)
        {
            using(var db = new SqlConnection(_connectionString))
            {
                var sql = @"SELECT *
                                   FROM [user]
                                   WHERE Id = @id";
                return db.QueryFirst<User>(sql, new { id });
            }
        }
    }
}
