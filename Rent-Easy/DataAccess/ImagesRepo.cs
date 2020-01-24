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
    public class ImagesRepo
    {
        string _connectionString;
        public ImagesRepo(IConfiguration configuration)
        {
            _connectionString = configuration.GetValue<string>("ConnectionString");
        }

        public IEnumerable<Images> GetImagesByRoomId(int roomId)
        {
            using(var db = new SqlConnection(_connectionString))
            {
                var sql = @"SELECT [Id],
                                   [Url],
                                   [IsUserProfileImg],
                                   [RoomId],
                                   [UserId]
                                 FROM [Images]
                                 WHERE RoomId = @roomId";
                return db.Query<Images>(sql, new { roomId });

            }
        }
    }
}
