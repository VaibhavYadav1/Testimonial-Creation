package com.testimonial.authenticate.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.testimonial.authenticate.entity.Customers;

@Repository
public interface CustomersRepository extends JpaRepository<Customers, Integer> {
	@Query(value = "select * from customers where customername = :customerName", nativeQuery = true)
	public Optional<Customers> findByCustomerName(@Param("customerName") String customerName);

	@Query(value = "select * from customers where customeremail = :customerEmail", nativeQuery = true)
	public Optional<Customers> findByEmail(@Param("customerEmail") String customerEmail);
}
