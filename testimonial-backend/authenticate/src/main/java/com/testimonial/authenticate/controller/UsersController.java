package com.testimonial.authenticate.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
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
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.testimonial.authenticate.dto.UserAuthRequest;
import com.testimonial.authenticate.dto.UsersDto;
import com.testimonial.authenticate.service.UsersService;

@RestController
@RequestMapping("/auth/user")
public class UsersController {

	@Autowired
	UsersService userService;

	@Autowired
	PasswordEncoder passwordEncoder;

	@Autowired
	@Qualifier("userAuthenticationProvider")
	private AuthenticationProvider userAuthenticationProvider;

	@PostMapping("/token")
	public String getToken(@RequestBody UserAuthRequest request) {
		Authentication authentication = userAuthenticationProvider
				.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
		if (authentication.isAuthenticated()) {
			return userService.generateUserToken(request.getUsername());
		} else {
			throw new RuntimeException("Invalid credentials");
		}
	}

	@PostMapping("/register")
	public boolean addNewUser(@RequestBody UsersDto user) {
		return userService.saveUser(user);
	}

	@GetMapping("/validate")
	public ResponseEntity<String> validateToken(@RequestParam("token") String token) {
		try {
			userService.validateToken(token);
			return ResponseEntity.ok("Token is valid");
		} catch (ResponseStatusException e) {
			return ResponseEntity.status(e.getStatusCode()).body(e.getReason());
		}
	}

	@GetMapping("/getAllUsers")
	public List<UsersDto> getAllUsers(@RequestHeader("Authorization") String token) {
		userService.validateToken(token.replace("Bearer ", ""));
		return userService.getAllUsers();
	}

	@GetMapping("/getUserById/{id}")
	public UsersDto getUserById(@RequestHeader("Authorization") String token, @PathVariable("id") Integer userId) {
		userService.validateToken(token.replace("Bearer ", ""));
		return userService.getUsersById(userId);
	}

	@DeleteMapping("/deleteUser/{id}")
	public boolean deleteUser(@PathVariable("id") Integer userId, @RequestHeader("Authorization") String token) {
		userService.validateToken(token.replace("Bearer ", ""));
		return userService.deleteUsers(userId);
	}

	@PutMapping("/updateUser/{id}")
	public boolean updateUser(@RequestHeader("Authorization") String token, @PathVariable("id") Integer userId,
			@RequestBody UsersDto dto) {
		userService.validateToken(token.replace("Bearer ", ""));
		dto.setPassword(passwordEncoder.encode(dto.getPassword()));
		return userService.updateUsers(userId, dto);
	}

	@PostMapping("/findUserByName")
	public UsersDto findUser(@RequestBody UsersDto dto, @RequestHeader("Authorization") String token) {
		userService.validateToken(token.replace("Bearer ", ""));
		return userService.findUser(dto.getUsername());
	}
}
