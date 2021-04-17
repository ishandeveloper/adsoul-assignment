import React from "react";

import { IconItem } from "./components";

// Icons
import {
  HomeHeroImage,
  FillRateIcon,
  CTRIcon,
  RateIcon,
  QuickIcon,
} from "../../../assets";

import "./styles/index.scss";

export default function LeftPane() {
  return (
    <div className="col-xl-6 col-md-6 col-xs-12 left__pane">
      <div className="left__hero">
        <div className="left__logo">ADSOUL</div>

        <div className="left__img__wrapper">
          <img src={HomeHeroImage} alt="ADSOUL Hero Illustration" />
        </div>
      </div>

      <div className="left__icons__wrapper">
        <div className="left__title">Revenue Optimization</div>

        <div className="row icons__container">
          <IconItem icon={FillRateIcon} text="Fill Rate" />

          <IconItem icon={CTRIcon} text="Improve CTR" />

          <IconItem icon={RateIcon} text="Refresh Rate" />

          <IconItem icon={QuickIcon} text="Quick Integration" />
        </div>
      </div>
    </div>
  );
}
