package com.testimonial.testimonials.dto;

public class CustomersDto {

    private Integer customerId;
    private String customerName;
    private String customerEmail;
    private String password;

    public CustomersDto() {
        this.customerName = "";
        this.customerEmail = "";
        this.password = "";
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

    public String getCustomerEmail() {
        return customerEmail;
    }

    public void setCustomerEmail(String customerEmail) {
        this.customerEmail = customerEmail;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    // Consider adding a toString() method for easier debugging
    @Override
    public String toString() {
        return "CustomersDto{" +
                "customerId=" + customerId +
                ", customerName='" + customerName + '\'' +
                ", customerEmail='" + customerEmail + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}