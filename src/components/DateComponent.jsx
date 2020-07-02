import React from 'react';
import "../components/DateComponent.css";

class DateComponent extends React.Component{
    render() {
      let today = new Date();
      let month = today.getMonth() + 1;
      let year = today.getFullYear();
      let day  = today.getDate();
      day = (day < 10 ? "0" : "") + day;
      month = (month < 10 ? "0" : "") + month;
      return(
        <div className="DateComponent">
         { day + '/' + month + '/' + year }
        </div>
      )
    }
  }
export default DateComponent;