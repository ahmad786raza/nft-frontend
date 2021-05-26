
import React, { useState } from "react";
import Logowhite from '../images/logo-white.png';



function Footer() {
    return (
        <>
            <footer className="footer-main">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="footer-widget">
                                    <a href="/Index">
                                        <img src={Logowhite} alt="" />
                                    </a>
                                    <p className="theme-description">
                                        We are one of the best pre-designed template providers,
                      for all the niches with more than 800 designs.
                                    </p>
                                    <div className="footer-links clearfix">
                                        <div className="footer-icon-box">
                                            <a href="" title="Facebook">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </div>
                                        <div className="footer-icon-box">
                                            <a href="" title="Twitter">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </div>
                                        <div className="footer-icon-box">
                                            <a href="" title="Linkedin">
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-12">
                                <div className="footer-widget">
                                    <h3 className="theme-title">My account</h3>
                                    <div className="footer-menu-services">
                                        <ul className="menu-service-menu">
                                            <li>
                                                <a href="create-store.html">Create a Store</a>
                                            </li>
                                            <li>
                                                <a href="/Minitem">List an Item for sale</a>
                                            </li>
                                            <li>
                                                <a href="/Signin">My Profile</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-12">
                                <div className="footer-widget">
                                    <h3 className="theme-title">Need Help?</h3>
                                    <div className="footer-menu-services">
                                        <ul className="menu-service-menu">
                                            <li>
                                                <a href="/Contact">Help and support</a>
                                            </li>
                                            <li>
                                            <a href="/Faq">FAQ</a>
                                            </li>
                                            <li>
                                                <a href="/Contact">Contact us</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-12">
                                <div className="footer-widget">
                                    <h3 className="theme-title">Buy an Item</h3>
                                    <div className="footer-menu-services">
                                        <ul className="menu-service-menu">
                                            <li>
                                                <a href="/Browse">Browse Digital Items</a>
                                            </li>
                                            <li>
                                                <a href="/Browse">Browse Stores</a>
                                            </li>
                                            <li>
                                                <a href="/Browse">Where to buy NFTs</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="footer-widget">
                                    <h3 className="theme-title">Go pro</h3>
                                    <div className="footer-menu-services">
                                        <ul className="menu-service-menu">
                                            <li>
                                                <a href="/Gopro">Premium services</a>
                                            </li>
                                            <li>
                                                <a href="/PrivacyPolicy">Privacy Policy</a>
                                            </li>
                                            <li>
                                                <a href="/TermsOfUse">Terms of use</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="copyright-text text-center">
                                    <p>
                                        Copyright 2021 <a href="/Index">NFT Marketplace</a>{" "}
                      All Rights Reserved.
                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )

};

export default Footer;
