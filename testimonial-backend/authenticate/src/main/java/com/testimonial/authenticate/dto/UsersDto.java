package com.testimonial.authenticate.dto;

public class UsersDto {

	private Integer userId;

	private String username;

	private String password;

	private String email;

	private String domain;

	public UsersDto() {
		this.username = "";
		this.password = "";
		this.email = "";
		this.domain = "";
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDomain() {
		return domain;
	}

	public void setDomain(String domain) {
		this.domain = domain;
	}
}