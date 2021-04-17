import React from "react";

import { ItemStats } from "./components";
import { convertCurrency, getThumbColor } from "../../../../../utils";

import {Link} from 'react-router-dom';

import "./styles/index.scss";



export default function AppListItem({ app_id, name, publisher, stats }) {
  return (
    <Link to={`/details/${app_id}`}>
    <div className="applist__item" >
      <div className="item__header">
        <div className="item__left">
          <div
            className="square__thumb"
            style={{ background: getThumbColor(app_id) }}
          ></div>
          <div className="item__details">
            <div className="item__app">{name}</div>
            <div className="item__publisher">{publisher}</div>
          </div>
        </div>

        <div className="item__icon">
          <i className="fas fa-arrow-right"></i>
        </div>
      </div>

      <div className="item__stats ">
        <ItemStats
          title="Revenue"
          data={`$${convertCurrency(stats.revenue)}`}
        />
        <ItemStats
          title="Ad Requests"
          data={convertCurrency(stats.adRequest)}
        />
        <ItemStats
          title="Ad Response"
          data={convertCurrency(stats.adResponse)}
        />
        <ItemStats
          title="Impressions"
          data={convertCurrency(stats.impressions)}
        />
      </div>
    </div></Link>
  );
}
