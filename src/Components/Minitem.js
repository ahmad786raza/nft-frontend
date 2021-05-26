import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import Sico1 from '../images/store-ico1.svg';
import Sico2 from '../images/store-ico2.svg';
import Dimg from '../images/download.png';


class Minitem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen:false,
            modalOpen1:false

        }
    }


    openModal=()=>{
        console.log('modal');
        this.setState({modalOpen:true});
    }

    openModal1=()=>{
        console.log('modal1')
        this.setState({modalOpen1:true});
    }


    closeModal = () => {
        this.setState({ modalOpen: false })
    }

    closeModal1 = () => {
        this.setState({ modalOpen1: false })
    }







    render() {
        return (
            <>
                <Header />
                <div>

                    <section className="min-item-area page-paddings">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="section-title text-center">
                                        <h2 data-watermark="Items">Create An Item</h2>
                                        <div className="em_bar">
                                            <div className="em_bar_bg"></div>
                                        </div>
                                        <p className="subtitle">Now you can list your item for free, there are two options available for that if the item is already in your wallet or you want to create a new one.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="min-item-box clearfix">
                                        <div className="min-item-item text-center" onClick={this.openModal}>
                                            <div className="min-item-ico">
                                                <img src={Sico1} alt="" />
                                            </div>
                                            <h3 className="theme-title">The NFT Is Already In My Wallet</h3>
                                        </div>
                                        <div className="min-item-item text-center" onClick={this.openModal1} >
                                            <div className="min-item-ico">
                                                <img src={Sico2} alt="" />
                                            </div>
                                            <h3 className="theme-title">Create A New Item</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>


                <Footer />

                <Modal show={this.state.modalOpen} backdrop="static" size="lg" onHide={this.closeModal} centered>
                {/* <div className="modal fade" id="nft-wallet" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"> */}
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span onClick={this.closeModal}><i className="fas fa-times"></i></span>
                                </button>
                                <div className="theme-model-popup">
                                    <div className="theme-model-popup-header text-center">
                                        <h3>Identify this item on the blockchain</h3>
                                        <p className="theme-description">This is for items you already own in your wallet. Start by entering the Token ID and Address of the item on the blockchain</p>
                                    </div>
                                    <div className="theme-model-popup-info">
                                        <div className="blockchain-popup-box">
                                            <div className="nft-input-box validate-input" data-validate="Name is required">
                                                <span className="label-nft-input">Token ID</span>
                                                <input className="nft-input" type="text" name="name" placeholder="Ex.tok_1IYN0u2eZvKYlo2CP88d9HEC" />
                                                <span className="focus-nft-input"></span>
                                            </div>
                                            <div className="nft-input-box validate-input" data-validate="Name is required">
                                                <span className="label-nft-input">Token Address</span>
                                                <input className="nft-input" type="text" name="name" placeholder="Ex.ca_FkyHCg7X8mlvCUdMDao4mMxagUfhIwXb" />
                                                <span className="focus-nft-input"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="theme-btn">Proceed</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
                </Modal>

                
              


                <Modal show={this.state.modalOpen1}  backdrop="static" size="lg" onHide={this.closeModal1} centered>

                {/* <div className="modal fade traditional-gasless-popup" show={this.state.modalOpen1} id="traditional-gasless" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"> */}
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" onClick={this.closeModal1}><i className="fas fa-times"></i></span>
                                </button>
                                <div className="theme-model-popup">
                                    <div className="theme-model-popup-header text-center">
                                        <h3>Traditional or gasless?</h3>
                                        <p className="theme-description">Is the item live on the blockchain or is it a new item you want to make?</p>
                                    </div>
                                    <div className="traditional-gasless-main clearfix">
                                        <div className="default-switch">
                                            <span className="switch-label">Advanced</span>
                                            <label className="switch">
                                                <input type="checkbox" id="traditional-check" checked="" />
                                                <span className="slider round"></span>
                                            </label>
                                            <span className="switch-label" style={{marginRight: "0px"}}>Easy</span>
                                        </div>
                                        <div className="traditional-advanced-box" style={{display: "none"}}>
                                            <div className="traditional-gasless-item text-center" style={{marginTop: "0px"}}>
                                                <a href="gasless.html">
                                                    <h3 className="theme-title">Gasless (no transaction needed)</h3>
                                                    <div className="traditional-gasless-icon">
                                                        <img src={Dimg} alt="" />
                                                    </div>
                                                    <p className="theme-description">Won't appear in your wallet until transferred or purchased (you still own it though)</p>
                                                </a>
                                            </div>
                                            <div className="traditional-gasless-item text-center">
                                                <a href="gasless.html">
                                                    <h3 className="theme-title">Create a new item</h3>
                                                    <div className="traditional-gasless-icon">
                                                        <img src={Sico2} alt="" />
                                                    </div>
                                                    <p className="theme-description">No transaction fee - completely free</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="traditional-easy-box">
                                            <div className="traditional-gasless-item text-center" style={{marginTop: "0px"}}>
                                                <a href="gasless.html">
                                                    <h3 className="theme-title">Create a new item</h3>
                                                    <div className="traditional-gasless-icon">
                                                        <img src={Sico2} alt="" />
                                                    </div>
                                                    <p className="theme-description">No transaction fee - completely free</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
                </Modal>

            </>
        )
    }
};


export default Minitem;