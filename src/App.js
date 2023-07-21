import React from 'react';
import backgroundImage from '../src/BackgroundPic.jpeg';
import './LandingPage.css';
import GetInvolved from './GetInvolved';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <section
          id="about"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            textAlign: 'left',
            paddingLeft: '10px',
          }}
        >
          <div className="container">
            <h1 style={{ color: 'gold', fontWeight: 'bold', fontSize: '4rem' }}>
              FarmDirect:
              <br />
              Connecting 
              <br />
              Farmers and Consumers
            </h1>
            <p style={{ color: 'black', fontWeight: 'bold', fontSize: '2rem' }}>
              Get fresh, local produce delivered right to your door with FarmDirect.
              <br />
              Our platform empowers farmers to connect with consumers and sell their products directly, ensuring quality and freshness in every bite.
            </p>
          </div>
        </section>
      </header>

      <section id="support-local" className="support-local">
        <div className="container">
          <h1>Support Local Agriculture</h1>
        </div>
      </section>

      <section id="benefits" className="benefits">
        <div className="container">
          <h2>Community Benefits</h2>
          <p>
            By supporting local farmers, you're investing in your community and promoting sustainable agriculture practices.
          </p>
        </div>
      </section>

      <section id="farm-to-table" className="farm-to-table">
        <div className="container">
          <h2>Farm-to-Table</h2>
          <p>
            Our products go straight from farmers to your table, cutting out the middleman and ensuring the freshest produce possible.
          </p>
        </div>
      </section>

      <section id="health" className="health">
        <div className="container">
          <h2>Health and Nutrition</h2>
          <p>
            Locally-grown produce is packed with more nutrients and flavor, making it a healthy and tasty addition to your diet.
          </p>
        </div>
      </section>

      <section id="Benefits-of-Farm" className="Benefits-of-Farm">
        <div className="container">
        <h2 style={{ color: 'black', fontWeight: 'bold', fontSize: '2rem' }}>
            The Benefits of FarmDirect 
            </h2>
          <p>
            For Farmers
          </p>
          <p>
          
            Direct sales
            <br/>
           Increased profits 
           <br />
           Customer relationships
         
          </p>
          <p> 
            For Consumers
          </p>
          <p>
          
               Freshness guarantee 
               <br />
               Quality control
               <br />
              Convenience
          
          </p>
        </div>
      </section>

      <section id="Find-Farmer" className="Find-Farmer">
        <div className="container">
        <h2 style={{ color: 'black', fontWeight: 'bold', fontSize: '2rem' }}>
            Find Your Farmer 
            </h2>
          <p>
            With FarmDirect, you can easily locate farmers in your area
            <br />
             and get to know them and thier practices before you order.
             <br />
             Search by Location, Product, or Farmer name
          </p>
          </div>
          <div class="image-container">
         <img src={require('../src/Farmer.png')} alt="Image" style={{ width: '400px', height: 'auto' }} />

         </div>
          </section>
          

<section id="how-it-works" className="how-it-works-section">
  <h2>How It Works</h2>
  <div className="step-container">
    <div className="step">
    <img src={require('../src/ChooseProduct.png')} alt="Image" style={{ width: '400px', height: 'auto' }} />
      <p>Step 1: Choose your products</p>
    </div>
    <div className="step">
    <img src={require('../src/Cart.jpg')} alt="Image" style={{ width: '400px', height: 'auto' }} />
      <p>Step 2: Place your order</p>
    </div>
    <div className="step">
    <img src={require('../src/DeliveryVan.jpeg')} alt="Image" style={{ width: '400px', height: 'auto' }} />
      <p>Step 3: Enjoy fresh delivery</p>
    </div>
  </div>
</section>

<section id="GetInvolved" ClassName= "GetInvolved">
  < GetInvolved />
</section>



      <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2>Contact FarmDirect</h2>
        <p>Get in touch with us to learn more or discuss partnership opportunities.</p>
        <div className="contact-details">
          <p>Email: <a href="mailto:info.farmdirect@gmail.com">info.farmdirect@gmail.com</a></p>
          <p>Phone: <a href="tel:+23481162462618">08162466218</a></p>
        </div>
      </div>
    </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} FarmDirect. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;