CREATE DATABASE testimonialsdb;

USE testimonialsdb;

CREATE TABLE users (
    userid INT AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    domain VARCHAR(255) NOT NULL,
    
    CONSTRAINT pk_userid PRIMARY KEY (userid)
);
    
CREATE TABLE customers (
    customerid INT AUTO_INCREMENT,
    customername VARCHAR(255) NOT NULL UNIQUE,
    customeremail VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    
    CONSTRAINT pk_customer_id PRIMARY KEY (customerid)
);
   

CREATE TABLE testimonials (
	testimonialid INT AUTO_INCREMENT,
    userid INT,
    rating INT DEFAULT 0,
    customerid INT,
    customerabout VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    createdat DATETIME NOT NULL,
    isvisible BOOL,
    
    CONSTRAINT pk_testimonial_id PRIMARY KEY (testimonialid),
    
    CONSTRAINT fk_customer_id FOREIGN KEY (customerid)
        REFERENCES customers (customerid)
        ON DELETE CASCADE,
        
    CONSTRAINT fk_user_id FOREIGN KEY (userid)
        REFERENCES users (userid)
        ON DELETE CASCADE
);

ALTER TABLE users AUTO_INCREMENT = 1000;
ALTER TABLE customers AUTO_INCREMENT = 2000;
ALTER TABLE testimonials AUTO_INCREMENT = 3000;