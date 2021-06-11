import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import api from "../api";
import Web3 from "web3";
import swal from "sweetalert";
import axios from "axios";
import fireimage from "../images/fire.jpg";
import HotPic from "../images/blast.png";
import Profilepic from "../images/profileimg.png";

class Rariable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      dataList: [],
      allusers: [],
    };
  }

  async componentDidMount() {
    await this.getAllData();
    await this.loadWeb3();
    this.getallusers();
  }

  

  notSoldClick = (data, email) => {
    let signeduserEmail = localStorage.getItem("currentUserEmail");
    let jwttoken = sessionStorage.getItem("token");
    console.log("nftsoldclick=====>", data, email);
    if (signeduserEmail === email) {
      this.props.history.push("/Detail", {
        tokenID: data,
      });
    } else {
      if (jwttoken) {
        this.props.history.push("/Detailexplore", {
          tokenID: data,
        });
      } else {
        swal({ title: "Unauthorized access! Login first", icon: "error" });
      }
    }
  };

  notSoldClick1 = (data,email) => {
    console.log("notsoldmethod====", data,email);
    var jwttoken = sessionStorage.getItem("token");
    if (jwttoken) {
      this.props.history.push("/Detail", {
        tokenID: data,
      });
    } else {
      swal({ title: "Unauthorized Access! Login first", icon: "error" });
    }
  };

