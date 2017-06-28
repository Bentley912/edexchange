import React, { Component } from "react";
import ReactDOM from "react-dom";

class Signup extends Component {

render(){
    return(
    
            <form>
                <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                <input type="submit" value="Submit" />
            </form>



    )
}

};

export default Signup;