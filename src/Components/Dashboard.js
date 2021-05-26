import React from "react";
import "../App.css";
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import sliderimg from '../images/slider-img.png';
import mobilepng from '../images/intro-images/mobile-application.png';
import amazingstore from '../images/intro-images/amazing-store-features.png';
import getdiscovervote from '../images/intro-images/get-discover-vote.png';
import manageprofile from '../images/intro-images/manage-your-profile.png';
import premiumservice from '../images/intro-images/premium-services.png';
import html5 from '../images/icon/html5.png';
import bootst from '../images/icon/bootstrap.png';
import psd from '../images/icon/psd.png';
import sas from '../images/icon/sass.png';
import respons from '../images/icon/responsive.png';
import document from '../images/icon/documentation.png';
import thumb1 from '../images/thumb1.png';
import user6 from '../images/user6.png';
import user8 from '../images/user8.png';
import user5 from '../images/user5.png';
import user4 from '../images/user4.png';
import user3 from '../images/user3.png';
import snap1 from '../images/screenshot/screenshot1.png';
import snap2 from '../images/screenshot/screenshot2.png';
import snap3 from '../images/screenshot/screenshot3.png';
import snap4 from '../images/screenshot/screenshot4.png';
import snap5 from '../images/screenshot/screenshot5.png';
import snap6 from '../images/screenshot/screenshot6.png';
import snap7 from '../images/screenshot/screenshot7.png';
import snap8 from '../images/screenshot/screenshot8.png';
import snap9 from '../images/screenshot/screenshot9.png';
import shop from '../images/shop.png';


