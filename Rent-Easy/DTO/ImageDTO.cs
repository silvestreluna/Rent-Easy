using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Rent_Easy.DTO
{
    public class ImageDTO
    {
        public byte[] Url { get; set; }
        public bool IsUserProfileImg { get; set; }
        public int RoomId { get; set; }
        public int UserId { get; set; }
    }
}
