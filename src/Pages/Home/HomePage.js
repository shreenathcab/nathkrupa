import React, { useEffect, useState } from "react";
import "./style.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import {
  Alert,
  Box,
  Button,
  CardActionArea,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  TextField,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import RoomTwoToneIcon from "@mui/icons-material/RoomTwoTone";
import DirectionsCarFilledTwoToneIcon from "@mui/icons-material/DirectionsCarFilledTwoTone";
import { MailLock, Phone } from "@mui/icons-material";
import emailjs from "emailjs-com";
import Review from "../Reviews/Review";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [data, setData] = useState({
    full_name: "",
    mobile_no: "",
    pick: "",
    drop: "",
    date: "",
    car: "",
    email: "",
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const textArray = [
    "Cost-Effective ",
    "Faster",
    "Safer",
    "Hassle-Free",
    "Happy Moment"
    // Add more text values as needed
  ];

  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 1000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [textArray.length]);

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClickOpen();
    // Get form data

    // Set your Email.js service ID, template ID, and user ID
    const serviceId = "service_7unz31p";
    const templateId = "template_g628h49";
    const publickKey = "q3u1hfPXgCEo7E8Ei";

    const templateParams = {
      full_name: data.full_name,
      mobile_no: data.mobile_no,
      pick: data.pick || "Not Entered",
      drop: data.drop || "Not Entered",
      date: data.date || "Not Entered",
      car: data.car || "Not Entered",
      email: data.email || "Not Entered",
    };

    // Send email using Email.js
    emailjs
      .send(serviceId, templateId, templateParams, publickKey)
      .then((response) => {
        // console.log('Email sent successfully:', response);
        setData({
          full_name: "",
          mobile_no: "",
          pick: "",
          drop: "",
          date: "",
          car: "",
          email: "",
        });

        setTimeout(() => {
          handleClose();
        }, 5000);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  const carOptions = [
    "indigo",
    "Swift",
    "Etios",
    "Tavera",
    "Innova",
    "Innova Crysta",
    "Tempo Traveller 20+32 Seater",
    "Tempo Traveller 17 Seater",
    "Ertiga",
    "Scorpio",
    "Honda City",
    "Maruti Wagonr",
    "Mahindra Xylo",

  ];

  return (
    <div>
      <header className="header" data-header>
        <div className="call-icon">
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="tel:+91 8485800099"
          >
            <Phone style={{ fontSize: "30px" }} />
          </a>
        </div>
        {/* Fixed position WhatsApp icon */}
        <div className="whatsapp-icon">
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="https://api.whatsapp.com/send/?phone=+91 8485800099&amp;text=Thank+You+For+Your+Valuable+Enquiry+Your+Requirement+Is+Top+Most+Priority+For+Us.+Our+Booking+Team+Will+Assist+You+Shortly%21+You+Can+Contact+Us+on+ 8485800099+%2F++91 8485800099"
          >
            <WhatsAppIcon style={{ fontSize: "40px" }} />
          </a>
        </div>
        <div className="overlay" data-overlay></div>

        <div className="header-top" style={{ backgroundColor: "white" }}>
          <div className="container">
            <a
              style={{ color: "black" }}
              href="tel:+91 8485800099"
              className="helpline-box"
            >
              <div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <a href="https://api.whatsapp.com/send/?phone=+91 8485800099&amp;text=Thank+You+For+Your+Valuable+Enquiry+Your+Requirement+Is+Top+Most+Priority+For+Us.+Our+Booking+Team+Will+Assist+You+Shortly%21+You+Can+Contact+Us+on+ 8485800099+%2F++91 8485800099">
                    <img
                      style={{ marginRight: "10px", marginTop: "-4px" }}
                      src="imgs/whatsapp.jpg"
                      height="33"
                      width="33"
                    ></img>
                  </a>
                  <CallIcon name="call-outline"></CallIcon>
                </div>
              </div>

              <div className="wrapper">
                <p
                  style={{ color: "black", fontSize: "20px" }}
                  className="helpline-title"
                >
                  For Further Inquires{" "}
                </p>

                <p
                  style={{ color: "black", fontSize: "20px" }}
                  className="helpline-number"
                >
                  +91 8485800099
                </p>
              </div>
            </a>

            <a href="#" className="logo">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <img
                  style={{ color: "red" }}
                  height="35"
                  width="49"
                  src="imgs/logoB.png"
                  alt="SHREENATH-KRUPA logo"
                ></img>
                <b
                  style={{ fontSize: "25px", color: "orange" }}
                  // src="/logo.png"
                  alt="SHREENATH-KRUPA logo"
                >
                  SHREENATH-KRUPA
                </b>
              </div>
              {/* <p style={{color:"white"}}>SHREENATH-KRUPA tours ad travels</p> */}
            </a>

            <div className="header-btn-group">
              <button className="search-btn" aria-label="Search">
                <input name="search"></input>
              </button>

              <button
                className="nav-open-btn"
                aria-label="Open Menu"
                style={{ color: "black" }}
                onClick={handleOpenSidebar}
                data-nav-open-btn
              >
                <MenuIcon name="menu-outline"></MenuIcon>
              </button>
            </div>
          </div>
        </div>

        <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          {/* Sidebar content */}

          <ul className="sidebar-list">
            <li>
              <a
                style={{ fontSize: "20px" }}
                href="#home"
                onClick={handleCloseSidebar}
              >
                <b>Home</b>
              </a>
            </li>

            <li>
              <a
                style={{ fontSize: "20px" }}
                href="#about"
                onClick={handleCloseSidebar}
              >
                <b>About</b>
              </a>
            </li>
            <li>
              <a
                style={{ fontSize: "20px" }}
                href="#package"
                onClick={handleCloseSidebar}
              >
                <b> Packages</b>
              </a>
            </li>
            <li>
              <a
                style={{ fontSize: "20px" }}
                href="#cabrate"
                onClick={handleCloseSidebar}
              >
                <b>Cab rates</b>
              </a>
            </li>
            <li>
              <a
                style={{ fontSize: "20px" }}
                href="#cabservice"
                onClick={handleCloseSidebar}
              >
                <b>Cab Services</b>
              </a>
            </li>
            <li>
              <a
                style={{ fontSize: "20px" }}
                href="#contact"
                onClick={handleCloseSidebar}
              >
                <b>Contact Us</b>
              </a>
            </li>
          </ul>
          <Button
            style={{ fontSize: "20px", marginLeft: "40px", color: "black" }}
            onClick={handleCloseSidebar}
          >
            <ClearIcon></ClearIcon>Close
          </Button>
        </div>

        <div className="header-bottom">
          <div className="container">
            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </li>
            </ul>

            <nav className="navbar" data-navbar>
              <div className="navbar-top">
                <a href="#" className="logo">
                  <img src="/images/logo-blue.svg" alt="Tourly logo" />
                </a>

                <button
                  className="nav-close-btn"
                  aria-label="Close Menu"
                  data-nav-close-btn
                >
                  <ion-icon name="close-outline"></ion-icon>
                </button>
              </div>

              {/* sidebar menus */}
              <ul className="navbar-list">
                <li>
                  <a
                    style={{ fontSize: "20px" }}
                    href="#home"
                    className="navbar-link"
                    data-nav-link
                  >
                    <b>home</b>
                  </a>
                </li>

                <li>
                  <a
                    style={{ fontSize: "20px" }}
                    href="#about"
                    className="navbar-link"
                    data-nav-link
                  >
                    <b> About</b>
                  </a>
                </li>

                <li>
                  <a
                    style={{ fontSize: "20px" }}
                    href="#package"
                    className="navbar-link"
                    data-nav-link
                  >
                    <b> packages</b>
                  </a>
                </li>

                <li>
                  <a
                    style={{ fontSize: "20px" }}
                    href="#cabrate"
                    className="navbar-link"
                    data-nav-link
                  >
                    <b>Cab Rates</b>
                  </a>
                </li>
                <li>
                  <a
                    style={{ fontSize: "20px" }}
                    href="#cabservice"
                    className="navbar-link"
                    data-nav-link
                  >
                    <b>Cab Services</b>
                  </a>
                </li>

                <li>
                  <a
                    style={{ fontSize: "20px" }}
                    href="#contact"
                    className="navbar-link"
                    data-nav-link
                  >
                    <b>contact us</b>
                  </a>
                </li>
              </ul>
            </nav>

            <a
              style={{ fontSize: "20px" }}
              className="btn btn-primary"
              href="#book"
            >
              <b>Book Now</b>
            </a>
          </div>
        </div>
      </header>

      <main>
        <article>
          {/* <!-- 
        - #HERO
      --> */}

          <section className="hero" id="home">
            <div className="container">
              <h3 className="h2 hero-title">
                <p style={{ color: "red" }}>{textArray[index]}</p>{" "}
                <p style={{ color: "white" }}>Cab Services.</p>
                <br />
                <br />
                <p style={{ color: "white" }}>CLICK TO CALL/WHATSAPP</p>
                <div
                  style={{
                    color: "white",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <a href="https://api.whatsapp.com/send/?phone=+91 8485800099&amp;text=Thank+You+For+Your+Valuable+Enquiry+Your+Requirement+Is+Top+Most+Priority+For+Us.+Our+Booking+Team+Will+Assist+You+Shortly%21+You+Can+Contact+Us+on+ 8485800099+%2F++91 8485800099">
                    <img
                      style={{ marginRight: "10px", marginTop: "10px" }}
                      src="imgs/whatsap.png"
                      height="33"
                      width="33"
                    ></img>
                  </a>
                  <a href="tel:+91 8485800099">
                    <CallIcon
                      style={{
                        marginRight: "10px",
                        marginTop: "10px",
                        height: "33",
                        width: "33",
                        color: "red",
                      }}
                      name="call-outline"
                    ></CallIcon>
                  </a>

                  <p>+91 8485800099</p>
                </div>
              </h3>
              {/* <h5 className="">Enjoy Your Comfortable Trip.</h5> */}

              <p className="hero-text">
                Come Explore the travel world with us and enjoy the best rides
                of your life. We offer Best cab services in Maharashtra.
              </p>

              <div className="btn-group">
                <button className="btn btn-primary">Learn more</button>

                <a href="#book" className="btn btn-secondary">
                  Book now
                </a>
              </div>
            </div>
          </section>

          {/* <!-- 
        - #TOUR SEARCH
      --> */}

          <Card sx={{borderRadius:'50px'}}>
            <section className="tour-search">
              <div className="container">
                <form
                  id="book"
                  action=""
                  className="tour-search-form"
                  onSubmit={handleSubmit}
                >
                  <div className="input-wrapper">
                    <label for="destination" className="input-label">
                      Full Name*
                    </label>

                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      required
                      value={data.full_name}
                      onChange={(e) => {
                        setData({ ...data, full_name: e.target.value });
                      }}
                      placeholder="Enter Full Name"
                      className="input-field"
                    />
                  </div>
                  <div className="input-wrapper">
                    <label for="destination" className="input-label">
                      Email Id
                    </label>

                    <input
                      type="text"
                      name="email"
                      id="email"
                      value={data.email}
                      onChange={(e) => {
                        setData({ ...data, email: e.target.value });
                      }}
                      placeholder="Enter Email Id"
                      className="input-field"
                    />
                  </div>
                  <div className="input-wrapper">
                    <label for="destination" className="input-label">
                      Mobile Number*
                    </label>

                    <input
                      type="text"
                      name="mobile"
                      id="mobile"
                      required
                      value={data.mobile_no}
                      onChange={(e) => {
                        setData({ ...data, mobile_no: e.target.value });
                      }}
                      placeholder="Enter Mobile Number"
                      className="input-field"
                    />
                  </div>
                  <div className="input-wrapper">
                    <label for="destination" className="input-label">
                      Car Type
                    </label>

                    <select
                      type="select"
                      name="car"
                      id="car"
                      value={data.car}
                      onChange={(e) => {
                        setData({ ...data, car: e.target.value });
                      }}
                      placeholder="Select your car type"
                      className="input-field"
                    >
                      {carOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="input-wrapper">
                    <label for="people" className="input-label">
                      Pick-up
                    </label>

                    <input
                      type="text"
                      name="pickup"
                      id="pickup"
                      value={data.pick}
                      onChange={(e) => {
                        setData({ ...data, pick: e.target.value });
                      }}
                      placeholder="Enter Pick-up Location"
                      className="input-field"
                    />
                  </div>

                  <div className="input-wrapper">
                    <label for="checkout" className="input-label">
                      Drop-off
                    </label>

                    <input
                      type="text"
                      name="dropoff"
                      id="checkout"
                      value={data.drop}
                      onChange={(e) => {
                        setData({ ...data, drop: e.target.value });
                        // console.log(data);
                      }}
                      placeholder="Enter Drop-off Location"
                      className="input-field"
                    />
                  </div>

                  <div className="input-wrapper">
                    <label for="checkin" className="input-label">
                      Pick Date and Time
                    </label>

                    <input
                      type="datetime-local"
                      name="pickTime"
                      id="pickTime"
                      value={data.date}
                      onChange={(e) => {
                        setData({ ...data, date: e.target.value });
                      }}
                      className="input-field"
                    />
                  </div>

                  <button type="submit" className="btn btn-secondary">
                    Inquire now
                  </button>
                </form>
                {/* <Box className="tour-search-form">
                <Card sx={{width:'80ch'}}>
                  <CardContent sx={{width:'80ch',display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center',flexWrap:'wrap'}}>
                    <Box>

                    <TextField fullWidth label="Enter Full Name" color="secondary" ></TextField>
                    <TextField sx={{width:'30ch'}} label="Enter Email Id" color="secondary" ></TextField>
                    </Box>
                    <Box>

                    <TextField sx={{width:'30ch'}} label="Enter Mobile Number" color="secondary" ></TextField>
                    <TextField sx={{width:'30ch'}} label="Enter Pick-Up City or Airport" color="secondary" ></TextField>
                    </Box>
                    <Box>

                    <TextField sx={{width:'30ch'}} label="Enter Pick Date and Time " color="secondary" ></TextField>
                    <TextField sx={{width:'30ch'}} label="Enter Drop-Off City or Airport" color="secondary" ></TextField>
                    </Box>
                    <Box>

                    <TextField sx={{width:'30ch'}} label="Select Your Car Type" color="secondary" ></TextField>
                    </Box>
                  </CardContent>
                </Card>
              </Box> */}
              </div>
            </section>
          </Card>

          {/* <!-- 
        - #POPULAR
      --> */}

          <section class="popular" id="about">
            <div className="container">
              {/* <p className="section-subtitle">What We Offer</p> */}

              <div>
                <h3 className="h3 section-title">
                  Welcome To SHREENATH-KRUPA tour & Travel
                </h3>
                <p style={{ color: "black" }} className="section-text">
                  We offer best cab services in Maharashtra.
                </p>
                <p className="section-text">
                  Only At SHREENATH-KRUPA tour & Travel Services You Will Find All
                  Of The Above Under One Roof. You Can Travel With Us Without
                  Concern! SHREENATH-KRUPA tour & Travel Services Is A Truly
                  Service-Oriented Company That Has Been Providing Best Cab
                  Services In Maharashtra At Any Time And From Any Location. Our
                  Goal Is To Provide Affordable Tour Packages For Everyone, And
                  We Guarantee That You Will Return With A Bag Full Of Happy
                  Memories And Unforgettable Experiences.
                </p>
                <h4>WHY CHOOSE SHREENATH-KRUPA CABS ?</h4>
                <ul>
                  <li>✅ Customer security and safety is guaranteed. </li>
                  <li>✅ SHREENATH-KRUPA Cabs provides Free Masks for passengers</li>
                  <li>
                  ✅ A fully sanitized car, a driver wearing a mask and hand
                    gloves
                  </li>
                  <li>✅ Seats isolated from the driver and co-passenger </li>
                  <li>✅ Satisfaction of all customers</li>
                  <li>✅ With instant confirmation, it's easy to book</li>
                  <li>
                  ✅ Billing that is transparent and free of hidden fees and
                    charges{" "}
                  </li>
                  <li>✅ Drop-off and pickup at your doorstep</li>
                  <li>✅ Cancellation policy that is friendly to customers </li>
                </ul>
              </div>
              <div>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    mt: "100px",
                  }}
                >
                  <div>
                    <img
                      style={{ width: "400px" }}
                      src="imgs/about-taxi.png"
                      alt="about"
                    ></img>
                  </div>
                  <div>
                    <p style={{ color: "black" }} className="section-text">
                      ABOUT{" "}
                      <b style={{ color: "red" }}>SHREENATH-KRUPA CAB SERVICES</b>
                    </p>
                    <p style={{ color: "black" }} className="section-text">
                      We offer best cab services in Maharashtra.
                    </p>
                    <p className="section-text">
                      You will get both A/C & Non A/C facility with our cars. We
                      have doorstep pickup and drop service. We also provide
                      cars on kilometers for local as well as basic outstations.
                    </p>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          flexWrap: "wrap",
                        }}
                      >
                        <RoomTwoToneIcon
                          sx={{
                            color: "red",
                            fontSize: "47px",
                            border: "1px solid red",
                            borderRadius: "30px",
                            transition: "background-color 0.3s", // Add a smooth transition for the background color
                            "&:hover": {
                              backgroundColor: "#f09089", // Change the background color on hover
                              animation: "pulseAnimation 0.5s ease-in-out", // Add animation on hover
                            },
                            "@keyframes pulseAnimation": {
                              "0%": {
                                transform: "scale(1)",
                              },
                              "50%": {
                                transform: "scale(1.1)",
                              },
                              "100%": {
                                transform: "scale(1)",
                              },
                            },
                          }}
                        />
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            flexWrap: "wrap",
                          }}
                        >
                          <h3 style={{ color: "red" }}>Long Distance Trip</h3>
                          <p style={{ fontSize: "13px" }}>
                            Safer And Comfortable{" "}
                          </p>
                          <p style={{ fontSize: "13px" }}>
                            Long Distance Journey{" "}
                          </p>
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          flexWrap: "wrap",
                        }}
                      >
                        <DirectionsCarFilledTwoToneIcon
                          sx={{
                            color: "red",
                            fontSize: "47px",
                            border: "1px solid red",
                            borderRadius: "30px",
                            transition: "background-color 0.3s", // Add a smooth transition for the background color
                            "&:hover": {
                              backgroundColor: "#f09089", // Change the background color on hover
                              animation: "pulseAnimation 0.5s ease-in-out", // Add animation on hover
                            },
                            "@keyframes pulseAnimation": {
                              "0%": {
                                transform: "scale(1)",
                              },
                              "50%": {
                                transform: "scale(1.1)",
                              },
                              "100%": {
                                transform: "scale(1)",
                              },
                            },
                          }}
                        />
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            flexWrap: "wrap",
                          }}
                        >
                          <h3 style={{ color: "red" }}>Cab Tour Services</h3>
                          <p style={{ fontSize: "13px" }}>Local Trip Easy </p>
                          <p style={{ fontSize: "13px" }}>Cab Booking </p>
                        </Box>
                      </Box>
                    </Box>
                  </div>
                </Box>
              </div>
            </div>
          </section>

          <div id="cabrate">
            <div className="row">
              <div
                className="col-md-12 title"
                data-wow-duration="2s"
                data-wow-delay="50ms"
              >
                <h3 className="h3 section-title" align="Center">
                  Cab Rates<br></br>
                </h3>
              </div>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "space-around",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ width: 350 }} className="col-sm-6 col-md-3">
                  <div
                    className="single-price table3"
                    style={{ fontSize: "small" }}
                  >
                    <div className="table-heading">
                      <p className="plan-name">Special Shirdi Package</p>
                      <p className="plan-price">
                        <span className="month">1 Day Return </span>
                      </p>
                    </div>
                    <ul style={{ fontSize: "small" }}>
                      <li>
                        Swift Dzire AC-
                        <span className="badge badge-warning">
                          Rs.5500
                        </span>{" "}
                      </li>
                      <li>
                        Innova Crysta A/C-
                        <span className="badge badge-success">
                          Rs.8500
                        </span>{" "}
                      </li>
                      <li>
                        Innova A/C-
                        <span className="badge badge-info">Rs.7500</span>{" "}
                      </li>
                      <li>
                        Ertiga A/C-
                        <span className="badge badge-success">
                          Rs.6500
                        </span>{" "}
                      </li>
                      <li>
                        Etios A/C-
                        <span className="badge badge-primary">
                          Rs.6000
                        </span>{" "}
                      </li>

                      <li>
                        Tavera / Xylo AC-{" "}
                        <span className="badge badge-info">Rs.7000</span>
                      </li>
                    </ul>
                    <a
                      style={{ fontSize: "10px" }}
                      href="#book"
                      className="btn btn-buynow"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
                <div style={{ width: 350 }} className="col-sm-6 col-md-3">
                  <div
                    className="single-price table1"
                    style={{ fontSize: "small" }}
                  >
                    <div className="table-heading ">
                      <p className="plan-name">Pune To Shirdi</p>
                      <p className="plan-price">
                        <span className="month">1 Day Drop</span>
                      </p>
                    </div>
                    <ul>
                      <li>
                        Swift Dzire AC-
                        <span className="badge badge-warning">
                          Rs.3500
                        </span>{" "}
                      </li>
                      <li>
                        Innova Crysta A/C-
                        <span className="badge badge-success">
                          Rs.6500
                        </span>{" "}
                      </li>
                      <li>
                        Innova A/C-
                        <span className="badge badge-success">
                          Rs.6000
                        </span>{" "}
                      </li>
                      <li>
                        Ertiga A/C-
                        <span className="badge badge-primary">
                          Rs.5500
                        </span>{" "}
                      </li>
                      <li>
                        Etios A/C-
                        <span className="badge badge-info">Rs.4000</span>{" "}
                      </li>

                      <li>
                        Tavera AC-{" "}
                        <span className="badge badge-info">Rs.5000</span>
                      </li>
                    </ul>
                    <a
                      style={{ fontSize: "10px" }}
                      href="#book"
                      className="btn btn-buynow"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
                <div style={{ width: 350 }} className="col-sm-6 col-md-3">
                  <div
                    className="single-price highligh-table"
                    style={{ fontSize: "small" }}
                  >
                    <div className="table-heading">
                      <p className="plan-name">Pune To Mumbai</p>
                      <p className="plan-price">
                        <span className="month">1 Day Drop</span>
                      </p>
                    </div>
                    <ul>
                      <li>
                        Swift Dzire AC-
                        <span className="badge badge-warning">
                          Rs.3000
                        </span>{" "}
                      </li>
                      <li>
                        Tata Indigo A/C-
                        <span className="badge badge-danger">Rs.2500</span>{" "}
                      </li>
                      <li>
                        Innova Crysta A/C-
                        <span className="badge badge-success">
                          Rs.5500
                        </span>{" "}
                      </li>
                      <li>
                        Innova A/C-
                        <span className="badge badge-primary">
                          Rs.4500
                        </span>{" "}
                      </li>
                      <li>
                        Ertiga A/C-
                        <span className="badge badge-info">Rs.3500</span>{" "}
                      </li>
                      <li>
                        Etios A/C-
                        <span className="badge badge-success">
                          Rs.3000
                        </span>{" "}
                      </li>

                      <li>
                        Xylo / Tavera AC-{" "}
                        <span className="badge badge-info">Rs.4500</span>
                      </li>
                    </ul>
                    <a
                      style={{ fontSize: "10px" }}
                      href="#book"
                      className="btn btn-buynow"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
                <div style={{ width: 350 }} clasName="col-sm-6 col-md-3">
                  <div
                    className="single-price table2"
                    style={{ fontSize: "small" }}
                  >
                    <div className="table-heading">
                      <p className="plan-name">Pune to all OutStation</p>
                      <p className="plan-price">
                        <span className="month">1/2/3 days cab/km rate</span>
                      </p>
                    </div>
                    <ul>
                      <li>
                        Swift Dzire, Xcent AC-
                        <span className="badge badge-warning">Rs.12</span>{" "}
                      </li>

                      <li>
                        Etios AC-
                        <span className="badge badge-success">Rs.13</span>{" "}
                      </li>

                      <li>
                        Innova Crysta AC-
                        <span className="badge badge-info">Rs.22</span>{" "}
                      </li>
                      <li>
                        Innova AC-
                        <span className="badge badge-success">Rs.17</span>{" "}
                      </li>

                      <li>
                        Ertiga AC-
                        <span className="badge badge-primary">Rs.14</span>{" "}
                      </li>

                      <li>
                        {" "}
                        Tavera, Xylo, Scorpio AC-{" "}
                        <span className="badge badge-info">Rs.16</span>{" "}
                      </li>

                      <li>
                        Tempo Traveller 13, 17 Seater Non AC - AC-
                        <span className="badge badge-danger">
                          24-27/km
                        </span>{" "}
                      </li>
                    </ul>
                    <a
                      style={{ fontSize: "10px" }}
                      href="#book"
                      className="btn btn-buynow"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </Box>
            </div>
          </div>

          <section className="package" id="package">
            <div className="container">
              <p className="section-subtitle">Popular Packeges</p>

              <h3 className="h3 section-title">
                Cabs For Local and Outstation Hire.
              </h3>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  flexWrap: "wrap",
                  justifyContent: "space-around",
                }}
              >
                <Card sx={{ maxWidth: 345, mb: "30px" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      sx={{ objectFit: "cover" }}
                      image="imgs/punemumbai.png"
                      alt="green iguana"
                    />
                    <CardContent sx={{ bgcolor: "#D32D41", color: "white" }}>
                      <Typography gutterBottom component="div">
                        Pune To Mumbai Airport Pick up & Drop
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 345, mb: "30px" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      sx={{ objectFit: "cover" }}
                      image="imgs/puneastavinayak.png"
                      alt="green iguana"
                    />
                    <CardContent sx={{ bgcolor: "#D32D41", color: "white" }}>
                      <Typography gutterBottom component="div">
                        Pune To Ashtavinayak Darshan Service
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 345, mb: "30px" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      sx={{ objectFit: "cover" }}
                      image="imgs/puneshirdi.png"
                      alt="green iguana"
                    />
                    <CardContent sx={{ bgcolor: "#D32D41", color: "white" }}>
                      <Typography gutterBottom component="div">
                        Pune To Shirdi-Shani Shingnapur Darshan
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 345,mb:'30px' }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      sx={{ objectFit: "cover" }}
                      image="imgs/punegoa.png"
                      alt="green iguana"
                    />
                    <CardContent sx={{ bgcolor: "#D32D41", color: "white" }}>
                      <Typography gutterBottom component="div">
                        Pune To Goa Family Trip
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 345,mb:'30px' }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      sx={{ objectFit: "cover" }}
                      image="imgs/punepanch.png"
                      alt="green iguana"
                    />
                    <CardContent sx={{ bgcolor: "#D32D41", color: "white" }}>
                      <Typography gutterBottom component="div">
                        Pune To Panch Jyotirling Service
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 245,mb:'30px' }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="imgs/punemahabal.png"
                      alt="green iguana"
                    />
                    <CardContent sx={{ bgcolor: "#D32D41", color: "white" }}>
                      <Typography gutterBottom component="div">
                        Pune To Mahabaleshwar
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>

                {/* <Card sx={{ maxWidth: 245 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="/imgs/nashik2.png"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom component="div">
                        Pune To Nashik Tour Service
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card> */}

                <Card sx={{ maxWidth: 245,mb:'30px' }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="imgs/bhimashankar.jpg"
                      alt="green iguana"
                    />
                    <CardContent sx={{ bgcolor: "#D32D41", color: "white" }}>
                      <Typography gutterBottom component="div">
                        Pune To Bhimashankar
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 245,mb:'30px' }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="imgs/trimbakeshwar.png"
                      alt="green iguana"
                    />
                    <CardContent sx={{ bgcolor: "#D32D41", color: "white" }}>
                      <Typography gutterBottom component="div">
                        Pune To Trimbakeshwar
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>

              {/* <button className="btn btn-primary">View All Packages</button> */}
            </div>
          </section>

          <section className="gallery" id="gallery">
            <div className="container">
              <p className="section-subtitle">Photo Gallery</p>

              <h2 className="h2 section-title">Photo's From Travellers</h2>

              {/* <p className="section-text">Photot caption</p> */}

              <ul className="gallery-list">
                <li className="gallery-item">
                  <figure className="gallery-image">
                    <img src="imgs/balaji1.jpeg" alt="Gallery image" />
                  </figure>
                </li>

                <li className="gallery-item">
                  <figure className="gallery-image">
                    <img src="imgs/balaji2.jpeg" alt="Gallery image" />
                  </figure>
                </li>

                <li className="gallery-item">
                  <figure className="gallery-image">
                    <img src="imgs/hampi11.jpeg" alt="Gallery image" />
                  </figure>
                </li>

                <li className="gallery-item">
                  <figure className="gallery-image">
                    <img src="imgs/hampi.jpeg" alt="Gallery image" />
                  </figure>
                </li>

                <li className="gallery-item">
                  <figure className="gallery-image">
                    <img src="imgs/goa1.jpeg" alt="Gallery image" />
                  </figure>
                </li>
              </ul>
            </div>
          </section>

          <section className="cta" id="cabservice">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: "-60px",
                marginBottom: "-60px",
                fontSize: "20px",
              }}
              className="container"
            >
              <ul>
                <b style={{ color: "red",fontSize:'30px'}}>Services</b>
                <br />
                <br />
                <li><Link to={"/shirdi"} style={{ color: "black", textDecoration: "underline" }}>🔴 Pune to Shirdi</Link></li>
                <li><Link to={"mumbai"} style={{ color: "black", textDecoration: "underline" }}>🔴 Pune to Mumbai</Link></li>
                <li><Link to={"/maha"}style={{ color: "black", textDecoration: "underline" }}>🔴 Pune to Mahabaleshwar</Link></li>
                <li><Link to={"/nashik"}style={{ color: "black", textDecoration: "underline" }}>🔴 Pune to Nashik</Link></li>
                <li><Link to={"/trimbakeshwar"}style={{ color: "black", textDecoration: "underline" }}>🔴 Pune to Trimbakeshwar</Link></li>
                <li><Link to={"/aurangabad"}style={{ color: "black", textDecoration: "underline" }}>🔴 Pune to Sambhaji Nagar(Aurangabad)</Link></li>
                <li><Link to={"/kolhapur"}style={{ color: "black", textDecoration: "underline" }}>🔴 Pune to Kolhapur</Link></li>
                <li><Link to={"/goa"}style={{ color: "black", textDecoration: "underline" }}>🔴 Pune to Goa</Link></li>
                <li><Link to={"/lavasa"}style={{ color: "black",  textDecoration: "underline"}}>🔴 Pune to Lavasa</Link></li>
                <li><Link to={"/bhimashankar"}style={{ color: "black", textDecoration: "underline" }}>🔴 Pune to Bhimashankar</Link></li>
                <li><Link to={"/ujjain"}style={{ color: "black", textDecoration: "underline" }}>🔴 Pune to Ujjain</Link></li>
                <li><Link to={"/omkareshwar"}style={{ color: "black", textDecoration: "underline" }}>🔴 Pune to Omkareshwar</Link></li>
              </ul>
              <ol>
                <b style={{ color: "red",fontSize:'30px' }}>Services</b>
                <br />
                <br />

                <li><Link to={"/pandharpur"}style={{ color: "black", textDecoration: "underline" }}>🔴 Pune - Pandharpur</Link></li>
                <li><Link to={"/goa"}style={{ color: "black", textDecoration: "underline" }}>🔴 Pune - Goa</Link></li>
                <li><Link to={"/akkalkot"}style={{ color: "black",  textDecoration: "underline"}}>🔴 Pune - Akkalkot</Link></li>
                <li><Link to={"/ganpatipule"}style={{ color: "black", textDecoration: "underline" }}>🔴 Pune - Ganpatipule</Link></li>
                <li><Link to={"/ashtavinayak"}style={{ color: "black",  textDecoration: "underline"}}>🔴 Pune - Ashtavinayak</Link></li>
                <li><Link to={"/tuljapur"}style={{ color: "black", textDecoration: "underline" }}>🔴 Pune - Tuljapur</Link></li>
                <li><Link to={"/lonavala"}style={{ color: "black", textDecoration: "underline"}}>🔴 Pune - Lonavala</Link></li>
                <li><Link to={"/ajanta"}style={{ color: "black", textDecoration: "underline" }}>🔴 Pune - Ajanta</Link></li>
                <li><Link to={"/kolhapur"}style={{ color: "black", textDecoration: "underline"}}>🔴 Pune - Kolhapur</Link></li>
                <li><Link to={"/tirupati"}style={{ color: "black", textDecoration: "underline"}}>🔴 Pune To Tirupati Balaji Temple</Link></li>
                <li><Link to={"/tirupati"}style={{ color: "black", textDecoration: "underline" }}>🔴 Mumbai to Tirupati Balaji Temple</Link></li>
                <li><Link to={"/ayodhya"}style={{ color: "black", textDecoration: "underline" }}>🔴 Pune To Ayodhya</Link></li>
              </ol>

              <ol>
                <b style={{ color: "red",fontSize:'30px' }}>Services</b>
                <br />
                <br />
                <li><Link to={"/hampi"}style={{ color: "black", textDecoration: "underline" }}>🚗 Pune To Hampi - Karnataka </Link></li>
                <li><Link to={"/gujarat"}style={{ color: "black", textDecoration: "underline" }}>🚗 Pune To Gujarat</Link></li>
                <li><Link to={"/rajasthan"}style={{ color: "black", textDecoration: "underline" }}>🚗 Pune To Rajasthan </Link></li>
                  <li>🚗 Taxi hire Pune</li>
                  <li>🚗 Cab hire Pune</li>
                  <li>🚗 Cab on hire in Pune</li>
                  <li>🚗 Car for hire in Pune</li>
                  <li>🚗 Hire a taxi in Pune</li>
                  <li>🚗 Cheapest car hire in Pune</li>
                  <li>🚗 Car rental Pune</li>
                  <li>🚗 Car rental in Pune</li>
              </ol>
            </div>
          </section>
        </article>
      </main>
      {/* <Review/> */}

      <footer className="footer" id="contact">
        <div className="footer-top">
          <div className="container">
            <div className="footer-brand">
              <a href="#" className="logo">
                <p style={{ fontSize: "35px", color: "red" }}>श्रीनाथ कृपा कॅब</p>
              </a>

              <h3 style={{ color: "red", marginBottom: "30px" }}>
                Call 24 Hour Service Available
              </h3>
              <p className="footer-text">
                Call Now & Book Your Cab For Your Next Ride.
              </p>
              <h3>
                <CallIcon /> +91 8485800099{" "}
              </h3>
              <h3>
                <CallIcon /> +91 7796003200{" "}
              </h3>
            </div>

            <div className="footer-contact">
              <h4 className="contact-title">Contact Us</h4>

              <p className="contact-text">
                Feel free to contact and reach us !!
              </p>

              <ul>
                <li className="contact-item">
                  <ion-icon name="call-outline"></ion-icon>

                  <a href="tel:+91 8485800099" className="contact-link">
                    +91 8485800099
                  </a>
                </li>

                <li className="contact-item">
                  <ion-icon name="mail-outline"></ion-icon>
                  <MailLock />
                  <a href="" className="contact-link">
                  sureshugale01843@gmail.com
                  </a>
                </li>

                <li className="contact-item">
                  <ion-icon name="location-outline"></ion-icon>

                  <address>
                  Shreeshreenath-krupa tours and travels Gulmohar City, Kharadi
Pune - 411014
                  </address>
                </li>
              </ul>
            </div>

            <div className="footer-form">
              <p className="form-text">
                Subscribe our newsletter for more update & news !!
              </p>

              <form action="" className="form-wrapper">
                <input
                  type="email"
                  name="email"
                  className="input-field"
                  placeholder="Enter Your Email"
                  required
                />

                <button type="submit" className="btn btn-secondary">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">
              &copy; 2024 <a href="">ShreenathKrupa</a>. All rights reserved
            </p>

            <ul className="footer-bottom-list">
              <li>
                <a href="#" className="footer-bottom-link">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="footer-bottom-link">
                  Term & Condition
                </a>
              </li>

              <li>
                <a href="#" className="footer-bottom-link">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Alert</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Alert severity="success" sx={{ width: "100%" }}>
              Thank Your for showing interest in our cabs
            </Alert>{" "}
            <br />
            We have received your contact details we will connect within next 24
            hours.
            <br />
            If you have any queries you can react out with us at 09:00am to
            09:pm on +91 8485800099 OR +91 7796003200
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Okay</Button>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default HomePage;
