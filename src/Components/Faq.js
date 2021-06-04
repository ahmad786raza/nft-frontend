import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';


function Faq() {
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
                                        <h1>FAQ'S</h1>
                                    </div>
                                    <div class="bradcrumb-right clearfix">
                                        <ul class="clearfix">
                                            <li><a href="/Index">Home</a></li>
                                            <li>FAQ'S</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section class="faq-area page-paddings">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="section-title text-center">
                                    <h2 data-watermark="FAQ">Frequently Asked Questions</h2>
                                    <div class="em_bar">
                                        <div class="em_bar_bg"></div>
                                    </div>
                                    <p class="subtitle">We are offering a wide range of WordPress, HTML products and design resources that will come handy in your projects.</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="faq-box-main">
                                    <div class="faq-box">
                                        <h3 class="theme-title"><i class="fas fa-arrow-right"></i> What is NFT – Marketplace?</h3>
                                        <p class="theme-description">NFT – Marketplace is a platform to buy and sell digital items on the blockchain. This platform helps you to turn your content which can be as files, artwork, music, images, etc. Into digital items which exist on the blockchain. All These digital items exist on the blockchain using the smart contract which is easy to create through our platform. </p>
                                        <p class="theme-description">You can create a store as per categories and list items. Browse and buy digital items that are listed for sale once you buy them it is directly disposed to you in your wallet. As a creator you sell your item on our platform, all you have to do is create a store and list your items and smart contract.</p>
                                    </div>
                                    <div class="faq-box">
                                        <h3 class="theme-title"><i class="fas fa-arrow-right"></i> What does NFTs mean?</h3>
                                        <p class="theme-description">NFTs are non-fungible tokens that exist on blockchain like any other cryptocurrencies; every digital item has its own tokenize value. A normal token can be exchanged for the same type of token equally without any difference non-fungible tokens are used to create verifiable digital scarcity. NFTs are used in several specific applications that require unique digital items. </p>
                                        <p class="theme-description">Are NFTs – ERC-721 same: Ethereum community has adopted the ERC-721 protocol as a standard for Non-Fungible Tokens on Ethereum, there are other blockchains available and other formats that also contain non-fungible properties.</p>
                                    </div>
                                    <div class="faq-box">
                                        <h3 class="theme-title"><i class="fas fa-arrow-right"></i> Ethereum wallet and how to get it?</h3>
                                        <p class="theme-description">A wallet holds your cryptocurrency and digital items. Ethereum wallet simply means wallet which is used to receive & send Ethereum, to use our platform to create a store and listing items you need Ethereum wallet.</p>
                                        <p class="theme-description">There are so many digital wallets app and websites available with different fee structures; you can choose which seems perfect and safe to you.</p>
                                    </div>
                                    <div class="faq-box">
                                        <h3 class="theme-title"><i class="fas fa-arrow-right"></i> How to create an account?</h3>
                                        <p class="theme-description">Open our website, click on create an account then fill in the basic details include your name, email id, and user name, once create connect your crypto wallet or create one if you don't have it.</p>
                                    </div>
                                    <div class="faq-box">
                                        <h3 class="theme-title"><i class="fas fa-arrow-right"></i> Start creating items on the blockchain?</h3>
                                        <p class="theme-description">Create or listing the item can be done in two ways, first by creating your digital store and second by just listing your items on our platform. But creating your store will help you increase your brand name.</p>
                                    </div>
                                    <div class="faq-box">
                                        <h3 class="theme-title"><i class="fas fa-arrow-right"></i> How to create or list an item?</h3>
                                        <p class="theme-description">To create items you need a store, or else you can use the platform to list your items, once your item is ready to list, all you have to do is log in to your account and fill in the basic detail to have a smart contract.</p>
                                    </div>
                                    <div class="faq-box">
                                        <h3 class="theme-title"><i class="fas fa-arrow-right"></i> Can I sell items that are already in my wallet?</h3>
                                        <p class="theme-description">To sell an item, you need to have it in your wallet, if the item is there and all you have to do is click on sell which the help of contract address and token id. But make sure you have complete right to do that, if you have purchased it, read the smart contract first.</p>
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

export default Faq;