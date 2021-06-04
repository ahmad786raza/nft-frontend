import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Web3 from "web3";
import axios from "axios";
import api from "../api";
import Loading from "react-fullscreen-loading";
import swal from "sweetalert";
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
// import Art_1 from '../images/domain/art_1.png';
// import Art4 from '../images/game/art_4.gif';
// import Art_2 from '../images/domain/art_2.png';
// import Art9 from '../images/game/art_9.gif';
import Tokenimg from '../images/token.png';
import Store from '../images/store.png';
import Art_5 from '../images/domain/art_5.png';
import Artt_5 from '../images/game/art_5.png';
import Art3 from '../images/music/art_5.png';
import Art_4 from '../images/music/art_1.png';
// import Art_3 from '../images/music/art_2.png';
// import Art10 from '../images/game/art_10.png';
// import Art6 from '../images/game/art_11.png';
// import Art7 from '../images/music/art_7.png';
// import Mintale1 from '../images/mintale1.png';
// import Mintale2 from '../images/mintale2.png';
// import Mintale3 from '../images/mintale3.png';
// import Shopimg from '../images/shop.png';




class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            account: "",
            dataList: [],

        }
    }


    async componentDidMount() {
        await this.getAllData();
        await this.loadWeb3();
    }

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
            console.log("loadweb3catchblock", err)
            swal({ title: "please install metamask", icon: "error" });
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
                    // listdata.data.data.slice(
                    //   this.state.offset,
                    //   this.state.offset + this.state.perPage
                    // ),
                    // totalData: listdata.data.data,
                    // totalData:listdata.data.data.sort( (a, b) => new Date(b.createdAt) - new Date(a.createdAt)) ,

                    //  sort : this.state.dataList.sort((a,b) => (this.state.sort === 'lowest')? (a.price < b.price?1:-1):(a.price > b.price?1:-1) ),
                });
            }).catch((errs) => {
                console.log("alldata_api_catchblock", errs)
            });
    };

    notSoldClick = (data) => {
        console.log("shomodal=====", data);
        var jwttoken = sessionStorage.getItem("token");
        if (jwttoken) {
          this.props.history.push("/Detail", {
            tokenID: data,
          });
        } else {
          swal({ title: "Unauthorized access! Login first", icon: "error" });
        }
      };

    render() {
        return (
            <>
                <Header />

                <div>

                    <section className="slider-area">
                        <div className="slider-inner">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="slider-information">
                                            <h1>Crypto-Collectibles Marketplace.</h1>
                                            <div className="em_bar">
                                                <div className="em_bar_bg"></div>
                                            </div>
                                            <p className="theme-description">We are all new crypto-collectibles marketplace from arts, music, games to domains, and templates, and many more in the list. Now you can buy & sell rare items.</p>
                                            <div className="slider-btn">
                                                <a className="theme-btn" href="/Home">Start Buy/Sell</a>
                                                {/* <a className="theme-btn sl-sale-btn" href="/Art">List item for sale</a> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="slider-images">
                                            <img src={Sliderimg} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="promisional-secret-area" style={{ paddingBottom: '60px' }}>
                        <div className="container">
                            <div className="rows">
                                {this.state.dataList.length && (
                                    <div className="col-xl-12">
                                        <div className="promotion-sreact-slider clearfix">
                                            <OwlCarousel className='owl-theme' loop={true} margin={30} items={3} nav={true} dots={false}>
                                                {this.state.dataList.map((list) => (

                                                    <div className="promotion-sreact-box">
                                                        <a href=""  onClick={() => this.notSoldClick(list.tokenId)}>
                                                            <div className="promotion-sreact-img">
                                                                <img style={{ height: 300, width: 300,opacity:5 }} src={api.IPFS_URL + list.ipfsHash} alt="" />
                                                            </div>
                                                            <div className="promotion-sreact-info">
                                                                <h3 className="theme-title" style={{ fontSize: 20 }}> {list.assetName}</h3>
                                                                <p className="theme-description">{""}</p>
                                                            </div>
                                                        </a>
                                                    </div>

                                                ))}
                                            </OwlCarousel>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>

                    <section className="earn-area page-paddings">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="earn-main-box">
                                        <div className="earn-images">
                                            <img src={About} alt="" />
                                        </div>
                                        <div className="earn-info">
                                            <h6>About</h6>
                                            <h2>NFT – Marketplace Buy & sell over the blockchain.</h2>
                                            <p className="theme-description">We provide you with the best NFT marketplace to sell items on the blockchain, buy & sell digital items.</p>
                                            <div className="em_bar">
                                                <div className="em_bar_bg"></div>
                                            </div>
                                            <div className="singel-about-box">
                                                <div className="singel-about-box-item clearfix">
                                                    <div className="singel-about-box-icon">
                                                        <img src={Nftgov} alt="" />
                                                    </div>
                                                    <div className="singel-about-box-info">
                                                        <h3 className="theme-title">Create your store</h3>
                                                        <p className="theme-description">You can create your store and increase your brand and sell your items over there digitally.</p>
                                                    </div>
                                                </div>
                                                <div className="singel-about-box-item clearfix">
                                                    <div className="singel-about-box-icon">
                                                        <img src={Supernft} alt="" />
                                                    </div>
                                                    <div className="singel-about-box-info">
                                                        <h3 className="theme-title">Create or list your items.</h3>
                                                        <p className="theme-description">Now you can list items in your store and if you don't have one you can also list it on our store for free.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="most-viewed-items-area page-paddings" style={{ paddingTop: '0px' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="section-title text-center">
                                        <h6>Items</h6>
                                        <h2 data-watermark="Items">Items Viewed The Most</h2>
                                        <div className="em_bar">
                                            <div className="em_bar_bg"></div>
                                        </div>
                                        <p className="subtitle">You can see the best and most viewed items; from all categories, we have a wide range of items available on our marketplace.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">

                                {this.state.dataList.slice(0, 4).map(list =>
                                    // list.soldStatus === "0" ?
                                        (


                                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                                <div className="item-group">
                                                    <div className="item-group-content"  onClick={() =>this.notSoldClick(list.tokenId)}>
                                                        <div className="items-like">
                                                            <a href=""><i className="far fa-heart"></i></a>
                                                        </div>
                                                        <div className="item-group-avtar">
                                                            <img  src={api.IPFS_URL + list.ipfsHash} alt="" />
                                                        </div>
                                                        <h3 className="theme-title"><a href="">{list.assetName}</a></h3>
                                                        <h3 className="theme-title"><a href="">{(list.description).toString().substring(0,20)}</a></h3>

                                                        {/* <p className="theme-description">Highest bid <span>2.5 WETH</span></p>
                                                        <div className="item-group-btn">
                                                            <a className="theme-btn" href="">Place Bid</a>
                                                            <a className="item-detail-btn" href=""><i className="fas fa-info-circle"></i></a>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>

                                        ) 
                                )}



                                <div className="bid-shape">
                                    <svg viewBox="0 0 300 322">
                                        <defs>
                                            <linearGradient id="gradient-2" gradientTransform="rotate(90)">
                                                <stop offset="5%" stopColor="rgba(233,244,255,0)"></stop>
                                                <stop offset="95%" stopColor="rgba(233,244,255,1)"></stop>
                                            </linearGradient>
                                        </defs>
                                        <path fill="url(#gradient-2)" d="M300,196.58v-71.16c0-31.57-16.84-60.75-44.19-76.53l-61.63-35.58c-27.34-15.79-61.03-15.79-88.37,0 L44.19,48.89C16.84,64.67,0,93.85,0,125.42v71.16c0,31.57,16.84,60.75,44.19,76.53l61.63,35.58c27.34,15.79,61.03,15.79,88.37,0 l61.63-35.58C283.16,257.33,300,228.15,300,196.58z"></path>
                                    </svg>
                                </div>


                            </div>
                            {/* <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="page-btn text-center" style={{ marginTop: '50px' }}>
                                        <button className="theme-btn">Show More <i className="fas fa-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </section>

                    <section className="earn-area page-paddings">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="earn-main-box">
                                        <div className="earn-info">
                                            <h6>Token</h6>
                                            <h2>Now Earn NFT (token) Whenever You Trade</h2>
                                            <div className="em_bar">
                                                <div className="em_bar_bg"></div>
                                            </div>
                                            <p className="theme-description">With our earning NFT (token) feature, you can earn every time you do trading through our marketplace.</p>
                                            <ul>
                                                <li>Make your marketplace</li>
                                                <li>Then select a project you want to work on</li>
                                                <li>Give token if you like the project</li>
                                                <li>Even you can sell your token</li>
                                            </ul>
                                        </div>
                                        <div className="earn-images">
                                            <img src={Tokenimg} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="earn-area" style={{ paddingBottom: '100px' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="earn-main-box">
                                        <div className="earn-images">
                                            <img src={Store} alt="" />
                                        </div>
                                        <div className="earn-info">
                                            <h6>Store</h6>
                                            <h2>Create Your Store – Right Now!</h2>
                                            <div className="em_bar">
                                                <div className="em_bar_bg"></div>
                                            </div>
                                            <p className="theme-description">Have the best of the best from our site; create your store in few minutes, and start selling your items fast and easily.</p>
                                            <div className="earn-btn">
                                                <a className="theme-btn" href="/Home">Start Buy/Sell <i className="fas fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="top-selling-store page-background">



                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="section-title text-center">
                                        <h6>Items</h6>
                                        <h2 data-watermark="Items">Best Selling Items</h2>
                                        <div className="em_bar">
                                            <div className="em_bar_bg"></div>
                                        </div>
                                        <p className="subtitle">You can see best-selling items; from all categories, buy from the wide range of items available on our marketplace.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">

                                {this.state.dataList.slice(0, 4).map(list =>
                                    // list.soldStatus === "0" ?
                                        (


                                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 top-selling-width">
                                                <div className="item-group">
                                                    <div className="item-group-content" onClick={() =>this.notSoldClick(list.tokenId)}>
                                                        <div className="item-group-avtar">
                                                            <img style={{ height: 275, width: 260 }} src={api.IPFS_URL + list.ipfsHash} alt="" />
                                                        </div>
                                                        <div className="selling-item-info">
                                                            <h3 className="theme-title"><a href="">{list.assetName}</a></h3>
                                                            {/* <p className="theme-description">Items sold: <span>566</span></p> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        ) 
                                )}


                                <div className="bid-shape">
                                    <svg viewBox="0 0 300 322">
                                        <defs>
                                            <linearGradient id="gradient-2" gradientTransform="rotate(90)">
                                                <stop offset="5%" stopColor="rgba(233,244,255,0)"></stop>
                                                <stop offset="95%" stopColor="rgba(233,244,255,1)"></stop>
                                            </linearGradient>
                                        </defs>
                                        <path fill="url(#gradient-2)" d="M300,196.58v-71.16c0-31.57-16.84-60.75-44.19-76.53l-61.63-35.58c-27.34-15.79-61.03-15.79-88.37,0 L44.19,48.89C16.84,64.67,0,93.85,0,125.42v71.16c0,31.57,16.84,60.75,44.19,76.53l61.63,35.58c27.34,15.79,61.03,15.79,88.37,0 l61.63-35.58C283.16,257.33,300,228.15,300,196.58z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="page-btn text-center" style={{ marginTop: '50px' }}>
                                        {/* <button className="theme-btn">Show More <i className="fas fa-arrow-right"></i></button> */}
                                    </div>
                                </div>
                            </div>
                        </div>




                    </section>

                    {/* <section className="mintable-guides-area page-paddings">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="section-title text-center">
                                        <h6>Guides</h6>
                                        <h2 data-watermark="Guides">Guides For NFT Marketplace</h2>
                                        <div className="em_bar">
                                            <div className="em_bar_bg"></div>
                                        </div>
                                        <p className="subtitle">Get to know how to use NFT – Marketplace, how to sell or buy, and how to create your store on our platform.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                    <div className="mintable-guides-box text-center">
                                        <div className="mintable-guides-media">
                                            <img src={Mintale1} alt="" />
                                        </div>
                                        <div className="mintable-guides-info">
                                            <h3 className="theme-title">What is NFTs ( digital items)</h3>
                                            <p className="theme-description">NFTs are non-fungible tokens that exist on blockchain like any other cryptocurrencies; every digital item has its own tokenize value.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                    <div className="mintable-guides-box text-center">
                                        <div className="mintable-guides-media">
                                            <img src={Mintale2} alt="" />
                                        </div>
                                        <div className="mintable-guides-info">
                                            <h3 className="theme-title">Create your store easily</h3>
                                            <p className="theme-description">You need is crypto wallet if you already have then just connected it or else if you don't then create on, then go to create the store page and fill in the basic data.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                    <div className="mintable-guides-box text-center">
                                        <div className="mintable-guides-media">
                                            <img src={Mintale3} alt="" />
                                        </div>
                                        <div className="mintable-guides-info">
                                            <h3 className="theme-title">Start selling more items</h3>
                                            <p className="theme-description">The only way to sell any NFT (items) is by having good content, high-quality items, and most important give buyers' good descriptive reason to buy.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}

                    {/* <section className="earn-area mintable-pro-area page-paddings" style={{ paddingTop: "0px" }} >
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="earn-main-box">
                                        <div className="earn-images">
                                            <img src={Shopimg} alt="" />
                                        </div>
                                        <div className="earn-info">
                                            <h2>NFT – Marketplace Premium Service</h2>
                                            <div className="em_bar">
                                                <div className="em_bar_bg"></div>
                                            </div>
                                            <p className="theme-description">Now sell more items and earn more with our premium service. Join our premium plan to best of best from our platform.</p>
                                            <div className="earn-btn">
                                                <a className="theme-btn" href="/Gopro">Go Pro <i className="fas fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                </div>

                <Footer />
            </>

        )

    }
};

export default Index;
