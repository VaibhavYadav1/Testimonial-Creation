package com.testimonial.testimonials.service;

import java.security.NoSuchAlgorithmException;
import java.util.List;

import com.testimonial.testimonials.dto.TestimonialUserDTO;
import com.testimonial.testimonials.dto.TestimonialsDTO;

public interface TestimonialsService {

	public boolean addTestimonial(TestimonialsDTO dto);

	public TestimonialsDTO getTestimonialDetails(Integer testimonialId);

	public List<TestimonialsDTO> allTestimonials();

	public boolean updateTestimonials(Integer testimonialId, TestimonialsDTO dto);

	public boolean deletetestimonials(Integer testimonialId);


	public List<TestimonialUserDTO> getTestimonialsByUser(String username, String token);

	public List<TestimonialUserDTO> getTestimonialsByCustomerId(Integer customerId, String token); 

}
