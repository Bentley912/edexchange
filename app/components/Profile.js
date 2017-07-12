import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import API from "../utils/API";

export default class Profile extends React.Component {
   constructor() {
    super();
    this.state = {
      info: []
    };

    this.getProfile = this.getProfile.bind(this);
   }

    componentDidMount() {
        this.getProfile();

    } 

    getProfile() {
        API.getProfile().then((res) => {
        this.setState({ info: res.data });
        console.log(res.data);
        });
    }
    
    render(){
        return(
            <div id ="parent">
                <h1>Profile Page</h1>
                
                <p>{this.state.info.school} </p>
            </div>
        )
    }
}

