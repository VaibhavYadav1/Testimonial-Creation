# Testimonial-Creation

This project is developed as part of the CDAC curriculum.

## Backend Setup

Follow these steps to set up and run the backend services:

1. **Start the Eureka Server**:
   - Navigate to the `eurekaserver` directory.
   - Run the application to start the Eureka Server.

2. **Start the API Gateway**:
   - Navigate to the `api_gateway` directory.
   - Run the application to start the API Gateway.

3. **Start the Authentication Service**:
   - Navigate to the `authenticate` directory.
   - Run the application to start the Authentication Service.

4. **Start the Testimonials Service**:
   - Navigate to the `testimonials` directory.
   - Run the application to start the Testimonials Service.

**Service Ports**:

- Eureka Server: `http://localhost:8761`
- API Gateway: `http://localhost:4000`
- Authentication Service: `http://localhost:1000`
- Testimonials Service: `http://localhost:3000`

## Frontend Setup

To set up and run the frontend application:

1. **Install Dependencies**:
   - Open a terminal and navigate to the frontend project directory.
   - Run the following command to install the necessary dependencies:

     ```bash
     npm install
     ```

2. **Start the Frontend Application**:
   - After the dependencies are installed, start the application using:

     ```bash
     npm run dev
     ```

This will start the frontend development server.
