package com.testimonial.testimonials.controllers;

import java.security.NoSuchAlgorithmException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.testimonial.testimonials.dto.TestimonialUserDTO;
import com.testimonial.testimonials.dto.TestimonialsDTO;
import com.testimonial.testimonials.service.TestimonialsService;

@RestController
@RequestMapping("/testimonials")
public class TestimonialsControllers {

	@Autowired
	TestimonialsService testimonialsService;

	@PostMapping("/create")
	public boolean addCustomers(@RequestBody TestimonialsDTO dto) {
		return testimonialsService.addTestimonial(dto);
	}

	@GetMapping("/getAll")
	public List<TestimonialsDTO> allCustomers() {
		return testimonialsService.allTestimonials();
	}

	@GetMapping("/getDetails/{id}")
	public TestimonialsDTO getCustomerDetails(@PathVariable("id") Integer testimonialId) {
		return testimonialsService.getTestimonialDetails(testimonialId);
	}

	@PutMapping("/updateDetails/{id}")
	public boolean updateCustomerDetails(@PathVariable("id") Integer testimonialId, @RequestBody TestimonialsDTO dto)
			throws NoSuchAlgorithmException {
		return testimonialsService.updateTestimonials(testimonialId, dto);
	}

	@DeleteMapping("/deleteDetails/{id}")
	public boolean deleteUser(@PathVariable("id") Integer testimonialId) {
		return testimonialsService.deletetestimonials(testimonialId);
	}

//	@GetMapping("/getAllByUser/{username}")
//	public List<TestimonialsDTO> getAllTestimonialsByUser(@PathVariable("username") String username) {
//		return testimonialsService.getTestimonialsByUser(username);
//	}
	
//	@GetMapping("/getAllByUser/{username}")
//	public List<TestimonialUserDTO> getAllTestimonialsByUser(@PathVariable("username") String username) {
//		return testimonialsService.getTestimonialsByUser(username);
//	}
	
	@GetMapping("/getAllByUser/{username}")
	public List<TestimonialUserDTO> getAllTestimonialsByUser(
	    @PathVariable("username") String username,
	    @RequestHeader("Authorization") String token) {
	    System.out.println("Username: " + username); // Debugging
	    System.out.println("Token: " + token); // Debugging
	    return testimonialsService.getTestimonialsByUser(username, token);
	}
	
	@GetMapping("/getAllByCustomerId/{customerId}")
	public List<TestimonialUserDTO> getAllTestimonialsByCustomerId(
	    @PathVariable("customerId") Integer customerId,
	    @RequestHeader("Authorization") String token) {
	    return testimonialsService.getTestimonialsByCustomerId(customerId, token);
	}
	
//	@GetMapping("/getAllByUserId/{Id}")
//	public List<TestimonialsDTO> getAllTestimonialsByUser(@PathVariable("id") Integer userId) {
//		return testimonialsService.getTestimonialsByUserId(userId);
//	}
}
