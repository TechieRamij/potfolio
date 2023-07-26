import React, { Component } from "react";
import BroadCamp from "../broadCamp/BroadCamp";
import TeamMembers from "./TeamMembers";
import Manager from "./manager";
import { Helmet } from "react-helmet";
import Janin from "../../assets/images/team/Janin1.png"

class Index extends Component {
  render() {
    const BgImage = {
      backgroundImage: `url(images/background/22.png)`
    };
      const crossIcon = {
          backgroundImage: `url(images/main-banner/cross-icon.png)`
      };
      const crossIcon1 = {
          backgroundImage: `url(images/main-banner/banner-icon-1.png)`
      };const crossIcon2 = {
          backgroundImage: `url(images/main-banner/banner-icon-2.png)`
      };const crossIcon3 = {
          backgroundImage: `url(images/main-banner/banner-icon-3.png)`
      };const crossIcon4 = {
          backgroundImage: `url(images/main-banner/banner-icon-4.png)`
      };const crossIcon5 = {
          backgroundImage: `url(images/main-banner/banner-icon-5.png)`
      };const crossIcon6 = {
          backgroundImage: `url(images/main-banner/banner-icon-6.png)`
      };const crossIcon7 = {
          backgroundImage: `url(images/main-banner/banner-icon-7.png)`
      };const crossIcon8 = {
          backgroundImage: `url(images/main-banner/banner-icon-8.png)`
      };const crossIcon9 = {
          backgroundImage: `url(images/main-banner/banner-icon-9.png)`
      };const crossIcon10 = {
          backgroundImage: `url(images/main-banner/banner-icon-10.png)`
      };
    return (
      <div>
        <Helmet>
          <title>Team</title>
        </Helmet>
        <BroadCamp name={"Team"} bgImageStyle={BgImage} />
        <Manager />
          <section className="experince-sec">
              <div
                  className="pattern-layer-one"
                  style={crossIcon}
              ></div>
              <div
                  className="pattern-layer-six"
                  style={crossIcon2}
              ></div>
              <div
                  className="pattern-layer-tweleve"
                  style={crossIcon4}
              ></div>
              <div
                  className="pattern-layer-four"
                  style={crossIcon}
              ></div>
              <div
                  className="pattern-layer-three"
                  style={crossIcon6}
              ></div>
              <div
                  className="pattern-layer-five"
                  style={crossIcon1}
              ></div>
              <div className="auto-container">
                  <div className="row">
                      <div className="image-column col-lg-4 col-md-6 col-sm-12">
                          <div
                              className="image-box parallax-scene-1 wow fadeInLeft"
                              data-wow-delay="100ms"
                              data-wow-duration="100ms"
                          >
                              <div className="image" data-depth="0.30">
                                  <img src={Janin} alt=""/>
                              </div>
                              <div className="review-box" data-depth="0.60">
                                  <ul className="review">
                                      <li><i className="fas fa-star"></i></li>
                                      <li><i className="fas fa-star"></i></li>
                                      <li><i className="fas fa-star"></i></li>
                                      <li><i className="fas fa-star"></i></li>
                                      <li><i className="fas fa-star"></i></li>
                                  </ul>
                                  <h6>SEO Agency <br/>Of The Years</h6>
                              </div>
                          </div>
                      </div>
                      <div className="content-column col-lg-6 col-md-6 col-sm-12">
                          <div
                              className="inner-box wow fadeInLeft"
                              data-wow-delay="300ms"
                              data-wow-duration="300ms"
                          >
                              <div className="sec-title">
                                  <h6 className="subtitle">Experience Shear With Your</h6>
                                  <h2>Discuss projects, Share ideas and get work done</h2>
                              </div>
                              <p>
                                  Sola Ut enim ad minim veniam, quis nostrud exercitation
                                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                  aute irure dolor in reprehender it in voluptate velit esse
                                  cillum dolore eu fugiat nulla pariatur.
                              </p>
                              <a href="#" className="theme-btn btn-style-two"
                              ><span className="txt">Get Started</span></a
                              >
                          </div>
                      </div>
                  </div>
              </div>
          </section>
        <TeamMembers />
      </div>
    );
  }
}

export default Index;
