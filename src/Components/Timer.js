import React, { useState } from "react";
import { Subscription, interval } from "rxjs";

var dateNow = new Date();
var dDay = "";
var milliSecondsInASecond = 1000;
var hoursInADay = 24;
var minutesInAnHour = 60;
var SecondsInAMinute = 60;

var timeDifference;
var secondsToDday;
var minutesToDday;
var hoursToDday;
var daysToDday;

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 0,
      hr: 0,
      min: 0,
      sec: 0,
    };
  }

  componentDidMount() {
    console.log("propss expiry",this.props.expiry)
    this.dDay = new Date(this.props.expiry);
    this.subscription = interval(1000).subscribe((x) => {
      this.getTimeDifference();
    });
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  getTimeDifference = () => {
    let timeDifference = parseInt(this.dDay.getTime()) - parseInt(new Date().getTime());
    this.allocateTimeUnits(timeDifference);
    // console.log("=================", typeof this.props.expiry,this.dDay,this.dDay.getTime(), new Date().getTime(),timeDifference);
  };

  allocateTimeUnits = (timeDifference) => {
    if (timeDifference > 0) {
      secondsToDday = Math.floor(
        (timeDifference / milliSecondsInASecond) % SecondsInAMinute
      );
      minutesToDday = Math.floor(
        (timeDifference / (milliSecondsInASecond * minutesInAnHour)) %
          SecondsInAMinute
      );
      hoursToDday = Math.floor(
        (timeDifference /
          (milliSecondsInASecond * minutesInAnHour * SecondsInAMinute)) %
          hoursInADay
      );
      daysToDday = Math.floor(
        timeDifference /
          (milliSecondsInASecond *
            minutesInAnHour *
            SecondsInAMinute *
            hoursInADay)
      );
      // console.log("value in else case",timeDifference,secondsToDday,minutesToDday,hoursToDday,daysToDday);
        this.setState({day:daysToDday,hr:hoursToDday,min:minutesToDday,sec:secondsToDday})
    } else {
      this.setState({day:0,hr:0,min:0,sec:0})
    }
  };

  render() {
    // console.log("data from props inside render method", this.props.expiry);
    return (
      <div style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <p className="table table-striped table-bordered"
          style={{ borderRadius: "5px", width: "100%", color:"black",fontSize:"20px" }}
        >
         
         <b> {this.state.day}d {this.state.hr}h {this.state.min}m {this.state.sec}s </b>
        </p>
      </div>
    );
  }
}

export default Timer;
