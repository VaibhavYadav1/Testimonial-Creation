import React, { useState } from 'react';
import "./Companies.css";
import Navigation from '../nav-component/Navigation';
import "../bodyStyle.css"

function Companies() {
    const companies = [
        { id: 1, name: 'Google', description: 'Microsoft Corporation is an American multinational technology company that develops, manufactures, licenses, supports, and sells software, electronics, and personal computers, with its most famous product being the Windows operating system.' },
        { id: 2, name: 'Amazon', description: 'Amazon.com, Inc. is an American multinational conglomerate focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence, with its retail platform being the largest online marketplace globally.' },
        { id: 3, name: 'Microsoft', description: 'Microsoft Corporation is an American multinational technology company that develops, manufactures, licenses, supports, and sells software, electronics, and personal computers, with its most famous product being the Windows operating system.' },
        { id: 4, name: 'Apple', description: 'Apple Inc. is an American multinational technology company known for designing and manufacturing consumer electronics, software, and services, including the iPhone, iPad, and Mac computers' },
        { id: 5, name: 'Bajaj Finserv', description: 'Finance company providing financial services.' },
        { id: 6, name: 'Flipkart', description: 'E-commerce platform connecting buyers and sellers.' },
    ];

    const [selectedCompany, setSelectedCompany] = useState(null);

    const handleSelectCompany = (company) => {
        setSelectedCompany(company);
    };

    return (

        <>
            <Navigation />
            <div className="body-container">

                <div className="companies-container">
                    <h2>Companies Associated with us</h2>

                    <div className="companies-list">
                        <ul className="company-list">
                            {companies.map((company) => (
                                <li
                                    key={company.id}
                                    onClick={() => handleSelectCompany(company)}
                                    className="company-item"
                                >
                                    {company.name}
                                </li>
                            ))}
                        </ul>

                        {selectedCompany && (
                            <div className="company-details-container">
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