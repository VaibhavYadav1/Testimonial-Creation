package com.testimonial.testimonials.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.testimonial.testimonials.dto.TestimonialUserDTO;
import com.testimonial.testimonials.entity.Testimonials;

public interface TestimonialsRepository extends JpaRepository<Testimonials, Integer> {

	@Query(value = "SELECT t.testimonialid, t.userid, t.customerid, c.customername, t.customerabout, t.rating, t.createdat, t.description, t.isvisible "
			+ "FROM testimonials t " + "JOIN customers c ON t.customerid = c.customerid "
			+ "JOIN users u ON t.userid = u.userid " + "WHERE u.username = :username", nativeQuery = true)
	List<Object[]> getAllTestimonialsByUser(@Param("username") String username);

	@Query(value = "SELECT t FROM testimonials t WHERE t.userid =:userId", nativeQuery = true)
	List<Testimonials> findByUserId(@Param("userId") Integer userId);

	// Customer
	@Query(value = "SELECT t.testimonialid, t.userid, t.customerid, c.customername, t.customerabout, t.rating, t.createdat, t.description, t.isvisible "
			+ "FROM testimonials t " + "JOIN customers c ON t.customerid = c.customerid "
			+ "WHERE t.customerid = :customerId", nativeQuery = true)
	List<Object[]> getAllTestimonialsByCustomerId(@Param("customerId") Integer customerId);

}
