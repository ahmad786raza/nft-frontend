import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logowhite from '../images/logo-white.png';
import Badges from '../images/badges.svg';
import axios from "axios";
import Loading from "react-fullscreen-loading";
import swal from "sweetalert";
import api from "../api";


class History extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         datalist: [],
         userName: "",
         nameFirstletter: "",
         isToggle: false
      }
      this.handleClick = this.handleClick.bind(this);

   }

   componentDidMount() {
      this.getUserHistory();
      const userName = localStorage.getItem('currentUserName')
      const names = userName.split(' ');
      const initials = names[0].substring(0, 1).toUpperCase();
      this.setState({nameFirstletter: initials,userName:userName })
   }

   getUserHistory = () => {
      let jwtToken = sessionStorage.getItem('token')
      console.log('jwtToken', jwtToken)
      if (jwtToken) {
         const config = {
            headers: {
               authtoken: jwtToken,
            },
         };
         axios.get(api.API_URL + 'userhistory', config).then(respData => {
            console.log('historydata===========', respData.data.userdetails);
            this.setState({datalist: respData.data.userdetails});

         }).catch(errs => {
            console.log('errorrrrr', errs);
         })
      } else {
         swal({ title: "Unauthorized access! Login first", icon: "error" });
      }
   }

   handleClick(e) {
      e.preventDefault();
      this.setState({ isToggle: !this.state.isToggle });
   }

   logout = () => {
      sessionStorage.clear();
      this.props.history.push("/");
   };



   render() {
      console.log("username", this.state.userName)
      return (
         <>
            <div>
               <header className="user-panel-header-area">
                  <div className="user-panel-header-top">
                     <div className="containers">
                        <div className="rows">
                           <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                              <div className="user-panel-logo">
                                 <a href="/"><img src={logowhite} alt="" /></a>
                              </div>
                           </div>
                           <div className="col-xl-8 col-lg-8 col-md-8 col-sm-6 col-12">
                              <div className="user-panel-header-top-right clearfix">
                                 <div className="user-panel-profile">
                                    <h3>Welcome! {this.state.userName} <a href="" ><span onClick={this.handleClick} >{this.state.nameFirstletter}</span></a></h3>
                                    <div className="profile-dropdown" style={{ display: this.state.isToggle ? 'block' : 'none' }}>
                                       <ul className="user-links">
                                          <li><a href="/Profile">Profile</a></li>
                                           <li><a href="/Mynft">MyNft</a></li> 
                                          <li><a href="/Contact">Help</a></li>
                                          <li><a href="" onClick={this.logout} className="user-logout">Logout</a></li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="user-panel-header-bottom">
                     <div className="containers">

{/*                         
                        <div className="row">
                           <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="user-header-bottom-main clearfix">
                                 <div className="user-header-bottom-left">
                                    <nav className="navbar navbar-expand-lg navbar-light">
                                       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                          <i className="fas fa-bars"></i>
                                       </button>
                                       <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                          <ul className="navbar-nav mr-auto">
                                             <li className="nav-item">
                                                <a className="nav-link" href="/Home"><i className="fas fa-store-alt"></i> Stores</a>
                                             </li>
                                             <li className="nav-item">
                                                <a className="nav-link" href="/Mynft"><i className="fas fa-wallet"></i> My NFTs</a>
                                             </li> */}


                                             {/* <li className="nav-item">
                                                <a className="nav-link" href="my-earnings.html"><i className="fas fa-money-bill-alt"></i> My Earnings</a>
                                             </li> 
                                              <li className="nav-item single-menu">
                                                <a className="nav-link" href="javascript:void(0)"><i className="fas fa-shopping-cart"></i> My Orders</a>
                                                <div className="dropdown-box">
                                                   <ul className="dropdown-box-inner">
                                                      <li><a href="my-orders.html"> My Orders</a></li>
                                                      <li><a href="bidding-history.html">Bidding History</a></li>
                                                      <li><a href="won-auctions.html">Won Auctions</a></li>
                                                   </ul>
                                                </div>
                                             </li> 
                                             <li className="nav-item">
                                                <a className="nav-link" href="#"><i className="fas fa-thumbs-up"></i> Reviews</a>
                                             </li> 
                                              <li className="nav-item single-menu">
                                                <a className="nav-link" href="javascript:void(0)"><i className="fas fa-list"></i> Listing</a>
                                                <div className="dropdown-box">
                                                   <ul className="dropdown-box-inner">
                                                      <li><a href="#">Listing</a></li>
                                                      <li><a href="#">Current Item List</a></li>
                                                      <li><a href="#">Sold Item List</a></li>
                                                   </ul>
                                                </div>
                                             </li>  */}


                                             {/* <li className="nav-item active">
                                                <a className="nav-link" href="/History"><i className="fas fa-history"></i> History</a>
                                             </li>
                                          </ul>
                                       </div>
                                    </nav>
                                 </div>
                                 <div className="user-header-bottom-right">
                                    <a className="theme-btn transparent-btn" href="/GoPro">Go Premium</a>
                                 </div>
                              </div>
                           </div>
                        </div> */}


                     </div>
                  </div>
               </header>

               <section className="user-panel-main-box">
                  <div className="container">
                     <div className="rows">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                           <div className="user-panel-main">
                              <div className="user-panel-breadcrumb">
                                 <div className="rows">
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                       <div className="user-panel-breadcrumb-left">
                                          <h1>Nft Token History</h1>
                                          {/* <div className="user-link">
                                             <a href="">https://nft-marketplace/u/stefanharary</a>
                                          </div> */}
                                       </div>
                                    </div>
                                    {/* <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                       <div className="user-panel-breadcrumb-right clearfix">
                                          <ul className="clearfix">
                                             <li>
                                                <div className="user-top-seller-box">
                                                   <img src={Badges} alt="" />
                                                   <h4>Top seller</h4>
                                                </div>
                                             </li>
                                             <li>
                                                <div className="user-setting-box">
                                                   <a href="min-item.html">
                                                      <i className="fas fa-store"></i>
                                                      <h4>Create item</h4>
                                                   </a>
                                                </div>
                                             </li>
                                             <li>
                                                <div className="user-setting-box">
                                                   <a href="settings.html">
                                                      <i className="fas fa-cog"></i>
                                                      <h4>Settings</h4>
                                                   </a>
                                                </div>
                                             </li>
                                          </ul>
                                       </div>
                                    </div> */}
                                 </div>
                              </div>
                              <div className="user-store-area">
                                 <div className="rows">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                       <div className="transaction-history-box">
                                          <div className="transaction-history-table theme-table">
                                             <table>
                                                <thead>
                                                   <tr>
                                                      <th>Email</th>
                                                      <th>AssestName</th>
                                                      <th>Owner</th>
                                                      {/* <th>Ipfshash</th> */}
                                                      <th>Price</th>
                                                      <th>Date</th>
                                                   </tr>
                                                </thead>


                                                {this.state.datalist.map(list => (

                                                   <tbody>
                                                      <tr>
                                                         <td>{list.email}</td>
                                                         <td>{list.assetName}</td>
                                                         <td><a href="">{list.owner}</a> </td>
                                                         {/* <td><a href="">{list.ipfsHash}</a></td> */}
                                                         <td><a href="">{list.price}</a></td>
                                                         <td><a href="">{list.createdAt}</a></td>
                                                      </tr>
                                                   </tbody>

                                                ))}



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
