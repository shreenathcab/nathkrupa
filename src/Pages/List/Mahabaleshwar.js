import { Button, Card } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Mahabaleshwar = () => {
  return (
    <>
      <div style={{ textAlign: 'center', maxWidth: '100%', margin: '0 auto', backgroundColor: '#f9f9f9', padding: '20px', fontFamily: "'Bad Script', cursive" }}>  
        <img style={{ maxWidth: '100%', height: '350px', display: 'block', margin: '0 auto', width: '100%' }} src="images/maha0.jpeg" alt=""/>
        <div style={{marginTop:'30px',marginBottom:'30px',backgroundColor:'orange',borderRadius:"50px",height:'50px',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <h1 style={{ color: '#333' }}>Pune to Mahabaleshwar Cab Service</h1>
        </div>
        <div className="newsletter" style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <div className="container">
            <div className="row" style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
              <Card className="col-md-4" style={{ maxWidth: '100%', marginBottom: '20px' }}>
                <img style={{ maxWidth: '100%', height: 'auto',width:'500px' }} src="images/maha1.jpeg" alt="" className="img-responsive"/>
              </Card>
              <div className="col-md-8" style={{ textAlign: '' }}>
                <h1>Introduction</h1>
                <p>Book your Pune to Mahabaleshwar round trip cab package at Just Rs. 4500 Including Toll. shreenath-krupa provides A/c, Non A/c, Economical, Sedan and Tempo Traveller</p>
                <p>shreenath-krupa travels provide the best car service, especially for traveling from Pune to Mahabaleshwar by Cab / Taxi and all you need to do is choose us for your travel. Book your tickets now at shreenath-krupa.com.</p>
                <p>Don’t hesitate to choose us for cab service as we are the best and we offer affordable and comfortable tour packages for our customers. The travel from Pune to Mahabaleshwar will be very much enjoyable and you would be attended by our supporting staff in a leisurely way. We have excellent cab service with good condition for the Pune to Mahabaleshwar trip with professionally well off trained drivers. You can choose both AC and Non AC cars of various models. Depending on your convenience and requirement you can choose the apt cab for you.</p>
              </div>
            </div>
            <div className="row" style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
              <div className="col-md-8" style={{ textAlign: 'left' }}>
                <h1>Explore various tourist spots in Mahabaleshwar</h1>
                <p>Mahabaleshwar is a beautiful hill station known for its captivating views and pleasant weather. Apart from the scenic beauty, there are several tourist spots to explore, including Venna Lake, Arthur's Seat, Pratapgad Fort, Lingmala Waterfall, and Wilson Point.</p>
                <p>Enjoy the serene ambiance and lush greenery of Mahabaleshwar while our cab service takes you to these enchanting destinations. Make the most of your trip and create unforgettable memories with shreenath-krupa Travels.</p>
                <h1>Duration</h1>
                <p>The distance between Pune and Mahabaleshwar is approximately 120 km, and you can reach Mahabaleshwar from Pune within 3 to 4 hours by our well-maintained cabs. Plan your trip conveniently and enjoy a comfortable journey with us.</p>
              </div>
              <Card className="col-md-4" style={{ maxWidth: '100%', marginBottom: '20px' }}>
                <img style={{ maxWidth: '100%', height: 'auto',width:'500px' }} src="images/maha2.jpeg" alt="" className="img-responsive"/>
              </Card>
            </div>
            <h1>Location</h1>
            <p>Mahabaleshwar is located in the Satara district of Maharashtra and is situated at an altitude of approximately 1,372 meters above sea level. It is renowned for its breathtaking valleys, lush greenery, and pleasant climate, making it a popular tourist destination.</p>
            <h1>100% guaranteed super service</h1>
            <p>At shreenath-krupa Travels, customer satisfaction is our top priority. We are committed to providing a delightful travel experience to all our customers. With our reliable cab service, you can enjoy a hassle-free journey from Pune to Mahabaleshwar.</p>
            <h1>How are we different?</h1>
            <p>Choose from our wide range of luxurious and comfortable cabs at affordable prices. Whether you prefer a sedan, hatchback, or SUV, we have the perfect vehicle to suit your travel needs. Our well-trained drivers ensure a safe and enjoyable ride, allowing you to relax and enjoy the scenic beauty of Mahabaleshwar.</p>
            <h1>Book us now</h1>
            <p>Book your Pune to Mahabaleshwar cab package today and embark on a memorable journey with shreenath-krupa Travels. Visit our website shreenath-krupa.com to make an online booking or contact us at +91 8485800099 for inquiries and assistance. Experience the convenience and comfort of traveling with us.</p>
            <b>Book your Pune to Mahabaleshwar Cab Package Now!</b>
            <h1>Pune to Mahabaleshwar Cab Service</h1>
            <b>Pune to Mahabaleshwar cab service | Pune to Mahabaleshwar taxi service | Book Pune to Mahabaleshwar cab service | pune to Mahabaleshwar taxi drop | pune to Mahabaleshwar tour package | pune to Mahabaleshwar cab rates | pune to Mahabaleshwar cab price | pune to Mahabaleshwar cabs | Pune to Mahabaleshwar Cab Round Trip</b>
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

export default Mahabaleshwar;
