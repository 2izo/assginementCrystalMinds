using System.Collections.Generic;
using System.Threading.Tasks;
using assignement.Entities;

namespace assignement.interfaces
{
    public interface ICustomerRepo
    {
        void UpdateCustomer(Customer before);
        Task<IEnumerable<Customer>> GetCustomersAsync();
        Task<bool> AddCustomer(Customer c);
        Task<Customer> GetCustomerByIdAsync(int id);
        Task<Customer> GetUserByCustomerFirstNameAsync(string username);
        Task<bool> SaveAllAsync();
        void DeleteCustomer(int id);
    }
}