namespace assignement.Entities
{
    public class Address
    {
        public int ID { get; set; }
        public int Longitude { get; set; }
        public int Latitude { get; set; }
        public int CustomerID { get; set; }
        public Customer Customer { get; set; }
        
        public string City { get; set; }
        public string Country { get; set; }
        
        
        
        
        
        
        
    }
}