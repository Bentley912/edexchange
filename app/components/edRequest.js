import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import API from "../utils/API";


export default class edRequest extends React.Component {
    constructor() {
        super();
         this.state = {
             info: [],
             skillValue: "",
             descrValue: "",
             typeValue:""
         };
        this.getProfile = this.getProfile.bind(this);
        this.skillValueChange = this.skillValueChange.bind(this);
        this.descrValueChange = this.descrValueChange.bind(this);    
        this.typeValueChange = this.typeValueChange.bind(this);
        this.ButtonClick = this.ButtonClick.bind(this); 
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

      skillValueChange(event) {
        this.setState({ skillValue: event.target.value });   
    }

     descrValueChange(event) {
        this.setState({ descrValue: event.target.value });   
    }

     typeValueChange(event) {
        this.setState({ typeValue: event.target.value });   
    }

    ButtonClick(){

        const edRequest = {
            skill:this.state.skillValue,
            description: this.state.descrValue,
            type:this.state.typeValue,
            EducatorId: this.state.info.id
        }
            console.log(edRequest);
             API.postRequest(edRequest);
    }

    render(){
        return(        
            <div className ="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 br-red">
                        <h2>Sign Up Form</h2>
                        <form className="edRequest">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">What type of expert do you need ?</label>
                                <input type="text" className="form-control" id="email-input" placeholder="Skill" onChange={this.skillValueChange} value={this.state.skillValue}/>
                            </div>
                            <div className="form-group">    
                                <label for="exampleInputEmail1">Plese right a description of what you need</label>
                                <input type="text" className="form-control" id="email-input" placeholder="Description" onChange={this.descrValueChange} value={this.state.descrValue}/>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">How Often Would You Like an Expert to Visit your Class ?</label>
                                <input type="texr" className="form-control" id="email-input" placeholder="Once/Weekly/Monthly" onChange={this.typeValueChange} value={this.state.typeValue}/>
                            </div>
                            <Button onClick={this.ButtonClick}> Make a Request!!</Button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}       