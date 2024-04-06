import { Button, Card } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Omkareshwar = () => {
  return (
    <>
      <div style={{ textAlign: 'center', maxWidth: '100%', margin: '0 auto', backgroundColor: '#f9f9f9', padding: '20px', fontFamily: "'Bad Script', cursive" }}>  
        <img style={{ maxWidth: '100%', height: '350px', display: 'block', margin: '0 auto', width: '100%' }} src="images/omkareshwar0.jpeg" alt=""/>
        <div style={{marginTop:'30px',marginBottom:'30px',backgroundColor:'orange',borderRadius:"50px",height:'50px',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <h1 style={{ color: '#333' }}>Pune to Omkareshwar Cab Service</h1>
        </div>
        <div className="newsletter" style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <div className="container">
            <div className="row" style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
              <Card className="col-md-4" style={{ maxWidth: '100%', marginBottom: '20px' }}>
                <img style={{ maxWidth: '100%', height: 'auto',width:'500px' }} src="images/omkareshwar1.jpeg" alt="" className="img-responsive"/>
              </Card>
              <div className="col-md-8" style={{ textAlign: '' }}>
                <h1>Introduction</h1>
                <p>Book your Pune to Omkareshwar round trip cab package at Just Rs. 6500 Including Toll. Shreenath-Krupa provides A/c, Non A/c, Economical, Sedan and Tempo Traveller</p>
                <p>Shreenath-Krupa Travels provide the best car service, especially for traveling from Pune to Omkareshwar by Cab / Taxi and all you need to do is choose us for your travel. Book your tickets now at Shreenath-Krupa.com.</p>
                <p>Don’t hesitate to choose us for cab service as we are the best and we offer affordable and comfortable tour packages for our customers. The travel from Pune to Omkareshwar will be very much enjoyable and you would be attended by our supporting staff in a leisurely way. We have excellent cab service with good condition for the Pune to Omkareshwar trip with professionally well off trained drivers. You can choose both AC and Non AC cars of various models. Depending on your convenience and requirement you can choose the apt cab for you.</p>
              </div>
            </div>
            <div className="row" style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
              <div className="col-md-8" style={{ textAlign: 'left' }}>
                <h1>Explore various tourist spots in Omkareshwar</h1>
                <p>Omkareshwar is a sacred island located on the Narmada River in Madhya Pradesh, India. It is known for its revered Omkareshwar Jyotirlinga Temple, dedicated to Lord Shiva. Other attractions in Omkareshwar include the Mamleshwar Temple, Siddhanath Temple, and Kedareshwar Temple.</p>
                <p>Discover the spiritual significance and architectural beauty of Omkareshwar while our cab service takes you to these holy sites. Immerse yourself in the divine ambiance and seek blessings from the almighty.</p>
                <h1>Duration</h1>
                <p>The distance between Pune and Omkareshwar is approximately 700 km, and you can reach Omkareshwar from Pune within 11 to 13 hours by our well-maintained cabs. Plan your trip conveniently and enjoy a comfortable journey with us.</p>
              </div>
              <Card className="col-md-4" style={{ maxWidth: '100%', marginBottom: '20px' }}>
                <img style={{ maxWidth: '100%', height: 'auto',width:'500px' }} src="images/omkareshwar2.jpeg" alt="" className="img-responsive"/>
              </Card>
            </div>
            <h1>Location</h1>
            <p>Omkareshwar is situated in the Khandwa district of Madhya Pradesh, India. It is one of the 12 Jyotirlinga shrines and is considered highly auspicious by devotees of Lord Shiva. Visit Omkareshwar to experience spirituality and serenity amidst nature.</p>
            <h1>100% guaranteed super service</h1>
            <p>At Shreenath-Krupa Travels, customer satisfaction is our top priority. We are committed to providing a delightful travel experience to all our customers. With our reliable cab service, you can enjoy a hassle-free journey from Pune to Omkareshwar.</p>
            <h1>How are we different?</h1>
            <p>Choose from our wide range of luxurious and comfortable cabs at affordable prices. Whether you prefer a sedan, hatchback, or SUV, we have the perfect vehicle to suit your travel needs. Our well-trained drivers ensure a safe and enjoyable ride, allowing you to relax and enjoy the scenic beauty of Omkareshwar.</p>
            <h1>Book us now</h1>
            <p>Book your Pune to Omkareshwar cab package today and embark on a memorable journey with Shreenath-Krupa Travels. Visit our website Shreenath-Krupa.com to make an online booking or contact us at +91 8485800099 for inquiries and assistance. Experience the convenience and comfort of traveling with us.</p>
            <b>Book your Pune to Omkareshwar Cab Package Now!</b>
            <h1>Pune to Omkareshwar Cab Service</h1>
            <b>Pune to Omkareshwar cab service | Pune to Omkareshwar taxi service | Book Pune to Omkareshwar cab service | pune to Omkareshwar taxi drop | pune to Omkareshwar tour package | pune to Omkareshwar cab rates | pune to Omkareshwar cab price | pune to Omkareshwar cabs | Pune to Omkareshwar Cab Round Trip</b>
          </div>
        </div>   
        <div className="footer-agile" style={{ backgroundColor: '#333', color: '#fff', padding: '20px', marginTop: '20px', borderRadius: '5px', fontFamily: "'Bad Script', cursive" }}>
          <div className="container">
            {/* Footer content */}
            <Button sx={{color:'white',fontSize:'30px'}}><Link to="/#book">Book Now</Link></Button>
          </div>
        </div> 
      </div>
    </>
  );
};

export default Omkareshwar;
