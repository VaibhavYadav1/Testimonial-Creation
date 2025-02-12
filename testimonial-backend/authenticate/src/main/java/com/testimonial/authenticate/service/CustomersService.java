package com.testimonial.authenticate.service;

import java.util.List;

import com.testimonial.authenticate.dto.CustomersDto;

public interface CustomersService {

	public boolean saveCustomer(CustomersDto dto);

	public String generateCustomerToken(String customerName);

	public void validateToken(String token);

	public List<CustomersDto> getAllCustomers();

	public CustomersDto getCustomerById(Integer customerId);

	public boolean deleteCustomer(Integer customerId);

	public boolean updateCustomer(Integer customerId, CustomersDto dto);

	public CustomersDto findCustomer(String customerName);

}