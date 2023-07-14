import React, {Component} from 'react';
import Slider from './slider';
import Service from "./service";
import AllService from "./AllService";
import Team from "./team";
import Progress from "./progress";
import Clients from "./clients";
import Traffics from "./Traffics";
import WhyChooseUs from "./WhyChooseUs";
import PricingPlans from "./PricingPlans";
import Solutions from "./Solutions";
import HappyClients from "./HappyClients";
import CaseStudies from "./caseStudies";
import Testimonials from "./testimonials";
import NewsLetter from "./Newsletter";

class Home extends Component {
    render() {
        return (
            <div>
                <Slider/>
                <Clients/>
                <Solutions/>
                <HappyClients/>
                <Service/>
                <Traffics/>
                <AllService/>
                <WhyChooseUs/>
                <PricingPlans/>
                <Team/>
                <Progress/>
                <CaseStudies/>
                <Testimonials/>
                <NewsLetter/>
            </div>
        );
    }
}

export default Home;