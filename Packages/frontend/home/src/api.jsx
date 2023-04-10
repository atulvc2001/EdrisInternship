import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Api() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3000/api')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Data from Backend API:</h1>
      {data.customer && (
        <div>
          <h2>Customer:</h2>
          <ul>
            <li>Name: {data.customer.customerName}</li>
            <li>Contact Name: {data.customer.contactName}</li>
            <li>Phone: {data.customer.phone}</li>
            <li>Email: {data.customer.emailID}</li>
          </ul>
        </div>
      )}
      {data.enquiry && (
        <div>
          <h2>Enquiry:</h2>
          <ul>
            <li>Country: {data.enquiry.country}</li>
            <li>Enquiry Reg Date: {data.enquiry.enquiryRegDate}</li>
            <li>Currency: {data.enquiry.currency}</li>
            <li>Project Name: {data.enquiry.projectName}</li>
            <li>Market Type: {data.enquiry.marketType}</li>
          </ul>
        </div>
      )}
      {data.certification && (
        <div>
          <h2>Certification:</h2>
          <ul>
            <li>Drawing Requirement: {data.certification.drawingRequirement}</li>
            <li>Inspection Organisation: {data.certification.inspectionOrganisation}</li>
            <li>ITP Requirement: {data.certification.itpRequirement}</li>
            <li>Inspection Type: {data.certification.inspectionType}</li>
            <li>Certification: {data.certification.certification}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Api;