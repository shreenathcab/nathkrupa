import { Button, Card } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const PuneToAjanta = () => {
  return (
    <>
      <div style={{ textAlign: 'center', maxWidth: '100%', margin: '0 auto', backgroundColor: '#f9f9f9', padding: '20px', fontFamily: "'Bad Script', cursive" }}>  
        <img style={{ maxWidth: '100%', height: '350px', display: 'block', margin: '0 auto', width: '100%' }} src="images/ajanta0.jpeg" alt=""/>
        <div style={{marginTop:'30px',marginBottom:'30px',backgroundColor:'orange',borderRadius:"50px",height:'50px',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <h1 style={{ color: '#333' }}>Pune to Ajanta Cab Service</h1>
        </div>
        <div className="newsletter" style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <div className="container">
            <div className="row" style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
              <Card className="col-md-4" style={{ maxWidth: '100%', marginBottom: '20px' }}>
                <img style={{ maxWidth: '100%', height: 'auto',width:'500px' }} src="images/ajanta1.jpeg" alt="" className="img-responsive"/>
              </Card>
              <div className="col-md-8" style={{ textAlign: '' }}>
                <h1>Introduction</h1>
                <p>Book your Pune to Ajanta round trip cab package at Just Rs. 6000 Including Toll. shreenath-krupa provides A/c, Non A/c, Economical, Sedan and Tempo Traveller</p>
                <p>shreenath-krupa travels provide the best car service, especially for traveling from Pune to Ajanta by Cab / Taxi and all you need to do is choose us for your travel. Book your tickets now at shreenath-krupa.com.</p>
                <p>Don’t hesitate to choose us for cab service as we are the best and we offer affordable and comfortable tour packages for our customers. The travel from Pune to Ajanta will be very much enjoyable and you would be attended by our supporting staff in a leisurely way. We have excellent cab service with good condition for the Pune to Ajanta trip with professionally well-off trained drivers. You can choose both AC and Non AC cars of various models. Depending on your convenience and requirement you can choose the apt cab for you.</p>
              </div>
            </div>
            <div className="row" style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
              <div className="col-md-8" style={{ textAlign: 'left' }}>
                <h1>Explore various tourist spots in Ajanta</h1>
                <p>Ajanta Caves are rock-cut cave monuments dating back to the 2nd century BCE and containing paintings and sculptures considered to be masterpieces of both Buddhist religious art and universal pictorial art. The caves are located in the Aurangabad district of Maharashtra, India.</p>
                <p>Aside from the Ajanta Caves, tourists can also visit attractions like the Ajanta village, which offers a glimpse into rural life in Maharashtra. The site also provides opportunities for trekking and nature walks, allowing visitors to immerse themselves in the natural beauty of the region.</p>
                <h1>Duration</h1>
                <p>The distance between Pune and Ajanta is approximately 330 kilometers, and it takes around 7-8 hours to reach by car. Our well-maintained cabs and experienced drivers ensure a comfortable and safe journey for our customers.</p>
              </div>
              <Card className="col-md-4" style={{ maxWidth: '100%', marginBottom: '20px' }}>
                <img style={{ maxWidth: '100%', height: 'auto',width:'500px' }} src="images/ajanta2.jpeg" alt="" className="img-responsive"/>
              </Card>
            </div>
            <h1>Location</h1>
            <p>Ajanta Caves are located in the Sahyadri mountain range of the Maharashtra state in India. The caves are situated near the village of Ajanta in Aurangabad district.</p>
            <h1>Book Now</h1>
            <p>Experience a cultural and historical journey from Pune to Ajanta with shreenath-krupa Travels. Book your cab package now and explore the ancient wonders of Ajanta.</p>
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

export default PuneToAjanta;
