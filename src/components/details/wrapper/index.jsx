import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import {
  getSingleAppStats,
  getThumbColor,
  convertCurrency,
  dateFormatter,
} from "../../../utils";

import { useSelector } from "react-redux";

import "./styles/index.scss";

/* 
    NOTE: 

    Normally I would've used something like Material-UI Table, react-table 
    or Ant-Design Table component, to make it much more optimal. But, since 
    in the instructions only react & redux were mentioned, so I just used the 
    conventional approach.
*/
export default function DetailsWrapper({ id, app, publisher }) {
  const appstats = useSelector((state) => state.stats);

  const [tableData, setTableData] = useState(null);

  useEffect(() => {
    if (tableData === null) getTableData();
  }, []);

  const getTableData = async () => {
    // If No stats are there, or if stats for current id are not present somehow
    if (
      Object.keys(appstats)?.length === 0 
    //   ||
    //   typeof appstats?.find((e) => e.id == id) === undefined
    )
      await getSingleAppStats(id).then((data) => setTableData(data));
    // else setTableData(appstats?.find((e) => e.id == id));
    else {
      let idx = Object.keys(appstats).indexOf(id);

      console.log(idx);
      console.log(Object.values(appstats)[idx])
      setTableData(Object.values(appstats)[idx]);
    }
  };

  return (
    <div className="details__wrapper">
      <div className="details__content__header">
        <Link to="/">
          <i className="fas fa-arrow-left back__icon"></i>
        </Link>

        <div
          className="square__thumb"
          style={{ background: getThumbColor(id) }}
        ></div>
        <div className="app__details">
          <div className="app__name">{app}</div>
          <div className="app__publisher">{publisher}</div>
        </div>
      </div>

      <div className="details__content">
        <table className="details__table">
          <TableColumnsHeading />

          {tableData != null && (
            <tbody>
              {tableData.map((data, index) => (
                <tr key={index}>
                  <td>{dateFormatter(data.date).toDateString()}</td>
                  <td>${convertCurrency(data.revenue)}</td>
                  <td>{data.adRequest}</td>
                  <td>{data.adResponse}</td>
                  <td>{data.impressions}</td>
                  <td>{data.clicks}</td>
                  <td>85%</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}

/* Table Headings */
const TableColumnsHeading = () => (
  <thead>
    <tr>
      <th>Date</th>
      <th>Revenue</th>
      <th>Ad Requests</th>
      <th>Ad Responses </th>
      <th>Impressions</th>
      <th>Clicks</th>
      <th>RenderRate</th>
    </tr>
  </thead>
);
