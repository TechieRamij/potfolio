import React, { Component } from "react";
import { Link } from "react-router-dom";

class Solutions extends Component {
  render() {
    const BgImage = {
      backgroundImage: `url('images/services/9.png')`
    };
    const BgImage1 = {
      backgroundImage: `url('images/services/8.png')`
    };
    const BgImage2 = {
      backgroundImage: `url('images/services/10.png')`
    };
    return (
      <div>
        <section className="invested-sec">
          <div className="auto-container">
            <div className="row">
              <div className="title-cloumn col-lg-6 col-md-12 wow fadeInLeft">
                <div className="sec-title text-left">
                  <h6 className="subtitle">Solutions That Matter</h6>
                  <h2>
                    Directed techniques that greatest return for money invested
                  </h2>
                </div>
              </div>
              <div
                className="invseted-cloumn col-lg-6 col-md-12 wow fadeInRight"
                data-wow-delay="400ms"
              >
                <div className="invested-box">
                  <div className="icon-box" style={BgImage}>
                    <div className="count count-2">02</div>
                    <i className="flaticon flaticon-statistic" />
                  </div>
                  <div className="text-box">
                    <h4>
                      <Link to="#">Driving Specialists </Link>
                    </h4>
                    <p>
                      Our team of creatives, designers & developers work
                      alongside our SEO & content teams.
                    </p>
                    <Link to="#" className="readmore">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="invseted-cloumn col-lg-6 col-md-12 wow fadeInLeft"
                data-wow-delay="600ms"
              >
                <div className="invested-box">
                  <div className="icon-box" style={BgImage1}>
                    <div className="count count-1">01</div>
                    <i className="flaticon flaticon-statistics" />
                  </div>
                  <div className="text-box">
                    <h4>
                      <Link to="#">Demonstrated Execution</Link>
                    </h4>
                    <p>
                      Our team of creatives, designers & developers work
                      alongside our SEO & content teams.
                    </p>
                    <Link to="#" className="readmore">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="invseted-cloumn col-lg-6 col-md-12 wow fadeInRight"
                data-wow-delay="800ms"
              >
                <div className="invested-box">
                  <div className="icon-box" style={BgImage2}>
                    <div className="count count-3">03</div>
                    <i className="flaticon flaticon-pie-chart" />
                  </div>
                  <div className="text-box">
                    <h4>
                      <Link to="#">Straightforward ROI</Link>
                    </h4>
                    <p>
                      Our team of creatives, designers & developers work
                      alongside our SEO & content teams.
                    </p>
                    <Link to="#" className="readmore">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Solutions;
