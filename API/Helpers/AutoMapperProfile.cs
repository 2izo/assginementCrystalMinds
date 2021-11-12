
    using assignement.DTO;
    using assignement.Entities;
    using AutoMapper;
    using global::API.DTO;

    namespace API.Helpers
{
    public class AutoMapperProfiles:Profile
    {
        public AutoMapperProfiles()
        {
             CreateMap<Customer,CustomerDto>();

          CreateMap<CustomerDto,Customer>();
             CreateMap<Address,AddressDto>();
            
             
        }

       
    }
}
