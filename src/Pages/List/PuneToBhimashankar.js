import { Button, Card } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const PuneToBhimashankar = () => {
  return (
    <>
      <div style={{ textAlign: 'center', maxWidth: '100%', margin: '0 auto', backgroundColor: '#f9f9f9', padding: '20px', fontFamily: "'Bad Script', cursive" }}>  
        <img style={{ maxWidth: '100%', height: '350px', display: 'block', margin: '0 auto', width: '100%' }} src="images/bhimashankar0.jpeg" alt=""/>
        <div style={{marginTop:'30px',marginBottom:'30px',backgroundColor:'orange',borderRadius:"50px",height:'50px',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <h1 style={{ color: '#333' }}>Pune to Bhimashankar Cab Service</h1>
        </div>
        <div className="newsletter" style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <div className="container">
            <div className="row" style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
              <Card className="col-md-4" style={{ maxWidth: '100%', marginBottom: '20px' }}>
                <img style={{ maxWidth: '100%', height: 'auto',width:'500px' }} src="images/bhimashankar1.jpeg" alt="" className="img-responsive"/>
              </Card>
              <div className="col-md-8" style={{ textAlign: '' }}>
                <h1>Introduction</h1>
                <p>Book your Pune to Bhimashankar round trip cab package at Just Rs. 3500 Including Toll. shreenath-krupa provides A/c, Non A/c, Economical, Sedan and Tempo Traveller</p>
                <p>shreenath-krupa travels provide the best car service, especially for traveling from Pune to Bhimashankar by Cab / Taxi and all you need to do is choose us for your travel. Book your tickets now at shreenath-krupa.com.</p>
                <p>Don’t hesitate to choose us for cab service as we are the best and we offer affordable and comfortable tour packages for our customers. The travel from Pune to Bhimashankar will be very much enjoyable and you would be attended by our supporting staff in a leisurely way. We have excellent cab service with good condition for the Pune to Bhimashankar trip with professionally well off trained drivers. You can choose both AC and Non AC cars of various models. Depending on your convenience and requirement you can choose the apt cab for you.</p>
              </div>
            </div>
            <div className="row" style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
              <div className="col-md-8" style={{ textAlign: 'left' }}>
                <h1>Explore various tourist spots in Bhimashankar</h1>
                <p>Bhimashankar is a famous pilgrimage center and a scenic hill station located near Pune. Explore the ancient Bhimashankar Temple, dedicated to Lord Shiva, which is one of the twelve Jyotirlingas in India.</p>
                <p>Enjoy trekking through the lush green forests of the Bhimashankar Wildlife Sanctuary, home to a variety of flora and fauna. Experience the serene beauty and spiritual aura of Bhimashankar during your trip from Pune.</p>
                <h1>Duration</h1>
                <p>The distance between Pune and Bhimashankar is approximately 110 km, and you can reach Bhimashankar from Pune within 3 to 4 hours by our well-maintained cabs. Enjoy a scenic drive through the picturesque landscapes of Maharashtra.</p>
              </div>
              <Card className="col-md-4" style={{ maxWidth: '100%', marginBottom: '20px' }}>
                <img style={{ maxWidth: '100%', height: 'auto',width:'500px' }} src="images/bhimashankar2.jpeg" alt="" className="img-responsive"/>
              </Card>
            </div>
            <h1>Location</h1>
            <p>Bhimashankar is situated in the Pune district of Maharashtra, India. It is nestled amidst the Sahyadri mountain ranges and is known for its natural beauty and religious significance. Experience the divine charm of Bhimashankar during your visit.</p>
            <h1>100% guaranteed super service</h1>
            <p>At shreenath-krupa Travels, customer satisfaction is our top priority. We are committed to providing a delightful travel experience to all our customers. With our reliable cab service, you can enjoy a hassle-free journey from Pune to Bhimashankar.</p>
            <h1>How are we different?</h1>
            <p>Choose from our wide range of luxurious and comfortable cabs at affordable prices. Whether you prefer a sedan, hatchback, or SUV, we have the perfect vehicle to suit your travel needs. Our well-trained drivers ensure a safe and enjoyable ride, allowing you to relax and enjoy the journey.</p>
            <h1>Book us now</h1>
            <p>Book your Pune to Bhimashankar cab package today and experience the convenience and comfort of traveling with shreenath-krupa Travels. Visit our website shreenath-krupa.com to make an online booking or contact us at +91 8485800099 for inquiries and assistance.</p>
            <b>Book your Pune to Bhimashankar Cab Package Now!</b>
            <h1>Pune to Bhimashankar Cab Service</h1>
            <b>Pune to Bhimashankar cab service | Pune to Bhimashankar taxi service | Book Pune to Bhimashankar cab service | pune to Bhimashankar taxi drop | pune to Bhimashankar tour package | pune to Bhimashankar cab rates | pune to Bhimashankar cab price | pune to Bhimashankar cabs | Pune to Bhimashankar Cab Round Trip</b>
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

export default PuneToBhimashankar;
