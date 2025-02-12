import React from "react";
import "./features.css";
import "../bodyStyle.css"
import Navigation from "../nav-component/Navigation";

const Features = () => {
    const featuresList = [
        {
            category: "Testimonial Collection",
            features: [
                "Multiple Input Formats – Supports text, audio, and video testimonials.",
                "Customizable Submission Forms – Allows businesses to create branded testimonial forms.",
                "Automated Requests – Sends automated testimonial requests via email or SMS.",
            ],
        },
        {
            category: "Testimonial Management",
            features: [
                "Approval & Moderation – Businesses can review and approve testimonials before publishing.",
                "Tagging & Categorization – Organize testimonials based on product, service, or user type.",
                "Editing & Formatting – Allows minor edits to ensure clarity and professionalism.",
            ],
        },
        {
            category: "Display & Integration",
            features: [
                "Widgets & Embeds – Easily embed testimonials on websites via code snippets or plugins.",
                "Carousel & Grid Layouts – Different styles to showcase testimonials attractively.",
                "Social Media Sharing – Share testimonials directly on platforms like Facebook, LinkedIn, and Twitter.",
            ],
        },
        {
            category: "Video Testimonial Support",
            features: [
                "Direct Video Uploads – Customers can submit video testimonials directly from their devices.",
                "Integration with YouTube/Vimeo – Link external video platforms for seamless embedding.",
                "Automatic Transcription – Converts spoken testimonials into text for accessibility.",
            ],
        },
        {
            category: "Analytics & Insights",
            features: [
                "Engagement Tracking – See how many visitors interact with testimonials.",
                "Conversion Impact Analysis – Measure how testimonials influence leads and sales.",
                "SEO Optimization – Optimize testimonials with metadata for better search visibility.",
            ],
        },
        {
            category: "Customer Engagement & Trust Building",
            features: [
                "Star Ratings & Reviews – Collect star-based ratings along with testimonials.",
                "Verified Testimonials – Authenticate testimonials to prevent fake submissions.",
                "AI-Generated Summaries – AI-powered summaries to highlight key points.",
            ],
        },
        {
            category: "Multi-Platform Integration",
            features: [
                "Website Builders – Compatible with WordPress, Wix, Shopify, etc.",
                "CRM & Email Marketing – Integrate with HubSpot, Mailchimp, and Salesforce.",
                "Google Reviews & Trustpilot Sync – Pull and display testimonials from external sources.",
            ],
        },
    ];

    return (

        <>
            <Navigation />

            <div className="body-container">
                <div className="features-container">
                    <h2>Features</h2>
                    <div className="features-list">
                        {featuresList.map((section, index) => (
                            <div key={index} className="feature-category">
                                <h3>{section.category}</h3>
                                <ul>
                                    {section.features.map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Features;
