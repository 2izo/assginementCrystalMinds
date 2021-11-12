using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using assignement.Entities;
using assignement.interfaces;
using Microsoft.EntityFrameworkCore;

namespace assignement.Data
{
    public class CustomerRepo : ICustomerRepo
    {
        private readonly DataContext _db;
        public CustomerRepo(DataContext db)
        {
            _db = db;
        }

        public async Task<Customer> GetCustomerByIdAsync(int id)
        {
            return await _db.Customers.Include(x=>x.Addresses).SingleOrDefaultAsync(cus=>cus.CustomerID ==id);
        }

        public async Task<Customer> GetUserByCustomerFirstNameAsync(string FirstName)
        {
             return await _db.Customers.Include(x=>x.Addresses).
            SingleOrDefaultAsync(x=>x.CustomerFirstName==FirstName);
        }

        public async Task<IEnumerable<Customer>> GetCustomersAsync()
        {
            return await _db.Customers.Include(x=>x.Addresses).ToListAsync();
        }

        public async Task<bool> SaveAllAsync()
        {
            return await _db.SaveChangesAsync() > 0;
        }
        public async  Task<bool> AddCustomer(Customer c){
            await _db.Customers.AddAsync(c);
            return  await  SaveAllAsync();
        }

        public void UpdateCustomer(Customer before)
        {
             _db.Entry(before).State = EntityState.Modified;    
                    
        }
        public async void DeleteCustomer(int id){
            Customer c = await _db.Customers.SingleOrDefaultAsync(x => x.CustomerID == id);
            if(c!=null)
            _db.Customers.Remove(c);
        }
    }
}