
import React from 'react';
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import "../../public/assets/css/style.css"
// import OwlCarousel from '@ntegral/react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Listing() {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
        {/* <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/fontawesome.min.css" /> */}
      </Head>

      <div className='main-wrapper'>
        <header class="header">
          <div class="container-fluid">
              <nav class="navbar navbar-expand-lg header-nav">
                  <div class="navbar-header">
                      <a id="mobile_btn" href="javascript:void(0);">
                          <span class="bar-icon">
                              <span></span>
                              <span></span>
                              <span></span>
                          </span>
                      </a>
                      <a href="index.html" class="navbar-brand logo">
                          <img src="assets/img/logo.svg" class="img-fluid" alt="Logo"/>
                      </a>
                      <a href="index.html" class="navbar-brand logo-small">
                          <img src="assets/img/logo-small.png" class="img-fluid" alt="Logo"/>
                      </a>
                  </div>
                  <div class="main-menu-wrapper">
                      <div class="menu-header">
                          <a href="index.html" class="menu-logo">
                              <img src="assets/img/logo.svg" class="img-fluid" alt="Logo"/>
                          </a>
                          <a id="menu_close" class="menu-close" href="javascript:void(0);"> <i
                                  class="fas fa-times"></i></a>
                      </div>
                      <ul class="main-nav">
                          <li><a href="index.html">Home</a></li>
                          <li class="has-submenu active">
                              <a href="https://dreamsrent.dreamguystech.com/html/href">Listings <i
                                      class="fas fa-chevron-down"></i></a>
                              <ul class="submenu">
                                  <li><a href="listing-grid.html">Listing Grid</a></li>
                                  <li><a href="listing-list.html">Listing List</a></li>
                                  <li class="active"><a href="listing-details.html">Listing Details</a></li>
                              </ul>
                          </li>
                          <li class="has-submenu">
                              <a href="https://dreamsrent.dreamguystech.com/html/href">Pages <i
                                      class="fas fa-chevron-down"></i></a>
                              <ul class="submenu">
                                  <li><a href="about-us.html">About Us</a></li>
                                  <li class="has-submenu">
                                      <a href="javascript:void(0);">Authentication</a>
                                      <ul class="submenu">
                                          <li><a href="register.html">Signup</a></li>
                                          <li><a href="login.html">Signin</a></li>
                                          <li><a href="forgot-password.html">Forgot Password</a></li>
                                          <li><a href="reset-password.html">Reset Password</a></li>
                                      </ul>
                                  </li>
                                  <li class="has-submenu">
                                      <a href="javascript:void(0);">Booking</a>
                                      <ul class="submenu">
                                          <li><a href="booking-payment.html">Booking Checkout</a></li>
                                          <li><a href="booking.html">Booking</a></li>
                                          <li><a href="invoice-details.html">Invoice Details</a></li>
                                      </ul>
                                  </li>
                                  <li class="has-submenu">
                                      <a href="javascript:void(0);">Error Page</a>
                                      <ul class="submenu">
                                          <li><a href="error-404.html">404 Error</a></li>
                                          <li><a href="error-500.html">500 Error</a></li>
                                      </ul>
                                  </li>
                                  <li><a href="pricing.html">Pricing</a></li>
                                  <li><a href="faq.html">FAQ</a></li>
                                  <li><a href="gallery.html">Gallery</a></li>
                                  <li><a href="our-team.html">Our Team</a></li>
                                  <li><a href="testimonial.html">Testimonials</a></li>
                                  <li><a href="terms-condition.html">Terms & Conditions</a></li>
                                  <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                  <li><a href="maintenance.html">Maintenance</a></li>
                                  <li><a href="coming-soon.html">Coming Soon</a></li>
                              </ul>
                          </li>
                          <li class="has-submenu">
                              <a href="https://dreamsrent.dreamguystech.com/html/href">Blog <i
                                      class="fas fa-chevron-down"></i></a>
                              <ul class="submenu">
                                  <li><a href="blog-list.html">Blog List</a></li>
                                  <li><a href="blog-grid.html">Blog Grid</a></li>
                                  <li><a href="blog-details.html">Blog Details</a></li>
                              </ul>
                          </li>
                          <li><a href="contact-us.html">Contact</a></li>
                          <li class="login-link">
                              <a href="register.html">Sign Up</a>
                          </li>
                          <li class="login-link">
                              <a href="login.html">Sign In</a>
                          </li>
                      </ul>
                  </div>
                  <ul class="nav header-navbar-rht">
                      <li class="nav-item">
                          <a class="nav-link header-login" href="login.html"><span><i
                                      class="fa-regular fa-user"></i></span>Sign In</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link header-reg" href="register.html"><span><i
                                      class="fa-solid fa-lock"></i></span>Sign Up</a>
                      </li>
                  </ul>
              </nav>
          </div>
        </header>
        <div className="breadcrumb-bar">
          <div className="container">
              <div className="row align-items-center text-center">
                  <div className="col-md-12 col-12">
                      <h2 className="breadcrumb-title">Chevrolet Camaro</h2>
                      <nav aria-label="breadcrumb" className="page-breadcrumb">
                          <ol className="breadcrumb">
                              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                              <li className="breadcrumb-item"><a href="javascript:void(0);">Listings</a></li>
                              <li className="breadcrumb-item active" aria-current="page">Chevrolet Camaro</li>
                          </ol>
                      </nav>
                  </div>
              </div>
          </div>
        </div>
        {/* <OwlCarousel
            className="owl-theme"
            loop
            margin={10}
            nav
        >
            <div class="item"><h4>1</h4></div>
            <div class="item"><h4>2</h4></div>
            <div class="item"><h4>3</h4></div>
            <div class="item"><h4>4</h4></div>
            <div class="item"><h4>5</h4></div>
            <div class="item"><h4>6</h4></div>
            <div class="item"><h4>7</h4></div>
            <div class="item"><h4>8</h4></div>
            <div class="item"><h4>9</h4></div>
            <div class="item"><h4>10</h4></div>
            <div class="item"><h4>11</h4></div>
            <div class="item"><h4>12</h4></div>
        </OwlCarousel> */}
        <Carousel>
                <div>
                    <img src="assets/1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>

        <section className="product-detail-head">
            <div className="container">
                <div className="detail-page-head">
                    <div className="detail-headings">
                        <div className="star-rated">
                            <div className="list-rating">
                                <span className="year">2023</span>
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star filled"></i>
                                <span className="d-inline-block average-list-rating"> 5.0 </span>
                            </div>
                            <div className="camaro-info">
                                <h3>Chevrolet Camaro</h3>
                                <div className="camaro-location">
                                    <div className="camaro-location-inner">
                                        <i className="feather-map-pin me-2"></i>
                                        <span className="me-2"> <b>Location :</b> Miami St, Destin, FL 32550, USA </span>
                                    </div>
                                    <div className="camaro-locations-inner">
                                        <i className="feather-eye me-2"></i>
                                        <span><b>Views :</b> 250 </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="details-btn">
                        <a href="https://dreamsrent.dreamguystech.com/html/href"> <img src="assets/img/git-compare.svg" alt="l" />Compare</a>
                        <a href="https://dreamsrent.dreamguystech.com/html/href"><i className="feather-heart"></i> Wishlist</a>
                    </div>
                </div>
            </div>
        </section>

        <section className="section product-details">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="detail-product">
                            <div className="slider detail-bigimg">
                            <Carousel>
                                <div className="product-img">
                                    <img src="assets/img/cars/slider-01.jpg" alt="Slider"/>
                                </div>
                                <div className="product-img">
                                    <img src="assets/img/cars/slider-02.jpg" alt="Slider"/>
                                </div>
                                <div className="product-img">
                                    <img src="assets/img/cars/slider-03.jpg" alt="Slider"/>
                                </div>
                                <div className="product-img">
                                    <img src="assets/img/cars/slider-04.jpg" alt="Slider"/>
                                </div>
                                <div className="product-img">
                                    <img src="assets/img/cars/slider-05.jpg" alt="Slider"/>
                                </div>
                              </Carousel>
                            </div>
                            {/* <div className="slider slider-nav-thumbnails">
                                <div><img src="assets/img/cars/slider-thum-01.jpg" alt="product image" /></div>
                                <div><img src="assets/img/cars/slider-thum-02.jpg" alt="product image"/></div>
                                <div><img src="assets/img/cars/slider-thum-03.jpg" alt="product image"/></div>
                                <div><img src="assets/img/cars/slider-thum-04.jpg" alt="product image"/></div>
                                <div><img src="assets/img/cars/slider-thum-05.jpg" alt="product image"/></div>
                            </div> */}
                        </div>
                        <div className="review-sec extra-service">
                            <div className="review-header">
                                <h4>Extra Service</h4>
                            </div>
                            <span>Baby Seat - $10</span>
                        </div>

                        <div className="review-sec specification-card ">
                            <div className="review-header">
                                <h4>Specifications</h4>
                            </div>
                            <div className="card-body">
                                <div className="lisiting-featues">
                                    <div className="row">
                                        <div className="featureslist d-flex align-items-center col-lg-3 col-md-4">
                                            <div className="feature-img">
                                                <img src="assets/img/specification/specification-icon-1.svg" alt="l"/>
                                            </div>
                                            <div className="featues-info">
                                                <span>Body </span>
                                                <h6> Sedan</h6>
                                            </div>
                                        </div>
                                        <div className="featureslist d-flex align-items-center col-lg-3 col-md-4">
                                            <div className="feature-img">
                                                <img src="assets/img/specification/specification-icon-2.svg" alt="l"/>
                                            </div>
                                            <div className="featues-info">
                                                <span>Make </span>
                                                <h6> Nisssan</h6>
                                            </div>
                                        </div>
                                        <div className="featureslist d-flex align-items-center col-lg-3 col-md-4">
                                            <div className="feature-img">
                                                <img src="assets/img/specification/specification-icon-3.svg" alt="l"/>
                                            </div>
                                            <div className="featues-info">
                                                <span>Transmission </span>
                                                <h6> Automatic</h6>
                                            </div>
                                        </div>
                                        <div className="featureslist d-flex align-items-center col-lg-3 col-md-4">
                                            <div className="feature-img">
                                                <img src="assets/img/specification/specification-icon-4.svg" alt="l" />
                                            </div>
                                            <div className="featues-info">
                                                <span>Fuel Type </span>
                                                <h6> Diesel</h6>
                                            </div>
                                        </div>
                                        <div className="featureslist d-flex align-items-center col-lg-3 col-md-4">
                                            <div className="feature-img">
                                                <img src="assets/img/specification/specification-icon-5.svg" alt="l" />
                                            </div>
                                            <div className="featues-info">
                                                <span>Mileage </span>
                                                <h6>16 Km</h6>
                                            </div>
                                        </div>
                                        <div className="featureslist d-flex align-items-center col-lg-3 col-md-4">
                                            <div className="feature-img">
                                                <img src="assets/img/specification/specification-icon-6.svg" alt="l" />
                                            </div>
                                            <div className="featues-info">
                                                <span>Drivetrian </span>
                                                <h6>Front Wheel</h6>
                                            </div>
                                        </div>
                                        <div className="featureslist d-flex align-items-center col-lg-3 col-md-4">
                                            <div className="feature-img">
                                                <img src="assets/img/specification/specification-icon-7.svg" alt="l" />
                                            </div>
                                            <div className="featues-info">
                                                <span>Year</span>
                                                <h6> 2018</h6>
                                            </div>
                                        </div>
                                        <div className="featureslist d-flex align-items-center col-lg-3 col-md-4">
                                            <div className="feature-img">
                                                <img src="assets/img/specification/specification-icon-8.svg" alt="l" />
                                            </div>
                                            <div className="featues-info">
                                                <span>AC </span>
                                                <h6> Air Condition</h6>
                                            </div>
                                        </div>
                                        <div className="featureslist d-flex align-items-center col-lg-3 col-md-4">
                                            <div className="feature-img">
                                                <img src="assets/img/specification/specification-icon-9.svg" alt="l" />
                                            </div>
                                            <div className="featues-info">
                                                <span>VIN </span>
                                                <h6> 45456444</h6>
                                            </div>
                                        </div>
                                        <div className="featureslist d-flex align-items-center col-lg-3 col-md-4">
                                            <div className="feature-img">
                                                <img src="assets/img/specification/specification-icon-10.svg" alt="l" />
                                            </div>
                                            <div className="featues-info">
                                                <span>Door </span>
                                                <h6> 4 Doors</h6>
                                            </div>
                                        </div>
                                        <div className="featureslist d-flex align-items-center col-lg-3 col-md-4">
                                            <div className="feature-img">
                                                <img src="assets/img/specification/specification-icon-11.svg" alt="l" />
                                            </div>
                                            <div className="featues-info">
                                                <span>Brake </span>
                                                <h6> ABS</h6>
                                            </div>
                                        </div>
                                        <div className="featureslist d-flex align-items-center col-lg-3 col-md-4">
                                            <div className="feature-img">
                                                <img src="assets/img/specification/specification-icon-12.svg" alt="l" />
                                            </div>
                                            <div className="featues-info">
                                                <span>Engine (Hp) </span>
                                                <h6> 3,000</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="review-sec listing-feature">
                            <div className="review-header">
                                <h4>Car Features</h4>
                            </div>
                            <div className="listing-description">
                                <div className="row">
                                    <div className="col-md-4">
                                        <ul>
                                            <li><span><i className="fa-solid fa-check-double"></i></span>Multi-zone A/C</li>
                                            <li><span><i className="fa-solid fa-check-double"></i></span>Heated front seats
                                            </li>
                                            <li><span><i className="fa-solid fa-check-double"></i></span>Andriod Auto</li>
                                            <li><span><i className="fa-solid fa-check-double"></i></span>Navigation system
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4">
                                        <ul>
                                            <li><span><i className="fa-solid fa-check-double"></i></span>Premium sound
                                                system</li>
                                            <li><span><i className="fa-solid fa-check-double"></i></span>Bluetooth</li>
                                            <li><span><i className="fa-solid fa-check-double"></i></span>Keyles Start</li>
                                            <li><span><i className="fa-solid fa-check-double"></i></span>Memory seat</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4">
                                        <ul>
                                            <li><span><i className="fa-solid fa-check-double"></i></span>6 Cylinders</li>
                                            <li><span><i className="fa-solid fa-check-double"></i></span>Adaptive Cruise
                                                Control</li>
                                            <li><span><i className="fa-solid fa-check-double"></i></span>Intermittent wipers
                                            </li>
                                            <li><span><i className="fa-solid fa-check-double"></i></span>4 power windows
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="review-sec extra-service mb-0">
                            <div className="review-header">
                                <h4>Description of Listing</h4>
                            </div>
                            <div className="description-list">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard
                                    dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                    scrambled it to make a type specimen
                                    book. It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged.
                                </p>
                                <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                                    Ipsum passages, and more recently with
                                    desktop publishing software like Aldus PageMaker including versions of Lorem
                                    Ipsum.It was popularised in the 1960s with the
                                    release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                                    desktop publishing software like Aldus
                                    PageMaker including versions of Lorem Ipsum.
                                </p>
                                <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                                    Ipsum passages, and more recently with
                                    desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                                <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                                    Ipsum passages, and more recently with
                                    desktop publishing software like Aldus PageMaker including versions of Lorem
                                    Ipsum.It was popularised in the 1960s with the
                                    release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                                    desktop publishing software like Aldus
                                    PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                        </div>
                        <div className="review-sec extra-service mb-0">
                            <div className="review-header">
                                <h4>Video</h4>
                            </div>
                            <div className="short-video">
                                <iframe src="https://www.youtube.com/embed/ExJZAegsOis" width="100"
                                    height="350"></iframe>
                            </div>
                        </div>
                        <div className="review-sec listing-review">
                            <div className="review-header">
                                <h4>Reviews<span className="me-2">(2)</span></h4>
                                <div className="reviewbox-list-rating">
                                    <p>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                        <span> (5 out of 5)</span>
                                    </p>
                                </div>
                            </div>
                            <div className="review-card">
                                <div className="review-header-group">
                                    <div className="review-widget-header">
                                        <span className="review-widget-img">
                                            <img src="assets/img/profiles/avatar-01.jpg" className="img-fluid" alt="l"/>
                                        </span>
                                        <div className="review-design">
                                            <h6>Johnson</h6>
                                            <p>02 Jan 2023</p>
                                        </div>
                                    </div>
                                    <div className="reviewbox-list-rating">
                                        <p>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <span> (5.0)</span>
                                        </p>
                                    </div>
                                </div>
                                <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                                    Ipsum passages, and more recently with desktop publishing software like Aldus
                                    PageMaker including versions of Lorem Ipsum.It was popularised in the 1960s </p>
                                <ul className="review-list-rating">
                                    <li>
                                        quality
                                        <p>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                        </p>
                                    </li>
                                    <li>
                                        Price
                                        <p>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                        </p>
                                    </li>
                                    <li>
                                        Comfort
                                        <p>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                        </p>
                                    </li>
                                    <li>
                                        Driving
                                        <p>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="review-card">
                                <div className="review-header-group">
                                    <div className="review-widget-header">
                                        <span className="review-widget-img">
                                            <img src="assets/img/profiles/avatar-02.jpg" className="img-fluid" alt="l"/>
                                        </span>
                                        <div className="review-design">
                                            <h6>Casandra</h6>
                                            <p>02 Jan 2023</p>
                                        </div>
                                    </div>
                                    <div className="reviewbox-list-rating">
                                        <p>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <span> (5.0)</span>
                                        </p>
                                    </div>
                                </div>
                                <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                                    Ipsum passages, and more recently with desktop publishing software like Aldus
                                    PageMaker including versions of Lorem Ipsum.It was popularised in the 1960s </p>
                                <ul className="review-list-rating">
                                    <li>
                                        quality
                                        <p>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                        </p>
                                    </li>
                                    <li>
                                        Price
                                        <p>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                        </p>
                                    </li>
                                    <li>
                                        Comfort
                                        <p>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                        </p>
                                    </li>
                                    <li>
                                        Driving
                                        <p>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="review-sec leave-reply-form">
                            <div className="review-header">
                                <h4>Leave a Reply</h4>
                            </div>
                            <ul className="review-list-rating mb-3">
                                <li>
                                    quality
                                    <p>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                    </p>
                                </li>
                                <li>
                                    Price
                                    <p>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                    </p>
                                </li>
                                <li>
                                    Comfort
                                    <p>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                    </p>
                                </li>
                                <li>
                                    Driving
                                    <p>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                    </p>
                                </li>
                            </ul>
                            <div className="card-body">
                                <div className="review-list">
                                    <ul>
                                        <li className="review-box feedbackbox mb-0">
                                            <div className="review-details">
                                                <form className="#">
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <label>Full Name <span
                                                                        className="text-danger">*</span></label>
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <label>Email Address <span
                                                                        className="text-danger">*</span></label>
                                                                <input type="email" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label>Comments </label>
                                                                <textarea rows="4" className="form-control"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="submit-btn">
                                                        <button className="btn btn-primary submit-review" type="submit">
                                                            Submit Review</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 theiaStickySidebar">
                        <div className="review-sec mt-0">
                            <div className="review-header">
                                <h4>Check Availability</h4>
                            </div>
                            <div className>
                                <form className>
                                    <ul>
                                        <li className="column-group-main">
                                            <div className="form-group">
                                                <label>Pickup Location</label>
                                                <div className="group-img">
                                                    <input type="text" className="form-control"
                                                        placeholder="45, 4th Avanue  Mark Street USA" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="column-group-main">
                                            <div className="form-group">
                                                <label>Dropoff Location</label>
                                                <div className="group-img">
                                                    <input type="text" className="form-control"
                                                        placeholder="78, 10th street Laplace USA" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="column-group-main">
                                            <div className="form-group m-0">
                                                <label>Pickup Date</label>
                                            </div>
                                            <div className="form-group-wrapp sidebar-form">
                                                <div className="form-group me-2">
                                                    <div className="group-img">
                                                        <input type="text" className="form-control datetimepicker"
                                                            placeholder="04/11/2023" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="group-img">
                                                        <input type="text" className="form-control timepicker"
                                                            placeholder="11:00 AM" />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="column-group-main">
                                            <div className="form-group m-0">
                                                <label>Return Date</label>
                                            </div>
                                            <div className="form-group-wrapp sidebar-form">
                                                <div className="form-group me-2">
                                                    <div className="group-img">
                                                        <input type="text" className="form-control datetimepicker"
                                                            placeholder="04/11/2023" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="group-img">
                                                        <input type="text" className="form-control timepicker"
                                                            placeholder="11:00 AM" />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="column-group-last">
                                            <div className="form-group mb-0">
                                                <div className="search-btn">
                                                    <button className="btn btn-primary check-available w-100" type="button"
                                                        data-bs-toggle="modal" data-bs-target="#pages_edit"> Check
                                                        Availability</button>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                        <div className="review-sec extra-service mt-0">
                            <div className="review-header">
                                <h4>Listing Owner Details</h4>
                            </div>
                            <div className="owner-detail">
                                <div className="owner-img">
                                    <a href="https://dreamsrent.dreamguystech.com/html/href"><img
                                            src="assets/img/profiles/avatar-07.jpg" alt="l" /></a>
                                </div>
                                <div className="reviewbox-list-rating">
                                    <h5><a>Brooklyn Cars</a></h5>
                                    <p>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                        <span> (5.0)</span>
                                    </p>
                                </div>
                            </div>
                            <ul className="booking-list">
                                <li>
                                    No of Listings
                                    <span>05</span>
                                </li>
                                <li>
                                    No of Bookings
                                    <span>225</span>
                                </li>
                                <li>
                                    Verification
                                    <h6>Verified</h6>
                                </li>
                            </ul>
                            <div className="message-btn">
                                <a href="listing-details.html#" className="btn btn-order">Message to owner</a>
                            </div>
                        </div>
                        <div className="review-sec share-car mt-0">
                            <div className="review-header">
                                <h4>Share this car</h4>
                            </div>
                            <ul className="nav-social">
                                <li>
                                    <a href="javascript:void(0)"><i
                                            className="fa-brands fa-facebook-f fa-facebook fi-icon"></i></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)"><i className="fab fa-instagram fi-icon"></i></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)"><i className="fab fa-behance fi-icon"></i></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)"><i className="fa-brands fa-pinterest-p fi-icon"></i></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)"><i className="fab fa-twitter fi-icon"></i> </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)"><i className="fab fa-linkedin fi-icon"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="review-sec share-car mt-0 mb-0">
                            <div className="review-header">
                                <h4>View Location</h4>
                            </div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509170.989457427!2d-123.80081967108484!3d37.192957227641294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1669181581381!5m2!1sen!2sin"
                                className="iframe-video"></iframe>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="details-car-grid">
                            <div className="details-slider-heading">
                                <h3>You May be Interested in</h3>
                            </div>
                            <div className="car-details-slider owl-carousel">
                              <Carousel showArrows={false} dynamicHeight={true}>
                                <div className="card">
                                    <div className="listing-item pb-0">
                                        <div className="listing-img">
                                            <a href="listing-details.html">
                                                <img src="assets/img/cars/car-02.jpg" className="img-fluid" alt="KIA" />
                                            </a>
                                            <div className="fav-item">
                                                <span className="featured-text">KIA</span>
                                                <a href="javascript:void(0)" className="fav-icon">
                                                    <i className="feather-heart"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="listing-content">
                                            <div className="listing-features">
                                                <div className="author-img">
                                                    <img src="assets/img/profiles/avatar-02.jpg" alt="author" />
                                                </div>
                                                <h3 className="listing-title">
                                                    <a href="javascript:void(0)">Kia Soul 2016</a>
                                                </h3>
                                                <div className="list-rating">
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <span>(5.0)</span>
                                                </div>
                                            </div>
                                            <div className="listing-details-group">
                                                <ul>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-05.svg"
                                                                alt="Auto" /></span>
                                                        <p>Auto</p>
                                                    </li>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-02.svg"
                                                                alt="22 KM" /></span>
                                                        <p>22 KM</p>
                                                    </li>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-03.svg"
                                                                alt="Petrol" /></span>
                                                        <p>Petrol</p>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-04.svg"
                                                                alt="Diesel" /></span>
                                                        <p>Diesel</p>
                                                    </li>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-05.svg"
                                                                alt="2016" /></span>
                                                        <p>2016</p>
                                                    </li>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-06.svg"
                                                                alt="Persons" /></span>
                                                        <p>5 Persons</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="listing-location-details">
                                                <div className="listing-price">
                                                    <span className="me-2"><i className="feather-map-pin"></i></span> Belgium
                                                </div>
                                                <div className="listing-price">
                                                    <h6>$80 <span>/ Day</span></h6>
                                                </div>
                                            </div>
                                            <div className="listing-button">
                                                <a href="listing-details.html" className="btn btn-order"><span><i
                                                            className="feather-calendar me-2"></i></span>Rent Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="listing-item pb-0">
                                        <div className="listing-img">
                                            <a href="listing-details.html">
                                                <img src="assets/img/cars/car-07.jpg" className="img-fluid" alt="Audi" />
                                            </a>
                                            <div className="fav-item">
                                                <span className="featured-text">Chevrolet</span>
                                                <a href="javascript:void(0)" className="fav-icon">
                                                    <i className="feather-heart"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="listing-content">
                                            <div className="listing-features">
                                                <div className="author-img">
                                                    <img src="assets/img/profiles/avatar-07.jpg" alt="author" />
                                                </div>
                                                <h3 className="listing-title">
                                                    <a href="javascript:void(0)">Chevrolet Pick Truck 3.5L</a>
                                                </h3>
                                                <div className="list-rating">
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <span>(5.0)</span>
                                                </div>
                                            </div>
                                            <div className="listing-details-group">
                                                <ul>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-05.svg"
                                                                alt="Manual" /></span>
                                                        <p>Manual</p>
                                                    </li>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-02.svg"
                                                                alt="10 KM" /></span>
                                                        <p>10 KM</p>
                                                    </li>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-03.svg"
                                                                alt="Petrol" /></span>
                                                        <p>Petrol</p>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-04.svg"
                                                                alt="Power" /></span>
                                                        <p>Power</p>
                                                    </li>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-05.svg"
                                                                alt="2012"  /></span>
                                                        <p>2012</p>
                                                    </li>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-06.svg"
                                                                alt="Persons" /></span>
                                                        <p>5 Persons</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="listing-location-details">
                                                <div className="listing-price">
                                                    <span><i className="feather-map-pin"></i></span> Spain
                                                </div>
                                                <div className="listing-price">
                                                    <h6>$77 <span>/ Day</span></h6>
                                                </div>
                                            </div>
                                            <div className="listing-button">
                                                <a href="listing-details.html" className="btn btn-order"><span><i
                                                            className="feather-calendar me-2"></i></span>Rent Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="listing-item pb-0">
                                        <div className="listing-img">
                                            <a href="listing-details.html">
                                                <img src="assets/img/cars/car-03.jpg" className="img-fluid" alt="Audi" />
                                            </a>
                                            <div className="fav-item">
                                                <span className="featured-text">Audi</span>
                                                <a href="javascript:void(0)" className="fav-icon">
                                                    <i className="feather-heart"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="listing-content">
                                            <div className="listing-features">
                                                <div className="author-img">
                                                    <img src="assets/img/profiles/avatar-03.jpg" alt="author" />
                                                </div>
                                                <h3 className="listing-title">
                                                    <a href="javascript:void(0)">Audi A3 2019 new</a>
                                                </h3>
                                                <div className="list-rating">
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <span>(5.0)</span>
                                                </div>
                                            </div>
                                            <div className="listing-details-group">
                                                <ul>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-05.svg"
                                                                alt="Manual" /></span>
                                                        <p>Manual</p>
                                                    </li>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-02.svg"
                                                                alt="10 KM" /></span>
                                                        <p>10 KM</p>
                                                    </li>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-03.svg"
                                                                alt="Petrol" /></span>
                                                        <p>Petrol</p>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-04.svg"
                                                                alt="Power" /></span>
                                                        <p>Power</p>
                                                    </li>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-05.svg"
                                                                alt="2019" /></span>
                                                        <p>2019</p>
                                                    </li>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-06.svg"
                                                                alt="Persons" /></span>
                                                        <p>4 Persons</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="listing-location-details">
                                                <div className="listing-price">
                                                    <span><i className="feather-map-pin"></i></span> Newyork, USA
                                                </div>
                                                <div className="listing-price">
                                                    <h6>$45 <span>/ Day</span></h6>
                                                </div>
                                            </div>
                                            <div className="listing-button">
                                                <a href="listing-details.html" className="btn btn-order"><span><i
                                                            className="feather-calendar me-2"></i></span>Rent Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="listing-item pb-0">
                                        <div className="listing-img">
                                            <a href="listing-details.html">
                                                <img src="assets/img/cars/car-04.jpg" className="img-fluid" alt="Audi" />
                                            </a>
                                            <div className="fav-item">
                                                <span className="featured-text">Ferrai</span>
                                                <a href="javascript:void(0)" className="fav-icon">
                                                    <i className="feather-heart"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="listing-content">
                                            <div className="listing-features">
                                                <div className="author-img">
                                                    <img src="assets/img/profiles/avatar-04.jpg" alt="author" />
                                                </div>
                                                <h3 className="listing-title">
                                                    <a href="javascript:void(0)">Ferrari 458 MM Speciale</a>
                                                </h3>
                                                <div className="list-rating">
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <span>(5.0)</span>
                                                </div>
                                            </div>
                                            <div className="listing-details-group">
                                                <ul>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-05.svg"
                                                                alt="Manual" /></span>
                                                        <p>Manual</p>
                                                    </li>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-02.svg"
                                                                alt="14 KM" /></span>
                                                        <p>14 KM</p>
                                                    </li>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-03.svg"
                                                                alt="Diesel" /></span>
                                                        <p>Diesel</p>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-04.svg"
                                                                alt="Basic" /></span>
                                                        <p>Basic</p>
                                                    </li>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-05.svg"
                                                                alt="2022" /></span>
                                                        <p>2022</p>
                                                    </li>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-06.svg"
                                                                alt="Persons" /></span>
                                                        <p>5 Persons</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="listing-location-details">
                                                <div className="listing-price">
                                                    <span><i className="feather-map-pin"></i></span> Newyork, USA
                                                </div>
                                                <div className="listing-price">
                                                    <h6>$160 <span>/ Day</span></h6>
                                                </div>
                                            </div>
                                            <div className="listing-button">
                                                <a href="listing-details.html" className="btn btn-order"><span><i
                                                            className="feather-calendar me-2"></i></span>Rent Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="listing-item pb-0">
                                        <div className="listing-img">
                                            <a href="listing-details.html">
                                                <img src="assets/img/cars/car-05.jpg" className="img-fluid" alt="Audi" />
                                            </a>
                                            <div className="fav-item">
                                                <span className="featured-text">Chevrolet</span>
                                                <a href="javascript:void(0)" className="fav-icon">
                                                    <i className="feather-heart"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="listing-content">
                                            <div className="listing-features">
                                                <div className="author-img">
                                                    <img src="assets/img/profiles/avatar-05.jpg" alt="author" />
                                                </div>
                                                <h3 className="listing-title">
                                                    <a href="javascript:void(0)">2018 Chevrolet Camaro</a>
                                                </h3>
                                                <div className="list-rating">
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <span>(5.0)</span>
                                                </div>
                                            </div>
                                            <div className="listing-details-group">
                                                <ul>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-05.svg"
                                                                alt="Manual" /></span>
                                                        <p>Manual</p>
                                                    </li>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-02.svg"
                                                                alt="18 KM" /></span>
                                                        <p>18 KM</p>
                                                    </li>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-03.svg"
                                                                alt="Diesel" /></span>
                                                        <p>Diesel</p>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-04.svg"
                                                                alt="Power" /></span>
                                                        <p>Power</p>
                                                    </li>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-05.svg"
                                                                alt="2018" /></span>
                                                        <p>2018</p>
                                                    </li>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-06.svg"
                                                                alt="Persons" /></span>
                                                        <p>4 Persons</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="listing-location-details">
                                                <div className="listing-price">
                                                    <span><i className="feather-map-pin"></i></span> Germany
                                                </div>
                                                <div className="listing-price">
                                                    <h6>$36 <span>/ Day</span></h6>
                                                </div>
                                            </div>
                                            <div className="listing-button">
                                                <a href="listing-details.html" className="btn btn-order"><span><i
                                                            className="feather-calendar me-2"></i></span>Rent Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="listing-item pb-0">
                                        <div className="listing-img">
                                            <a href="listing-details.html">
                                                <img src="assets/img/cars/car-06.jpg" className="img-fluid" alt="Audi" />
                                            </a>
                                            <div className="fav-item">
                                                <span className="featured-text">Acura</span>
                                                <a href="javascript:void(0)" className="fav-icon">
                                                    <i className="feather-heart"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="listing-content">
                                            <div className="listing-features">
                                                <div className="author-img">
                                                    <img src="assets/img/profiles/avatar-06.jpg" alt="author" />
                                                </div>
                                                <h3 className="listing-title">
                                                    <a href="javascript:void(0)">Acura Sport Version</a>
                                                </h3>
                                                <div className="list-rating">
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <span>(5.0)</span>
                                                </div>
                                            </div>
                                            <div className="listing-details-group">
                                                <ul>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-05.svg"
                                                                alt="Auto" /></span>
                                                        <p>Auto</p>
                                                    </li>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-02.svg"
                                                                alt="12 KM" /></span>
                                                        <p>12 KM</p>
                                                    </li>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-03.svg"
                                                                alt="Diesel"/></span>
                                                        <p>Diesel</p>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-04.svg"
                                                                alt="Power" /></span>
                                                        <p>Power</p>
                                                    </li>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-05.svg"
                                                                alt="2013" /></span>
                                                        <p>2013</p>
                                                    </li>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-06.svg"
                                                                alt="Persons" /></span>
                                                        <p>5 Persons</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="listing-location-details">
                                                <div className="listing-price">
                                                    <span><i className="feather-map-pin"></i></span> Newyork, USA
                                                </div>
                                                <div className="listing-price">
                                                    <h6>$30 <span>/ Day</span></h6>
                                                </div>
                                            </div>
                                            <div className="listing-button">
                                                <a href="listing-details.html" className="btn btn-order"><span><i
                                                            className="feather-calendar me-2"></i></span>Rent Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="listing-item pb-0">
                                        <div className="listing-img">
                                            <a href="listing-details.html">
                                                <img src="assets/img/cars/car-02.jpg" className="img-fluid" alt="KIA" />
                                            </a>
                                            <div className="fav-item">
                                                <span className="featured-text">KIA</span>
                                                <a href="javascript:void(0)" className="fav-icon">
                                                    <i className="feather-heart"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="listing-content">
                                            <div className="listing-features">
                                                <div className="author-img">
                                                    <img src="assets/img/profiles/avatar-02.jpg" alt="author" />
                                                </div>
                                                <h3 className="listing-title">
                                                    <a href="javascript:void(0)">Kia Soul 2016</a>
                                                </h3>
                                                <div className="list-rating">
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <span>(5.0)</span>
                                                </div>
                                            </div>
                                            <div className="listing-details-group">
                                                <ul>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-05.svg"
                                                                alt="Auto" /></span>
                                                        <p>Auto</p>
                                                    </li>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-02.svg"
                                                                alt="22 KM" /></span>
                                                        <p>22 KM</p>
                                                    </li>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-03.svg"
                                                                alt="Petrol" /></span>
                                                        <p>Petrol</p>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-04.svg"
                                                                alt="Diesel" /></span>
                                                        <p>Diesel</p>
                                                    </li>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-05.svg"
                                                                alt="2016" /></span>
                                                        <p>2016</p>
                                                    </li>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-06.svg"
                                                                alt="Persons" /></span>
                                                        <p>5 Persons</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="listing-location-details">
                                                <div className="listing-price">
                                                    <span><i className="feather-map-pin"></i></span> Belgium
                                                </div>
                                                <div className="listing-price">
                                                    <h6>$80 <span>/ Day</span></h6>
                                                </div>
                                            </div>
                                            <div className="listing-button">
                                                <a href="listing-details.html" className="btn btn-order"><span><i
                                                            className="feather-calendar me-2"></i></span>Rent Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="listing-item pb-0">
                                        <div className="listing-img">
                                            <a href="listing-details.html">
                                                <img src="assets/img/cars/car-05.jpg" className="img-fluid" alt="Audi" />
                                            </a>
                                            <div className="fav-item">
                                                <span className="featured-text">Chevrolet</span>
                                                <a href="javascript:void(0)" className="fav-icon">
                                                    <i className="feather-heart"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="listing-content">
                                            <div className="listing-features">
                                                <div className="author-img">
                                                    <img src="assets/img/profiles/avatar-05.jpg" alt="author" />
                                                </div>
                                                <h3 className="listing-title">
                                                    <a href="javascript:void(0)">2018 Chevrolet Camaro</a>
                                                </h3>
                                                <div className="list-rating">
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <span>(5.0)</span>
                                                </div>
                                            </div>
                                            <div className="listing-details-group">
                                                <ul>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-05.svg"
                                                                alt="Manual" /></span>
                                                        <p>Manual</p>
                                                    </li>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-02.svg"
                                                                alt="18 KM" /></span>
                                                        <p>18 KM</p>
                                                    </li>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-03.svg"
                                                                alt="Diesel" /></span>
                                                        <p>Diesel</p>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-04.svg"
                                                                alt="Power" /></span>
                                                        <p>Power</p>
                                                    </li>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-05.svg"
                                                                alt="2018" /></span>
                                                        <p>2018</p>
                                                    </li>
                                                    <li>
                                                        <span><img src="assets/img/icons/car-parts-06.svg"
                                                                alt="Persons" /></span>
                                                        <p>4 Persons</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="listing-location-details">
                                                <div className="listing-price">
                                                    <span><i className="feather-map-pin"></i></span> Germany
                                                </div>
                                                <div className="listing-price">
                                                    <h6>$36 <span>/ Day</span></h6>
                                                </div>
                                            </div>
                                            <div className="listing-button">
                                                <a href="listing-details.html" className="btn btn-order"><span><i
                                                            className="feather-calendar me-2"></i></span>Rent Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="modal custom-modal fade check-availability-modal" id="pages_edit" role="dialog">
            <div className="modal-dialog modal-dialog-centered modal-md">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="form-header text-start mb-0">
                            <h4 className="mb-0 text-dark fw-bold">Availability Details</h4>
                        </div>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span className="align-center" aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="available-for-ride">
                                    <p><i className="fa-regular fa-circle-check"></i>Chevrolet Camaro is available for a
                                        ride</p>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="row booking-info">
                                    <div className="col-md-4 pickup-address">
                                        <h5>Pickup</h5>
                                        <p>45, 4th Avanue Mark Street USA</p>
                                        <span>Date & time : 11 Jan 2023</span>
                                    </div>
                                    <div className="col-md-4 drop-address">
                                        <h5>Drop Off</h5>
                                        <p>78, 10th street Laplace USA</p>
                                        <span>Date & time : 11 Jan 2023</span>
                                    </div>
                                    <div className="col-md-4 booking-amount">
                                        <h5>Booking Amount</h5>
                                        <h6><span>$300 </span> /day</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="booking-info seat-select">
                                    <h6>Extra Service</h6>
                                    <label className="custom_check">
                                        <input type="checkbox" name="rememberme" className="rememberme"/>
                                        <span className="checkmark"></span>
                                        Baby Seat - <span className="ms-2">$10</span>
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="booking-info pay-amount">
                                    <h6>Deposit Option</h6>
                                    <div className="radio radio-btn">
                                        <label>
                                            <input type="radio" name="radio" /> Pay Deposit
                                        </label>
                                    </div>
                                    <div className="radio">
                                        <label>
                                            <input type="radio" name="radio"/> Full Amount
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6"></div>
                            <div className="col-md-6">
                                <div className="booking-info service-tax">
                                    <ul>
                                        <li>Booking Price <span>$300</span></li>
                                        <li>Extra Service <span>$10</span></li>
                                        <li>Tax <span>$5</span></li>
                                    </ul>
                                </div>
                                <div className="grand-total">
                                    <h5>Grand Total</h5>
                                    <span>$315</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <a href="booking.html" className="btn btn-back">Go to Details<i
                                className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <footer class="footer">
          <div class="footer-top aos" data-aos="fade-down">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-7">
                          <div class="row">
                              <div class="col-lg-4 col-md-6">

                                  <div class="footer-widget footer-menu">
                                      <h5 class="footer-title">About Company</h5>
                                      <ul>
                                          <li>
                                              <a href="https://dreamsrent.dreamguystech.com/html/about.html">Our
                                                  Company</a>
                                          </li>
                                          <li>
                                              <a href="javascript:void(0)">Shop Toyota</a>
                                          </li>
                                          <li>
                                              <a href="javascript:void(0)">Dreamsrentals USA</a>
                                          </li>
                                          <li>
                                              <a href="javascript:void(0)">Dreamsrentals Worldwide</a>
                                          </li>
                                          <li>
                                              <a href="javascript:void(0)">Dreamsrentals Racing</a>
                                          </li>
                                          <li>
                                              <a href="javascript:void(0)">Dreamsrentals Racing</a>
                                          </li>
                                          <li>
                                              <a href="javascript:void(0)">Virtual Auto Show</a>
                                          </li>
                                      </ul>
                                  </div>

                              </div>
                              <div class="col-lg-4 col-md-6">

                                  <div class="footer-widget footer-menu">
                                      <h5 class="footer-title">Vehicles Type</h5>
                                      <ul>
                                          <li>
                                              <a href="javascript:void(0)">All Vehicles</a>
                                          </li>
                                          <li>
                                              <a href="javascript:void(0)">SUVs</a>
                                          </li>
                                          <li>
                                              <a href="javascript:void(0)">Trucks</a>
                                          </li>
                                          <li>
                                              <a href="javascript:void(0)">Cars</a>
                                          </li>
                                          <li>
                                              <a href="javascript:void(0)">Crossovers</a>
                                          </li>
                                          <li>
                                              <a href="javascript:void(0)">Electrified Vehicles</a>
                                          </li>
                                          <li>
                                              <a href="javascript:void(0)">Hybrids</a>
                                          </li>
                                      </ul>
                                  </div>

                              </div>
                              <div class="col-lg-4 col-md-6">

                                  <div class="footer-widget footer-menu">
                                      <h5 class="footer-title">Quick links</h5>
                                      <ul>
                                          <li>
                                              <a href="javascript:void(0)">My Account</a>
                                          </li>
                                          <li>
                                              <a href="javascript:void(0)">Champaigns</a>
                                          </li>
                                          <li>
                                              <a href="javascript:void(0)">Dreamsrental Dealers</a>
                                          </li>
                                          <li>
                                              <a href="javascript:void(0)">Deals and Incentive</a>
                                          </li>
                                          <li>
                                              <a href="javascript:void(0)">Financial Services</a>
                                          </li>
                                          <li>
                                              <a href="javascript:void(0)">Dreamsrental Insurance</a>
                                          </li>
                                          <li>
                                              <a href="javascript:void(0)">Dreamsrental Care</a>
                                          </li>
                                      </ul>
                                  </div>

                              </div>
                          </div>
                      </div>
                      <div class="col-lg-5">
                          <div class="footer-contact footer-widget">
                              <h5 class="footer-title">Contact Info</h5>
                              <div class="footer-contact-info">
                                  <div class="footer-address">
                                      <span><i class="feather-phone-call"></i></span>
                                      <div class="addr-info">
                                          <a href="tel:+1(888)7601940">+ 1 (888) 760 1940</a>
                                      </div>
                                  </div>
                                  <div class="footer-address">
                                      <span><i class="feather-mail"></i></span>
                                      <div class="addr-info">
                                          <a
                                              href="https://dreamsrent.dreamguystech.com/cdn-cgi/l/email-protection#d3a0a6a3a3bca1a793b6abb2bea3bfb6fdb0bcbe"><span
                                                  class="__cf_email__"
                                                  data-cfemail="166563666679646256736e777b667a733875797b">[email&#160;protected]</span></a>
                                      </div>
                                  </div>
                                  <div class="update-form">
                                      <form action="listing-details.html#">
                                          <span><i class="feather-mail"></i></span>
                                          <input type="email" class="form-control" placeholder="Enter You Email Here" />
                                          <button type="submit" class="btn btn-subscribe"><span><i
                                                      class="feather-send"></i></span></button>
                                      </form>
                                  </div>
                              </div>
                              <div class="footer-social-widget">
                                  <h6>Connect with us</h6>
                                  <ul class="nav-social">
                                      <li>
                                          <a href="javascript:void(0)"><i
                                                  class="fa-brands fa-facebook-f fa-facebook fi-icon"></i></a>
                                      </li>
                                      <li>
                                          <a href="javascript:void(0)"><i class="fab fa-instagram fi-icon"></i></a>
                                      </li>
                                      <li>
                                          <a href="javascript:void(0)"><i class="fab fa-behance fi-icon"></i></a>
                                      </li>
                                      <li>
                                          <a href="javascript:void(0)"><i class="fab fa-twitter fi-icon"></i> </a>
                                      </li>
                                      <li>
                                          <a href="javascript:void(0)"><i class="fab fa-linkedin fi-icon"></i></a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="footer-bottom">
              <div class="container">

                  <div class="copyright">
                      <div class="row align-items-center">
                          <div class="col-md-6">
                              <div class="copyright-text">
                                  <p>© 2023 Dreams Rent. All Rights Reserved.</p>
                              </div>
                          </div>
                          <div class="col-md-6">

                              <div class="copyright-menu">
                                  <div class="vistors-details">
                                      <ul class="d-flex">
                                          <li><a href="javascript:void(0)"><img class="img-fluid"
                                                      src="assets/img/icons/paypal.svg" alt="Paypal" /></a></li>
                                          <li><a href="javascript:void(0)"><img class="img-fluid"
                                                      src="assets/img/icons/visa.svg" alt="Visa" /></a></li>
                                          <li><a href="javascript:void(0)"><img class="img-fluid"
                                                      src="assets/img/icons/master.svg" alt="Master" /></a></li>
                                          <li><a href="javascript:void(0)"><img class="img-fluid"
                                                      src="assets/img/icons/applegpay.svg" alt="applegpay" /></a></li>
                                      </ul>
                                  </div>
                              </div>

                          </div>
                      </div>
                  </div>

              </div>
          </div>
        </footer>
      </div>
    </>
  )
}