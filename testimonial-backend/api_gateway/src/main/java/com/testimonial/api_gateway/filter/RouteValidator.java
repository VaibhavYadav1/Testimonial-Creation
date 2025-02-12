package com.testimonial.api_gateway.filter;

import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;

import java.util.*;
import java.util.function.Predicate;

@Component
public class RouteValidator {

    public static final List<String> openApiEndpoints = List.of(
            "/auth/user/register", 
            "/auth/user/token",
            "/auth/customer/register", 
            "/auth/customer/token", 
            "/eureka"
        );

	public Predicate<ServerHttpRequest> isSecured = request -> openApiEndpoints.stream()
			.noneMatch(uri -> request.getURI().getPath().startsWith(uri)); // contains(uri)

}
