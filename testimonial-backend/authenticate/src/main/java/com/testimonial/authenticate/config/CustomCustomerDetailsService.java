package com.testimonial.authenticate.config;

import com.testimonial.authenticate.entity.Customers;
import com.testimonial.authenticate.repository.CustomersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class CustomCustomerDetailsService implements UserDetailsService {

	@Autowired
	private CustomersRepository customerRepository;

	@Override
	public UserDetails loadUserByUsername(String customerName) throws UsernameNotFoundException {
		Optional<Customers> customer = customerRepository.findByCustomerName(customerName);
		return customer.map(CustomCustomerDetails::new)
				.orElseThrow(() -> new UsernameNotFoundException("user not found with name :" + customerName));
	}
}
