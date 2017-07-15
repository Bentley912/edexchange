import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import API from "../utils/API";


export default class expertProfile extends React.Component {
    constructor() {
        super();
         this.state = {
             fnameValue: "",
             lnameValue: "",
             emailValue: "",
             skillValue:"",
             descrValue: "" 
         };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLnameChange = this.handleLnameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);  
        this.handleSkillChange = this.handleSkillChange.bind(this);   
        this.handleDescrChange = this.handleDescrChange.bind(this);
        this.handleClick = this.handleClick.bind(this);       
    }

    handleInputChange(event) {
        this.setState({ fnameValue: event.target.value });   
    }

    handleLnameChange(event) {
        this.setState({ lnameValue: event.target.value });
    }
    handleEmailChange(event) {
        this.setState({ emailValue: event.target.value });
    }
     handleSkillChange(event) {
        this.setState({ skillValue: event.target.value });
    }

      handleDescrChange(event) {
        this.setState({ descrValue: event.target.value });
    }

    handleClick(){
        const newExpert = {
            fnameValue: this.state.fnameValue,
            lnameValue: this.state.lnameValue,
            emailValue: this.state.emailValue,
            skillValue: this.state.skillValue,
            descrValue:this.state.descrValue
        }

         API.postExpertProfile(newExpert);
        console.log(newExpert);
    }
        render() {
            return (
               
                <div className ="container">
                    <div className="jumbotron text-center">
                      <h1> Tell us about yourself!!!</h1>
                    </div>
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
                        <Label for="school">Email</Label>
                        <Input type="email" name="school" id="schoolname" placeholder="Email" onChange={this.handleEmailChange} value={this.state.emailValue}/>
                        </FormGroup>
                         <FormGroup>
                        <Label for="lastname">Skill</Label>
                        <Input type="text" name="lastname" id="lastname" placeholder="Tell us What you Do. Are you a Web Developer? Entrepreneur? Both?" onChange={this.handleSkillChange} value={this.state.skillValue} />
                        </FormGroup>
                         <FormGroup>
                        <Label for="lastname">Description</Label>
                        <Input type="text" name="lastname" id="lastname" placeholder="Give us a Description of Your Background" onChange={this.handleDescrChange} value={this.state.descrValue} />
                        </FormGroup>
                    
                        <FormGroup>
                        <Label for="exampleFile">File</Label>
                        <Input type="file" name="file" id="exampleFile" />
                        <FormText color="muted">
                            Please choose a profile Pic. 
                        </FormText>
                        </FormGroup>        
                        <Button onClick={this.handleClick}>Submit</Button>
                    </Form>
                </div>
            );
        }
}