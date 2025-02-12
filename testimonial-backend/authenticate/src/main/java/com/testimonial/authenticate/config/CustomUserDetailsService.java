package com.testimonial.authenticate.config;

import com.testimonial.authenticate.entity.Users;
import com.testimonial.authenticate.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class CustomUserDetailsService implements UserDetailsService {

	@Autowired
	private UsersRepository usersRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<Users> user = usersRepository.findByName(username);
		return user.map(CustomUserDetails::new)
				.orElseThrow(() -> new UsernameNotFoundException("user not found with name :" + username));
	}
}
