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
    public class UserController : ControllerBase
    {
        readonly UserRepo _repo;

        public UserController(UserRepo repo)
        {
            _repo = repo;
        }

        [HttpGet("{id}")]
        public User GetUserById(int id)
        {
            var user =_repo.GetUser(id);
            return user;
        }
    }
}