package com.testimonial.authenticate.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Component
public class JwtService {

	public static final String SECRET = "5367566B59703373367639792F423F4528482B4D6251655468576D5A71347437";

	public void validateToken(final String token) {
		try {
			Jwts.parserBuilder().setSigningKey(getSignKey()).build().parseClaimsJws(token);
		} catch (ExpiredJwtException e) {
			throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Token has expired. Please log in again.");
		} catch (JwtException e) {
			throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid token.");
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,
					"Token validation failed: " + e.getMessage());
		}
	}

	public String generateUserToken(String username) {
		Map<String, Object> claims = new HashMap<>();
		return createUserToken(claims, username);
	}

	private String createUserToken(Map<String, Object> claims, String userName) {
		return Jwts.builder().setClaims(claims).setSubject(userName).setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 30))
				.signWith(getSignKey(), SignatureAlgorithm.HS256).compact();
	}

	public String generateCustomerToken(String customerName) {
		Map<String, Object> claims = new HashMap<>();
		return createCustomerToken(claims, customerName);
	}

	private String createCustomerToken(Map<String, Object> claims, String customerName) {
		return Jwts.builder().setClaims(claims).setSubject(customerName)
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 30))
				.signWith(getSignKey(), SignatureAlgorithm.HS256).compact();
	}

	private Key getSignKey() {
		byte[] keyBytes = Decoders.BASE64.decode(SECRET);
		return Keys.hmacShaKeyFor(keyBytes);
	}
}
