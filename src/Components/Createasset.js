import React from "react";
import axios from "axios";
import Web3 from "web3";
import asset from "../abis/Assets.json";
import api from "../api";
import config from "../config";
import Loading from "react-fullscreen-loading";
import swal from "sweetalert";
import Header from "./Header";

const IPFS = require("ipfs-api");
const ipfs = new IPFS({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
});
var contractAddress = config.Contract_address;

class Createassets extends React.Component {
  constructor(props) {
    super(props);
    this.generateNftToken = this.generateNftToken.bind(this);
    this.state = {
      selectedFile: null,
      assetName: "",
      price: "",
      description: "",
      tokenId: "",
      ipfsHash: "",
      loader: false,
      imagepreview: "",
    };
  }

  async componentDidMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  loadBlockchainData = async () => {
    console.log(",hgfcf", contractAddress);
    try {
      const web3 = window.web3;
      // Load account
      const accounts = await web3.eth.getAccounts();
      this.setState({ account: accounts[0] });
      const abi = asset;
      const contract = new web3.eth.Contract(abi, contractAddress);
      this.setState({ contract });
      const totalSupply = await contract.methods.totalSupply().call();
      this.setState({ totalSupply });
      // Load asset
      console.log("totalsupply&contract", totalSupply, contract);
    } catch (err) {
      console.log("loadBlockchainData=catchblock", err);
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
      // console.log("loadweb3catchblock", err)
      swal({ title: "please install metamask", icon: "error" });
    }
  };

  handleAssetName = (event) => {
    this.setState({ assetName: event.target.value });
  };

  handlePrice = (event) => {
    this.setState({ price: event.target.value });
  };

