import React from "react";
import { Link } from "react-router";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import API from "../../utils/API";

export default class ExpertPanel extends React.Component {
   constructor() {
        super();
         this.state = {
            info:[],
            helptype:{}
         };
     this.getHelptype =  this.getHelptype.bind(this);
        
   }
    componentDidMount() {
      this.getHelptype();
    }
    
   getHelptype(){
       console.log(this.props.EducatorId)
   }
   render(){
    return(
            <div className="container">
                 <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
                    <div className="well well-lgm text-center">
                        <h2> Dashboard</h2>                             
                           <div className="row">
                                <div className="col-md-4 col-lg-4 col-sm-4 col-xs-4 br-lblue">
                                    <Button>Search for Educators</Button>
                                    <h1>{this.props.EducatorId}</h1>
                                </div>
                         </div>
                    </div>
              
                </div>
            </div>
    )
   }
}
