import React, { useState } from "react";
import "./Companies.css";
import Navigation from "../nav-component/Navigation";
import "../bodyStyle.css";

function Companies() {
  const companies = [
    {
      id: 1,
      name: "Google",
      description:
        "Google LLC is an American multinational technology company focusing on search engine technology, online advertising, cloud computing, AI, and consumer electronics.",
    },
    {
      id: 2,
      name: "Amazon",
      description:
        "Amazon.com, Inc. is an American multinational conglomerate focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence, with its retail platform being the largest online marketplace globally.",
    },
    {
      id: 3,
      name: "Microsoft",
      description:
        "Microsoft Corporation is an American multinational technology company that develops, manufactures, licenses, supports, and sells software, electronics, and personal computers, with its most famous product being the Windows operating system.",
    },
    {
      id: 4,
      name: "Apple",
      description:
        "Apple Inc. is an American multinational technology company known for designing and manufacturing consumer electronics, software, and services, including the iPhone, iPad, and Mac computers.",
    },
    {
      id: 5,
      name: "Bajaj Finserv",
      description:
        "Bajaj Finserv Limited is an Indian financial services company focusing on lending, asset management, and insurance.",
    },
    {
      id: 6,
      name: "Flipkart",
      description:
        "Flipkart is an Indian e-commerce company that provides an online marketplace for buyers and sellers, with a strong focus on consumer electronics and fashion.",
    },
  ];

  const [selectedCompany, setSelectedCompany] = useState(null);

  return (
    <>
      <Navigation />
      <div className="body-container">
        <div className="companies-container">
          <h2>Companies Associated with us</h2>

          <div className="companies-content">
            <ul className="company-list">
              {companies.map((company) => (
                <li
                  key={company.id}
                  onClick={() => setSelectedCompany(company)}
                  className="company-item"
                >
                  {company.name}
                </li>
              ))}
            </ul>

            {selectedCompany && (
              <div className="company-details">
                <h3>{selectedCompany.name}</h3>
                <p>{selectedCompany.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Companies;
