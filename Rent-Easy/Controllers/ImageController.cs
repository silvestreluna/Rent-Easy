using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Rent_Easy.DataAccess;
using Rent_Easy.DTO;
using Rent_Easy.Models;

namespace Rent_Easy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImageController : ControllerBase
    {
        readonly ImagesRepo _repo;

        public ImageController(ImagesRepo repo)
        {
            _repo = repo;
        }
        [HttpPost]
        public void AddImage([FromForm] IFormFile file, [FromForm] int userId, [FromForm] int roomId, [FromForm] bool isUserImage)
        {
            byte[] fileBytes;

            using (var stream = new MemoryStream()) 
            
            {
                file.CopyTo(stream);
                fileBytes = stream.ToArray();
            }

            _repo.addNewImage(fileBytes, userId, roomId, isUserImage);
        }
    }
}