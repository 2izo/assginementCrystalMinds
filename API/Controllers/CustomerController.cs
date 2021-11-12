using System.Collections.Generic;
using System.Threading.Tasks;
using assignement.Data;
using assignement.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using assignement.DTO;
using System.Linq;
using assignement.interfaces;
using AutoMapper;
using System;

namespace assignement.Controllers
{
    public class CustomerController : BaseController
    {

        private readonly ICustomerRepo _customerRepo;
        private readonly IMapper _map;
        public CustomerController(ICustomerRepo customerRepo, IMapper map)
        {
            _map = map;
            _customerRepo = customerRepo;
        }
        [HttpGet]
        public async Task<IEnumerable<Customer>> GetCustomers()
        {
            return await _customerRepo.GetCustomersAsync();
        }
        [HttpGet("{id}")]
        public async Task<Customer> GetCustomers(int id)
        {
            return await _customerRepo.GetCustomerByIdAsync(id);
        }
        [HttpPost("addUser")]
        public async Task<ActionResult> CreateCustomer(CustomerDto customer)
        {
            Customer c = _map.Map<Customer>(customer);
            if(await _customerRepo.AddCustomer(c))return Ok();
            return BadRequest("Couldnt add Customer");
            
        }
        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateCustomer(int id, CustomerDto customer)
        {
            Customer custBefore = await _customerRepo.GetCustomerByIdAsync(id);
            _map.Map(customer,custBefore);
            _customerRepo.UpdateCustomer(custBefore);
            if(await _customerRepo.SaveAllAsync()){
                return NoContent();
            }
            return BadRequest("Couldnt update");

        }
        [HttpDelete("delete-customer/{id}")]
        public async Task<ActionResult> DeleteUser(int id)
        {
            _customerRepo.DeleteCustomer(id);
            if(await _customerRepo.SaveAllAsync()){
                return NoContent();
            }
            return BadRequest("Couldnt delete");
            
        }


    }
}