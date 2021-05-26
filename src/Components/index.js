import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Sliderimg from '../images/slide-image.png';
import Prom1 from '../images/promotion1.png';
import Prom2 from '../images/promotion2.gif';
import Prom3 from '../images/promotion3.png';
import Prom4 from '../images/promotion4.png';
import Prom5 from '../images/promotion5.png';
import About from '../images/about.png';
import Nftgov from '../images/nft/nft_governance.png';
import Supernft from '../images/nft/super_nft.png';
import Imag from '../images/image.jpg';
import Art1 from '../images/game/art_1.png'
import Art2 from '../images/game/art_2.png';
import Art5 from '../images/game/art_5.png';
import Art8 from '../images/game/art_8.png';
import Art_1 from '../images/domain/art_1.png';
import Art4 from '../images/game/art_4.gif';
import Art_2 from '../images/domain/art_2.png';
import Art9 from '../images/game/art_9.gif';
import Tokenimg from '../images/token.png';
import Store from '../images/store.png';
import Art_5 from '../images/domain/art_5.png';
import Artt_5 from '../images/game/art_5.png';
import Art3 from '../images/music/art_5.png';
import Art_4 from '../images/music/art_1.png';
import Art_3 from '../images/music/art_2.png';
import Art10 from '../images/game/art_10.png';
import Art6 from '../images/game/art_11.png';
import Art7 from '../images/music/art_7.png';
import Mintale1 from '../images/mintale1.png';
import Mintale2 from '../images/mintale2.png';
import Mintale3 from '../images/mintale3.png';
import Shopimg from '../images/shop.png';




class Index extends React.Component {
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

