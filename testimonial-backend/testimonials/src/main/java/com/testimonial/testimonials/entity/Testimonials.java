package com.testimonial.testimonials.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "testimonials")
@DynamicInsert
@DynamicUpdate
public class Testimonials {

	@Id
	@Column(name = "testimonialid")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer testimonialId;

	@Column(name = "rating")
	private Integer rating;

	@Column(name = "userid")
	private Integer userId;

	@Column(name = "customerid")
	private Integer customerId;

	@Column(name = "description")
	private String description;

	@Column(name = "customerabout")
	private String customerAbout;

	@Column(name = "createdat")
	@Temporal(TemporalType.TIMESTAMP)
	private LocalDateTime createdAt;

	@Column(name = "isvisible")
	private Boolean isVisible;

	public Testimonials() {
		super();
	}

	public Integer getTestimonialId() {
		return testimonialId;
	}

	public void setTestimonialId(Integer testimonialId) {
		this.testimonialId = testimonialId;
	}

	public Integer getRating() {
		return rating;
	}

	public void setRating(Integer rating) {
		this.rating = rating;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public Integer getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Integer customerId) {
		this.customerId = customerId;
	}


	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getCustomerAbout() {
		return customerAbout;
	}

	public void setCustomerAbout(String customerAbout) {
		this.customerAbout = customerAbout;
	}

		public LocalDateTime getCreatedAt() {
	        return createdAt;
	    }
	
	public void setCreatedAt(LocalDateTime createdAt) {
	        this.createdAt = createdAt;
	    }

	public Boolean getIsVisible() {
		return isVisible;
	}

	public void setIsVisible(Boolean isVisible) {
		this.isVisible = isVisible;
	}

	@PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
    }

}
