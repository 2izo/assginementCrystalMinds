using System.Collections.Generic;
using API.DTO;
using assignement.Entities;

namespace assignement.DTO
{
    public class CustomerDto
    {
        public string CustomerFirstName { get; set; }
        public string CustomerLastName { get; set; }
        public string CustomerEmail { get; set; }
        public string CustomerGender { get; set; }
        public System.DateTime DateOfBirth { get; set; }
        public ICollection<AddressDto> Addresses{get;set;}
    }
}