                    <section class="slider-area">
                        <div class="slider-inner">
                            <div class="container">
                                <div class="row">
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div class="slider-information">
                                            <h1>Crypto-Collectibles Marketplace.</h1>
                                            <div class="em_bar">
                                                <div class="em_bar_bg"></div>
                                            </div>
                                            <p class="theme-description">We are all new crypto-collectibles marketplace from arts, music, games to domains, and templates, and many more in the list. Now you can buy & sell rare items.</p>
                                            <div class="slider-btn">
                                                <a class="theme-btn" href="/Browse">Start Selling</a>
                                                <a class="theme-btn sl-sale-btn" href="/Art">List item for sale</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div class="slider-images">
                                            <img src={Sliderimg} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div class="slider-bottom-arrow">
            <i class="fas fa-arrow-down"></i>
         </div>  */}
                    </section>

                    <section class="promisional-secret-area" style={{ paddingBottom: '60px' }}>
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-12">

                                    <div class="promotion-sreact-slider clearfix">
                                    <OwlCarousel className='owl-theme' loop margin={30} items={3} nav={true} dots={false}>

                                        <div class="promotion-sreact-box">
                                            <a href="/Detail">
                                                <div class="promotion-sreact-img">
                                                    <img src={Prom1} alt="" />
                                                </div>
                                                <div class="promotion-sreact-info">
                                                    <h3 class="theme-title">The standard Lorem Ipsum passage, used since</h3>
                                                    <p class="theme-description">by Mike Deodato</p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="promotion-sreact-box">
                                            <a href="/Detail">
                                                <div class="promotion-sreact-img">
                                                    <img src={Prom2} alt="" />
                                                </div>
                                                <div class="promotion-sreact-info">
                                                    <h3 class="theme-title">The standard Lorem Ipsum passage, used since</h3>
                                                    <p class="theme-description">by Mike Deodato</p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="promotion-sreact-box">
                                            <a href="/Detail">
                                                <div class="promotion-sreact-img">
                                                    <img src={Prom3} alt="" />
                                                </div>
                                                <div class="promotion-sreact-info">
                                                    <h3 class="theme-title">The standard Lorem Ipsum passage, used since</h3>
                                                    <p class="theme-description">by Mike Deodato</p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="promotion-sreact-box">
                                            <a href="/Detail">
                                                <div class="promotion-sreact-img">
                                                    <img src={Prom4} alt="" />
                                                </div>
                                                <div class="promotion-sreact-info">
                                                    <h3 class="theme-title">The standard Lorem Ipsum passage, used since</h3>
                                                    <p class="theme-description">by Mike Deodato</p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="promotion-sreact-box">
                                            <a href="/Detail">
                                                <div class="promotion-sreact-img">
                                                    <img src={Prom5} alt="" />
                                                </div>
                                                <div class="promotion-sreact-info">
                                                    <h3 class="theme-title">The standard Lorem Ipsum passage, used since</h3>
                                                    <p class="theme-description">by Mike Deodato</p>
                                                </div>
                                            </a>
                                        </div>
                                        </OwlCarousel>
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
                                        <div class="earn-images">
                                            <img src={About} alt="" />
                                        </div>
                                        <div class="earn-info">
                                            <h6>About</h6>
                                            <h2>NFT – Marketplace Buy & sell over the blockchain.</h2>
                                            <p class="theme-description">We provide you with the best NFT marketplace to sell items on the blockchain, buy & sell digital items.</p>
                                            <div class="em_bar">
                                                <div class="em_bar_bg"></div>
                                            </div>
                                            <div class="singel-about-box">
                                                <div class="singel-about-box-item clearfix">
                                                    <div class="singel-about-box-icon">
                                                        <img src={Nftgov} alt="" />
                                                    </div>
                                                    <div class="singel-about-box-info">
                                                        <h3 class="theme-title">Create your store</h3>
                                                        <p class="theme-description">You can create your store and increase your brand and sell your items over there digitally.</p>
                                                    </div>
                                                </div>
                                                <div class="singel-about-box-item clearfix">
                                                    <div class="singel-about-box-icon">
                                                        <img src={Supernft} alt="" />
                                                    </div>
                                                    <div class="singel-about-box-info">
                                                        <h3 class="theme-title">Create or list your items.</h3>
                                                        <p class="theme-description">Now you can list items in your store and if you don't have one you can also list it on our store for free.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="most-viewed-items-area page-paddings" style={{ paddingTop: '0px' }}>
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="section-title text-center">
                                        <h6>Items</h6>
                                        <h2 data-watermark="Items">Items Viewed The Most</h2>
                                        <div class="em_bar">
                                            <div class="em_bar_bg"></div>
                                        </div>
                                        <p class="subtitle">You can see the best and most viewed items; from all categories, we have a wide range of items available on our marketplace.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="item-group">
                                        <div class="item-group-content">
                                            <div class="hot-bids-athore clearfix">
                                                <a href=""><img src={Imag} alt="" /></a>
                                                <a href=""><img src={Imag} alt="" /></a>
                                                <a href=""><img src={Imag} alt="" /></a>
                                            </div>
                                            <div class="items-like">
                                                <a href="javascript:void(0)"><i class="far fa-heart"></i></a>
                                            </div>
                                            <div class="item-group-avtar">
                                                <img src={Art1} alt="" />
                                            </div>
                                            <h3 class="theme-title"><a href="/Detail">Best 3D Games With Great Features</a></h3>
                                            <p class="theme-description">Highest bid <span>2.5 WETH</span></p>
                                            <div class="item-group-btn">
                                                <a class="theme-btn" href="/Detail">Place Bid</a>
                                                <a class="item-detail-btn" href="/Detail"><i class="fas fa-info-circle"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="item-group">
                                        <div class="item-group-content">
                                            <div class="items-like">
                                                <a href="javascript:void(0)"><i class="far fa-heart"></i></a>
                                            </div>
                                            <div class="item-group-avtar">
                                                <img src={Art5} alt="" />
                                            </div>
                                            <h3 class="theme-title"><a href="/Detail">Indoor Football Table Game</a></h3>
                                            <p class="theme-description">Highest bid <span>2.5 WETH</span></p>
                                            <div class="item-group-btn">
                                                <a class="theme-btn" href="/Detail">Place Bid</a>
                                                <a class="item-detail-btn" href="/Detail"><i class="fas fa-info-circle"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="item-group">
                                        <div class="item-group-content">
                                            <div class="hot-bids-athore clearfix">
                                                <a href=""><img src={Imag} alt="" /></a>
                                                <a href=""><img src={Imag} alt="" /></a>
                                                <a href=""><img src={Imag} alt="" /></a>
                                            </div>
                                            <div class="items-like">
                                                <a href="javascript:void(0)"><i class="far fa-heart"></i></a>
                                            </div>
                                            <div class="item-group-avtar">
                                                <img src={Art2} alt="" />
                                            </div>
                                            <h3 class="theme-title"><a href="/Detail">Classic Modern Funk Music</a></h3>
                                            <p class="theme-description">Highest bid <span>2.5 WETH</span></p>
                                            <div class="item-group-btn">
                                                <a class="theme-btn" href="/Detail">Place Bid</a>
                                                <a class="item-detail-btn" href="/Detail"><i class="fas fa-info-circle"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="item-group">
                                        <div class="item-group-content">
                                            <div class="items-like">
                                                <a href="javascript:void(0)"><i class="far fa-heart"></i></a>
                                            </div>
                                            <div class="item-group-avtar">
                                                <img src={Art8} alt="" />
                                            </div>
                                            <h3 class="theme-title"><a href="/Detail">Pure World Music For Kids</a></h3>
                                            <p class="theme-description">Highest bid <span>2.5 WETH</span></p>
                                            <div class="item-group-btn">
                                                <a class="theme-btn" href="/Detail">Place Bid</a>
                                                <a class="item-detail-btn" href="/Detail"><i class="fas fa-info-circle"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="item-group">
                                        <div class="item-group-content">
                                            <div class="items-like">
                                                <a href="javascript:void(0)"><i class="far fa-heart"></i></a>
                                            </div>
                                            <div class="item-group-avtar">
                                                <img src={Art_1} alt="" />
                                            </div>
                                            <h3 class="theme-title"><a href="/Detail">Legass.Crypto</a></h3>
                                            <p class="theme-description">Highest bid <span>2.5 WETH</span></p>
                                            <div class="item-group-btn">
                                                <a class="theme-btn" href="/Detail">Place Bid</a>
                                                <a class="item-detail-btn" href="/Detail"><i class="fas fa-info-circle"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="item-group">
                                        <div class="item-group-content">
                                            <div class="items-like">
                                                <a href="javascript:void(0)"><i class="far fa-heart"></i></a>
                                            </div>
                                            <div class="item-group-avtar">
                                                <img src={Art_2} alt="" />
                                            </div>
                                            <h3 class="theme-title"><a href="buy-detail.html">Are Looking For Amazing Template</a></h3>
                                            <p class="theme-description">Highest bid <span>2.5 WETH</span></p>
                                            <div class="item-group-btn">
                                                <a class="theme-btn" href="checkout.html">Buy Now</a>
                                                <a class="item-detail-btn" href="buy-detail.html"><i class="fas fa-info-circle"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="item-group">
                                        <div class="item-group-content">
                                            <div class="items-like">
                                                <a href="javascript:void(0)"><i class="far fa-heart"></i></a>
                                            </div>
                                            <div class="item-group-avtar">
                                                <img src={Art4} alt="" />
                                            </div>
                                            <h3 class="theme-title"><a href="buy-detail.html">Dive Into Deep Blue Ocean</a></h3>
                                            <p class="theme-description">Highest bid <span>2.5 WETH</span></p>
                                            <div class="item-group-btn">
                                                <a class="theme-btn" href="checkout.html">Buy Now</a>
                                                <a class="item-detail-btn" href="buy-detail.html"><i class="fas fa-info-circle"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="item-group">
                                        <div class="item-group-content">
                                            <div class="hot-bids-athore clearfix">
                                                <a href=""><img src={Imag} alt="" /></a>
                                                <a href=""><img src={Imag} alt="" /></a>
                                                <a href=""><img src={Imag} alt="" /></a>
                                            </div>
                                            <div class="items-like">
                                                <a href="javascript:void(0)"><i class="far fa-heart"></i></a>
                                            </div>
                                            <div class="item-group-avtar">
                                                <img src={Art9} alt="" />
                                            </div>
                                            <h3 class="theme-title"><a href="buy-detail.html">How To Make Music All New Series</a></h3>
                                            <p class="theme-description">Highest bid <span>2.5 WETH</span></p>
                                            <div class="item-group-btn">
                                                <a class="theme-btn" href="checkout.html">Buy Now</a>
                                                <a class="item-detail-btn" href="buy-detail.html"><i class="fas fa-info-circle"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="bid-shape">
                                    <svg viewBox="0 0 300 322">
                                        <defs>
                                            <linearGradient id="gradient-2" gradientTransform="rotate(90)">
                                                <stop offset="5%" stop-color="rgba(233,244,255,0)"></stop>
                                                <stop offset="95%" stop-color="rgba(233,244,255,1)"></stop>
                                            </linearGradient>
                                        </defs>
                                        <path fill="url(#gradient-2)" d="M300,196.58v-71.16c0-31.57-16.84-60.75-44.19-76.53l-61.63-35.58c-27.34-15.79-61.03-15.79-88.37,0 L44.19,48.89C16.84,64.67,0,93.85,0,125.42v71.16c0,31.57,16.84,60.75,44.19,76.53l61.63,35.58c27.34,15.79,61.03,15.79,88.37,0 l61.63-35.58C283.16,257.33,300,228.15,300,196.58z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="page-btn text-center" style={{ marginTop: '50px' }}>
                                        <button class="theme-btn">Show More <i class="fas fa-arrow-right"></i></button>
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
                                            <h6>Token</h6>
                                            <h2>Now Earn NFT (token) Whenever You Trade</h2>
                                            <div class="em_bar">
                                                <div class="em_bar_bg"></div>
                                            </div>
                                            <p class="theme-description">With our earning NFT (token) feature, you can earn every time you do trading through our marketplace.</p>
                                            <ul>
                                                <li>Make your marketplace</li>
                                                <li>Then select a project you want to work on</li>
                                                <li>Give token if you like the project</li>
                                                <li>Even you can sell your token</li>
                                            </ul>
                                        </div>
                                        <div class="earn-images">
                                            <img src={Tokenimg} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="earn-area" style={{ paddingBottom: '100px' }}>
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="earn-main-box">
                                        <div class="earn-images">
                                            <img src={Store} alt="" />
                                        </div>
                                        <div class="earn-info">
                                            <h6>Store</h6>
                                            <h2>Create Your Store – Right Now!</h2>
                                            <div class="em_bar">
                                                <div class="em_bar_bg"></div>
                                            </div>
                                            <p class="theme-description">Have the best of the best from our site; create your store in few minutes, and start selling your items fast and easily.</p>
                                            <div class="earn-btn">
                                                <a class="theme-btn" href="/Browse">Start Selling <i class="fas fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="top-selling-store page-background">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="section-title text-center">
                                        <h6>Items</h6>
                                        <h2 data-watermark="Items">Best Selling Items</h2>
                                        <div class="em_bar">
                                            <div class="em_bar_bg"></div>
                                        </div>
                                        <p class="subtitle">You can see best-selling items; from all categories, buy from the wide range of items available on our marketplace.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 top-selling-width">
                                    <div class="item-group">
                                        <div class="item-group-content">
                                            <div class="item-group-avtar">
                                                <img src={Art_5} alt="" />
                                            </div>
                                            <div class="selling-item-info">
                                                <h3 class="theme-title"><a href="buy-detail.html">Ateali.Eth</a></h3>
                                                <p class="theme-description">Items sold: <span>566</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 top-selling-width">
                                    <div class="item-group">
                                        <div class="item-group-content">
                                            <div class="item-group-avtar">
                                                <img src={Artt_5} alt="" />
                                            </div>
                                            <div class="selling-item-info">
                                                <h3 class="theme-title"><a href="buy-detail.html">Indoor Football Table Game</a></h3>
                                                <p class="theme-description">Items sold: <span>566</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 top-selling-width">
                                    <div class="item-group">
                                        <div class="item-group-content">
                                            <div class="item-group-avtar">
                                                <img src={Art3} alt="" />
                                            </div>
                                            <div class="selling-item-info">
                                                <h3 class="theme-title"><a href="buy-detail.html">Bowling Ball With Colorful Bottles</a></h3>
                                                <p class="theme-description">Items sold: <span>566</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 top-selling-width">
                                    <div class="item-group">
                                        <div class="item-group-content">
                                            <div class="item-group-avtar">
                                                <img src={Art_4} alt="" />
                                            </div>
                                            <div class="selling-item-info">
                                                <h3 class="theme-title"><a href="buy-detail.html">The Modern Trap Music Collection</a></h3>
                                                <p class="theme-description">Items sold: <span>566</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 top-selling-width">
                                    <div class="item-group">
                                        <div class="item-group-content">
                                            <div class="item-group-avtar">
                                                <img src={Art_3} alt="" />
                                            </div>
                                            <div class="selling-item-info">
                                                <h3 class="theme-title"><a href="buy-detail.html">Get Best Template Here</a></h3>
                                                <p class="theme-description">Items sold: <span>566</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 top-selling-width">
                                    <div class="item-group">
                                        <div class="item-group-content">
                                            <div class="item-group-avtar">
                                                <img src={Art10} alt="" />
                                            </div>
                                            <div class="selling-item-info">
                                                <h3 class="theme-title"><a href="buy-detail.html">Make Your Site/App Look Great</a></h3>
                                                <p class="theme-description">Items sold: <span>566</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 top-selling-width">
                                    <div class="item-group">
                                        <div class="item-group-content">
                                            <div class="item-group-avtar">
                                                <img src={Art6} alt="" />
                                            </div>
                                            <div class="selling-item-info">
                                                <h3 class="theme-title"><a href="buy-detail.html">You Can Get Templates For Your Project</a></h3>
                                                <p class="theme-description">Items sold: <span>566</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 top-selling-width">
                                    <div class="item-group">
                                        <div class="item-group-content">
                                            <div class="item-group-avtar">
                                                <img src={Art7} alt="" />
                                            </div>
                                            <div class="selling-item-info">
                                                <h3 class="theme-title"><a href="buy-detail.html">Easy To Implement Tempalte For Your Site</a></h3>
                                                <p class="theme-description">Items sold: <span>566</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="bid-shape">
                                    <svg viewBox="0 0 300 322">
                                        <defs>
                                            <linearGradient id="gradient-2" gradientTransform="rotate(90)">
                                                <stop offset="5%" stop-color="rgba(233,244,255,0)"></stop>
                                                <stop offset="95%" stop-color="rgba(233,244,255,1)"></stop>
                                            </linearGradient>
                                        </defs>
                                        <path fill="url(#gradient-2)" d="M300,196.58v-71.16c0-31.57-16.84-60.75-44.19-76.53l-61.63-35.58c-27.34-15.79-61.03-15.79-88.37,0 L44.19,48.89C16.84,64.67,0,93.85,0,125.42v71.16c0,31.57,16.84,60.75,44.19,76.53l61.63,35.58c27.34,15.79,61.03,15.79,88.37,0 l61.63-35.58C283.16,257.33,300,228.15,300,196.58z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="page-btn text-center" style={{ marginTop: '50px' }}>
                                        <button class="theme-btn">Show More <i class="fas fa-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="mintable-guides-area page-paddings">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="section-title text-center">
                                        <h6>Guides</h6>
                                        <h2 data-watermark="Guides">Guides For NFT Marketplace</h2>
                                        <div class="em_bar">
                                            <div class="em_bar_bg"></div>
                                        </div>
                                        <p class="subtitle">Get to know how to use NFT – Marketplace, how to sell or buy, and how to create your store on our platform.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                    <div class="mintable-guides-box text-center">
                                        <div class="mintable-guides-media">
                                            <img src={Mintale1} alt="" />
                                        </div>
                                        <div class="mintable-guides-info">
                                            <h3 class="theme-title">What is NFTs ( digital items)</h3>
                                            <p class="theme-description">NFTs are non-fungible tokens that exist on blockchain like any other cryptocurrencies; every digital item has its own tokenize value.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                    <div class="mintable-guides-box text-center">
                                        <div class="mintable-guides-media">
                                            <img src={Mintale2} alt="" />
                                        </div>
                                        <div class="mintable-guides-info">
                                            <h3 class="theme-title">Create your store easily</h3>
                                            <p class="theme-description">You need is crypto wallet if you already have then just connected it or else if you don't then create on, then go to create the store page and fill in the basic data.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                    <div class="mintable-guides-box text-center">
                                        <div class="mintable-guides-media">
                                            <img src={Mintale3} alt="" />
                                        </div>
                                        <div class="mintable-guides-info">
                                            <h3 class="theme-title">Start selling more items</h3>
                                            <p class="theme-description">The only way to sell any NFT (items) is by having good content, high-quality items, and most important give buyers' good descriptive reason to buy.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="earn-area mintable-pro-area page-paddings" style={{ paddingTop: "0px" }} >
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="earn-main-box">
                                        <div class="earn-images">
                                            <img src={Shopimg} alt="" />
                                        </div>
                                        <div class="earn-info">
                                            <h2>NFT – Marketplace Premium Service</h2>
                                            <div class="em_bar">
                                                <div class="em_bar_bg"></div>
                                            </div>
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

    }
};

export default Index;
