using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Rent_Easy.DTO
{
    public class RoomDTO
    {
        public string Street { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }
        public int UserId { get; set; }
        public bool IsMasterRoom { get; set; }
    }
}
