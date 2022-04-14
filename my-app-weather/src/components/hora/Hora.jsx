import React from "react";

export default class Hora extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
    
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
    // ((this.state.date.getHours()+ 5) + ((this.props.props.props.timeZone/60)/60))
    //        + ' : ' + this.state.date.getMinutes() + ' : ' + 
  
    render() {
        // console.log(this.props.props.props.timeZone)
        let dia = 'am';
        if(Math.ceil(((this.state.date.getHours()+ 5) + ((this.props.props.props.timeZone/60)/60)) % 24) >= 12){ 
          dia = 'pm'
        }
        let seconds = this.state.date.getSeconds();
        let minutes = this.state.date.getMinutes();
        if(this.state.date.getSeconds() < 10) {
            seconds = '0' + this.state.date.getSeconds();
        }
        if(this.state.date.getMinutes() < 10) {
            minutes = '0' + this.state.date.getMinutes();
        }
      return (
        <>
           <span>{ Math.ceil(((this.state.date.getHours()+ 5) + ((this.props.props.props.timeZone/60)/60)) % 24)}:{minutes}:{seconds} {dia}</span>
        </>
      );
    }
  }