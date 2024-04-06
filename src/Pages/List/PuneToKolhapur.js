import { Button, Card } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const PuneToKolhapur = () => {
  return (
    <>
      <div style={{ textAlign: 'center', maxWidth: '100%', margin: '0 auto', backgroundColor: '#f9f9f9', padding: '20px', fontFamily: "'Bad Script', cursive" }}>  
        <img style={{ maxWidth: '100%', height: '350px', display: 'block', margin: '0 auto', width: '100%' }} src="images/kolhapur0.jpeg" alt=""/>
        <div style={{marginTop:'30px',marginBottom:'30px',backgroundColor:'orange',borderRadius:"50px",height:'50px',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <h1 style={{ color: '#333' }}>Pune to Kolhapur Cab Service</h1>
        </div>
        <div className="newsletter" style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <div className="container">
            <div className="row" style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
              <Card className="col-md-4" style={{ maxWidth: '100%', marginBottom: '20px' }}>
                <img style={{ maxWidth: '100%', height: 'auto',width:'500px' }} src="images/kolhapur1.jpeg" alt="" className="img-responsive"/>
              </Card>
              <div className="col-md-8" style={{ textAlign: '' }}>
                <h1>Introduction</h1>
                <p>Book your Pune to Kolhapur round trip cab package at Just Rs. 4500 Including Toll. shreenath-krupa provides A/c, Non A/c, Economical, Sedan and Tempo Traveller</p>
                <p>shreenath-krupa travels provide the best car service, especially for traveling from Pune to Kolhapur by Cab / Taxi and all you need to do is choose us for your travel. Book your tickets now at shreenath-krupa.com.</p>
                <p>Don’t hesitate to choose us for cab service as we are the best and we offer affordable and comfortable tour packages for our customers. The travel from Pune to Kolhapur will be very much enjoyable and you would be attended by our supporting staff in a leisurely way. We have excellent cab service with good condition for the Pune to Kolhapur trip with professionally well off trained drivers. You can choose both AC and Non AC cars of various models. Depending on your convenience and requirement you can choose the apt cab for you.</p>
              </div>
            </div>
            <div className="row" style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
              <div className="col-md-8" style={{ textAlign: 'left' }}>
                <h1>Explore various tourist spots in Kolhapur</h1>
                <p>Kolhapur, located in the state of Maharashtra, is renowned for its rich cultural heritage and historical significance. Explore iconic landmarks such as the Mahalaxmi Temple, Rankala Lake, and New Palace.</p>
                <p>Discover the culinary delights of Kolhapur, famous for its spicy cuisine and delectable street food. Don't miss the opportunity to indulge in Kolhapuri specialties like Misal Pav and Tambada Rassa.</p>
                <h1>Duration</h1>
                <p>The distance between Pune and Kolhapur is approximately 240 km, and you can reach Kolhapur from Pune within 4 to 5 hours by our well-maintained cabs. Enjoy a comfortable and scenic journey through the picturesque landscapes of Maharashtra.</p>
              </div>
              <Card className="col-md-4" style={{ maxWidth: '100%', marginBottom: '20px' }}>
                <img style={{ maxWidth: '100%', height: 'auto',width:'500px' }} src="images/kolhapur2.jpeg" alt="" className="img-responsive"/>
              </Card>
            </div>
            <h1>Location</h1>
            <p>Kolhapur is located in the southwestern part of Maharashtra, India. It is known for its cultural heritage, religious significance, and vibrant festivals. Experience the charm and hospitality of Kolhapur during your visit.</p>
            <h1>100% guaranteed super service</h1>
            <p>At shreenath-krupa Travels, customer satisfaction is our top priority. We are committed to providing a delightful travel experience to all our customers. With our reliable cab service, you can enjoy a hassle-free journey from Pune to Kolhapur.</p>
            <h1>How are we different?</h1>
            <p>Choose from our wide range of luxurious and comfortable cabs at affordable prices. Whether you prefer a sedan, hatchback, or SUV, we have the perfect vehicle to suit your travel needs. Our well-trained drivers ensure a safe and enjoyable ride, allowing you to relax and enjoy the journey.</p>
            <h1>Book us now</h1>
            <p>Book your Pune to Kolhapur cab package today and experience the convenience and comfort of traveling with shreenath-krupa Travels. Visit our website shreenath-krupa.com to make an online booking or contact us at +91 8485800099 for inquiries and assistance.</p>
            <b>Book your Pune to Kolhapur Cab Package Now!</b>
            <h1>Pune to Kolhapur Cab Service</h1>
            <b>Pune to Kolhapur cab service | Pune to Kolhapur taxi service | Book Pune to Kolhapur cab service | pune to Kolhapur taxi drop | pune to Kolhapur tour package | pune to Kolhapur cab rates | pune to Kolhapur cab price | pune to Kolhapur cabs | Pune to Kolhapur Cab Round Trip</b>
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

export default PuneToKolhapur;
