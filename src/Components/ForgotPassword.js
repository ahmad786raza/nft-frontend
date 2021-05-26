import React from 'react';
import LoGO from "../images/logo-white.png"



class Forgotpassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <div>
                <section class="user-screen-area">
                    <div class="user-screen-box">
                        <div class="user-screen-item screen-form">
                            <div class="user-form">
                                
                                    <div class="nft-input-box validate-input" data-validate="Name is required">
                                        <span class="label-nft-input">Email Address</span>
                                        <input class="nft-input" type="email" name="name" placeholder="name@example.com" />
                                        <span class="focus-nft-input"></span>
                                    </div>
                                    <div class="nft-links-btn">
                                        <button class="theme-btn">Forgot Password</button>
                                        <p class="theme-description text-center">Already have an account? <a href="login.html">Sign In!</a></p>
                                    </div>
                            </div>
                            <div class="user-copyright">
                                <p class="theme-description">Copyright 2021 <a href="index.html">NFT Marketplace</a> All Rights Reserved.</p>
                            </div>
                        </div>
                        <div class="user-screen-item screen-bg-image text-center">
                            <div class="user-logo">
                                <a href="index.html"><img src={LoGO} /></a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Forgotpassword;