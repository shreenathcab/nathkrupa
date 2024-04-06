import { Button, Card } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const PuneToTrimbakeshwar = () => {
  return (
    <>
      <div style={{ textAlign: 'center', maxWidth: '100%', margin: '0 auto', backgroundColor: '#f9f9f9', padding: '20px', fontFamily: "'Bad Script', cursive" }}>  
        <img style={{ maxWidth: '100%', height: '350px', display: 'block', margin: '0 auto', width: '100%' }} src="images/tri.jpeg" alt=""/>
        <div style={{marginTop:'30px',marginBottom:'30px',backgroundColor:'orange',borderRadius:"50px",height:'50px',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <h1 style={{ color: '#333' }}>Pune to Trimbakeshwar Cab Service</h1>
        </div>
        <div className="newsletter" style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <div className="container">
            <div className="row" style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
              <Card className="col-md-4" style={{ maxWidth: '100%', marginBottom: '20px' }}>
                <img style={{ maxWidth: '100%', height: 'auto',width:'500px' }} src="images/tri1.jpeg" alt="" className="img-responsive"/>
              </Card>
              <div className="col-md-8" style={{ textAlign: '' }}>
                <h1>Introduction</h1>
                <p>Book your Pune to Trimbakeshwar round trip cab package at Just Rs. 4500 Including Toll. shreenath-krupa provides A/c, Non A/c, Economical, Sedan and Tempo Traveller</p>
                <p>shreenath-krupa travels provide the best car service, especially for traveling from Pune to Trimbakeshwar by Cab / Taxi and all you need to do is choose us for your travel. Book your tickets now at shreenath-krupa.com.</p>
                <p>Don’t hesitate to choose us for cab service as we are the best and we offer affordable and comfortable tour packages for our customers. The travel from Pune to Trimbakeshwar will be very much enjoyable and you would be attended by our supporting staff in a leisurely way. We have excellent cab service with good condition for the Pune to Trimbakeshwar trip with professionally well off trained drivers. You can choose both AC and Non AC cars of various models. Depending on your convenience and requirement you can choose the apt cab for you.</p>
              </div>
            </div>
            <div className="row" style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
              <div className="col-md-8" style={{ textAlign: 'left' }}>
                <h1>Explore various tourist spots in Trimbakeshwar</h1>
                <p>Trimbakeshwar, located near Nashik in Maharashtra, is famous for the ancient Trimbakeshwar Temple, one of the twelve Jyotirlingas in India. Besides its religious significance, Trimbakeshwar also offers scenic beauty and tranquil surroundings.</p>
                <p>Visit the Trimbakeshwar Temple, explore nearby attractions such as the Brahmagiri Hill and Gangadwar, and immerse yourself in the spiritual atmosphere of this sacred town.</p>
                <h1>Duration</h1>
                <p>The distance between Pune and Trimbakeshwar is approximately 210 km, and you can reach Trimbakeshwar from Pune within 4 to 5 hours by our well-maintained cabs. Enjoy a comfortable and scenic journey through the picturesque landscapes of Maharashtra.</p>
              </div>
              <Card className="col-md-4" style={{ maxWidth: '100%', marginBottom: '20px' }}>
                <img style={{ maxWidth: '100%', height: 'auto',width:'500px' }} src="images/tri2.jpeg" alt="" className="img-responsive"/>
              </Card>
            </div>
            <h1>Location</h1>
            <p>Trimbakeshwar is situated in the Nashik district of Maharashtra, India. It is nestled amidst the lush greenery of the Western Ghats and is known for its spiritual significance and natural beauty.</p>
            <h1>100% guaranteed super service</h1>
            <p>At shreenath-krupa Travels, customer satisfaction is our top priority. We are committed to providing a delightful travel experience to all our customers. With our reliable cab service, you can enjoy a hassle-free journey from Pune to Trimbakeshwar.</p>
            <h1>How are we different?</h1>
            <p>Choose from our wide range of luxurious and comfortable cabs at affordable prices. Whether you prefer a sedan, hatchback, or SUV, we have the perfect vehicle to suit your travel needs. Our well-trained drivers ensure a safe and enjoyable ride, allowing you to relax and enjoy the journey.</p>
            <h1>Book us now</h1>
            <p>Book your Pune to Trimbakeshwar cab package today and experience the convenience and comfort of traveling with shreenath-krupa Travels. Visit our website shreenath-krupa.com to make an online booking or contact us at +91 8485800099 for inquiries and assistance.</p>
            <b>Book your Pune to Trimbakeshwar Cab Package Now!</b>
            <h1>Pune to Trimbakeshwar Cab Service</h1>
            <b>Pune to Trimbakeshwar cab service | Pune to Trimbakeshwar taxi service | Book Pune to Trimbakeshwar cab service | pune to Trimbakeshwar taxi drop | pune to Trimbakeshwar tour package | pune to Trimbakeshwar cab rates | pune to Trimbakeshwar cab price | pune to Trimbakeshwar cabs | Pune to Trimbakeshwar Cab Round Trip</b>
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

export default PuneToTrimbakeshwar;
