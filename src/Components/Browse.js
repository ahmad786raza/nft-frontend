import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Art1 from '../images/template/art_1.png';
import Art2 from '../images/template/art_2.png';
import Art3 from '../images/template/art_3.png';
import Art4 from '../images/template/art_4.png';
import Art5 from '../images/game/art_3.gif';
import Art6 from '../images/game/art_4.gif';
import Art7 from '../images/game/art_5.png';
import Art8 from '../images/game/art_6.gif';
import Art9 from '../images/game/art_7.gif';



class Browse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chkbox: false
        }
    }

    handleChkBox = (event) => {
        this.setState({
            chkbox: event.target.checked
        })
    }


    render() {
        return (
            <>
                <Header />
                <div>
                    <section class="browse-product-area page-paddings" style={{ paddingTop: "70px" }}>
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12">
                                    <div class="browse-product-filter">
                                        <div class="filter-box">
                                            <h3 class="theme-title">Categories</h3>
                                            <div class="filter-menu">
                                                <ul>
                                                    <li>
                                                        <input class="styled-checkbox" id="styled-checkbox-1" type="checkbox" defaultChecked={this.state.chkbox} onChange={this.handleChkBox} />
                                                        <label for="styled-checkbox-1"><span>Art</span></label>
                                                    </li>
                                                    <li>
                                                        <input class="styled-checkbox" id="styled-checkbox-2" type="checkbox" value="value1" />
                                                        <label for="styled-checkbox-2"><span>Collectibles</span></label>
                                                    </li>
                                                    <li>
                                                        <input class="styled-checkbox" id="styled-checkbox-3" type="checkbox" value="value1" />
                                                        <label for="styled-checkbox-3"><span>Game Items</span></label>
                                                    </li>
                                                    <li>
                                                        <input class="styled-checkbox" id="styled-checkbox-4" type="checkbox" value="value1" />
                                                        <label for="styled-checkbox-4"><span>Music</span></label>
                                                    </li>
                                                    <li>
                                                        <input class="styled-checkbox" id="styled-checkbox-5" type="checkbox" value="value1" />
                                                        <label for="styled-checkbox-5"><span>Domains</span></label>
                                                    </li>
                                                    <li>
                                                        <input class="styled-checkbox" id="styled-checkbox-6" type="checkbox" value="value1" />
                                                        <label for="styled-checkbox-6"><span>Templates</span></label>
                                                    </li>
                                                    <li>
                                                        <input class="styled-checkbox" id="styled-checkbox-7" type="checkbox" value="value1" />
                                                        <label for="styled-checkbox-7"><span>Videos</span></label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="filter-box">
                                            <h3 class="theme-title">Other options</h3>
                                            <div class="filter-menu">
                                                <ul>
                                                    <li>
                                                        <input class="styled-checkbox" id="styled-checkbox-8" type="checkbox" value="value1" />
                                                        <label for="styled-checkbox-8"><span>Copyright transfer</span></label>
                                                    </li>
                                                    <li>
                                                        <input class="styled-checkbox" id="styled-checkbox-9" type="checkbox" value="value1" />
                                                        <label for="styled-checkbox-9"><span>Resellable</span></label>
                                                    </li>
                                                    Forgotpassword                           </ul>
                                            </div>
                                        </div>
                                        <div class="filter-box">
                                            <h3 class="theme-title">Sort by</h3>
                                            <div class="filter-menu">
                                                <ul>
                                                    <li>
                                                        <input class="styled-checkbox" id="styled-checkbox-10" type="checkbox" value="value1"  />
                                                        <label for="styled-checkbox-10"><span>Newest</span></label>
                                                    </li>
                                                    <li>
                                                        <input class="styled-checkbox" id="styled-checkbox-11" type="checkbox" value="value1" />
                                                        <label for="styled-checkbox-11"><span>Oldest</span></label>
                                                    </li>
                                                    <li>
                                                        <input class="styled-checkbox" id="styled-checkbox-12" type="checkbox" value="value1" />
                                                        <label for="styled-checkbox-12"><span>Price - Low to high</span></label>
                                                    </li>
                                                    <li>
                                                        <input class="styled-checkbox" id="styled-checkbox-13" type="checkbox" value="value1" />
                                                        <label for="styled-checkbox-13"><span>Price - High to low</span></label>
                                                    </li>
                                                    <li>
                                                        <input class="styled-checkbox" id="styled-checkbox-14" type="checkbox" value="value1" />
                                                        <label for="styled-checkbox-14"><span>Auctions only</span></label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="filter-box">
                                            <h3 class="theme-title">Price</h3>
                                            <div class="filter-menu">
                                                <ul>
                                                    <li>
                                                        <input class="styled-checkbox" id="styled-checkbox-15" type="checkbox" value="value1" />
                                                        <label for="styled-checkbox-15"><span>$1 - $5.99</span></label>
                                                    </li>
                                                    <li>
                                                        <input class="styled-checkbox" id="styled-checkbox-16" type="checkbox" value="value1" />
                                                        <label for="styled-checkbox-16"><span>$6 - $14.99</span></label>
                                                    </li>
                                                    <li>
                                                        <input class="styled-checkbox" id="styled-checkbox-17" type="checkbox" value="value1" />
                                                        <label for="styled-checkbox-17"><span>$15 - $29.99</span></label>
                                                    </li>
                                                    <li>
                                                        <input class="styled-checkbox" id="styled-checkbox-18" type="checkbox" value="value1" />
                                                        <label for="styled-checkbox-18"><span>$30 - $74.99</span></label>
                                                    </li>
                                                    <li>
                                                        <input class="styled-checkbox" id="styled-checkbox-19" type="checkbox" value="value1" />
                                                        <label for="styled-checkbox-19"><span>$75 - $100+</span></label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-9 col-lg-8 col-md-8 col-sm-12 col-12">
                                    <div class="browse-product-top">
                                        <div class="row">
                                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div class="browse-product-left">
                                                    <p>Showing 25/50 Items</p>
                                                </div>
                                            </div>
                                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div class="browse-product-right clearfix">
                                                    <ul class="nav nav-tabs" role="tablist">
                                                        <li class="nav-item"><a class="browse-list nav-link active" data-toggle="tab" href="#view-store-grid" role="tab" data-toggle="tooltip" data-placement="top" title="View Stores"><i class="fas fa-th-large"></i></a></li>
                                                        <li class="nav-item"><a class="browse-list nav-link" data-toggle="tab" href="#view-store" role="tab" data-toggle="tooltip" data-placement="top" title="View Stores"><i class="fas fa-th-list"></i></a></li>
                                                        <li class="nav-item"><a class="browse-list nav-link" data-toggle="tab" href="#view-item" role="tab" data-toggle="tooltip" data-placement="top" title="View Item"><i class="fas fa-list"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="browse-product-box">
                                        <div class="tab-content">
                                            <div class="tab-pane active" id="view-store-grid" role="tabpanel">
                                                <div class="row">
                                                    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                                        <div class="item-group">
                                                            <span class="store-label">Boosted</span>
                                                            <div class="item-group-content">
                                                                <div class="items-like">
                                                                    <a href="javascript:void(0)"><i class="far fa-heart"></i></a>
                                                                </div>
                                                                <div class="item-group-avtar">
                                                                    <img src={Art1} alt="" />
                                                                </div>
                                                                <h3 class="theme-title"><a href="view-detail.html">Get Best Template Here</a></h3>
                                                                <p class="theme-description">Highest bid <span>2.5 WETH</span></p>
                                                                <h2 class="item-price">$20.680</h2>
                                                                <div class="item-group-timer">
                                                                    <ul class="clearfix">
                                                                        <li><span>01</span> Hour</li>
                                                                        <li><span>55</span> Min</li>
                                                                        <li><span>00</span> Sec</li>
                                                                    </ul>
                                                                </div>
                                                                <div class="item-group-btn">
                                                                    <a class="theme-btn" href="view-detail.html">Place Bid</a>
                                                                    <a class="item-detail-btn" href="view-detail.html"><i class="fas fa-info-circle"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                                        <div class="item-group">
                                                            <span class="store-label">Boosted</span>
                                                            <div class="item-group-content">
                                                                <div class="items-like like-active">
                                                                    <a href="javascript:void(0)"><i class="far fa-heart"></i></a>
                                                                </div>
                                                                <div class="item-group-avtar">
                                                                    <img src={Art2} alt="" />
                                                                </div>
                                                                <h3 class="theme-title"><a href="view-detail.html">Are Looking For Amazing Template</a></h3>
                                                                <p class="theme-description">Highest bid <span>2.5 WETH</span></p>
                                                                <h2 class="item-price">$20.680</h2>
                                                                <div class="item-group-timer">
                                                                    <ul class="clearfix">
                                                                        <li><span>01</span> Hour</li>
                                                                        <li><span>55</span> Min</li>
                                                                        <li><span>00</span> Sec</li>
                                                                    </ul>
                                                                </div>
                                                                <div class="item-group-btn">
                                                                    <a class="theme-btn" href="view-detail.html">Place Bid</a>
                                                                    <a class="item-detail-btn" href="view-detail.html"><i class="fas fa-info-circle"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                                        <div class="item-group">
                                                            <span class="store-label">Boosted</span>
                                                            <div class="item-group-content">
                                                                <div class="items-like">
                                                                    <a href="javascript:void(0)"><i class="far fa-heart"></i></a>
                                                                </div>
                                                                <div class="item-group-avtar">
                                                                    <img src={Art3} alt="" />
                                                                </div>
                                                                <h3 class="theme-title"><a href="view-detail.html">Get Full Package Of Templates And Icon</a></h3>
                                                                <p class="theme-description">Highest bid <span>2.5 WETH</span></p>
                                                                <h2 class="item-price">$20.680</h2>
                                                                <div class="item-group-timer">
                                                                    <ul class="clearfix">
                                                                        <li><span>01</span> Hour</li>
                                                                        <li><span>55</span> Min</li>
                                                                        <li><span>00</span> Sec</li>
                                                                    </ul>
                                                                </div>
                                                                <div class="item-group-btn">
                                                                    <a class="theme-btn" href="view-detail.html">Place Bid</a>
                                                                    <a class="item-detail-btn" href="view-detail.html"><i class="fas fa-info-circle"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                                        <div class="item-group">
                                                            <span class="store-label">Boosted</span>
                                                            <div class="item-group-content">
                                                                <div class="items-like">
                                                                    <a href="javascript:void(0)"><i class="far fa-heart"></i></a>
                                                                </div>
                                                                <div class="item-group-avtar">
                                                                    <img src={Art4} alt="" />
                                                                </div>
                                                                <h3 class="theme-title"><a href="buy-detail.html">Best B&W Template</a></h3>
                                                                <p class="theme-description">Highest bid <span>2.5 WETH</span></p>
                                                                <h2 class="item-price">$20.680</h2>
                                                                <div class="item-group-timer">
                                                                    <ul class="clearfix">
                                                                        <li><span>01</span> Hour</li>
                                                                        <li><span>55</span> Min</li>
                                                                        <li><span>00</span> Sec</li>
                                                                    </ul>
                                                                </div>
                                                                <div class="item-group-btn">
                                                                    <a class="theme-btn" href="checkout.html">Buy Now</a>
                                                                    <a class="item-detail-btn" href="buy-detail.html"><i class="fas fa-info-circle"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                                        <div class="item-group">
                                                            <span class="store-label">Boosted</span>
                                                            <div class="item-group-content">
                                                                <div class="items-like like-active">
                                                                    <a href="javascript:void(0)"><i class="far fa-heart"></i></a>
                                                                </div>
                                                                <div class="item-group-avtar">
                                                                    <img src={Art5} alt="" />
                                                                </div>
                                                                <h3 class="theme-title"><a href="view-detail.html">Funny games for kids</a></h3>
                                                                <p class="theme-description">Highest bid <span>2.5 WETH</span></p>
                                                                <h2 class="item-price">$20.680</h2>
                                                                <div class="item-group-timer">
                                                                    <ul class="clearfix">
                                                                        <li><span>01</span> Hour</li>
                                                                        <li><span>55</span> Min</li>
                                                                        <li><span>00</span> Sec</li>
                                                                    </ul>
                                                                </div>
                                                                <div class="item-group-btn">
                                                                    <a class="theme-btn" href="view-detail.html">Place Bid</a>
                                                                    <a class="item-detail-btn" href="view-detail.html"><i class="fas fa-info-circle"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                                        <div class="item-group">
                                                            <span class="store-label">Boosted</span>
                                                            <div class="item-group-content">
                                                                <div class="items-like">
                                                                    <a href="javascript:void(0)"><i class="far fa-heart"></i></a>
                                                                </div>
                                                                <div class="item-group-avtar">
                                                                    <img src={Art6} alt="" />
                                                                </div>
                                                                <h3 class="theme-title"><a href="buy-detail.html">Easy to play car racing games</a></h3>
                                                                <p class="theme-description">Highest bid <span>2.5 WETH</span></p>
                                                                <h2 class="item-price">$20.680</h2>
                                                                <div class="item-group-timer">
                                                                    <ul class="clearfix">
                                                                        <li><span>01</span> Hour</li>
                                                                        <li><span>55</span> Min</li>
                                                                        <li><span>00</span> Sec</li>
                                                                    </ul>
                                                                </div>
                                                                <div class="item-group-btn">
                                                                    <a class="theme-btn" href="checkout.html">Buy Now</a>
                                                                    <a class="item-detail-btn" href="buy-detail.html"><i class="fas fa-info-circle"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                                        <div class="item-group">
                                                            <span class="store-label">Boosted</span>
                                                            <div class="item-group-content">
                                                                <div class="items-like">
                                                                    <a href="javascript:void(0)"><i class="far fa-heart"></i></a>
                                                                </div>
                                                                <div class="item-group-avtar">
                                                                    <img src={Art7} alt="" />
                                                                </div>
                                                                <h3 class="theme-title"><a href="buy-detail.html">Indoor Football Table Game</a></h3>
                                                                <p class="theme-description">Highest bid <span>2.5 WETH</span></p>
                                                                <h2 class="item-price">$20.680</h2>
                                                                <div class="item-group-timer">
                                                                    <ul class="clearfix">
                                                                        <li><span>01</span> Hour</li>
                                                                        <li><span>55</span> Min</li>
                                                                        <li><span>00</span> Sec</li>
                                                                    </ul>
                                                                </div>
                                                                <div class="item-group-btn">
                                                                    <a class="theme-btn" href="checkout.html">Buy Now</a>
                                                                    <a class="item-detail-btn" href="buy-detail.html"><i class="fas fa-info-circle"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                                        <div class="item-group">
                                                            <span class="store-label">Boosted</span>
                                                            <div class="item-group-content">
                                                                <div class="items-like">
                                                                    <a href="javascript:void(0)"><i class="far fa-heart"></i></a>
                                                                </div>
                                                                <div class="item-group-avtar">
                                                                    <img src={Art8} alt="" />
                                                                </div>
                                                                <h3 class="theme-title"><a href="buy-detail.html">Get Mario Game</a></h3>
                                                                <p class="theme-description">Highest bid <span>2.5 WETH</span></p>
                                                                <h2 class="item-price">$20.680</h2>
                                                                <div class="item-group-timer">
                                                                    <ul class="clearfix">
                                                                        <li><span>01</span> Hour</li>
                                                                        <li><span>55</span> Min</li>
                                                                        <li><span>00</span> Sec</li>
                                                                    </ul>
                                                                </div>
                                                                <div class="item-group-btn">
                                                                    <a class="theme-btn" href="checkout.html">Buy Now</a>
                                                                    <a class="item-detail-btn" href="buy-detail.html"><i class="fas fa-info-circle"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                                        <div class="item-group">
                                                            <span class="store-label">Boosted</span>
                                                            <div class="item-group-content">
                                                                <div class="items-like like-active">
                                                                    <a href="javascript:void(0)"><i class="far fa-heart"></i></a>
                                                                </div>
                                                                <div class="item-group-avtar">
                                                                    <img src={Art9} alt="" />
                                                                </div>
                                                                <h3 class="theme-title"><a href="buy-detail.html">Buy board game to play with family</a></h3>
                                                                <p class="theme-description">Highest bid <span>2.5 WETH</span></p>
                                                                <h2 class="item-price">$20.680</h2>
                                                                <div class="item-group-timer">
                                                                    <ul class="clearfix">
                                                                        <li><span>01</span> Hour</li>
                                                                        <li><span>55</span> Min</li>
                                                                        <li><span>00</span> Sec</li>
                                                                    </ul>
                                                                </div>
                                                                <div class="item-group-btn">
                                                                    <a class="theme-btn" href="checkout.html">Buy Now</a>
                                                                    <a class="item-detail-btn" href="buy-detail.html"><i class="fas fa-info-circle"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane" id="view-store" role="tabpanel">
                                                <div class="row">
                                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                        <div class="view-store-item">
                                                            <span class="store-label">Boosted</span>
                                                            <div class="view-store-box">
                                                                <div class="view-store-images">
                                                                    <a href=""><img src={Art1} alt="" /></a>
                                                                </div>
                                                                <div class="view-store-info">
                                                                    <h3 class="theme-title"><a href="view-detail.html">Get Best Template Here</a></h3>
                                                                    <div class="store-ratting">
                                                                        <i class="fas fa-star-half-alt"></i><i class="fas fa-star-half-alt"></i><i class="fas fa-star-half-alt"></i><i class="fas fa-star-half-alt"></i><i class="fas fa-star-half-alt"></i> (4.5)
                                                                    </div>
                                                                    <ul>
                                                                        <li>Store : <span>StidioFest (3 Items)</span></li>
                                                                        <li>Owner : <span>StidioFest</span></li>
                                                                    </ul>
                                                                    <div class="item-group-box clearfix">
                                                                        <div class="item-group-timer">
                                                                            <ul class="clearfix">
                                                                                <li><span>01</span> Hour</li>
                                                                                <li><span>55</span> Min</li>
                                                                                <li><span>00</span> Sec</li>
                                                                            </ul>
                                                                        </div>
                                                                        <div class="item-group-bid">
                                                                            <p class="theme-description">Starting bid:</p>
                                                                            <h2>$ 0.980</h2>
                                                                        </div>
                                                                    </div>
                                                                    <div class="item-group-btn">
                                                                        <a class="theme-btn" href="view-detail.html">Place Bid</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p class="theme-description browse-description">We have make really perfect template for website with great features and customizable option.</p>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                        <div class="view-store-item">
                                                            <span class="store-label">Boosted</span>
                                                            <div class="view-store-box">
                                                                <div class="view-store-images">
                                                                    <a href=""><img src={Art2} alt="" /></a>
                                                                </div>
                                                                <div class="view-store-info">
                                                                    <h3 class="theme-title"><a href="view-detail.html">Are Looking For Amazing Template</a></h3>
                                                                    <div class="store-ratting">
                                                                        <i class="fas fa-star-half-alt"></i><i class="fas fa-star-half-alt"></i><i class="fas fa-star-half-alt"></i><i class="fas fa-star-half-alt"></i><i class="far fa-star"></i> (3.5)
                                                                    </div>
                                                                    <ul>
                                                                        <li>Store : <span>StidioFest (3 Items)</span></li>
                                                                        <li>Owner : <span>StidioFest</span></li>
                                                                    </ul>
                                                                    <div class="item-group-box clearfix">
                                                                        <div class="item-group-timer">
                                                                            <ul class="clearfix">
                                                                                <li><span>01</span> Hour</li>
                                                                                <li><span>55</span> Min</li>
                                                                                <li><span>00</span> Sec</li>
                                                                            </ul>
                                                                        </div>
                                                                        <div class="item-group-bid">
                                                                            <p class="theme-description">Starting bid:</p>
                                                                            <h2>$ 0.980</h2>
                                                                        </div>
                                                                    </div>
                                                                    <div class="item-group-btn">
                                                                        <a class="theme-btn" href="view-detail.html">Place Bid</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p class="theme-description browse-description">Best looking template for you website or app with great widgets and many more amazing features.</p>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                        <div class="view-store-item">
                                                            <span class="store-label">Boosted</span>
                                                            <div class="view-store-box">
                                                                <div class="view-store-images">
                                                                    <a href=""><img src={Art3} alt="" /></a>
                                                                </div>
                                                                <div class="view-store-info">
                                                                    <h3 class="theme-title"><a href="view-detail.html">Get Full Package Of Templates And Icon</a></h3>
                                                                    <div class="store-ratting">
                                                                        <i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i> (0)
                                                                    </div>
                                                                    <ul>
                                                                        <li>Store : <span>StidioFest (3 Items)</span></li>
                                                                        <li>Owner : <span>StidioFest</span></li>
                                                                    </ul>
                                                                    <div class="item-group-box clearfix">
                                                                        <div class="item-group-timer">
                                                                            <ul class="clearfix">
                                                                                <li><span>01</span> Hour</li>
                                                                                <li><span>55</span> Min</li>
                                                                                <li><span>00</span> Sec</li>
                                                                            </ul>
                                                                        </div>
                                                                        <div class="item-group-bid">
                                                                            <p class="theme-description">Starting bid:</p>
                                                                            <h2>$ 0.980</h2>
                                                                        </div>
                                                                    </div>
                                                                    <div class="item-group-btn">
                                                                        <a class="theme-btn" href="view-detail.html">Place Bid</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p class="theme-description browse-description">Buy the complete package of tempalte with icons and widgets an many more things with it.</p>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                        <div class="view-store-item">
                                                            <span class="store-label">Boosted</span>
                                                            <div class="view-store-box">
                                                                <div class="view-store-images">
                                                                    <a href=""><img src={Art4} alt="" /></a>
                                                                </div>
                                                                <div class="view-store-info">
                                                                    <h3 class="theme-title"><a href="buy-detail.html">Best B&W Template</a></h3>
                                                                    <div class="store-ratting">
                                                                        <i class="fas fa-star-half-alt"></i><i class="fas fa-star-half-alt"></i><i class="fas fa-star-half-alt"></i><i class="fas fa-star-half-alt"></i><i class="fas fa-star-half-alt"></i> (4.5)
                                                                    </div>
                                                                    <ul>
                                                                        <li>Store : <span>StidioFest (3 Items)</span></li>
                                                                        <li>Owner : <span>StidioFest</span></li>
                                                                    </ul>
                                                                    <div class="item-group-box clearfix">
                                                                        <div class="item-group-timer">
                                                                            <ul class="clearfix">
                                                                                <li><span>01</span> Hour</li>
                                                                                <li><span>55</span> Min</li>
                                                                                <li><span>00</span> Sec</li>
                                                                            </ul>
                                                                        </div>
                                                                        <div class="item-group-bid">
                                                                            <p class="theme-description">Starting bid:</p>
                                                                            <h2>$ 0.980</h2>
                                                                        </div>
                                                                    </div>
                                                                    <div class="item-group-btn">
                                                                        <a class="theme-btn" href="checkout.html">Buy Now</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p class="theme-description browse-description">Are you looking for black and white template for your website, then this template is the best one for you.</p>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                        <div class="view-store-item">
                                                            <span class="store-label">Boosted</span>
                                                            <div class="view-store-box">
                                                                <div class="view-store-images">
                                                                    <a href=""><img src={Art5} alt="" /></a>
                                                                </div>
                                                                <div class="view-store-info">
                                                                    <h3 class="theme-title"><a href="view-detail.html">Funny Games For Kids</a></h3>
                                                                    <div class="store-ratting">
                                                                        <i class="fas fa-star-half-alt"></i><i class="fas fa-star-half-alt"></i><i class="fas fa-star-half-alt"></i><i class="fas fa-star-half-alt"></i><i class="fas fa-star-half-alt"></i> (4.5)
                                                                    </div>
                                                                    <ul>
                                                                        <li>Store : <span>StidioFest (3 Items)</span></li>
                                                                        <li>Owner : <span>StidioFest</span></li>
                                                                    </ul>
                                                                    <div class="item-group-box clearfix">
                                                                        <div class="item-group-timer">
                                                                            <ul class="clearfix">
                                                                                <li><span>01</span> Hour</li>
                                                                                <li><span>55</span> Min</li>
                                                                                <li><span>00</span> Sec</li>
                                                                            </ul>
                                                                        </div>
                                                                        <div class="item-group-bid">
                                                                            <p class="theme-description">Starting bid:</p>
                                                                            <h2>$ 0.980</h2>
                                                                        </div>
                                                                    </div>
                                                                    <div class="item-group-btn">
                                                                        <a class="theme-btn" href="view-detail.html">Place Bid</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p class="theme-description browse-description">Are you looking for something good, safe and funny for your kid to play and enjoy the game in most astonishing way.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane" id="view-item" role="tabpanel">
                                                <div class="row">
                                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                        <div class="view-store-item">
                                                            <span class="store-label">Boosted</span>
                                                            <div class="view-store-box">
                                                                <div class="view-store-images">
                                                                    <a href=""><img src={Art6} alt="" /></a>
                                                                </div>
                                                                <div class="view-store-info clearfix">
                                                                    <h3 class="theme-title"><a href="view-detail.html">Easy To Play Car Racing Games</a></h3>
                                                                    <div class="store-ratting">
                                                                        <i class="fas fa-star-half-alt"></i><i class="fas fa-star-half-alt"></i><i class="fas fa-star-half-alt"></i><i class="fas fa-star-half-alt"></i><i class="fas fa-star-half-alt"></i> (4.5)
                                                                    </div>
                                                                    <ul>
                                                                        <li>Category : <span>Art</span></li>
                                                                        <li>Store : <span>Venetian Perspectives (1 Items )</span></li>
                                                                        <li>Reviews : <span>4.5</span></li>
                                                                    </ul>
                                                                    <p class="theme-description browse-description" style={{ marginTop: "-10px" }}>Let get to basic and play some easy but still amazing racing game and just chillout and have fun.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                        <div class="view-store-item">
                                                            <span class="store-label">Boosted</span>
                                                            <div class="view-store-box">
                                                                <div class="view-store-images">
                                                                    <a href=""><img src={Art7} alt="" /></a>
                                                                </div>
                                                                <div class="view-store-info clearfix">
                                                                    <h3 class="theme-title"><a href="view-detail.html">Indoor Football Table Game</a></h3>
                                                                    <div class="store-ratting">
                                                                        <i class="fas fa-star-half-alt"></i><i class="fas fa-star-half-alt"></i><i class="fas fa-star-half-alt"></i><i class="fas fa-star-half-alt"></i><i class="far fa-star"></i> (3.5)
                                                                    </div>
                                                                    <ul>
                                                                        <li>Category : <span>Art</span></li>
                                                                        <li>Store : <span>Venetian Perspectives (1 Items )</span></li>
                                                                        <li>Reviews : <span>3.5</span></li>
                                                                    </ul>
                                                                    <p class="theme-description browse-description" style={{ marginTop: "-10px" }}>Are you a fan of football, but somehow someday to might not able to play, so have this indoor football table game.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                        <div class="view-store-item">
                                                            <span class="store-label">Boosted</span>
                                                            <div class="view-store-box">
                                                                <div class="view-store-images">
                                                                    <a href=""><img src={Art8} alt="" /></a>
                                                                </div>
                                                                <div class="view-store-info clearfix">
                                                                    <h3 class="theme-title"><a href="view-detail.html">Get Mario Game</a></h3>
                                                                    <div class="store-ratting">
                                                                        <i class="fas fa-star-half-alt"></i><i class="fas fa-star-half-alt"></i><i class="fas fa-star-half-alt"></i><i class="fas fa-star-half-alt"></i><i class="far fa-star"></i> (3.5)
                                                                    </div>
                                                                    <ul>
                                                                        <li>Category : <span>Art</span></li>
                                                                        <li>Store : <span>Venetian Perspectives (1 Items )</span></li>
                                                                        <li>Reviews : <span>3.5</span></li>
                                                                    </ul>
                                                                    <p class="theme-description browse-description" style={{ marginTop: "-10px" }}>Do you remmeber playing this game at home with friends and having fun time, you can do it again.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                        <div class="view-store-item">
                                                            <span class="store-label">Boosted</span>
                                                            <div class="view-store-box">
                                                                <div class="view-store-images">
                                                                    <a href=""><img src={Art9} alt="" /></a>
                                                                </div>
                                                                <div class="view-store-info clearfix">
                                                                    <h3 class="theme-title"><a href="buy-detail.html">Buy Board Game To Play With Family</a></h3>
                                                                    <div class="store-ratting">
                                                                        <i class="fas fa-star-half-alt"></i><i class="fas fa-star-half-alt"></i><i class="fas fa-star-half-alt"></i><i class="fas fa-star-half-alt"></i><i class="far fa-star"></i> (3.5)
                                                                    </div>
                                                                    <ul>
                                                                        <li>Category : <span>Art</span></li>
                                                                        <li>Store : <span>Venetian Perspectives (1 Items )</span></li>
                                                                        <li>Reviews : <span>3.5</span></li>
                                                                    </ul>
                                                                    <p class="theme-description browse-description" style={{ marginTop: "-10px" }}>Board game to play with family, there is nothing better than ahaving game which can be played in groups.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                        <div class="view-store-item">
                                                            <span class="store-label">Boosted</span>
                                                            <div class="view-store-box">
                                                                <div class="view-store-images">
                                                                    <a href=""><img src={Art1} alt="" /></a>
                                                                </div>
                                                                <div class="view-store-info clearfix">
                                                                    <h3 class="theme-title"><a href="view-detail.html">Bowling Ball With Colorful Bottles</a></h3>
                                                                    <div class="store-ratting">
                                                                        <i class="fas fa-star-half-alt"></i><i class="fas fa-star-half-alt"></i><i class="fas fa-star-half-alt"></i><i class="fas fa-star-half-alt"></i><i class="far fa-star"></i> (3.5)
                                                                </div>
                                                                    <ul>
                                                                        <li>Category : <span>Art</span></li>
                                                                        <li>Store : <span>Venetian Perspectives (1 Items )</span></li>
                                                                        <li>Reviews : <span>3.5</span></li>
                                                                    </ul>
                                                                    <p class="theme-description browse-description" style={{ marginTop: "-10px" }}>Colorful bottles you can have this and enjoy playing at your home, isn't it fast and easy to play bowling ball.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div class="pagination-box text-center">
                                                    <ul class="clearfix">
                                                        <li class="current"><span>1</span></li>
                                                        <li><a href="">2</a></li>
                                                        <li><a href="">3</a></li>
                                                        <li><a href="">Next <i class="fas fa-long-arrow-alt-right"></i></a></li>
                                                    </ul>
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
}

export default Browse;