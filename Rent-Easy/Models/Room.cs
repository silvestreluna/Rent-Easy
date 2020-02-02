using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Rent_Easy.Models
{
    public class Room
    {
        public int Id { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }
        public int UserId { get; set; }
        public bool IsMasterRoom { get; set; }
        public bool PrivateBathroom { get; set; }
        public string Title { get; set; }
        public string RoomDesc { get; set; }
        public DateTime AvailDate {get; set;}
        public string Price { get; set; }
        public List<Images> Images { get; set; }
    }
}
