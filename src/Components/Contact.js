import React from 'react';
import Header from './Header';
import Footer from './Footer';




class Contact extends React.Component {
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

                    {/* <section class="bradcrumb-area">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="bradcrumb-main">
                                        <div class="bradcrumb-title">
                                            <h1>Contact</h1>
                                        </div>
                                        <div class="bradcrumb-right clearfix">
                                            <ul class="clearfix">
                                                <li><a href="/Index">Home</a></li>
                                                <li>Contact</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}

                    <section class="contact-area page-paddings">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="section-title text-center">
                                        <h2 data-watermark="Contact">Reach out to us</h2>
                                        <div class="em_bar">
                                            <div class="em_bar_bg"></div>
                                        </div>
                                        <p class="subtitle">If you have any trouble related to our website or any item kindly contact us from here.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-8 col-lg-10 col-md-10 col-sm-12 col-12 offset-xl-2 offset-lg-1 offset-md-1">
                                    <div class="contact-box-main">
                                        <div class="row">
                                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div class="contact-box">
                                                    <div class="nft-input-box validate-input" data-validate="Name is required">
                                                        <span class="label-nft-input">First Name</span>
                                                        <input class="nft-input" type="text" name="name" placeholder="" />
                                                        <span class="focus-nft-input"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div class="contact-box">
                                                    <div class="nft-input-box validate-input" data-validate="Name is required">
                                                        <span class="label-nft-input">Last Name</span>
                                                        <input class="nft-input" type="text" name="name" placeholder="" />
                                                        <span class="focus-nft-input"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div class="contact-box">
                                                    <div class="nft-input-box validate-input" data-validate="Name is required">
                                                        <span class="label-nft-input">Email address</span>
                                                        <input class="nft-input" type="email" name="name" placeholder="name@example.com" required="" />
                                                        <span class="focus-nft-input"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div class="contact-box">
                                                    <div class="nft-input-box validate-input" data-validate="Name is required">
                                                        <span class="label-nft-input">What are you contacting us about?</span>
                                                        <select class="nft-input">
                                                            <option>List my contract/store</option>
                                                            <option>Technical Support</option>
                                                            <option>Business Enquiry</option>
                                                            <option>Media</option>
                                                            <option>Pro Services</option>
                                                            <option>Collaboration</option>
                                                        </select>
                                                        <span class="focus-nft-input"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div class="contact-box">
                                                    <div class="nft-input-box validate-input" data-validate="Name is required">
                                                        <span class="label-nft-input">Your message</span>
                                                        <textarea class="nft-input" type="email" name="name" placeholder="" rows="4" required=""></textarea>
                                                        <span class="focus-nft-input"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div class="contact-box text-left" style={{marginTop: "25px"}}>
                                                    <button class="theme-btn">Send Message</button>
                                                </div>
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

    }
};


export default Contact;