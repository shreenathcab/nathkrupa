import { Button, Card } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const PuneToHampi = () => {
  return (
    <>
      <div style={{ textAlign: 'center', maxWidth: '100%', margin: '0 auto', backgroundColor: '#f9f9f9', padding: '20px', fontFamily: "'Bad Script', cursive" }}>  
        <img style={{ maxWidth: '100%', height: '350px', display: 'block', margin: '0 auto', width: '100%' }} src="images/hampi0.jpeg" alt=""/>
        <div style={{marginTop:'30px',marginBottom:'30px',backgroundColor:'orange',borderRadius:"50px",height:'50px',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <h1 style={{ color: '#333' }}>Pune to Hampi Cab Service</h1>
        </div>
        <div className="newsletter" style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <div className="container">
            <div className="row" style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
              <Card className="col-md-4" style={{ maxWidth: '100%', marginBottom: '20px' }}>
                <img style={{ maxWidth: '100%', height: 'auto',width:'500px' }} src="images/hampi1.jpeg" alt="" className="img-responsive"/>
              </Card>
              <div className="col-md-8" style={{ textAlign: '' }}>
                <h1>Introduction</h1>
                <p>Book your Pune to Hampi round trip cab package at Just Rs. 12000 Including Toll. shreenath-krupa provides A/c, Non A/c, Economical, Sedan and Tempo Traveller</p>
                <p>shreenath-krupa travels provide the best car service, especially for traveling from Pune to Hampi by Cab / Taxi and all you need to do is choose us for your travel. Book your tickets now at shreenath-krupa.com.</p>
                <p>Don’t hesitate to choose us for cab service as we are the best and we offer affordable and comfortable tour packages for our customers. The travel from Pune to Hampi will be very much enjoyable and you would be attended by our supporting staff in a leisurely way. We have excellent cab service with good condition for the Pune to Hampi trip with professionally well-off trained drivers. You can choose both AC and Non AC cars of various models. Depending on your convenience and requirement you can choose the apt cab for you.</p>
              </div>
            </div>
            <div className="row" style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
              <div className="col-md-8" style={{ textAlign: 'left' }}>
                <h1>Explore Hampi</h1>
                <p>Hampi, located in the southern state of Karnataka, India, is an ancient village and UNESCO World Heritage Site. It is known for its rich history, stunning architecture, and breathtaking landscapes.</p>
                <p>Visitors to Hampi can explore the ruins of the Vijayanagara Empire, including the iconic Virupaksha Temple, Hampi Bazaar, and the stone chariot at the Vittala Temple complex. The landscape of Hampi, with its boulder-strewn hills and lush greenery, is also perfect for outdoor activities such as trekking and rock climbing.</p>
                <h1>Duration</h1>
                <p>The distance between Pune and Hampi is approximately 500 kilometers, and it takes around 10-12 hours to reach by car. Our well-maintained cabs and experienced drivers ensure a comfortable and safe journey for our customers.</p>
              </div>
              <Card className="col-md-4" style={{ maxWidth: '100%', marginBottom: '20px' }}>
                <img style={{ maxWidth: '100%', height: 'auto',width:'500px' }} src="images/hampi2.jpeg" alt="" className="img-responsive"/>
              </Card>
            </div>
            <h1>Location</h1>
            <p>Hampi is located in the Bellary district of Karnataka, India. It is situated on the banks of the Tungabhadra River and is approximately 350 kilometers from Bangalore, the capital city of Karnataka.</p>
            <h1>Book Now</h1>
            <p>Experience the charm of Hampi with shreenath-krupa Travels. Book your cab package now and explore the wonders of this ancient village.</p>
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

export default PuneToHampi;
