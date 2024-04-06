import { Button, Card } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const PuneToTirupati = () => {
  return (
    <>
      <div style={{ textAlign: 'center', maxWidth: '100%', margin: '0 auto', backgroundColor: '#f9f9f9', padding: '20px', fontFamily: "'Bad Script', cursive" }}>  
        <img style={{ maxWidth: '100%', height: '350px', display: 'block', margin: '0 auto', width: '100%' }} src="images/tirupati0.jpeg" alt=""/>
        <div style={{marginTop:'30px',marginBottom:'30px',backgroundColor:'orange',borderRadius:"50px",height:'50px',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <h1 style={{ color: '#333' }}>Pune to Tirupati Balaji Temple Cab Service</h1>
        </div>
        <div className="newsletter" style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <div className="container">
            <div className="row" style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
              <Card className="col-md-4" style={{ maxWidth: '100%', marginBottom: '20px' }}>
                <img style={{ maxWidth: '100%', height: 'auto',width:'500px' }} src="images/tirupati1.jpeg" alt="" className="img-responsive"/>
              </Card>
              <div className="col-md-8" style={{ textAlign: '' }}>
                <h1>Introduction</h1>
                <p>Book your Pune to Tirupati Balaji Temple round trip cab package at Just Rs. 10000 Including Toll. shreenath-krupa provides A/c, Non A/c, Economical, Sedan and Tempo Traveller</p>
                <p>shreenath-krupa travels provide the best car service, especially for traveling from Pune to Tirupati Balaji Temple by Cab / Taxi and all you need to do is choose us for your travel. Book your tickets now at shreenath-krupa.com.</p>
                <p>Don’t hesitate to choose us for cab service as we are the best and we offer affordable and comfortable tour packages for our customers. The travel from Pune to Tirupati Balaji Temple will be very much enjoyable and you would be attended by our supporting staff in a leisurely way. We have excellent cab service with good condition for the Pune to Tirupati Balaji Temple trip with professionally well-off trained drivers. You can choose both AC and Non AC cars of various models. Depending on your convenience and requirement you can choose the apt cab for you.</p>
              </div>
            </div>
            <div className="row" style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
              <div className="col-md-8" style={{ textAlign: 'left' }}>
                <h1>Explore Tirupati Balaji Temple</h1>
                <p>Tirupati Balaji Temple is a renowned pilgrimage destination located in the Chittoor district of Andhra Pradesh, India. Dedicated to Lord Venkateswara, an incarnation of Lord Vishnu, the temple is visited by millions of devotees every year.</p>
                <p>Aside from the main temple, visitors can explore various other attractions in the temple complex, including the Sri Venkateswara Museum, Silathoranam, and Akasa Ganga.</p>
                <h1>Duration</h1>
                <p>The distance between Pune and Tirupati Balaji Temple is approximately 800 kilometers, and it takes around 14-15 hours to reach by car. Our well-maintained cabs and experienced drivers ensure a comfortable and safe journey for our customers.</p>
              </div>
              <Card className="col-md-4" style={{ maxWidth: '100%', marginBottom: '20px' }}>
                <img style={{ maxWidth: '100%', height: 'auto',width:'500px' }} src="images/tirupati2.jpeg" alt="" className="img-responsive"/>
              </Card>
            </div>
            <h1>Location</h1>
            <p>Tirupati Balaji Temple is located in the hill town of Tirumala, near Tirupati in the Chittoor district of Andhra Pradesh, India.</p>
            <h1>Book Now</h1>
            <p>Experience a spiritual journey from Pune to Tirupati Balaji Temple with shreenath-krupa Travels. Book your cab package now and seek the blessings of Lord Venkateswara.</p>
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

export default PuneToTirupati;
