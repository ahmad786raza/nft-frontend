import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Loading from "react-fullscreen-loading";
import Profilepic from '../images/profileimg.png';





class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            emailId: "",
            loader: false,

        }
    }

    componentDidMount() {
        const username = localStorage.getItem('currentUserName');
        const email = localStorage.getItem('currentUserEmail');
        console.log('email & name', username, email)
        this.setState({ userName: username, emailId: email })
    }


    render() {
        return (
            <>
                <Header />

                <div style={{ textAlign: "center", marginTop: "75px" }}>
                    {this.state.loader ? (
                        <Loading loading background="#ffffff00" loaderColor="#3498db" />
                    ) : (

                        <div class="container" style={{marginTop:"10%",marginBottom:"7%",marginLeft:"40%"}}>
                        <div class="row">
                            <div class="col-lg-3 col-sm-6">
                    
                                <div class="card hovercard" style={{height:"400px",width:"400px",borderRadius:12}} >
                                    <div class="cardheader" style={{width:"100%",height:"50%",backgroundColor:"#0c5adb"}} alt="" ></div>
                                    <div class="avatar">
                                        <img alt="" src={Profilepic} />
                                    </div>
                                    <div class="info">
                                        <div class="title" style={{marginTop:"20px"}}>
                                            <a target="_blank" href="https://scripteden.com/">{this.state.userName}</a>
                                        </div>
                                       
                                        <div class="desc"  style={{marginTop:"20px",fontSize:"20px"}}>{this.state.emailId}</div>
                                    </div>
                                    <div class="bottom">
                                       
                                    </div>
                                </div>
                    
                            </div>
                    
                        </div>
                    </div>
                    )}
                </div>

                < Footer />


            </>
        )
    }
}


export default Profile;