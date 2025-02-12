package com.testimonial.authenticate.config;

import com.testimonial.authenticate.entity.Customers;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;


public class CustomCustomerDetails implements UserDetails {

	    private String customerName;
	    private String password;

	    public CustomCustomerDetails(Customers customer) {
	        this.customerName = customer.getCustomerName();
	        this.password = customer.getPassword();
	    }

	    @Override
	    public Collection<? extends GrantedAuthority> getAuthorities() {
	    	return Collections.emptyList();
	    }

	    @Override
	    public String getPassword() {
	        return password;
	    }

	    @Override
	    public String getUsername() {
	        return customerName;
	    }

	    @Override
	    public boolean isAccountNonExpired() {
	        return true;
	    }

	    @Override
	    public boolean isAccountNonLocked() {
	        return true;
	    }

	    @Override
	    public boolean isCredentialsNonExpired() {
	        return true;
	    }

	    @Override
	    public boolean isEnabled() {
	        return true;
	    }
	}


