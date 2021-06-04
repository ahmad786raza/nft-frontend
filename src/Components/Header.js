import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import Logo from "../images/logo.png";
import Select from "react-select";

let jwttoken;
let showSearchModal;

function Header(props) {
  console.log("props header-----", props);
  let ASSET = [];

  const userName = localStorage.getItem('currentUserName')
  const  names = userName.split(' ');
  const initials = names[0].substring(0, 1).toUpperCase();

  const [toggle, setToggle] = useState(false)


  const handleStyle =(e)=>{
    e.preventDefault();
    // this.setState({isToggle: !this.state.isToggle})
    setToggle(!toggle)
  }


  if (props.fromScreen == "Home") {
    for (let i = 0; i < props.dataList.length; i++) {
      let obj = {
        label: props.dataList[i].assetName,
        value: props.dataList[i].tokenId,
        soldstatus: props.dataList[i].soldStatus,
      };
      ASSET.push(obj);
    }
  }

  const handleChange = (event) => {
    var jwttoken = sessionStorage.getItem("token");
    console.log("event token", event, event.soldstatus);
    if (jwttoken) {
      if (event.soldstatus == "1") {
        swal({ title: "This NFT is Sold", icon: "error" });
      } else {
          hideModal();
        history.push({
          pathname: "/Detail",
          state: {
            tokenID: event.value,
          },
        });
      }
    } else {
      swal({ title: "Unauthorized access! Login first", icon: "error" });
    }
  };

  const colourStyles = {
    control: (styles) => ({
      width: "385px",
      // outerHeight:"390px" ,
      backgroundColor: "white",
      display: "block",
      alignItems: "center",
      display: "flex",
    }),
  };


  jwttoken = sessionStorage.getItem("token");
  const history = useHistory();

  const login = () => {
    history.push("/Signin");
  };
  const logout = () => {
    sessionStorage.clear();
    history.push("/");
  };
  const generateasset = () => {
    if (jwttoken) {
      history.push("/Createassets");
    } else {
      return swal({ title: "Please login!", icon: "error" });
    }
  };

  const historyPage = () => {
    if (jwttoken) {
      history.push("/History");
    } else {
      return swal({ title: "Please login!", icon: "error" });
    }
  };



  const openModal = (event) => {
    document.body.classList.add('search-active');
  }
  const hideModal = (event) => {
    document.body.classList.remove('search-active');
  }

  return (
    <>
      <div className="header-main">
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-12 col-12">
              <div className="header-logo">
                <a href="/">
                  <img id="change-logo" src={Logo} alt="" />
                </a>
              </div>
            </div>
            <div className="col-xl-10 col-lg-10 col-md-9 col-sm-12 col-12">
              <div className="header-menu-box clearfix">
                <div className="header-navbar-menu clearfix">
                  <nav className="navbar navbar-expand-lg navbar-light">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <i className="fas fa-bars"></i>
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav mr-auto">
                        <li className="nav-item menu-menu-parent">
                          <a className="nav-link" href="/howto">
                            How it Works
                          </a>
                        </li>
                        <li className="nav-item menu-menu-parent">
                          <a className="nav-link" href="/Home">
                            Explore
                          </a>
                        </li>

                        <li className="nav-item menu-menu-parent">
                            <a className="nav-link" href="https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain" target="_blank">Meatmask Tutorials</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" onClick={generateasset} href="" rel="noopener noreferrer">
                            Generate Asset
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" onClick={historyPage} href="" >
                            History
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="header-right-btn">
                  <ul>
                    <li>
                      <a className="theme-btn search-btn" onClick={openModal} >
                        <i className="fas fa-search"></i>
                      </a>
                    </li>
                    
                    {jwttoken != null ? (
                        
                        <li>
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-6 col-12">
                              <div className="user-panel-header-top-right clearfix">
                                 <div className="user-panel-profile-header">
                                    <h3>Welcome! {userName}  <a href=""  ><span onClick={handleStyle} >{initials}</span></a></h3>
                                    <div className="profile-dropdown" style={{display: toggle ? 'block': 'none'}}>
                                       <ul className="user-links">
                                          <li><a href="/Profile">Profile</a></li>
                                          <li><a href="/Mynft">MyNft</a></li>
                                          {/* <li><a href="/Home">Create a Store</a></li>  */}
                                          <li><a href="/Contact">Help</a></li>
                                          <li><a href="" onClick={logout} className="user-logout">Logout</a></li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>

                    </li>
                        ) : (
                            <li>
                    <a className="theme-btn" href="" onClick={login}>Login</a>

                    </li>
                           
                        )}
                  </ul>
                 
                </div>
              </div>
            </div>
          </div>
        </div>




      


      </div>

      <div class="header-search-box" >
         <div class="header-search-box-main">
            <div class="nft-input-box validate-input" data-validate="Name is required">

               <Select
                                        className="basic-single"
                                        classNamePrefix="Enter NFT-Asset Name"
                                        options={ASSET}
                                        onChange={(selectedAsset) => handleChange(selectedAsset)}
                                        styles={colourStyles}
                                    />

               
            </div>
         </div>
      </div>
      <div class="search-close" onClick={hideModal}>
         <i class="fas fa-times"></i>
      </div>

      
    </>
  );
}

export default Header;
