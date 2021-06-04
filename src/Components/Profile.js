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

                        <div style={{marginTop:'100px',marginBottom:'30px'}}>
                            <h2 style={{ textAlign: "center" }}>Your Details</h2>

                            <div className="card">
                            <img src={Profilepic} alt="John" style={{width:"90%",height:"90%",marginLeft:"20px"}}/>

                                <h1 style={{marginTop:"10px",marginBottom:"25px"}}>Name: {this.state.userName}</h1>
                                <p style={{marginBottom:"25px"}}>Email: {this.state.emailId}</p>
                               
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