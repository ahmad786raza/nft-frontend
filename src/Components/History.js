import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logowhite from '../images/logo-white.png';
import Badges from '../images/badges.svg';


class History extends React.Component {
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
                                                    <li><a href="login.html" class="user-logout">Logout</a></li>
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
                            <div class="row">
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
                                                        <li class="nav-item">
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
                                                        <li class="nav-item active">
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

                <section class="user-panel-main-box">
         <div class="container">
            <div class="rows">
               <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div class="user-panel-main">
                     <div class="user-panel-breadcrumb">
                        <div class="rows">
                           <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                              <div class="user-panel-breadcrumb-left">
                                 <h1>History</h1>
                                 <div class="user-link">
                                    <a href="">https://nft-marketplace/u/stefanharary</a>
                                 </div>
                              </div>
                           </div>
                           <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                              <div class="user-panel-breadcrumb-right clearfix">
                                 <ul class="clearfix">
                                    <li>
                                       <div class="user-top-seller-box">
                                          <img src={Badges} alt=""/>
                                          <h4>Top seller</h4>
                                       </div>
                                    </li>
                                    <li>
                                       <div class="user-setting-box">
                                          <a href="min-item.html">
                                             <i class="fas fa-store"></i>
                                             <h4>Create item</h4>
                                          </a>
                                       </div>
                                    </li>
                                    <li>
                                       <div class="user-setting-box">
                                          <a href="settings.html">
                                             <i class="fas fa-cog"></i>
                                             <h4>Settings</h4>
                                          </a>
                                       </div>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="user-store-area">

                         {/* <div class="row">
                           <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                              <div class="user-store-title text-center">
                                 <h2><i class="fas fa-store-alt"></i> Store</h2>
                              </div>
                           </div>
                           </div>  */}

                        <div class="rows">
                           <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                              <div class="transaction-history-box">
                                 <div class="transaction-history-table theme-table">
                                    <table>
                                       <thead>
                                          <tr>
                                             <th>Date</th>
                                             <th>Type</th>
                                             <th>Status</th>
                                             <th>Form</th>
                                             <th>To</th>
                                             <th>TX Hash</th>
                                          </tr>
                                       </thead>
                                       <tbody>
                                          <tr>
                                             <td>Fri Apr 02 2021 05:18:43 GMT</td>
                                             <td>Purchase</td>
                                             <td>
                                                <div class="alert alert-success" role="alert">Success</div>
                                             </td>
                                             <td><a href="">0x7f07d4aF...</a></td>
                                             <td><a href="">0x193e4718...</a></td>
                                             <td><a href="">0x67b62a33...</a></td>
                                          </tr>
                                          <tr>
                                             <td>Thu Apr 01 2021 10:45:47 GMT</td>
                                             <td>Create</td>
                                             <td>
                                                <div class="alert alert-danger" role="alert">Cancel</div>
                                             </td>
                                             <td><a href="">0x99034414...</a></td>
                                             <td><a href="">0xD925512F...</a></td>
                                             <td><a href="">0x334bc030...</a></td>
                                          </tr>
                                          <tr>
                                             <td>Thu Apr 01 2021 09:39:34 GMT</td>
                                             <td>Buy Votes</td>
                                             <td>
                                                <div class="alert alert-success" role="alert">Success</div>
                                             </td>
                                             <td><a href="">0x99034414...</a></td>
                                             <td>...</td>
                                             <td><a href="">0x34a9bbec...</a></td>
                                          </tr>
                                          <tr>
                                             <td>Thu Apr 01 2021 10:13:53 GMT</td>
                                             <td>Mint</td>
                                             <td>
                                                <div class="alert alert-warning" role="alert">Pending</div>
                                             </td>
                                             <td><a href="">0x99034414...</a></td>
                                             <td><a href="">0x193e4718...</a></td>
                                             <td><a href="">0x0ec46cb0...</a></td>
                                          </tr>
                                          <tr>
                                             <td>Thu Apr 01 2021 09:30:07 GMT</td>
                                             <td>Transfer</td>
                                             <td>
                                                <div class="alert alert-warning" role="alert">Pending</div>
                                             </td>
                                             <td><a href="">0x99034414...</a></td>
                                             <td>...</td>
                                             <td><a href="">0x92f38836...</a></td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      </div>
            </>
        )
    }

}


export default History;