usersnft = (email) => {
    var jwttoken = sessionStorage.getItem("token");
    console.log("email====", email, jwttoken);
    if (jwttoken) {
      this.props.history.push("/Usersnft", {
        email: email,
      });
    } else {
      swal({ title: "Unauthorized Access! Login first", icon: "error" });
    }
  };

  loadWeb3 = async () => {
    try {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
      } else {
        window.alert(
          "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
      }
    } catch (err) {
      console.log("loadweb3catchblock", err);
      swal({ title: "Please Install Metamask", icon: "error" });
    }
  };

  //List of all data in table;
  getAllData = async () => {
    axios
      .get(api.API_URL + "getalldata")
      .then((listdata) => {
        console.log("getalldatalist", listdata.data.data);

        this.setState({
          originalData: listdata.data.data,
          totalitem: listdata.data.data.length,
          totalData: listdata.data.data,
          dataList: listdata.data.data,
        });
      })
      .catch((errs) => {
        console.log("alldata_api_catchblock", errs);
      });
  };

  getallusers = () => {
    axios
      .get(api.API_URL + "alluserregistered")
      .then((respdata) => {
        console.log("All users =======", respdata.data.allusers);
        this.setState({ allusers: respdata.data.allusers });
      })
      .catch((errss) => {
        console.log("errss", errss);
      });
  };

  render() {
    return (
      <>
        <Header />
        <div style={{ marginTop: "100px" }}>
          <section
            className="promisional-secret-area"
            style={{ paddingBottom: "60px" }}
          >
            <div className="container-fluid">
              <div className="rows">
                {this.state.dataList.length && (
                  <div className="col-xl-12">
                    <div className="promotion-sreact-slider clearfix">
                      <OwlCarousel
                        className="owl-theme"
                        mouseDrag={true}
                        slideBy={1}
                        loop={true}
                        margin={30}
                        items={5}
                        nav={true}
                        dots={false}
                      >
                        {this.state.dataList.map((list) => (
                          <div className="promotion-sreact-box">
                            <div onClick={() => this.notSoldClick(list.tokenId,list.email)}>
                              <div className="promotion-sreact-img">
                                <img
                                  style={{
                                    height: 300,
                                    width: 300,
                                    opacity: 5,
                                  }}
                                  src={api.IPFS_URL + list.ipfsHash}
                                  alt=""
                                />
                              </div>
                              <div className="promotion-sreact-info">
                                <h3
                                  className="theme-title"
                                  style={{ fontSize: 20,color:"#fff" }}
                                >
                                  {" "}
                                  {list.assetName}
                                </h3>
                                <h3
                                  className="theme-title"
                                  style={{ fontSize: 20,color:"#fff" }}
                                >
                                  {" "}
                                  {list.description}
                                </h3>

                                {/* <p className="theme-description">{list.description}</p> */}
                              </div>
                            </div>
                          </div>
                        ))}
                      </OwlCarousel>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          <div className="rows">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="text-left">
                <p
                  style={{
                    fontWeight: 900,
                    fontFamily: "inherit",
                    color: "inherit",
                    fontSize: 30,
                    marginLeft: "20px",
                  }}
                >
                  Live auctions
                  <img
                    style={{
                      height: "40px",
                      width: "40px",
                      marginBottom: "12px",
                      marginLeft: "5px",
                    }}
                    src={fireimage}
                    alt=""
                  />
                </p>
              </div>
            </div>
          </div>

          <section
            className="promisional-secret-area"
            style={{ paddingBottom: "0px" }}
          >
            <div className="container-fluid">
              <div className="rows">
                {this.state.dataList.length && (
                  <div className="col-xl-12">
                    <div className="promotion-sreact-slider clearfix">
                      <OwlCarousel
                        className="owl-theme"
                        mouseDrag={true}
                        slideBy={1}
                        loop={true}
                        margin={10}
                        items={5}
                        nav={true}
                        dots={false}
                      >
                        {this.state.dataList.map((list) =>
                          list.listingtype === "Listed" ? (
                            list.soldStatus === "1" ? (
                              <div className="item-group">
                                <div className="item-group-content">
                                  <div className="items-like">
                                    <i className="far fa-eye"></i>
                                  </div>
                                  <div className="item-group-avtar">
                                    <img
                                      style={{
                                        height: 220,
                                        width: 160,
                                      }}
                                      src={api.IPFS_URL + list.ipfsHash}
                                      alt=""
                                    />
                                  </div>
                                  <h3 className="theme-title">
                                    <a href="">{list.assetName}</a>
                                  </h3>

                                  <p className="theme-description">
                                    <h2 className="item-price text-muted">
                                      {list.price} BNB
                                    </h2>
                                  </p>
                                  <p className="theme-description"> Sold </p>

                                  <div className="item-group-btn">
                                    <a
                                      className="theme-btn btn-disabled  text-muted disabled"
                                      onClick={() =>
                                        this.notSoldClick1(list.tokenId,list.email)
                                      }
                                    >
                                      Sold Out
                                    </a>
                                    <a className="item-detail-btn" href="">
                                      <i className="fas fa-info-circle"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className="item-group">
                                <div className="item-group-content">
                                  <div className="items-like">
                                    <i className="far fa-eye"></i>
                                  </div>
                                  <div
                                    className="item-group-avtar"
                                    style={{
                                      margin: "0px",
                                      padding: "0px",
                                      borderWidth: "0px",
                                      borderStyle: "solid",
                                      borderColor: "black",
                                      display: "flex",
                                      flexBasis: "auto",
                                      flexDirection: "column",
                                      flexShrink: 0,
                                      minHeight: "0px",
                                      minWidth: "0px",
                                      maxWidth: "100%",
                                      width: "222px",
                                      height: "220px",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      overflow: "hidden",
                                    }}
                                  >
                                    <img
                                      style={{
                                        height: 200,
                                        width: 180,
                                        borderRadius: "6px",
                                        opacity: 1,
                                        visibility: "visible",
                                        position: "relative",
                                      }}
                                      src={api.IPFS_URL + list.ipfsHash}
                                      alt=""
                                    />
                                  </div>
                                  <h3 className="theme-title">
                                    <a href="">{list.assetName}</a>
                                  </h3>

                                  <p className="theme-description">
                                    <h2 class="item-price">{list.price} BNB</h2>
                                  </p>
                                  <p className="theme-description">
                                    {" "}
                                    Not Sold{" "}
                                  </p>

                                  <div className="item-group-btn">
                                    <a
                                      className="theme-btn"
                                      onClick={() =>
                                        this.notSoldClick1(list.tokenId,list.email)
                                      }
                                    >
                                      Buy Now
                                    </a>
                                    <a className="item-detail-btn" href="">
                                      <i className="fas fa-info-circle"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            )
                          ) : (
                            ""
                          )
                        )}
                      </OwlCarousel>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          <div className="rows">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="text-left">
                <p
                  style={{
                    fontWeight: 900,
                    fontFamily: "inherit",
                    color: "inherit",
                    fontSize: 30,
                    marginLeft: "20px",
                    marginTop: "20px",
                  }}
                >
                  Hot User's collections
                  <img
                    style={{
                      height: "50px",
                      width: "50px",
                      marginBottom: "12px",
                      marginLeft: "5px",
                    }}
                    src={HotPic}
                    alt=""
                  />
                </p>
              </div>
            </div>
          </div>

          <div
            className="container-fluid"
            style={{
              marginLeft: "60px",
              marginRight: "60px",
              marginBottom: "60px",
            }}
          >
            {this.state.allusers.length && (
              <div className="row">
                {this.state.allusers.slice(0, 4).map((list) => (
                  <div className="item-group" style={{ marginRight: "35px" }}>
                    <div
                      className="card hovercard"
                      onClick={() => this.usersnft(list.email)}
                    >
                      <div
                        className="cardheader"
                        alt=""
                        style={{
                          height: "135px",
                          width: "250px",
                          backgroundColor: "#0c5adb",
                        }}
                      ></div>
                      <div className="avatar">
                        <img alt="" src={Profilepic} />
                      </div>
                      <div className="info">
                        <div className="title">
                          <a target="" href="">
                            {list.userName}
                          </a>
                        </div>
                        <div className="desc">{list.email}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Rariable;
