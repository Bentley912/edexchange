import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import API from "../utils/API";
import ExpertPanel from "./common/ExpertPanel.js";
import ExCard from "./common/Card";


export default class All extends React.Component {
    render(){
        return(
            <div className="container">
                <div className = "row text-center">
                    <h1 className="white"> Experts </h1>
                    <div className = "col-lg-3 col-md-3 col-sm-3 cols-xs-3">
                    <ExCard />
                    </div>
                    <div className = "col-lg-3 col-md-3 col-sm-3 cols-xs-3">
                    <ExCard />
                    </div>
                    <div className = "col-lg-3 col-md-3 col-sm-3 cols-xs-3">
                    <ExCard />
                    </div>
                    <div className = "col-lg-3 col-md-3 col-sm-3 cols-xs-3">
                    <ExCard />
                    </div>
                </div>
                <div className = "row text-center">
                    <div className = "col-lg-3 col-md-3 col-sm-3 cols-xs-3">
                    <ExCard />
                    </div>
                    <div className = "col-lg-3 col-md-3 col-sm-3 cols-xs-3">
                    <ExCard />
                    </div>
                    <div className = "col-lg-3 col-md-3 col-sm-3 cols-xs-3">
                    <ExCard />
                    </div>
                    <div className = "col-lg-3 col-md-3 col-sm-3 cols-xs-3">
                    <ExCard />
                    </div>
                </div>
            </div>
        )
    }
}
