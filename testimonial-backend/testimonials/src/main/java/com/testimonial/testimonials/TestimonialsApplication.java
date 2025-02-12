package com.testimonial.testimonials;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
//import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.client.RestTemplate;

//@SpringBootApplication(scanBasePackages = {"com.testimonial.testimonials.controllers",
//"com.testimonial.testimonials.service"})
//@EntityScan(basePackages = {"com.testimonial.testimonials.entity"})
//@EnableJpaRepositories(basePackages = {"com.testimonial.testimonials.repository"})
@SpringBootApplication
@EnableDiscoveryClient
public class TestimonialsApplication {
	
	private final JdbcTemplate jdbcTemplate;

    public TestimonialsApplication(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    
    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }


	public static void main(String[] args) {
		SpringApplication.run(TestimonialsApplication.class, args);
	}
	
	@Bean
    public CommandLineRunner resetAutoIncrement() {
        return args -> {
            jdbcTemplate.execute("ALTER TABLE testimonials AUTO_INCREMENT = 3000");
        };
    }

}
