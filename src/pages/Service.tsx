import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Our Services</h2>
      <p>We offer the following services:</p>
      <ul className="list-disc ml-6">
        <li>Fast and reliable food delivery</li>
        <li>Customizable menu options</li>
        <li>Excellent customer support</li>
        {/* Add more services as needed */}
      </ul>
    </div>
  );
};

export default Services;
