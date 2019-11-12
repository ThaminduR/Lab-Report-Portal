import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';


class Reports extends React.Component {
    constructor(props) {
        super();
    }


    render() {
        var reports = axios.get("http://localhost:5000/labReports").then((reports) => {

            var a = '';
            var reports = reports.data
            for (var i = 0; i < reports.length; i++) {
                a += <p>{reports[i].type}
                    {reports[i].topic}
                    {reports[i].results}
                    {reports[i].doctorDetails}
                    {reports[i].content}</p >
            }
        });

        return (


            <div>
                {this.a}
            </div>


        )
    }


}
export default Reports