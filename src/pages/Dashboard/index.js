import React, { Component } from "react";

//Import Packages
import { TwitterTimelineEmbed } from "react-twitter-embed";

//import Images
import Logo from "../../assets/img/logo.png";

class Dashboard extends Component {
  state = {
    userText: "",
  };

  componentDidMount() {
    let userText =
      this.props.location.state && this.props.location.state.userName;
    if (userText) {
      this.setState({
        userText,
      });
    } else {
      this.setState({
        userText: "Hello User!",
      });
    }
  }

  handleSignOut = () => {
    document.cookie = "userToken=";
    this.props.history.push("/login");
  };
  render() {
    return (
      <div className="main">
        <div className="dashboard-page">
          <div className="container-fluid p-0">
            <div className="page-header">
              <header className="header">
                <div className="row m-0">
                  <div className="col-4">
                    <div className="logo w-150 pt-2">
                      <img src={Logo} className="img-fluid" alt="NimbleBox" />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="header-center-section">
                      <div className="d-flex flex-row align-items-center justify-content-center">
                        <button className="btn buy-btn w-150">
                          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                          BUY GPU TIME
                        </button>
                        <h5 class="credit-text pl-2">
                          NimbleBox Credits: 10.00
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="user-profile-name text-right">
                      <span>
                        <i className="fa fa-user-circle"></i>{" "}
                        {this.state.userText}
                        <div className="sub-menu">
                          <ul>
                            <li onClick={this.handleSignOut}>SignOut</li>
                          </ul>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </header>
            </div>
            <div className="page-body">
              <div className="row m-0">
                <div className="col-8">
                  <div className="section-wrapper">
                    <div className="user-section">
                      <h2>
                        Welcome <b>{this.state.userText}</b>
                      </h2>
                    </div>
                    <div className="project-section mt-5">
                      <div className="box">
                        <i
                          class="fa fa-file-text-o fa-4x"
                          aria-hidden="true"
                        ></i>
                        <hr></hr>
                        <h5>
                          <i class="fa fa-plus" aria-hidden="true"></i> {""}
                          New Project
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="twitter-widget">
                    <div className="centerContent">
                      <div className="selfCenter standardWidth">
                        <TwitterTimelineEmbed
                          sourceType="url"
                          url="https://twitter.com/NimbleBoxAI/lists/ai-news"
                          options={{ height: 500 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="page-footer">
              <footer className="footer">
                <div className="row">
                  <div className="col-6">
                    <div className="navbar-collapse">
                      <ul className="mr-auto navbar-nav">
                        <li class="nav-item">
                          <h5 class="footer-text">Buy GPU time</h5>
                        </li>
                        <li class="nav-item">
                          <h5 class="footer-text">Compare Hardware</h5>
                        </li>
                        <li class="nav-item">
                          <h5 class="footer-text">NimbleBox Community</h5>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="footer-company text-right">
                      <h5>NimbleBox.ai</h5>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
