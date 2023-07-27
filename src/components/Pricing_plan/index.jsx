import React from "react";
import PricingPlans from "./websiteCreation";
import BroadCamp from "../broadCamp/BroadCamp";
import { Helmet } from "react-helmet";
import CMS from "./websiteCMSCreation";
import PriceCategoryTwo from "./smMarketing";
import PriceCategoryThree from "./PaidAdsMarketing";

export default function index() {
  const BgImage = {
    backgroundImage: `url(images/background/22.png)`
  };
  return (
    <div>
      <Helmet>
        <title>Pricing Plans</title>
      </Helmet>
      <BroadCamp name="Pricing Plans" bgImageStyle={BgImage} />
      <PricingPlans pricingTitle="Our Pricing Plans" packageTitle="React Web App Development (MERN)"/>
        <CMS packageTitle="WordPress Web Application Development(CMS)"/>
      <PriceCategoryTwo packageTitle="Social Media Marketing"/>
      <PriceCategoryThree packageTitle="Paid Ads Marketing"/>
    </div>
  );
}
