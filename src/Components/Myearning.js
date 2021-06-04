import React from 'react';
import logowhite from '../images/logo-white.png';




class Myearning extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }



    render() {
        return (
            <>
                <div>
                    <header class="user-panel-header-area">
                        <div class="user-panel-header-top">
                            <div class="containers">
                                <div class="rows">
                                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                        <div class="user-panel-logo">
                                            <a href="dashboard.html"><img src={logowhite} alt="" /></a>
                                        </div>
                                    </div>
                                    <div class="col-xl-8 col-lg-8 col-md-8 col-sm-6 col-12">
                                        <div class="user-panel-header-top-right clearfix">
                                            <div class="user-panel-profile">
                                                <h3>Welcome! Stefan Harary <a href="javascript:void(0);"><span>S</span></a></h3>
                                                <div class="profile-dropdown">
                                                    <ul class="user-links">
                                                        <li><a href="settings.html">Profile</a></li>
                                                        <li><a href="messages.html">Messages</a></li>
                                                        <li><a href="create-store.html">Create a Store</a></li>
                                                        <li><a href="faq.html">Help</a></li>
                                                        <li><a href="login.html" style="background-color: rgb(66 140 212 / 10%);color: #f39910;">Logout</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="user-panel-header-bottom">
                            <div class="containers">
                                <div class="rows">
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div class="user-header-bottom-main clearfix">
                                            <div class="user-header-bottom-left">
                                                <nav class="navbar navbar-expand-lg navbar-light">
                                                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                        <i class="fas fa-bars"></i>
                                                    </button>
                                                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                                        <ul class="navbar-nav mr-auto">
                                                            <li class="nav-item">
                                                                <a class="nav-link" href="dashboard.html"><i class="fas fa-store-alt"></i> Stores</a>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a class="nav-link" href="my-wallet.html"><i class="fas fa-wallet"></i> My NFTs</a>
                                                            </li>
                                                            <li class="nav-item active">
                                                                <a class="nav-link" href="my-earnings.html"><i class="fas fa-money-bill-alt"></i> My Earnings</a>
                                                            </li>
                                                            <li class="nav-item single-menu">
                                                                <a class="nav-link" href="javascript:void(0)"><i class="fas fa-shopping-cart"></i> My Orders</a>
                                                                <div class="dropdown-box">
                                                                    <ul class="dropdown-box-inner">
                                                                        <li><a href="my-orders.html"> My Orders</a></li>
                                                                        <li><a href="bidding-history.html">Bidding History</a></li>
                                                                        <li><a href="won-auctions.html">Won Auctions</a></li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a class="nav-link" href="reviews.html"><i class="fas fa-thumbs-up"></i> Reviews</a>
                                                            </li>
                                                            <li class="nav-item single-menu">
                                                                <a class="nav-link" href="javascript:void(0)"><i class="fas fa-list"></i> Listing</a>
                                                                <div class="dropdown-box">
                                                                    <ul class="dropdown-box-inner">
                                                                        <li><a href="item-list.html">Listing</a></li>
                                                                        <li><a href="current-item-list.html">Current Item List</a></li>
                                                                        <li><a href="sold-item-list.html">Sold Item List</a></li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a class="nav-link" href="history.html"><i class="fas fa-history"></i> History</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </nav>
                                            </div>
                                            <div class="user-header-bottom-right">
                                                <a class="theme-btn transparent-btn" href="go-pro.html">Go Premium</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>

            </>
        )
    }

};


export default Myearning