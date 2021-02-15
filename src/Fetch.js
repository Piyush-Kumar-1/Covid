import axios from "axios";
import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";

export const Fetch = () => {
  const [{ active, deceased, recovered }, dispatch] = useStateValue();
  const [cas, setCas] = useState(null);
  const url = "https://api.covid19india.org/data.json";

  let last = [];
  let last7 = [];
  let active7 = [],
    recovered7 = [],
    deceased7 = [];

  useEffect(() => {
    axios.get(url).then((response) => {
      setCas(response.data.cases_time_series);
    });
  }, [url]);

  useEffect(() => {
    if (cas) {
      last = cas.slice(-1);
      last7 = cas.slice(-7);

      dispatch({
        type: "SET_DATA",
        active:
          last[0].totalconfirmed -
          last[0].totalrecovered -
          last[0].totaldeceased,
        recovered: parseInt(last[0].totalrecovered),
        deceased: parseInt(last[0].totaldeceased),
      });

      {
        last7.map(
          (item) => (
            deceased7.push(parseInt(item.dailydeceased)),
            recovered7.push(parseInt(item.dailyrecovered)),
            active7.push(
              item.totalconfirmed - item.totaldeceased - item.totalrecovered
            )
          )
        );

        if (last7) {
          dispatch({
            type: "SET",
            active7: active7,
            recovered7: recovered7,
            deceased7: deceased7,
          });
        }
      }
    }
  }, [cas]);

  return <div></div>;
};
