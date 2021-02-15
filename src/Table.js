import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Table.css";
import { useStateValue } from "./StateProvider";

export const Table = () => {
  const [{}, dispatch] = useStateValue();
  const url = "https://api.covid19india.org/data.json";
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data.statewise);
    });
  }, [url]);

  useEffect(() => {
    dispatch({
      type: "SET_STATE",
      data: data,
    });
  }, [data]);

  if (data) {
    data.sort((a, b) => parseInt(a.active) - parseInt(b.active));
    data.reverse();
    const data1 = [...data];
    data1.shift();
    return (
      <div className="table">
        <div className="table__header">
          <h3>state</h3>
          <h3>confirmend</h3>
          <h3>active</h3>
          <h3>recovered</h3>
          <h3>deceased</h3>
        </div>

        {data1.map((item) => (
          <p className="table__details" key={item.statecode}>
            <span>{item.state}</span> <p>{item.confirmed}</p>
            <p>{item.active}</p> <p>{item.recovered}</p> <p>{item.deaths}</p>
          </p>
        ))}
      </div>
    );
  }
  return <div></div>;
};
