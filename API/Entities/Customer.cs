
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace assignement.Entities
{
    
    public class Customer
    {
        [Key]
        public int CustomerID { get; set; }
        [Required]
        [Column(TypeName = "nvarchar (50)")]
        [StringLength(50)]
        public string CustomerFirstName { get; set; }
        [Required]
        [StringLength(50)]
        [Column(TypeName = "nvarchar (50)")]
        public string CustomerLastName { get; set; }
        [Required]
        public string CustomerEmail { get; set; }
        [Required]
        [Column(TypeName = "nvarchar (1)")]
        [StringLength(1)]
        public string CustomerGender { get; set; }
        [Required]
        public System.DateTime DateOfBirth { get; set; }
        public ICollection<Address> Addresses { get; set; }
        
        
    }
}