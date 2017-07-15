import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import API from "../utils/API";


export default class Helpytype extends React.Component {
    
     constructor() {
            super();
            this.state = {
            info: [],
            description: ""
            };
   
    this.getExProfile = this.getExProfile.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
   }

   componentDidMount() {
        this.getExProfile();

    } 

    handleStateChange(event) {
        this.setState({ description: event.target.value });   
    }

    getExProfile() {
        API.getExProfile().then((res) => {
        this.setState({ info: res.data });
        console.log(res.data);
        });
    }
    

    handleClick(){
        const helpType = {
            type:this.state.description,
            ExpertId: this.state.info.id
        }
        console.log(helpType);

        API.postHelpType(helpType);
    }

    render(){
        return(
            <div className="container">
                <h1> This is the Helptype Page</h1>
                <Form className="br-lblue">
                        <FormGroup>
                        <Label for="firstname">Please Tell Us What Type of Help You Can Offer-Dont Forget to List Availabilty</Label>
                        <Input type="text" name="firstname" id="firstname" placeholder="What's Your Availabilty" onChange={this.handleStateChange} value={this.state.description}/>
                        </FormGroup>
                        <Button onClick={this.handleClick}>Submit</Button>
                </Form>

            </div>
        )
    }
}