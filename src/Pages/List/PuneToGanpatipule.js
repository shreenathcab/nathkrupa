import { Button, Card } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const PuneToGanpatipule = () => {
  return (
    <>
      <div style={{ textAlign: 'center', maxWidth: '100%', margin: '0 auto', backgroundColor: '#f9f9f9', padding: '20px', fontFamily: "'Bad Script', cursive" }}>  
        <img style={{ maxWidth: '100%', height: '350px', display: 'block', margin: '0 auto', width: '100%' }} src="images/ganpatipule0.jpeg" alt=""/>
        <div style={{marginTop:'30px',marginBottom:'30px',backgroundColor:'orange',borderRadius:"50px",height:'50px',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <h1 style={{ color: '#333' }}>Pune to Ganpatipule Cab Service</h1>
        </div>
        <div className="newsletter" style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <div className="container">
            <div className="row" style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
              <Card className="col-md-4" style={{ maxWidth: '100%', marginBottom: '20px' }}>
                <img style={{ maxWidth: '100%', height: 'auto',width:'500px' }} src="images/ganpatipule1.jpeg" alt="" className="img-responsive"/>
              </Card>
              <div className="col-md-8" style={{ textAlign: '' }}>
                <h1>Introduction</h1>
                <p>Book your Pune to Ganpatipule round trip cab package at Just Rs. 6500 Including Toll. shreenath-krupa provides A/c, Non A/c, Economical, Sedan and SUV.</p>
                <p>shreenath-krupa travels provide the best car service, especially for traveling from Pune to Ganpatipule by Cab / Taxi and all you need to do is choose us for your travel. Book your tickets now at shreenath-krupa.com.</p>
                <p>Don’t hesitate to choose us for cab service as we are the best and we offer affordable and comfortable tour packages for our customers. The travel from Pune to Ganpatipule will be very much enjoyable and you would be attended by our supporting staff in a leisurely way. We have excellent cab service with good condition for the Pune to Ganpatipule trip with professionally well off trained drivers. You can choose both AC and Non AC cars of various models. Depending on your convenience and requirement you can choose the apt cab for you.</p>
              </div>
            </div>
            <div className="row" style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
              <div className="col-md-8" style={{ textAlign: 'left' }}>
                <h1>Explore various tourist spots in Ganpatipule</h1>
                <p>Discover the serene beaches and religious landmarks of Ganpatipule, including the famous Ganpatipule Temple and Ganpatipule Beach. Enjoy breathtaking views of the Arabian Sea and indulge in water sports activities.</p>
                <p>Experience the tranquility and natural beauty of Ganpatipule with our cab service. Explore nearby attractions such as Jaigad Fort, Malgund Village, and Prachin Konkan Museum.</p>
                <h1>Duration</h1>
                <p>The distance between Pune and Ganpatipule is approximately 330 km, and you can reach Ganpatipule from Pune within 8 to 9 hours by our well-maintained cabs. Enjoy a comfortable and scenic journey to this coastal destination.</p>
              </div>
              <Card className="col-md-4" style={{ maxWidth: '100%', marginBottom: '20px' }}>
                <img style={{ maxWidth: '100%', height: 'auto',width:'500px' }} src="images/ganpatipule2.jpeg" alt="" className="img-responsive"/>
              </Card>
            </div>
            <h1>Location</h1>
            <p>Ganpatipule is located in the Ratnagiri district of Maharashtra, known for its pristine beaches and religious significance. Plan your trip to Ganpatipule and explore its cultural heritage and natural attractions.</p>
            <h1>100% guaranteed super service</h1>
            <p>At shreenath-krupa Travels, we prioritize customer satisfaction and strive to provide top-notch cab services for your travel needs. With our reliable and efficient service, you can enjoy a hassle-free journey from Pune to Ganpatipule.</p>
            <h1>How are we different?</h1>
            <p>Choose from our wide range of luxurious and comfortable cabs at affordable prices. Whether you prefer a sedan, hatchback, or SUV, we have the perfect vehicle to suit your travel preferences. Our experienced drivers ensure a safe and enjoyable ride, making your journey memorable.</p>
            <h1>Book us now</h1>
            <p>Book your Pune to Ganpatipule cab package today and embark on a memorable journey to this picturesque destination. Visit our website shreenath-krupa.com to make an online booking or contact us at +91 8485800099 for inquiries and assistance.</p>
            <b>Book your Pune to Ganpatipule Cab Package Now!</b>
            <h1>Pune to Ganpatipule Cab Service</h1>
            <b>Pune to Ganpatipule cab service | Pune to Ganpatipule taxi service | Book Pune to Ganpatipule cab service | pune to Ganpatipule taxi drop | pune to Ganpatipule tour package | pune to Ganpatipule cab rates | pune to Ganpatipule cab price | pune to Ganpatipule cabs | Pune to Ganpatipule Cab Round Trip</b>
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

export default PuneToGanpatipule;
