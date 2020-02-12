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

        // THIS WILL NOT WORK!!!! YOU NEED TO FIX IT. YOU ARE PASSING MORE THEN JUST A BYTES FILE... A WHOLE OBJECT IS COMING INT.....

        public bool addNewImage(byte[] url, int userId, int roomId, bool isUserProfileImg)
        {
            using(var db = new SqlConnection(_connectionString))
            {
                var sql = @"INSERT INTO [dbo].[Images]
           ([Url]
           ,[IsUserProfileImg]
           ,[RoomId]
           ,[UserId])
     VALUES
           (@url
           ,@isUserProfileImg
           ,@roomId
           ,@userId)";

                return db.Execute(sql, new { url, userId, roomId, isUserProfileImg }) == 1;
            }

        }
    }
}
