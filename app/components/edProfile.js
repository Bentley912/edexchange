import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import API from "../utils/API";

export default class edProfile extends React.Component {
    constructor() {
        super();
         this.state = {
             fnameValue: "",
             lnameValue: "",
             schoolValue:""
         };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLnameChange = this.handleLnameChange.bind(this);
        this.handleSchoolChange = this.handleSchoolChange.bind(this);    
        this.handleButtonClick = this.handleButtonClick.bind(this);       
    }

    handleInputChange(event) {
        this.setState({ fnameValue: event.target.value });   
    }

    handleLnameChange(event) {
        this.setState({ lnameValue: event.target.value });
    }
    handleSchoolChange(event) {
        this.setState({ schoolValue: event.target.value });
    }

    handleButtonClick(){
        const newEducator = {
            fnameValue: this.state.fnameValue,
            lnameValue: this.state.lnameValue,
            schoolValue:this.state.schoolValue
        }

    API.postProfile(newEducator);
        
    }
        render() {
            return (
                <div className ="container">
                    <Form>
                        <FormGroup>
                        <Label for="firstname">First Name</Label>
                        <Input type="text" name="firstname" id="firstname" placeholder="First Name" onChange={this.handleInputChange} value={this.state.fnameValue}/>
                        </FormGroup>
                        <FormGroup>
                        <Label for="lastname">Last Name</Label>
                        <Input type="text" name="lastname" id="lastname" placeholder="Last Name" onChange={this.handleLnameChange} value={this.state.lnameValue} />
                        </FormGroup>  
                        <FormGroup>
                        <Label for="school">School</Label>
                        <Input type="text" name="school" id="schoolname" placeholder="School" onChange={this.handleSchoolChange} value={this.state.schoolValue}/>
                        </FormGroup>
                    
                        <FormGroup>
                        <Label for="exampleFile">File</Label>
                        <Input type="file" name="file" id="exampleFile" />
                        <FormText color="muted">
                            Please choose a profile Pic. 
                        </FormText>
                        </FormGroup>        
                        <Button onClick={this.handleButtonClick}>Submit</Button>
                    </Form>
                </div>
            );
        }
     
}