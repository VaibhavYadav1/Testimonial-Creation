package com.testimonial.authenticate.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.testimonial.authenticate.dto.UsersDto;
import com.testimonial.authenticate.entity.Users;
import com.testimonial.authenticate.repository.UsersRepository;

import jakarta.transaction.Transactional;

@Service
public class UsersServiceImp implements UsersService {

	@Autowired
	private UsersRepository repository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private JwtService jwtService;

	@Override
	public boolean saveUser(UsersDto dto) {
		dto.setPassword(passwordEncoder.encode(dto.getPassword()));
		Users user = new Users();
		BeanUtils.copyProperties(dto, user);
		repository.save(user);
		return true;
	}

	@Override
	public List<UsersDto> getAllUsers() {

		List<Users> list = repository.findAll();
		List<UsersDto> finalList = new ArrayList<>();
		for (Users entity : list) {
			UsersDto dto = new UsersDto();
			BeanUtils.copyProperties(entity, dto);
			finalList.add(dto);
		}
		return finalList;
	}

	@Override
	public String generateUserToken(String username) {
		return jwtService.generateUserToken(username);
	}

	@Override
	public void validateToken(String token) {
		jwtService.validateToken(token);
	}

	@Override
	public UsersDto getUsersById(Integer userId) {
		Optional<Users> optionalUsers = repository.findById(userId);
		if (optionalUsers.isPresent()) {
			Users entityUsers = optionalUsers.get();
			UsersDto dto = new UsersDto();
			BeanUtils.copyProperties(entityUsers, dto);
			return dto;
		} else {
			return null;
		}
	}

	@Transactional
	@Override
	public boolean deleteUsers(Integer userId) {
		if (repository.existsById(userId)) {
			repository.deleteById(userId);
			return true;
		}
		return false;
	}

	@Override
	public boolean updateUsers(Integer userId, UsersDto dto) {
		Optional<Users> optionalUser = repository.findById(userId);
		if (optionalUser.isPresent()) {
			Users existingUser = optionalUser.get();

			// Only update fields that are not null
			if (dto.getUsername() != null)
				existingUser.setUsername(dto.getUsername());
			if (dto.getEmail() != null)
				existingUser.setEmail(dto.getEmail());
			if (dto.getPassword() != null)
				existingUser.setPassword(dto.getPassword());
			if (dto.getDomain() != null)
				existingUser.setDomain(dto.getDomain());

			repository.save(existingUser);
			return true;
		}
		return false;
	}

	@Override
	public UsersDto findUser(String username) {
		Users user = repository.findByName(username).get();
		UsersDto dto = new UsersDto();
		BeanUtils.copyProperties(user, dto);
		return dto;
	}
}
