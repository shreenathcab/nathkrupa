import { Button, Card } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const PuneToAshtavinayak = () => {
  return (
    <>
      <div style={{ textAlign: 'center', maxWidth: '100%', margin: '0 auto', backgroundColor: '#f9f9f9', padding: '20px', fontFamily: "'Bad Script', cursive" }}>  
        <img style={{ maxWidth: '100%', height: '350px', display: 'block', margin: '0 auto', width: '100%' }} src="images/ashtavinayak0.jpeg" alt=""/>
        <div style={{marginTop:'30px',marginBottom:'30px',backgroundColor:'orange',borderRadius:"50px",height:'50px',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <h1 style={{ color: '#333' }}>Pune to Ashtavinayak Cab Service</h1>
        </div>
        <div className="newsletter" style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <div className="container">
            <div className="row" style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
              <Card className="col-md-4" style={{ maxWidth: '100%', marginBottom: '20px' }}>
                <img style={{ maxWidth: '100%', height: 'auto',width:'500px' }} src="images/ashtavinayak1.jpeg" alt="" className="img-responsive"/>
              </Card>
              <div className="col-md-8" style={{ textAlign: '' }}>
                <h1>Introduction</h1>
                <p>Book your Pune to Ashtavinayak round trip cab package at Just Rs. 5000 Including Toll. shreenath-krupa provides A/c, Non A/c, Economical, Sedan and SUV.</p>
                <p>shreenath-krupa travels provide the best car service, especially for traveling from Pune to Ashtavinayak by Cab / Taxi and all you need to do is choose us for your travel. Book your tickets now at shreenath-krupa.com.</p>
                <p>Don’t hesitate to choose us for cab service as we are the best and we offer affordable and comfortable tour packages for our customers. The travel from Pune to Ashtavinayak will be very much enjoyable and you would be attended by our supporting staff in a leisurely way. We have excellent cab service with good condition for the Pune to Ashtavinayak trip with professionally well off trained drivers. You can choose both AC and Non AC cars of various models. Depending on your convenience and requirement you can choose the apt cab for you.</p>
              </div>
            </div>
            <div className="row" style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
              <div className="col-md-8" style={{ textAlign: 'left' }}>
                <h1>Explore various tourist spots in Ashtavinayak</h1>
                <p>Discover the famous Ashtavinayak temples dedicated to Lord Ganesha, each located in different regions around Pune. Visit the eight sacred temples and seek the blessings of Lord Ganesha.</p>
                <p>Embark on a spiritual journey to Ashtavinayak and explore the religious significance of each temple. Witness the beautiful architecture and serene surroundings of these ancient temples.</p>
                <h1>Duration</h1>
                <p>The distance between Pune and Ashtavinayak is approximately 200 km, and you can reach Ashtavinayak from Pune within 6 to 7 hours by our well-maintained cabs. Enjoy a comfortable and divine journey to these sacred temples.</p>
              </div>
              <Card className="col-md-4" style={{ maxWidth: '100%', marginBottom: '20px' }}>
                <img style={{ maxWidth: '100%', height: 'auto',width:'500px' }} src="images/ashtavinayak2.jpeg" alt="" className="img-responsive"/>
              </Card>
            </div>
            <h1>Location</h1>
            <p>Ashtavinayak temples are located in various regions around Pune, Maharashtra, making it an ideal pilgrimage destination for devotees. Plan your trip to Ashtavinayak and explore the cultural heritage and religious significance of these temples.</p>
            <h1>100% guaranteed super service</h1>
            <p>At shreenath-krupa Travels, we prioritize customer satisfaction and strive to provide top-notch cab services for your travel needs. With our reliable and efficient service, you can enjoy a hassle-free journey from Pune to Ashtavinayak.</p>
            <h1>How are we different?</h1>
            <p>Choose from our wide range of luxurious and comfortable cabs at affordable prices. Whether you prefer a sedan, hatchback, or SUV, we have the perfect vehicle to suit your travel preferences. Our experienced drivers ensure a safe and enjoyable ride, making your journey memorable.</p>
            <h1>Book us now</h1>
            <p>Book your Pune to Ashtavinayak cab package today and embark on a memorable journey to these sacred temples. Visit our website shreenath-krupa.com to make an online booking or contact us at +91 8485800099 for inquiries and assistance.</p>
            <b>Book your Pune to Ashtavinayak Cab Package Now!</b>
            <h1>Pune to Ashtavinayak Cab Service</h1>
            <b>Pune to Ashtavinayak cab service | Pune to Ashtavinayak taxi service | Book Pune to Ashtavinayak cab service | pune to Ashtavinayak taxi drop | pune to Ashtavinayak tour package | pune to Ashtavinayak cab rates | pune to Ashtavinayak cab price | pune to Ashtavinayak cabs | Pune to Ashtavinayak Cab Round Trip</b>
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

export default PuneToAshtavinayak;
