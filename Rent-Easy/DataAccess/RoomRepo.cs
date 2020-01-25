using Dapper;
using Microsoft.Extensions.Configuration;
using Rent_Easy.DTO;
using Rent_Easy.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Rent_Easy.DataAccess
{
    public class RoomRepo
    {
        string _connectionString;
        readonly ImagesRepo _imgRepo;

        public RoomRepo(IConfiguration configuration, ImagesRepo imgRepo)
        {
            _connectionString = configuration.GetValue<string>("ConnectionString");
            _imgRepo = imgRepo;
        }

        public IEnumerable<Room> GetRooms()
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"SELECT [Id],
                                   [Street],
                                   [City],
                                   [State],
                                   [Zip],
                                   [UserId],
                                   [isMasterRoom]
                                   FROM [Room]";
                var allRooms = db.Query<Room>(sql);

                foreach(var room in allRooms) 
                {
                    var imgRepo = _imgRepo.GetImagesByRoomId(room.Id);
                    room.Images = imgRepo.ToList();
                }
                
                return allRooms;

            }
        }

        internal bool DeleteRoomById(int roomId)
        {
            using(var db = new SqlConnection(_connectionString))
            {
                var sql = @"DELETE FROM [Room] WHERE [Id] = @roomId";

                return db.Execute(sql, new { roomId }) == 1;
            }
        }

        public Room NewRoomForRent(RoomDTO newRoom)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"INSERT INTO [Room]
                    ([Street], [City], [State], [Zip], [UserId], [IsMasterRoom])
                     
                    output inserted.*                        

                    VALUES (@street, @city, @state, @zip, @userId, @isMasterRoom)";

                return db.QueryFirst<Room>(sql, newRoom);
            }
        }

    }
}
