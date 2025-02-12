package com.testimonial.authenticate;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
@EnableDiscoveryClient
public class AuthenticateApplication {	
	
	private final JdbcTemplate jdbcTemplate;

    public AuthenticateApplication(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

	public static void main(String[] args) {
		SpringApplication.run(AuthenticateApplication.class, args);
	}
	
	@Bean
    public CommandLineRunner resetAutoIncrement() {
        return args -> {
            jdbcTemplate.execute("ALTER TABLE users AUTO_INCREMENT = 1000");
            jdbcTemplate.execute("ALTER TABLE customers AUTO_INCREMENT = 2000");
        };
    }

}
