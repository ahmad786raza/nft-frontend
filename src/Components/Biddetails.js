import React from "react";
import axios from "axios";
import api from "../api";
import config from "../config";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { errors, ethers } from "ethers";
import Web3 from "web3";
import Loading from "react-fullscreen-loading";
import swal from "sweetalert";
import asset from "../abis/Assets.json";
import Header from "../Components/Header";
import Footer from "./Footer";
import Timer from "./Timer";
// Modal custom style
// const customStyles = {
//     content: {
//         top: '50%',
//         left: '50%',
//         right: 'auto',
//         bottom: 'auto',
//         marginRight: '-50%',
//         transform: 'translate(-50%, -50%)',

//     }
// };
const contractAddress = config.Contract_address;

class Biddetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      selectedFile: null,
      assetName: "",
      price: "",
      description: "",
      tokenId: "",
      dataList: [],
      imageName: "",
      ethadd: config.Platform_address,
      soldstatus: "",
      visible: false,
      loader: false,
      ipfsHash: "",
      web3: "",
      tokenOwner: "",
      modalOpen: false,
      bidprice: "",
      sellingtype: "",
      nftUserEmail: "",
      biddeduser: "",
      status: ""
    };
  }

  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  componentDidMount() {
    var nftuseremail = this.props.location.state.email;
    var jwttoken = sessionStorage.getItem("token");
    var currentuseremail = localStorage.getItem("currentUserEmail");
    this.setState({
      tokenId: this.props.location.state.tokenID,
      nftUserEmail: nftuseremail,
    });
    console.log(
      "jwttoken",
      jwttoken,
      " nftTokenIdNumber ",
      this.props.location.state.tokenID,
      nftuseremail
    );
    if (jwttoken) {
      const config = {
        headers: {
          authtoken: jwttoken,
        },
      };
      axios
        .post(
          api.API_URL + "getsingledata",
          { tokenId: this.props.location.state.tokenID },
          config
        )
        .then((respo) => {
          console.log("========respo from single data api", respo);
          this.setState({
            ipfsHash: respo.data.data.ipfsHash,
            price: respo.data.data.price,
            assetName: respo.data.data.assetName,
            description: respo.data.data.description,
            sellingtype: respo.data.data.sellingtype,
            bidtimes: respo.data.data.bidtime,
            soldstatus:respo.data.data.soldStatus
          });
          this.checkPlaceAuc(jwttoken,currentuseremail,this.props.location.state.tokenID);
        })
        .catch((er) => {
          // console.log('er', er)
        });
    } else {
      swal({ title: "Unauthorized Access", icon: "error" });
      this.props.history.push("/");
    }

   
  }

  loadBlockchainData = async () => {
    try {
      const web3 = window.web3;
      // Load account
      const accounts = await web3.eth.getAccounts();
      this.setState({ web3: web3, account: accounts[0] });
      const abi = asset;
      const contract = new web3.eth.Contract(abi, contractAddress);
      this.setState({ contract });
      const totalSupply = await contract.methods.totalSupply().call();
      this.setState({ totalSupply });
      // Load asset
      // console.log("totalsupply&contract", totalSupply, contract)
    } catch (err) {
      // console.log("error", err)
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
      swal({ title: "please install metamask", icon: "error" });
    }
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  openModal = () => {
    this.setState({ modalOpen: true });
  };

  handlePrice = (event) => {
    this.setState({ bidprice: event.target.value });
  };

  checkPlaceAuc = (jwttoken, email, nfttokenid) => {
    console.log("checkPlaceAux method",nfttokenid,email,jwttoken);
    this.setState({ loader: true });
    const config = {
      headers: {
        authtoken: jwttoken,
      },
    };
    axios
      .post(
        api.API_URL + "checkuserauc",
        {
          nftTokenId: nfttokenid,
          email: email,
        },
        config
      )
      .then((resvalue) => {
        console.log("resp from check Aux api", resvalue);
        this.setState({ biddeduser: resvalue.data.data.email,AucPrice: resvalue.data.data.tokenBidPrice, loader: false ,status:resvalue.data.data.status});
      })
      .catch((err) => {
        console.log("error", err);
        this.setState({ loader: false });
      });
  };

  placeAux = () => {
    let biddingPrice = this.state.bidprice;
    let nfttokenId = this.state.tokenId;
    let jwttoken = sessionStorage.getItem("token");
    let email = localStorage.getItem("currentUserEmail");
    if (jwttoken) {
      if (nfttokenId === "" || nfttokenId === null || nfttokenId === undefined
      ) {
        swal({ title: "check your nft token id", icon: "info" });
      } else if ( biddingPrice === "" || biddingPrice === null || biddingPrice < this.state.price ) {
        swal({title:"Bid price should not be null nor less than min bidding amount",icon: "info",});
      } else {
        this.setState({ modalOpen: false, loader: true });
        console.log("========", biddingPrice, nfttokenId, email);
        const config = {
          headers: {
            authtoken: jwttoken,
          },
        };
        axios
          .post(
            api.API_URL + "placeAuction",
            {
              nftTokenId: nfttokenId,
              bidPrice: biddingPrice,
              email: email,
            },
            config
          )
          .then((Aucdetails) => {
            console.log("Auction saved resp", Aucdetails);
            this.setState({ loader: false, status : Aucdetails.data.data.status });
            window.location.reload();
          })
          .catch((err) => {
            console.log("catch block", err);
            this.setState({ loader: false });
          });
      }
    } else {
      swal({ title: "Unauthorized Access", icon: "error" });
      this.props.history.push("/");
    }
  };

  cancelAuc = () => {
    let nftTokenId = this.state.tokenId;
    let email = localStorage.getItem("currentUserEmail");
    var jwttoken = sessionStorage.getItem("token");
    this.setState({loader:true})
    const config = {
      headers: {
        authtoken: jwttoken,
      },
    };
    axios.post(api.API_URL+'cancelauc',{
      email:email,
      nftTokenId:nftTokenId
    },config).then((deleteddata)=>{
      console.log("deleted data",deleteddata)
      this.setState({loader:false,biddeduser:""})
    }).catch((err)=>{
      console.log("catch block",err)
      this.setState({loader:false})
    })
  };

  cancelListing = () => {
    let tokenId = this.state.tokenId;
    var jwttoken = sessionStorage.getItem("token");
    console.log("token id calcel listing", tokenId, jwttoken);
    if (jwttoken) {
      this.setState({ loader: true });
      const config = {
        headers: {
          authtoken: jwttoken,
        },
      };

      axios
        .post(
          api.API_URL + "cancellisting",
          {
            tokenId: this.state.tokenId,
          },
          config
        )
        .then((cancelled) => {
          console.log("cancelled value", cancelled);
          this.setState({
            loader: false,
            listingType: cancelled.data.updatedData.listingtype,
          });
          swal({
            title: "Your Token has been removed from listing",
            icon: "info",
          })
            .then((res) => {
              this.props.history.push("/Mynft");
            })
            .catch((errss) => {
              console.log("errss", errss);
              this.setState({ loader: false });
            });
        })
        .catch((errorss) => {
          this.setState({ loader: false });
          console.log("errors", errorss);
        });
    } else {
      swal({ title: "Unauthorized Access", icon: "error" });
      this.props.history.push("/");
    }
  };

  listToken = () => {
    var jwttoken = sessionStorage.getItem("token");
    var ownerethaddress = config.Platform_address;
    var toEmail = localStorage.getItem('currentUserEmail');
    if (jwttoken === "" || jwttoken === null) {
      return swal({ title: "Unauthorized Access", icon: "error" });
    } else if (ownerethaddress === "" || ownerethaddress === null) {
      return swal({ title: "Owner address wrong ,Please check metamask" });
    } else if (
      this.state.price === "" ||
      this.state.price === null ||
      this.state.price < 0.005
    ) {
      return swal({
        title: "Minimum token price should be 0.005",
        icon: "error",
      });
    } else {
      this.setState({ modalOpen: false, loader: true });
      if (jwttoken) {
        const config = {
          headers: {
            authtoken: jwttoken,
          },
        };
        axios
          .post(
            api.API_URL + "updateprice",
            {
              tokenId: this.state.tokenId,
              price: this.state.price,
            },
            config
          )
          .then((updated) => {
            console.log("response from update api", updated);
            this.state.contract.methods
              .approve(ownerethaddress, this.state.tokenId)
              .send({ from: this.state.account })
              .once("receipt", (receipts, err) => {
                console.log("receipts=======>", receipts, err);
                if (err) {
                  this.setState({ loader: false });
                  swal({ title: err, icon: "error" });
                } else {
                  this.setState({
                    loader: false,
                    listingType: updated.data.updatedData.listingtype,
                  });
                  swal({
                    title: "Your Token has been listed for sale.",
                    icon: "info",
                  })
                    .then((respss) => {
                      this.props.history.push({
                        pathname: "/Home",
                        // state: { tokenIdDetails: updated}
                      });
                    })
                    .catch((errrs) => {
                      console.log("errror", errrs);
                    });
                }
              });
          })
          .catch((errss) => {
            console.log("errss", errss);
            this.setState({ loader: false });
          });
      } else {
        swal({ title: "Unauthorized Access", icon: "error" });
        this.props.history.push("/");
      }
    }
  };

  buyToken = () => {
    console.log("sds", this.state.AucPrice);
    this.setState({ loader: true });
    var self = this;
    var price = this.state.AucPrice.toString();
    const { web3 } = window;
    this.state.contract.methods
      .ownerOf(this.state.tokenId)
      .call()
      .then((tokenOwner) => {
        console.log("accounts result", tokenOwner);
        web3.eth.getAccounts(function (error, result) {
          if (tokenOwner === result[0]) {
            swal({
              title: "token owner and token buyer can't be same",
              icon: "error",
            });
            self.setState({ loader: false });
          } else {
            web3.eth
              .getBalance(result[0])
              .then((value) => {
                console.log("value", web3.utils.fromWei(value, "ether"));
                var balance = web3.utils.fromWei(value, "ether");
                if (balance < price) {
                  swal({ title: "Insufficient Balance!", icon: "error" });
                  self.setState({ loader: false });
                } else {
                  web3.eth.sendTransaction(
                    {
                      from: result[0],
                      to: self.state.ethadd,
                      value: web3.utils.toWei(price, "ether"),
                      data: "",
                    },
                    function (err, transactionHash) {
                      self.paymentMethod(transactionHash, result[0]);
                    }
                  );
                }
              })
              .catch((errorss) => {
                console.log("====errors", errorss);
              });
          }
        });
      })
      .catch((err) => {
        self.setState({ loader: false });
      });
  };

  paymentMethod = (transhash, receiverAdd) => {
    var token = sessionStorage.getItem("token");
    let assetname = this.state.assetName;
    var txhash = transhash;
    var payamout = this.state.AucPrice;
    var payaddr = receiverAdd;
    var tokenid = this.state.tokenId;
    var toEmail = localStorage.getItem('currentUserEmail');
    var toUsername = localStorage.getItem('currentUserName');
    console.log(txhash, "hash&tokenid", tokenid);
    const provider = new ethers.providers.JsonRpcProvider(
      "https://data-seed-prebsc-1-s1.binance.org:8545/"
    );

    provider.getTransaction(txhash).then((transaction) => {
      console.log("transdetails", transaction.from, transaction.to);
      let paidprice = transaction.value.toString() / 1e18;
      let sendtoadd = transaction.to.toLowerCase();
      console.log("sendtoadd", sendtoadd, this.state.ethadd);

      if (sendtoadd !== this.state.ethadd.toLowerCase()) {
        swal({ title: "Receiver address is wrong!", icon: "error" });
      }
      if (payamout !== paidprice) {
        swal({ title: "Please pay required amount.", icon: "error" });
        this.setState({ loader: false });
      } else {
        const options = {
          headers: { authtoken: token },
        };
        axios
          .post(
            api.API_URL + "paymentdetail",
            {
              assetName: assetname,
              tokenId: tokenid,
              newOwnerAddrs: payaddr,
              boughtTokenHash: txhash,
              tokenPrice: payamout,
              toemail:toEmail,
              tousername:toUsername

            },
            options
          )
          .then((datas) => {
            // console.log('datas', datas)
            if (datas.data.status) {
              this.setState({ loader: false });
              swal({ title: "Token bought success", icon: "success" }).then(
                (respd) => {
                  this.props.history.push("/");
                }
              );
            } else {
              swal({ title: "Tranfering failed.", icon: "error" });
              this.setState({ loader: false });
            }
          })
          .catch((errss) => {
            // console.log('catchblock', errss)
            this.setState({ loader: false });
          });
      }
    });
  };

  render() {
    console.log("this.props", this.props.location.state);
    return (
      <>
        <Header fromScreen="Detail" />
        <div>
          {this.state.loader ? (
            <Loading loading background="#ffffff00" loaderColor="#3498db" />
          ) : (
            <div>
              <div className="container">
                <div className="singlemodaldetail">
                  <section className="browse-detail-area page-paddings">
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="browse-detail-images text-center">
                            <div className="browse-detail-large">
                              <img
                                src={api.IPFS_URL + this.state.ipfsHash}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="browse-detail-info">
                            <h1>{this.state.assetName}</h1>
                            <div className="store-ratting">
                              <i className="fas fa-star-half-alt"></i>
                              <i className="fas fa-star-half-alt"></i>
                              <i className="fas fa-star-half-alt"></i>
                              <i className="fas fa-star-half-alt"></i>
                              <i className="far fa-star"></i> (3.5)
                            </div>
                            <h3 className="theme-title">
                              {this.state.assetName}
                            </h3>
                            <p className="theme-description">
                              {this.state.description}
                            </p>
                            <div className="starting-bid">
                              <ul>
                                <li>Top seller </li>
                                <li>
                                  Token ID: <span> {this.state.tokenId}</span>
                                </li>
                                <li>
                                  Edition: <span>1/1</span>
                                </li>
                                <li>
                                  Copyright Transferred: <span>Yes</span>
                                </li>
                                <li>
                                  Downloadable file: <span>Yes</span>
                                </li>
                                <li>
                                  Resellable: <span>Yes</span>
                                </li>

                                <li style={{ fontWeight: "bold" }}>
                                  Listed for Price:
                                  <span>{this.state.price}</span>
                                </li>
                                {this.state.bidtimes &&
                                this.state.bidtimes != "" ? (
                                  <Timer expiry={this.state.bidtimes} />
                                ) : (
                                  ""
                                )}
                              </ul>
                            </div>

                            {/* <div className="browse-bid-detail">
                          <div className="browse-bid-box">

                            <h2>
                              Price: <span>{this.state.price}BNB</span>
                            </h2>
                          </div>
                          <div className="browse-buy-btn">
                            <button
                              className="theme-btn"
                              onClick={this.buyToken}
                            >
                              BUY NOW
                            </button>
                          </div>
                        </div> */}
                            <div className="browse-tag">
                              <ul className="clearfix">
                                <li>game</li>
                                <li>crypto</li>
                                <li>movie</li>
                                <li>short</li>
                                <li>bitcoin</li>
                                <li>ether</li>
                                <li>animation</li>
                              </ul>
                              <ul className="clearfix">
                                {
                                  (this.state.biddeduser !== "" && this.state.status === 'REQUESTED') && (
                                    <li>You have already placed Bid at <b> {this.state.AucPrice}BNB </b>.</li>
                                  )
                                }
                                { (this.state.biddeduser !==  "" && this.state.status === "NOT-WIN") && (
                              
                              <li>Sorry to inform you lost this auction.</li>
                              ) }
                               { (this.state.biddeduser !==  "" && this.state.status === "WIN") && (
                              
                              <li>Congratulations! You have won this auction please click buy now button to claim this NFT</li>
                              ) }
                              </ul>
                            </div>
                          </div>
                          <div>
                            { (this.state.biddeduser !==  "" && this.state.status === "REQUESTED") && (
                              
                              <button
                                type="button"
                                class="btn btn-primary btn-lg"
                                style={{
                                  width: "30%",
                                  marginRight: "10px",
                                  marginTop: "10px",
                                  padding: "4px",
                                }}
                                onClick={this.cancelAuc}
                              >
                                Cancel Bid
                              </button>
                            ) }

{ (this.state.biddeduser !==  "" && this.state.status === "WIN" && this.state.soldstatus === "0") && (
                              
                              <button
                                type="button"
                                class="btn btn-primary btn-lg"
                                style={{
                                  width: "30%",
                                  marginRight: "10px",
                                  marginTop: "10px",
                                  padding: "4px",
                                }}
                               onClick={this.buyToken}
                              >
                                BUY NOW
                              </button>
                            ) }


                            
{/* 
                            { (this.state.biddeduser !==  "" && this.state.status === "REQUESTED") && (
                              
                              <button
                                type="button"
                                class="btn btn-primary btn-lg"
                                style={{
                                  width: "30%",
                                  marginRight: "10px",
                                  marginTop: "10px",
                                  padding: "4px",
                                }}
                                onClick={this.cancelAuc}
                              >
                                Cancel Bid
                              </button>
                            ) } */}
                            
                            {this.state.biddeduser === '' && (
                              <button
                              type="button"
                              class="btn btn-primary btn-lg"
                              style={{
                                width: "30%",
                                marginRight: "10px",
                                marginTop: "10px",
                                padding: "4px",
                              }}
                              onClick={this.openModal}
                            >
                              Place For Bid
                            </button>
                              
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>

              <footer className="footer-main">
                <div className="footer-top">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="footer-widget">
                          <a href="index.html">
                            <img src="assets/images/logo-white.png" alt="" />
                          </a>
                          <p className="theme-description">
                            We are one of the best pre-designed template
                            providers, for all the niches with more than 800
                            designs.{" "}
                          </p>
                          <div className="footer-links clearfix">
                            <div className="footer-icon-box">
                              <a href="" title="Facebook">
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </div>
                            <div className="footer-icon-box">
                              <a href="" title="Twitter">
                                <i className="fab fa-twitter"></i>
                              </a>
                            </div>
                            <div className="footer-icon-box">
                              <a href="" title="Linkedin">
                                <i className="fab fa-linkedin-in"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-12">
                        <div className="footer-widget">
                          <h3 className="theme-title">My account</h3>
                          <div className="footer-menu-services">
                            <ul className="menu-service-menu">
                              <li>
                                <a href="create-store.html">Create a Store</a>
                              </li>
                              <li>
                                <a href="min-item.html">
                                  List an Item for sale
                                </a>
                              </li>
                              <li>
                                <a href="login.html">My Profile</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-12">
                        <div className="footer-widget">
                          <h3 className="theme-title">Need Help?</h3>
                          <div className="footer-menu-services">
                            <ul className="menu-service-menu">
                              <li>
                                <a href="contact.html">Help and support</a>
                              </li>
                              <li>
                                <a href="faq.html">FAQ</a>
                              </li>
                              <li>
                                <a href="contact.html">Contact us</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-12">
                        <div className="footer-widget">
                          <h3 className="theme-title">Buy an Item</h3>
                          <div className="footer-menu-services">
                            <ul className="menu-service-menu">
                              <li>
                                <a href="browse.html">Browse Digital Items</a>
                              </li>
                              <li>
                                <a href="browse.html">Browse Stores</a>
                              </li>
                              <li>
                                <a href="browse.html">Where to buy NFTs</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="footer-widget">
                          <h3 className="theme-title">Go pro</h3>
                          <div className="footer-menu-services">
                            <ul className="menu-service-menu">
                              <li>
                                <a href="go-pro.html">Premium services</a>
                              </li>
                              <li>
                                <a href="privacy-policy.html">Privacy Policy</a>
                              </li>
                              <li>
                                <a href="terms-of-use.html">Terms of use</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer-copyright">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="copyright-text text-center">
                          <p>
                            Copyright 2021{" "}
                            <a href="index.html">NFT Marketplace</a> All Rights
                            Reserved.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          )}
        </div>

        {/* model first start for direct sale */}
        <Modal
          show={this.state.modalOpen}
          backdrop="static"
          size="lg"
          onHide={this.closeModal}
          centered
        >
          {/* <Modal.Header className="modal-header " style={{ paddingLeft: 50}}>
            <Modal.Title>
              <h4 className="modal-title" >Price Details</h4>
            </Modal.Title>
          </Modal.Header> */}

          <Modal.Body className="text-center">
            <div className="row">
              <div className="col-md-12" style={{ marginTop: 30 }}>
                <div>
                  <label htmlFor="buy">&nbsp; Enter The Bid Price</label>
                  <input
                    type="number"
                    placeholder="0.000 BNB"
                    className="form-control"
                    value={this.state.bidprice}
                    onChange={this.handlePrice}
                  />
                </div>
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer style={{ display: "flex", justifyContent: "center" }}>
            <Button
              className="btn btn-primary btn-lg"
              style={{ width: "30%", padding: "4px" }}
              onClick={this.placeAux}
            >
              Confirm
            </Button>
            <Button
              className="btn btn-primary btn-lg"
              style={{ width: "30%", padding: "4px" }}
              onClick={this.closeModal}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {/* modal first ends  */}
      </>
    );
  }
}

export default Biddetails;