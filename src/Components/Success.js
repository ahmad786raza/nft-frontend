import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Successimg from '../images/success.png';


function Success() {
    return (
        <>
            <Header />
            <div>

                <section class="order-sucsess-area page-paddings" style={{paddingTop: "177px"}}>
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="order-sucsess-box text-center">
                                    <div class="order-sucsess-images">
                                        <img src={Successimg} alt="" />
                                    </div>
                                    <div class="order-sucsess-info">
                                        <h1>Payment Successful.</h1>
                                        <p class="theme-description">Your payment was successful kindly see your transaction history to check payment status again.</p>
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

export default Success;

