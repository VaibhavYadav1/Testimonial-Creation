package com.testimonial.authenticate.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.testimonial.authenticate.dto.CustomersDto;
import com.testimonial.authenticate.entity.Customers;
import com.testimonial.authenticate.repository.CustomersRepository;

import jakarta.transaction.Transactional;

@Service
public class CustomersServiceImp implements CustomersService {

	@Autowired
	CustomersRepository customersRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private JwtService jwtService;

	@Override
	public String generateCustomerToken(String customerName) {
		return jwtService.generateCustomerToken(customerName);
	}

	@Override
	public void validateToken(String token) {
		jwtService.validateToken(token);
	}

	@Override
	public boolean saveCustomer(CustomersDto dto) {
		dto.setPassword(passwordEncoder.encode(dto.getPassword()));
		Customers customer = new Customers();
		BeanUtils.copyProperties(dto, customer);
		customersRepository.save(customer);
		return true;
	}

	@Override
	public List<CustomersDto> getAllCustomers() {
		List<Customers> list = customersRepository.findAll();
		List<CustomersDto> finalList = new ArrayList<>();
		for (Customers entity : list) {
			CustomersDto dto = new CustomersDto();
			BeanUtils.copyProperties(entity, dto);
			finalList.add(dto);
		}
		return finalList;
	}

	@Override
	public CustomersDto getCustomerById(Integer customerId) {
		Optional<Customers> optionalUsers = customersRepository.findById(customerId);
		if (optionalUsers.isPresent()) {
			Customers entityCustomers = optionalUsers.get();
			CustomersDto dto = new CustomersDto();
			BeanUtils.copyProperties(entityCustomers, dto);
			return dto;
		} else {
			return null;
		}
	}

	@Transactional
	@Override
	public boolean deleteCustomer(Integer customerId) {
		if (customersRepository.existsById(customerId)) {
			customersRepository.deleteById(customerId);
			return true;
		}
		return false;
	}

	@Override
	public boolean updateCustomer(Integer customerId, CustomersDto dto) {
		Optional<Customers> optionalCustomer = customersRepository.findById(customerId);
		if (optionalCustomer.isPresent()) {
			Customers existingCustomer = optionalCustomer.get();

			// Only update fields that are not null
			if (dto.getCustomerName() != null)
				existingCustomer.setCustomerName(dto.getCustomerName());
			if (dto.getCustomerEmail() != null)
				existingCustomer.setCustomerEmail(dto.getCustomerEmail());
			if (dto.getPassword() != null)
				existingCustomer.setPassword(dto.getPassword());

			customersRepository.save(existingCustomer);
			return true;
		}
		return false;
	}

	@Override
	public CustomersDto findCustomer(String customerName) {
		Customers customer = customersRepository.findByCustomerName(customerName).get();
		CustomersDto dto = new CustomersDto();
		BeanUtils.copyProperties(customer, dto);
		return dto;
	}

}
