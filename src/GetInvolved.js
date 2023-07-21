import React from 'react';

const GetInvolved = () => {
  return (
    <section className="get-involved-section" style={{ backgroundColor: 'yellowgreen', padding: '50px' }}>
      <div className="get-involved-content">
        <h2>Get Involved</h2>
        <p>Join the FarmDirect community and help support local agriculture.</p>
      </div>

      <div className="get-involved-subsection">
        <h3>For Farmers</h3>
      
          <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSe4VsMfTZbLZx2aI7rbRr5j3Vtbn940JBcwAl-5kuh7MdATKw/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">Join our Platform</a>
          </p>
          <p>Connect with Consumers </p>
          <p>Grow your Business </p>
        
      </div>

      <div className="get-involved-subsection">
        <h3>For Consumers</h3>
        
          <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSe8yDxYLdqDyTqJ0zFvdXdMhyxyM8pKMOOqmRTaPyCHsXMqhA/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">Sign up for Updates</a> 
        </p>
          <p>Share with your Friends</p>
          <p>Leave a Review</p>
        
      </div>
    </section>
  );
};

export default GetInvolved;
