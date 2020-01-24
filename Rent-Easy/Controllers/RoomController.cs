using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Rent_Easy.DataAccess;
using Rent_Easy.Models;

namespace Rent_Easy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoomController : ControllerBase
    {
        readonly RoomRepo _repo;

        public RoomController(RoomRepo repo)
        {
            _repo = repo;
        }


        [HttpGet]
        public IEnumerable<Room> GetAllRooms()
        {
            return _repo.GetRooms();
        }

    }
}