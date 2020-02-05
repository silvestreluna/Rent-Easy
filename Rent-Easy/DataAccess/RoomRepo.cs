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
                var sql = @"SELECT * FROM [Room]";
                var allRooms = db.Query<Room>(sql);

                foreach(var room in allRooms) 
                {
                    var imgRepo = _imgRepo.GetImagesByRoomId(room.Id);
                    room.Images = imgRepo.ToList();
                }
                
                return allRooms;

            }
        }

        public Room GetRoomById(int id)
        {
            using(var db = new SqlConnection(_connectionString))
            {
                var sql = @"SELECT * FROM ROOM WHERE Id = @id";

                var roomResult = db.QueryFirst<Room>(sql, new { id });

                var imgRepo = _imgRepo.GetImagesByRoomId(roomResult.Id);
                roomResult.Images = imgRepo.ToList();

                return roomResult;

            }
        } 

        public Room UpdateARoom(Room updatedRoomObj, int id)
        {
            using(var db = new SqlConnection(_connectionString))
            {
                var sql = @"UPDATE [Room]
                                   SET [Street] = @street,
                                       [City] = @city,
                                       [State] = @state,
                                       [Zip] = @zip,
                                       [UserId] = @userId,
                                       [IsMasterRoom] = @isMasterRoom
                                       [PrivateBathroom] = @privateBathroom,
                                       [Title] = @title,
                                       [RoomDesc] = @roomDesc,
                                       [AvailDate] = @availDate,
                                       [Price] =@price
                                       output inserted.*
                                       WHERE id = @id";

                updatedRoomObj.Id = id;
                return db.QueryFirst<Room>(sql, updatedRoomObj);
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
                    ([Street], [City], [State], [Zip], [UserId], [IsMasterRoom], [PrivateBathroom], [Title], [RoomDesc], [AvailDate], [Price])
                     
                    output inserted.*                        

                    VALUES (@street, @city, @state, @zip, @userId, @isMasterRoom, @privateBathroom, @title, @roomDesc, @availDate, @price)";

                return db.QueryFirst<Room>(sql, newRoom);
            }
        }

    }
}
