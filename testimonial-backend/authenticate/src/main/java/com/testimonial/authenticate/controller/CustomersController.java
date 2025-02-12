package com.testimonial.authenticate.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.testimonial.authenticate.dto.CustomersDto;
import com.testimonial.authenticate.dto.UsersDto;
import com.testimonial.authenticate.dto.CustomerAuthRequest;
import com.testimonial.authenticate.service.CustomersService;

@RestController
@RequestMapping("/auth/customer")
public class CustomersController {

	@Autowired
	CustomersService customersService;

	@Autowired
	PasswordEncoder passwordEncoder;

	@Autowired
	@Qualifier("customerAuthenticationProvider")
	private AuthenticationProvider customerAuthenticationProvider;

	@PostMapping("/token")
	public String getToken(@RequestBody CustomerAuthRequest request) {
		Authentication authentication = customerAuthenticationProvider.authenticate(
				new UsernamePasswordAuthenticationToken(request.getCustomerName(), request.getPassword()));
		if (authentication.isAuthenticated()) {
			return customersService.generateCustomerToken(request.getCustomerName());
		} else {
			throw new RuntimeException("Invalid credentials");
		}
	}

	@GetMapping("/validate")
	public ResponseEntity<String> validateToken(@RequestParam("token") String token) {
		try {
			customersService.validateToken(token);
			return ResponseEntity.ok("Token is valid");
		} catch (ResponseStatusException e) {
			return ResponseEntity.status(e.getStatusCode()).body(e.getReason());
		}
	}

	@PostMapping("/register")
	public boolean addCustomers(@RequestBody CustomersDto dto) {
		return customersService.saveCustomer(dto);
	}

	@GetMapping("/getAllCustomers")
	public List<CustomersDto> allCustomers(@RequestHeader("Authorization") String token) {
		customersService.validateToken(token.replace("Bearer ", ""));
		return customersService.getAllCustomers();
	}

	@GetMapping("/getCustomerById/{id}")
	public CustomersDto getCustomerDetails(@RequestHeader("Authorization") String token,
			@PathVariable("id") Integer customerId) {
		customersService.validateToken(token.replace("Bearer ", ""));
		return customersService.getCustomerById(customerId);
	}

	@PutMapping("/updateCustomer/{id}")
	public boolean updateCustomerDetails(@RequestHeader("Authorization") String token,
			@PathVariable("id") Integer customerId, @RequestBody CustomersDto dto) {
		customersService.validateToken(token.replace("Bearer ", ""));
		dto.setPassword(passwordEncoder.encode(dto.getPassword()));
		return customersService.updateCustomer(customerId, dto);
	}

	@DeleteMapping("/deleteCustomer/{id}")
	public boolean deleteUser(@RequestHeader("Authorization") String token, @PathVariable("id") Integer customerId) {
		customersService.validateToken(token.replace("Bearer ", ""));
		return customersService.deleteCustomer(customerId);
	}

	@PostMapping("/findCustomerByName")
	public CustomersDto findCustomer(@RequestBody CustomersDto dto, @RequestHeader("Authorization") String token) {
		customersService.validateToken(token.replace("Bearer ", ""));
		return customersService.findCustomer(dto.getCustomerName());
	}
}
