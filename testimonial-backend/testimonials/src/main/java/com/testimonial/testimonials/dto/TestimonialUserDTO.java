package com.testimonial.testimonials.dto;

import java.time.LocalDateTime;

public class TestimonialUserDTO {
    private Integer testimonialId;
    private Integer userId;
    private Integer customerId;
    private String customerName;
    private String customerAbout;
    private Integer rating;
    private LocalDateTime createdAt;
    private String description;
    private Boolean isVisible;
    private UsersDto user;
    private CustomersDto customer;

    // Getters and Setters
    public Integer getTestimonialId() {
        return testimonialId;
    }

    public void setTestimonialId(Integer testimonialId) {
        this.testimonialId = testimonialId;
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

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCustomerAbout() {
        return customerAbout;
    }

    public void setCustomerAbout(String customerAbout) {
        this.customerAbout = customerAbout;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Boolean getIsVisible() {
        return isVisible;
    }

    public void setIsVisible(Boolean isVisible) {
        this.isVisible = isVisible;
    }

    public UsersDto getUser() {
        return user;
    }

    public void setUser(UsersDto user) {
        this.user = user;
    }

    public CustomersDto getCustomer() {
        return customer;
    }

    public void setCustomer(CustomersDto customer) {
        this.customer = customer;
    }
}