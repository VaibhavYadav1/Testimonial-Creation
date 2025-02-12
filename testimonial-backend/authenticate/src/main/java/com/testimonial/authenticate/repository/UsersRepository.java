package com.testimonial.authenticate.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.testimonial.authenticate.entity.Users;

@Repository
public interface UsersRepository extends JpaRepository<Users, Integer> {
	@Query(value = "select * from users where username = :username", nativeQuery = true)
	public Optional<Users> findByName(@Param("username") String username);

	@Query(value = "select * from users where username = :username and password = :password", nativeQuery = true)
	Optional<Users> fetchUser(@Param("username") String username, @Param("password") String password);
}
