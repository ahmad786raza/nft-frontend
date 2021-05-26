import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Shopimg from '../images/shop.png';



class Gopro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <>
                <Header />

                <div>
                    <section class="bradcrumb-area">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="bradcrumb-main">
                                        <div class="bradcrumb-title">
                                            <h1>Pro Services</h1>
                                        </div>
                                        <div class="bradcrumb-right clearfix">
                                            <ul class="clearfix">
                                                <li><a href="/Index">Home</a></li>
                                                <li>Pro Services</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="earn-area page-paddings">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="earn-main-box">
                                        <div class="earn-info">
                                            <h2>Create a premium look to your creation</h2>
                                            <div class="em_bar">
                                                <div class="em_bar_bg"></div>
                                            </div>
                                            <p class="theme-description">With our premium service, you can have the best store which looks outstanding and eye-catching and become the best creator with our service. We believe in having amazing stores which in return increase the sales.</p>
                                            <p class="theme-description">Sell - Globally. Earn - All the time</p>
                                            <div class="go-pro-btn">
                                                <a href="" class="theme-btn transparent-btn">Start Selling</a>
                                            </div>
                                        </div>
                                        <div class="earn-images">
                                            <img src={Shopimg} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="pro-stores-area page-background">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div class="pro-store-box text-center">
                                        <h3 class="theme-title">Advertising</h3>
                                        <p class="theme-description">Advertising is one of the best ways to increase your visibility, increases the chances of total sales which will benefit you; there are different packages available.</p>
                                        <div class="go-pro-btn">
                                            <a href="" class="theme-btn">See advertising packages <i class="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div class="pro-store-box text-center">
                                        <h3 class="theme-title">Custom design store</h3>
                                        <p class="theme-description">Now have a custom design storefront, display amazing information which helps you grow your store and increase your sales. With this package, you can get it done.</p>
                                        <div class="go-pro-btn">
                                            <a href="" class="theme-btn">See Custom Stores packages <i class="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="advertising-packages-area page-paddings">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="section-title text-center">
                                        <h2 data-watermark="Packages">Package of Advertisement</h2>
                                        <div class="em_bar">
                                            <div class="em_bar_bg"></div>
                                        </div>
                                        <p class="subtitle">With our different packages of advertisement, you get what you want from social media, to email marketing and press release.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 pricing-width">
                                    <div class="pricing-box">
                                        <div class="pricing-header text-center">
                                            <h2>Social Media ads</h2>
                                            <p class="theme-description">Reach thousands of eyes</p>
                                        </div>
                                        <div class="pricing-content">
                                            <p class="theme-description">Reach thousands of eyes, your listings will be shared on our entire social media platforms like Twitter, Medium, and other platforms like Cent and Discord.</p>
                                            <ul>
                                                <li>Only one store or listing on all social media on all social media</li>
                                                <li>Your store or listing will be included in our weekly share (articles)</li>
                                            </ul>
                                        </div>
                                        <div class="pricing-plan text-center">
                                            <h2>$15</h2>
                                            <a href="" class="theme-btn transparent-btn">Add To Cart</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 pricing-width">
                                    <div class="pricing-box">
                                        <div class="pricing-header text-center">
                                            <h2>Email Marketing</h2>
                                            <p class="theme-description">Your creation inside their inbox</p>
                                        </div>
                                        <div class="pricing-content">
                                            <p class="theme-description">Now reach thousands of people through email, notify them about your store and new listing, sales and share information about your store.</p>
                                            <ul>
                                                <li>Promote up to 3 listing or 2 store</li>
                                                <li>Get some free credit that can be used on our platform</li>
                                            </ul>
                                        </div>
                                        <div class="pricing-plan text-center">
                                            <h2>$50</h2>
                                            <a href="" class="theme-btn">Add To Cart</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 pricing-width">
                                    <div class="pricing-box">
                                        <div class="pricing-header text-center">
                                            <h2>Press Release </h2>
                                            <p class="theme-description">Reach thousands of eyes</p>
                                        </div>
                                        <div class="pricing-content">
                                            <p class="theme-description">Release a newsletter about your NFTs and blockchain store and distributed it across hundreds of news websites. And reach the maximum audience.</p>
                                            <ul>
                                                <li>Promote up to 5 listing or 3 store</li>
                                                <li>Reach global audience by sharing it globally</li>
                                                <li>Social media ads</li>
                                                <li>Get some free credit that can be used on our platform</li>
                                                <li style={{ color: " #ff0000" }}>$75 for the already written article, $100 if you want an article written by our expert writer.</li>
                                            </ul>
                                        </div>
                                        <div class="pricing-plan text-center">
                                            <h2>$100 / $75</h2>
                                            <a href="" class="theme-btn transparent-btn">Add To Cart</a>
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
    }
}


export default Gopro;