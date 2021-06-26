import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home'
import Detail from './Components/Details'
import Signup from './Components/Signup'
import Signin from './Components/Signin'
import Createassets from './Components/Createasset'
import Howto from './Components/howto'
import Admindashboard from './Components/Admin/AdminDashboard'
import Dashboard from './Components/Dashboard';
import Index from './Components/index';
import Browse from './Components/Browse';
import Forgotpassword from './Components/ForgotPassword';
import Success from './Components/Success';
import Art from './Components/Art';
import Contact from './Components/Contact';
import Faq from './Components/Faq';
import Minitem from './Components/Minitem';
import TermsOfUse from './Components/TermsOfUse';
import PrivacyPolicy from './Components/PrivacyPolicy';
import History from './Components/History';
import Gopro from './Components/GoPro';
import Mynft from './Components/MyNft';
import Profile from './Components/Profile';
import Detailexplore from './Components/DetailsExplore';
import Rariable from './Components/Rariable';
import Usersnft from './Components/Usersnft';
import Biddetails from './Components/Biddetails';



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/Forgotpassword" component={Forgotpassword} />
        <Route exact path="/Browse" component={Browse} />
        <Route exact path="/Success" component={Success} />
        <Route exact path="/Art" component={Art} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Faq" component={Faq} />
        <Route exact path="/Minitem" component={Minitem} />
        <Route exact path="/TermsOfUse" component={TermsOfUse} />
        <Route exact path="/PrivacyPolicy" component={PrivacyPolicy} />
        <Route exact path="/History" component={History} />
        <Route exact path="/Gopro" component={Gopro} />
        <Route exact path="/Mynft" component={Mynft} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/Detailexplore" component={Detailexplore} />
        <Route exact path="/Rariable" component={Rariable} />
        <Route exact path="/Usersnft" component={Usersnft} />
        <Route exact path="/Biddetails" component={Biddetails} />




        <Route exact path="/Home" component={Home} />
        <Route exact path="/Detail" component={Detail} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Signin" component={Signin} />
        <Route exact path="/Createassets" component={Createassets} />
        <Route exact path="/howto" component={Howto} />
        <Route exact path="/admindashboard" component={Admindashboard} />

      </Switch>
    </div>
  );
}

export default App;