class Dashboard extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         account: "",
       
      }
   }


   render() {
      return (
         <>
            <Header />
            <div>

               <section class="slider-area" id="home">
                  <div class="container">
                     <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                           <div class="slider-left-info">
                              <h1>NFT Marketplace - Landing Page Template</h1>
                              <p class="theme-description">This is a template for the NFT marketplace, where you can create a store, list digital items. It comes with great features and an amazing design.</p>
                              <div class="slider-btn ">
                                 <ul>
                                    <li><a href="/Index" class="theme-btn">View Demo <i class="fas fa-arrow-right"></i></a></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                           <div class="slider-images">
                              <img src={sliderimg} alt="" />
                           </div>
                        </div>
                     </div>
                  </div>
               </section>

               <section class="demo-area page-paddings" id="demo">
                  <div class="container">
                     <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                           <div class="section-title text-center">
                              <h2 data-watermark="Demo">Demo Pages</h2>
                              <p class="subtitle">Browse all the pages included in this template, view all here! Check all the features and things added into pages from the browsing items page to listing items and many more things.</p>
                           </div>
                        </div>
                     </div>
                     <div class="row">
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                           <a href="/Index" class="d-block">
                              <span class="image-bg">
                                 <span class="image-shop-scroll demo-page1"></span>
                              </span>
                              <h3 class="theme-title">Main Page</h3>
                           </a>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                           <a href="/Browse" class="d-block">
                              <span class="image-bg">
                                 <span class="image-shop-scroll demo-page2"></span>
                              </span>
                              <h3 class="theme-title">Browse Page</h3>
                           </a>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                           <a href="/Art" class="d-block">
                              <span class="image-bg">
                                 <span class="image-shop-scroll demo-page3"></span>
                              </span>
                              <h3 class="theme-title">Category Page</h3>
                           </a>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                           <a href="/Detail" class="d-block">
                              <span class="image-bg">
                                 <span class="image-shop-scroll demo-page4"></span>
                              </span>
                              <h3 class="theme-title">Detail Page</h3>
                           </a>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                           <a href="/Createassets" class="d-block">
                              <span class="image-bg">
                                 <span class="image-shop-scroll demo-page5"></span>
                              </span>
                              <h3 class="theme-title">Create List</h3>
                           </a>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                           <a href="/Signin" class="d-block">
                              <span class="image-bg">
                                 <span class="image-shop-scroll demo-page6"></span>
                              </span>
                              <h3 class="theme-title">Login Page</h3>
                           </a>
                        </div>
                     </div>
                  </div>
               </section>

               <section class="demo-area user-panel-demo page-background">
                  <div class="container">
                     <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                           <div class="section-title text-center">
                              <h2 data-watermark="Demo">User Panel Demo</h2>
                              <p class="subtitle">You will also get a user panel, with great features and a great user interface. Down below you can view all the pages of the user panel.</p>
                           </div>
                        </div>
                     </div>
                     <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                           <a href="./NFT_Marketplace_HTML5_Template/dashboard.html" class="d-block">
                              <span class="image-bg">
                                 <span class="image-shop-scroll demo-page7"></span>
                              </span>
                              <h3 class="theme-title">Stores</h3>
                           </a>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                           <a href="./NFT_Marketplace_HTML5_Template/my-earnings.html" class="d-block">
                              <span class="image-bg">
                                 <span class="image-shop-scroll demo-page8"></span>
                              </span>
                              <h3 class="theme-title">My Earnings</h3>
                           </a>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                           <a href="./NFT_Marketplace_HTML5_Template/my-orders.html" class="d-block">
                              <span class="image-bg">
                                 <span class="image-shop-scroll demo-page9"></span>
                              </span>
                              <h3 class="theme-title">My Order</h3>
                           </a>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                           <a href="./NFT_Marketplace_HTML5_Template/current-item-list.html" class="d-block">
                              <span class="image-bg">
                                 <span class="image-shop-scroll demo-page10"></span>
                              </span>
                              <h3 class="theme-title">Current Item</h3>
                           </a>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                           <a href="./NFT_Marketplace_HTML5_Template/won-auctions.html" class="d-block">
                              <span class="image-bg">
                                 <span class="image-shop-scroll demo-page11"></span>
                              </span>
                              <h3 class="theme-title">Won Auctions</h3>
                           </a>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                           <a href="./NFT_Marketplace_HTML5_Template/history.html" class="d-block">
                              <span class="image-bg">
                                 <span class="image-shop-scroll demo-page12"></span>
                              </span>
                              <h3 class="theme-title">History</h3>
                           </a>
                        </div>
                     </div>
                  </div>
               </section>

               <section class="intro-section-area page-paddings" id="intro">
                  <div class="container">
                     <div class="intro-section-box page-paddings">
                        <div class="row">
                           <div class="col-xl-6 col-lg-6 col-md-6 col-12">
                              <div class="intro-section-info">
                                 <h2>Also, get a great mobile application.</h2>
                                 <p class="theme-description">We have also worked on a Figma-based mobile application with new features and amazing-looking UI which make it easy to use for any user. It has 45+ High-quality unique screens, SVG Icons & free Google fonts Files Included.</p>
                              </div>
                           </div>
                           <div class="col-xl-6 col-lg-6 col-md-6 col-12">
                              <div class="intro-section-media">
                                 <img src={mobilepng} alt="" />
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="intro-section-box intro-section-order page-paddings">
                        <div class="row">
                           <div class="col-xl-6 col-lg-6 col-md-6 col-12 intro-order-images">
                              <div class="intro-section-media">
                                 <img src={amazingstore} alt="" />
                              </div>
                           </div>
                           <div class="col-xl-6 col-lg-6 col-md-6 col-12 intro-order-info">
                              <div class="intro-section-info">
                                 <h2>Get amazing store-creating features.</h2>
                                 <p class="theme-description">This NFT marketplace has an amazing store-creating feature that allows any user to create their store just by filling up basic details about the store and now they can sell your items through your store on this NFT Marketplace.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="intro-section-box page-paddings">
                        <div class="row">
                           <div class="col-xl-6 col-lg-6 col-md-6 col-12">
                              <div class="intro-section-info">
                                 <h2>Get Discover page and vote option.</h2>
                                 <p class="theme-description">With the discovery page now get to see the best items listed on the website and you can also vote on them and make them more valuable. This is a page one of its kind design with the best feature and amazing plugin which can be used with it.</p>
                              </div>
                           </div>
                           <div class="col-xl-6 col-lg-6 col-md-6 col-12">
                              <div class="intro-section-media">
                                 <img src={getdiscovervote} alt="" />
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="intro-section-box intro-section-order page-paddings">
                        <div class="row">
                           <div class="col-xl-6 col-lg-6 col-md-6 col-12 intro-order-images">
                              <div class="intro-section-media">
                                 <img src={manageprofile} alt="" />
                              </div>
                           </div>
                           <div class="col-xl-6 col-lg-6 col-md-6 col-12 intro-order-info">
                              <div class="intro-section-info">
                                 <h2>Manage your profile page.</h2>
                                 <p class="theme-description">We have created an account profile page with all the important info pages that you might need, like profile and account info, manage store, items you’re earning, and much more features like My NFTs, connecting digital wallets.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="intro-section-box page-paddings">
                        <div class="row">
                           <div class="col-xl-6 col-lg-6 col-md-6 col-12">
                              <div class="intro-section-info">
                                 <h2>Get a premium services page.</h2>
                                 <p class="theme-description">With our premium service, you can have the best store which looks outstanding and eye-catching and become the best creator with our service. We believe in having amazing stores which in return increase the sales.</p>
                              </div>
                           </div>
                           <div class="col-xl-6 col-lg-6 col-md-6 col-12">
                              <div class="intro-section-media">
                                 <img src={premiumservice} alt="" />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>

               <section class="features-area page-background" id="features">
                  <div class="container">
                     <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                           <div class="section-title text-center">
                              <h2 data-watermark="Demo">NFT Template Features</h2>
                              <p class="subtitle">Down below you can see all the features that are included in this template, and we have made sure that the template is easy to customize and use. </p>
                           </div>
                        </div>
                     </div>
                     <div class="row">
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                           <div class="features-box">
                              <div class="features-icon">
                                 <span><img src={html5} alt="" /></span>
                              </div>
                              <div class="features-info">
                                 <h3 class="theme-title">HTML, CSS & JS Files</h3>
                                 <p class="theme-description">It comes with a pack of 45+ <br />HTML files with popups and a help file so you can easily customize them!</p>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                           <div class="features-box">
                              <div class="features-icon">
                                 <span><img src={bootst} alt="" /></span>
                              </div>
                              <div class="features-info">
                                 <h3 class="theme-title">Bootstrap Compatible</h3>
                                 <p class="theme-description">We made this template compatible with Bootstrap v4.4.1 and ensured that there are no style conflicts to it.</p>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                           <div class="features-box">
                              <div class="features-icon">
                                 <span><img src={psd} alt="" /></span>
                              </div>
                              <div class="features-info">
                                 <h3 class="theme-title">PSD Files!</h3>
                                 <p class="theme-description">It comes with 45+ Photoshop <br />PSD files for you to customize as you want to and also customize<br /> it.</p>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                           <div class="features-box">
                              <div class="features-icon">
                                 <span><img src={sas} alt="" /></span>
                              </div>
                              <div class="features-info">
                                 <h3 class="theme-title">SASS CSS</h3>
                                 <p class="theme-description">Now you can easily customize<br /> this template using variables, nesting, mixins, inheritance, and more!</p>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                           <div class="features-box">
                              <div class="features-icon">
                                 <span><img src={respons} alt="" /></span>
                              </div>
                              <div class="features-info">
                                 <h3 class="theme-title">Fully Responsive</h3>
                                 <p class="theme-description">This template is fully responsive so you can easily browse it from any device desktop, tablets, and smartphones.</p>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                           <div class="features-box">
                              <div class="features-icon">
                                 <span><img src={document} alt="" /></span>
                              </div>
                              <div class="features-info">
                                 <h3 class="theme-title">Help Documentation</h3>
                                 <p class="theme-description">This template also includes all <br />help guide documentation with <br />all the features and plugins included.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>

               <section class="testimonial-area page-paddings" id="testimonial">
                  <div class="container">
                     <div class="testimonial-main-box">
                        <div class="row">
                           <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                              <div class="testimonial-information">
                                 <h2>Our client's feedback from all over the world</h2>
                                 <p class="theme-description">Over time we have served so many people while keeping in mind their needs and experience while using our template. We always make sure our customers get what they are looking for with this template now they have NFT Marketplace.</p>
                                 <p class="theme-description">Go ahead and share your experience of using our NFT Marketplace template.</p>
                              </div>
                           </div>
                           <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                              <div class="testimonial-box-main">
                                 <div class="testimonial-slider">
                                    <OwlCarousel className='owl-theme' loop items={1} dots={true}>
                                       <div class="testimonial-item">
                                       <div class="testimonial-item-box ">
                                          <p class="theme-description">This is an amazing NFT marketplace template with great features and customizable options, it makes it easy to implement it.</p>
                                          <div class="testimonial-user clearfix">
                                             <div class="testimonial-media">
                                                <img src={thumb1} />
                                             </div>
                                             <div class="testimonial-info">
                                                <h3 class="theme-title">Milton Austin </h3>
                                                <p class="theme-description">CEO - Artin Tech</p>
                                             </div>
                                          </div>
                                          <div class="testimonial-ratting">
                                             <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>
                                          </div>
                                       </div>
                                       <div class="testimonial-item-box">
                                          <p class="theme-description">This is an amazing NFT marketplace template with great features and customizable options, it makes it easy to implement it.</p>
                                          <div class="testimonial-user clearfix">
                                             <div class="testimonial-media">
                                                <img src={user6} />
                                             </div>
                                             <div class="testimonial-info">
                                                <h3 class="theme-title">Danny Nesmith </h3>
                                                <p class="theme-description">CEO - Artin Tech</p>
                                             </div>
                                          </div>
                                          <div class="testimonial-ratting">
                                             <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>
                                          </div>
                                       </div>
                                       </div>
                                       <div class="testimonial-item">
                                       <div class="testimonial-item-box">
                                          <p class="theme-description">This is an amazing NFT marketplace template with great features and customizable options, it makes it easy to implement it.</p>
                                          <div class="testimonial-user clearfix">
                                             <div class="testimonial-media">
                                                <img src={user8} />
                                             </div>
                                             <div class="testimonial-info">
                                                <h3 class="theme-title">Lisa Phillips </h3>
                                                <p class="theme-description">CEO - Artin Tech</p>
                                             </div>
                                          </div>
                                          <div class="testimonial-ratting">
                                             <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>
                                          </div>
                                       </div>
                                       <div class="testimonial-item-box">
                                          <p class="theme-description">This is an amazing NFT marketplace template with great features and customizable options, it makes it easy to implement it.</p>
                                          <div class="testimonial-user clearfix">
                                             <div class="testimonial-media">
                                                <img src={user5} />
                                             </div>
                                             <div class="testimonial-info">
                                                <h3 class="theme-title">Eric Stringer </h3>
                                                <p class="theme-description">CEO - Artin Tech</p>
                                             </div>
                                          </div>
                                          <div class="testimonial-ratting">
                                             <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>
                                          </div>
                                       </div>
                                       </div>
                                       <div class="testimonial-item">
                                       <div class="testimonial-item-box">
                                          <p class="theme-description">This is an amazing NFT marketplace template with great features and customizable options, it makes it easy to implement it.</p>
                                          <div class="testimonial-user clearfix">
                                             <div class="testimonial-media">
                                                <img src={user4} />
                                             </div>
                                             <div class="testimonial-info">
                                                <h3 class="theme-title">Ryan Garcia </h3>
                                                <p class="theme-description">CEO - Artin Tech</p>
                                             </div>
                                          </div>
                                          <div class="testimonial-ratting">
                                             <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>
                                          </div>
                                       </div>
                                       <div class="testimonial-item-box">
                                          <p class="theme-description">This is an amazing NFT marketplace template with great features and customizable options, it makes it easy to implement it.</p>
                                          <div class="testimonial-user clearfix">
                                             <div class="testimonial-media">
                                                <img src={user3} />
                                             </div>
                                             <div class="testimonial-info">
                                                <h3 class="theme-title">Adriane Welch </h3>
                                                <p class="theme-description">CEO - Artin Tech</p>
                                             </div>
                                          </div>
                                          <div class="testimonial-ratting">
                                             <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>
                                          </div>
                                       </div>
                                       </div>
                                    </OwlCarousel>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>

               <section class="amazing-pages-area page-paddings" style={{ paddingTop: 0 }}>
                  <div class="container">
                     <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                           <div class="section-title text-center">
                              <h2 data-watermark="Demo">App Screenshots</h2>
                              <p class="subtitle">You can see the best and most viewed items; from all categories, we have a wide range of items available on our marketplace.</p>
                           </div>
                        </div>
                     </div>
                     <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                           <div class="app-screen-slider">
                              <OwlCarousel className='owl-theme' loop margin={0} items={4} nav={true} dots={false}>

                                 <div class="app-screen-item">
                                    <img src={snap1} alt="" />
                                 </div>
                                 <div class="app-screen-item">
                                    <img src={snap2} alt="" />
                                 </div>
                                 <div class="app-screen-item">
                                    <img src={snap3} alt="" />
                                 </div>
                                 <div class="app-screen-item">
                                    <img src={snap4} alt="" />
                                 </div>
                                 <div class="app-screen-item">
                                    <img src={snap5} alt="" />
                                 </div>
                                 <div class="app-screen-item">
                                    <img src={snap6} alt="" />
                                 </div>
                                 <div class="app-screen-item">
                                    <img src={snap7} alt="" />
                                 </div>
                                 <div class="app-screen-item">
                                    <img src={snap8} alt="" />
                                 </div>
                                 <div class="app-screen-item">
                                    <img src={snap9} alt="" />
                                 </div>
                              </OwlCarousel>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>

               <section class="earn-area mintable-pro-area page-paddings" style={{ paddingTop: 0 }}>
                  <div class="container">
                     <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                           <div class="earn-main-box">
                              <div class="earn-images">
                                 <img src={shop} alt="" />
                              </div>
                              <div class="earn-info">
                                 <h2>NFT – Marketplace Premium Service</h2>
                                 <p class="theme-description">Now sell more items and earn more with our premium service. Join our premium plan to best of best from our platform.</p>
                                 <div class="earn-btn">
                                    <a class="theme-btn" href="/Gopro">Go Pro <i class="fas fa-arrow-right"></i></a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
            </div>

            <Footer />
         </>
      )
   };

};

export default Dashboard;