  onFileChange = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
      imagepreview: URL.createObjectURL(event.target.files[0]),
    });
  };

  handleDes = (event) => {
    this.setState({ description: event.target.value });
  };

  generateNftToken = async () => {
    const ownerethaddress = config.Platform_address;

    var email = localStorage.getItem("currentUserEmail");
    var username = localStorage.getItem('currentUserName');
    var token = sessionStorage.getItem("token");
    var self = this;
    console.log("jwttoken=", token, email);
    if (this.state.assetName === "" || this.state.assetName === null) {
      return swal({ title: "Enter your asset name", icon: "error" });
    } else if (
      this.state.selectedFile === "" ||
      this.state.selectedFile === null
    ) {
      return swal({ title: "please select your assets image", icon: "error" });
    } else if (
      this.state.description === "" ||
      this.state.description === null
    ) {
      return swal({ title: "Enter description", icon: "error" });
    } else {
      this.setState({ loader: true });
      var file = this.state.selectedFile;
      let reader = new window.FileReader();
      reader.readAsArrayBuffer(file);
      try {
        reader.onloadend = async () => {
          // console.log("clicked reader ipfs", reader)
          const buffer = await Buffer.from(reader.result);
          await ipfs.add(buffer, async (err, ipfsHash) => {
            // console.log("imagehash&err", err, ipfsHash[0].hash);
            //setState by setting ipfsHash to ipfsHash[0].hash
            this.setState({ ipfsHash: ipfsHash[0].hash });
            // const options = {
            //     headers: { 'authtoken': token }
            // };

            const newTokenID = await self.state.contract.methods
              .getCurrentTokenId()
              .call();

            console.log(
              "getTokenidresponse",
              newTokenID,
              " ipfsHash ",
              ipfsHash
            );

            var tokenId = newTokenID;
            self.state.contract.methods
              .mint(this.state.assetName, this.state.ipfsHash)
              .send({ from: this.state.account })
              .once("receipt", (receipt) => {
                console.log("receipt==========", receipt,token);


                // const config = {
                //             headers: {
                //               "authtoken": token
                //             }
                //           };

                // axios.post(api.API_URL+'tokendetails',{
                //   assetName: this.state.assetName,
                //   description: this.state.description,
                //   tokenId: tokenId,
                //   ipfsHash: this.state.ipfsHash
                // },config).then((resval)=>{
                //   console.log('respdata====',resval)
                // }).catch((errss)=>{
                //   console.log('errss====',errss)
                // })



                let url = api.API_URL + "generateAssets";
                const config = {
                  headers: {
                    authtoken: token,
                  },
                };

                axios
                  .post(
                    url,
                    {
                      assetName: this.state.assetName,
                      description: this.state.description,
                      owner: this.state.account,
                      tokenId: tokenId,
                      ipfsHash: this.state.ipfsHash,
                      email: email,
                      username:username
                    },
                    config
                  )
                  .then((resultdata) => {
                    console.log("resultDataupload_image", resultdata);
                    this.setState({ loader: false });
                    swal({
                      title: "Thanks for Generating Tokens",
                      icon: "info",
                    }).then((respss)=>{
                      
                      this.props.history.push("/Mynft");

                    }).catch((errrs)=>{
                      console.log('errror',errrs)
                    })
                  })
                  .catch((errr) => {
                    this.setState({ loader: false });
                  });
              })
              .catch((errror) => {
                console.log("metamask", errror);
                this.setState({ loader: false });
              });
          });
        };
      } catch (exception) {
        // console.log('exec', exception)
        this.setState({ loader: false });
      }
    }
  };

  render() {
    return (
      <>
        <Header fromScreen="Create" />
        {/* {this.state.loader ? (<Loading loading background="#ffffff00" loaderColor="#3498db" />) : (
                    <div className={'generatenftarea'}>
                        <h1>Create your collection</h1>
                        <table className="">
                            <tr>
                                <td><input type="text" placeholder="Asset Name" value={this.state.assetName} onChange={this.handleAssetName} /></td>
                            </tr>
                            <tr>
                                <td><input type="text" placeholder="Price in BNB" value={this.state.price} onChange={this.handlePrice} /></td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: "center" }}>
                                    <label className="custom-file-select">
                                        {this.state.selectedFile ? (
                                            <img src={this.state.imagepreview} alt="" />
                                        ) : (
                                            <i className="fas fa-image"></i>
                                        )}
                                        <input type="file" className="" placeholder="Upload your img" onChange={this.onFileChange} />
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <textarea
                                        style={{width: 500}}
                                        value={this.state.description}
                                        onChange={this.handleDes}
                                        placeholder="Description"
                                        rows={5}
                                        cols={5}
                                        />
                                    </td>
                            </tr>
                            <tr>
                            </tr>
                        </table>
                        <div className="theme-fix-btn">
                            <input type="submit" className="theme-btn" value="Generate Nft" onClick={this.generateNftToken}></input>
                        </div>
                    </div>
                )} */}

<div>
                {this.state.loader ? (<Loading loading background="#ffffff00" loaderColor="#3498db" />) : (
                  <div>
        <section className="gasless-area page-paddings">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="section-title text-center">
                  <h2 data-watermark="Sale">Create Your NFT</h2>
                  <p className="subtitle">
                    Start selling your items, all you need is your store to put
                    items. So begin creating your store and start listing items
                    in it.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 offset-xl-2 offset-lg-2 offset-md-2">
                <div className="mint-item-main-box">
                  <div className="easy-box">
                    <div className="mint-item-form">
                      <div className="theme-input-box">
                        <label>What kind of item are you making?</label>
                        <ul className="list-select-item clearfix">
                          <li>
                            <span className="active">Digital Art</span>
                          </li>
                          
                        </ul>
                      </div>
                      <div className="theme-input-box">
                        <label>
                          Asset Name{" "}
                          <i
                            className="fas fa-exclamation-circle"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="This is the name of the listing on Mintable - can be the same as the name"
                          ></i>
                        </label>
                        <input className="theme-input" type="" name=""  value={this.state.assetName} onChange={this.handleAssetName} />
                      </div>
                      {/* <div className="theme-input-box">
                        <label>
                          Price {" "}
                          <i
                            className="fas fa-exclamation-circle"
  
                          ></i>
                        </label>
                        <input className="theme-input" type="" name="" placeholder="Price in BNB" value={this.state.price} onChange={this.handlePrice}  />
                      </div> */}

                      <div className="theme-input-box">
                        <label>
                          Upload preview image for your store{" "}
                          <i
                            className="fas fa-exclamation-circle"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="This is a private file that only the owner of your NFT can download. Max size 2gb, any file type accepted"
                          ></i>
                        </label>
                        <div className="theme-file-upload text-center">
                          <div className="file-upload-ico">
                          
                          <label className="custom-file-select">
                                        {this.state.selectedFile ? (
                                            <img src={this.state.imagepreview} alt="" />
                                        ) : (
                                            <i className="fas fa-image"></i>
                                        )}
                                        <input type="file" className="" placeholder="Upload your img" onChange={this.onFileChange} />
                                    </label>

                            
                          </div>
                          <h3 className="theme-title">Choose Photo</h3>
                          <p className="theme-description">
                            (items should be images/ GIFs)
                          </p>
                        </div>
                      </div>



                      <div className="theme-input-box">
                        <label>Description</label>
                        <textarea
                          name=""
                          className="theme-input"
                          id="editor"
                          rows="4"
                          value={this.state.description}
                            onChange={this.handleDes}
                        ></textarea>
                        <p className="theme-description" >
                          <i
                            className="fas fa-exclamation-circle"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="This is the listing subtitle"
                            
                          ></i>{" "}
                          Describe your NFT in Details.
                        </p>
                      </div>
                     
                      
                      
                      <div className="theme-fix-btn">
                        <button
                          className="theme-btn"
 
                          onClick={this.generateNftToken}
                        >
                          Process
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        
        
        
        <footer className="footer-main">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="footer-widget">
                    <a href="/">
                      <img src="assets/images/logo-white.png" alt="" />
                    </a>
                    <p className="theme-description">
                      We are one of the best pre-designed template providers,
                      for all the niches with more than 800 designs.{" "}
                    </p>
                    <div className="footer-links clearfix">
                      <div className="footer-icon-box">
                        <a
                          href="#"
                          title="Facebook"
                          style={{ color: "#3b5998" }}
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </div>
                      <div className="footer-icon-box">
                        <a href="#" title="Twitter" style={{ color: "#00acee" }}>
                          <i className="fab fa-twitter"></i>
                        </a>
                      </div>
                      <div className="footer-icon-box">
                        <a
                          href="#"
                          title="Linkedin"
                          style={{ color: "#0e76a8" }}
                        >
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
                          <a href="/Home">Create a Store</a>
                        </li>
                        <li>
                          <a href="/Home">List an Item for sale</a>
                        </li>
                        <li>
                          <a href="/Signup">My Profile</a>
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
                          <a href="/contact">Help and support</a>
                        </li>
                        <li>
                          <a href="/Faq">FAQ</a>
                        </li>
                        <li>
                          <a href="/Contact">Contact us</a>
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
                          <a href="/Browse">Browse Digital Items</a>
                        </li>
                        <li>
                          <a href="/Browse">Browse Stores</a>
                        </li>
                        <li>
                          <a href="/Browse">Where to buy NFTs</a>
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
                          <a href="/Gopro">Premium services</a>
                        </li>
                        <li>
                          <a href="/PrivacyPolicy">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="/TermsOfUse">Terms of use</a>
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
                      Copyright 2021 <a href="/">NFT Marketplace</a>{" "}
                      All Rights Reserved.
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





        
      </>
    );
  }
}

export default Createassets;
