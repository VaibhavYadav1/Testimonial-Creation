package com.testimonial.authenticate.service;

import java.util.List;

import com.testimonial.authenticate.dto.UsersDto;

public interface UsersService {

	public boolean saveUser(UsersDto dto);

	public String generateUserToken(String username);

	public void validateToken(String token);

	public List<UsersDto> getAllUsers();

	public UsersDto getUsersById(Integer userId);

	public boolean deleteUsers(Integer userId);

	public boolean updateUsers(Integer userId, UsersDto dto);

	public UsersDto findUser(String username);
}
