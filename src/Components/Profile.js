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

                        <div className="container" style={{marginTop:"10%",marginBottom:"7%",marginLeft:"40%"}}>
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                    
                                <div className="card hovercard" style={{height:"400px",width:"400px",borderRadius:12}} >
                                    <div className="cardheader" style={{width:"100%",height:"50%",backgroundColor:"#0c5adb"}} alt="" ></div>
                                    <div className="avatar">
                                        <img alt="" src={Profilepic} />
                                    </div>
                                    <div className="info">
                                        <div className="title" style={{marginTop:"20px"}}>
                                            <a target="_blank" href="https://scripteden.com/">{this.state.userName}</a>
                                        </div>
                                       
                                        <div className="desc"  style={{marginTop:"20px",fontSize:"20px"}}>{this.state.emailId}</div>
                                    </div>
                                    <div className="bottom">
                                       
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