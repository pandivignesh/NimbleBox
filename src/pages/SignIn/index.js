import React, { Component } from "react";

//Import Packages
import {
  toastSuccessMessage,
  toastErrorMessage,
} from "../../components/ToastMessage";
import PasswordStrengthBar from "react-password-strength-bar";

//import Images
import Logo from "../../assets/img/logo.png";

class SignIn extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  handleSubmit = () => {
    const { username, email, password, confirmPassword } = this.state;
    let userNameRgx = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;
    let mailRgx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let passwordRgx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{4,}$/;
    if (username === "") {
      toastErrorMessage("Please enter username");
    } else if (!userNameRgx.test(username)) {
      toastErrorMessage("No Special charecters allowed!");
    } else if (email === "") {
      toastErrorMessage("Please enter email");
    } else if (!mailRgx.test(email)) {
      toastErrorMessage("Please check email id!");
    } else if (password === "") {
      toastErrorMessage("Please enter password");
    } else if (!passwordRgx.test(password)) {
      toastErrorMessage(
        "1. Minimum four and maximum 10 characters, 2. at least one uppercase letter, 3. one lowercase letter, 4. one number and one special character"
      );
    } else if (confirmPassword === "") {
      toastErrorMessage("Please enter confirmation password");
    } else if (password !== confirmPassword) {
      toastErrorMessage("Entered password does not match");
    } else {
      toastSuccessMessage("User signin successfully");
      this.props.history.push("/login");
    }
  };

  redirect = () => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="main">
        <div className="signin-page">
          <div className="container-fluid">
            <div className="login-page-container">
              <div className="login-section">
                <div className="section-header text-center mb-4">
                  <div className="logo-image mb-3">
                    <img src={Logo} className="img-fluid" alt="NimbleBox" />
                  </div>
                  <h4>Create New Account on NimbleBox</h4>
                </div>
                <div className="section-body">
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) =>
                        this.setState({
                          username: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      onChange={(e) =>
                        this.setState({
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      onChange={(e) =>
                        this.setState({
                          password: e.target.value,
                        })
                      }
                    />
                    <PasswordStrengthBar password={this.state.password} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirmpassword">Confirm Password </label>
                    <input
                      type="password"
                      className="form-control"
                      onChange={(e) =>
                        this.setState({
                          confirmPassword: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="section-footer">
                  <button
                    type="submit"
                    className="btn w-100"
                    onClick={this.handleSubmit}
                  >
                    Signin
                  </button>
                  <p className="signin-text" onClick={this.redirect}>
                    Login
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
