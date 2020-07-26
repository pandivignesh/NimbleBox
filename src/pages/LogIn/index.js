import React, { Component } from "react";

//Import Packages
import {
  toastSuccessMessage,
  toastErrorMessage,
} from "../../components/ToastMessage";

//import Images
import Logo from "../../assets/img/logo.png";

class LogIn extends Component {
  state = {
    userName: "",
    password: "",
  };

  handleSubmit = () => {
    const { userName, password } = this.state;
    if (userName === "") {
      toastErrorMessage("Please enter username");
    } else if (password === "") {
      toastErrorMessage("Please enter password");
    } else {
      let d = new Date();
      d.setTime(d.getTime() + 1 * 3600 * 1000);
      let expires = "expires=" + d.toUTCString();
      document.cookie = "userToken= nimble@321;" + expires + ";path=/";
      toastSuccessMessage("User login successfully");
      this.props.history.push("/dashboard", { userName });
    }
  };

  redirect = () => {
    this.props.history.push("/signin");
  };
  render() {
    return (
      <div className="main">
        <div className="login-page">
          <div className="container-fluid">
            <div className="login-page-container">
              <div className="login-section">
                <div className="section-header text-center mb-4">
                  <div className="logo-image mb-3">
                    <img src={Logo} className="img-fluid" alt="NimbleBox" />
                  </div>
                  <h4>Log In To NimbleBox</h4>
                </div>
                <div className="section-body">
                  <div className="form-group">
                    <label htmlFor="username">Username or Email</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) =>
                        this.setState({
                          userName: e.target.value,
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
                  </div>
                </div>
                <div className="section-footer">
                  <button
                    type="submit"
                    className="btn w-100"
                    onClick={this.handleSubmit}
                  >
                    Login
                  </button>
                  <p className="signin-text" onClick={this.redirect}>
                    SignIn
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

export default LogIn;
