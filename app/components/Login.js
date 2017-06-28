import React, { Component } from "react";
import ReactDOM from "react-dom";

class Login extends Component {
    render(){
        return(
            <div className="tab-pane fade br-lblue" id="register">
						        <!-- Heading -->
									<h2>Registration</h2>
									<!-- Sign Up Form Start -->
									<form className="form-horizontal" role="form">
										<div className="form-group">
											<div className="col-sm-12">
												<input type="text" className="form-control" id="name" placeholder="Name">
											</div>
										</div>
										<div className="form-group">
											<div className="col-sm-12">
												<input type="email" className="form-control" id="email" placeholder="Email">
											</div>
										</div>
										<div className="form-group">
											<div className="col-sm-12">
												<input type="text" className="form-control" id="contant" placeholder="Phone Number">
											</div>
										</div>
										<div className="form-group">
											<div className="col-sm-12">
												<input type="text" className="form-control" id="username" placeholder="Username">
											</div>
										</div>
										<div className="form-group">
											<div class="col-sm-12">
												<input type="password" className="form-control" id="password" placeholder="Password">
											</div>
										</div>
										<div className="form-group">
											<div className="col-sm-12">
												<div className="checkbox">
													<label>
														<input type="checkbox"> Accept All Terms & Conditions
													</label>
													<span className="pull-right"><a href="#">View</a></span>
													<div className="clearfix"></div>
												</div>
											</div>
										</div>
										<div className="form-group text-center">
											<div class="col-sm-12">
												<button type="submit" className="btn btn-black">Registration</button>&nbsp;
												<button type="reset" className="btn btn-default">Reset</button>
											</div>
										</div>
									</form>
            </div>
        )
    }
}
export default Login;