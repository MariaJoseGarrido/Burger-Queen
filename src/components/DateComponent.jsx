import React from 'react';
import "../components/DateComponent.css";

class DateComponent extends React.Component{
    render() {


      let today = new Date();
      let hour = today.getHours();
      let  min  = today.getMinutes();
      let month = today.getMonth() + 1;
      let year = today.getFullYear();
      let day  = today.getDate();
      hour = (hour < 10 ? "0" : "") + hour;
      min = (min < 10 ? "0" : "") + min;
      day = (day < 10 ? "0" : "") + day;
      month = (month < 10 ? "0" : "") + month;

      return(
        <div className="DateComponent">
          { hour + ':' + min } <br/>
          { day + '/' + month + '/' + year } 
         
        </div>

      )
    }
  }
export default DateComponent;