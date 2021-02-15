import * as React from "react";
import ReactDatamaps from "react-datamaps-india";
import { useStateValue } from "./StateProvider";
import DatamapsIndia from "react-datamaps-india";
import "./Map1.css";

export const Map1 = () => {
  const [{ data, active, deceased, recovered }, dispatch] = useStateValue();

  const [confirmed, setConfirmed] = React.useState(0);
  const [deaths, setDeaths] = React.useState(0);
  const [activelocal, setActivelocal] = React.useState(0);
  const [recoveredlocal, setRecoveredlocal] = React.useState(0);

  React.useEffect(() => {
    setConfirmed(data && data[0].confirmed);
    setDeaths(deceased);
    setActivelocal(active);
    setRecoveredlocal(recovered);
  }, [data]);

  React.useEffect(() => {
    dispatch({
      type: "SET_DATA",
      deceased: deaths,
      active: activelocal,
      recovered: recoveredlocal,
    });
  }, [deaths]);

  if (data) {
    const data1 = [...data];
    data1.sort((a, b) => a.state.localeCompare(b.state));

    return (
      <div className="container">
        <div className="details">
          <div className="confirmed">
            <h2>Confirmed </h2>
            <h2>{confirmed} </h2>
          </div>
          <div className="active">
            <h2>Active </h2>
            <h2>{activelocal} </h2>
          </div>
          <div className="recovered">
            <h2>recovered </h2>
            <h2>{recoveredlocal} </h2>
          </div>
          <div className="deceased">
            <h2>Deceased </h2>
            <h2>{deaths} </h2>
          </div>
        </div>

        <div
          style={{
            flex: 1,
            display: "inline-block",
            position: "relative",
            width: "50vw",
            minWidth: "400px",
            paddingBottom: "100%",
            verticalAlign: "top",
            overflow: "hidden",
          }}
        >
          <DatamapsIndia
            regionData={{
              "Andaman & Nicobar Island": {
                code: "an",
                value: data1[0].confirmed,
                deaths: data1[0].deaths,
                active: data1[0].active,
                recovered:
                  data1[0].confirmed - data1[0].deaths - data1[0].active,
              },
              "Andhra Pradesh": {
                value: data1[1].confirmed,
                deaths: data1[1].deaths,
                active: data1[1].active,
                recovered:
                  data1[1].confirmed - data1[1].deaths - data1[1].active,
              },
              "Arunanchal Pradesh": {
                value: data1[2].confirmed,
                deaths: data1[2].deaths,
                active: data1[2].active,
                recovered:
                  data1[2].confirmed - data1[2].deaths - data1[2].active,
              },
              Assam: {
                value: data1[3].confirmed,
                deaths: data1[3].deaths,
                active: data1[3].active,
                recovered:
                  data1[3].confirmed - data1[3].deaths - data1[3].active,
              },
              Bihar: {
                value: data1[4].confirmed,
                deaths: data1[4].deaths,
                active: data1[4].active,
                recovered:
                  data1[4].confirmed - data1[4].deaths - data1[4].active,
              },
              Chandigarh: {
                value: data1[5].confirmed,
                deaths: data1[5].deaths,
                active: data1[5].active,
                recovered:
                  data1[5].confirmed - data1[5].deaths - data1[5].active,
              },
              Chhattisgarh: {
                value: data1[6].confirmed,
                deaths: data1[6].deaths,
                active: data1[6].active,
                recovered:
                  data1[6].confirmed - data1[6].deaths - data1[6].active,
              },
              "Dadara & Nagar Haveli": {
                value: data1[7].confirmed,
                deaths: data1[7].deaths,
                active: data1[7].active,
                recovered:
                  data1[7].confirmed - data1[7].deaths - data1[7].active,
              },
              "Daman & Diu": {
                value: data1[7].confirmed,
                deaths: data1[7].deaths,
                active: data1[7].active,
                recovered:
                  data1[7].confirmed - data1[7].deaths - data1[7].active,
              },
              Delhi: {
                value: data1[8].confirmed,
                deaths: data1[8].deaths,
                active: data1[8].active,
                recovered:
                  data1[8].confirmed - data1[8].deaths - data1[8].active,
              },
              Goa: {
                value: data1[9].confirmed,
                deaths: data1[9].deaths,
                active: data1[9].active,
                recovered:
                  data1[9].confirmed - data1[9].deaths - data1[9].active,
              },
              Gujarat: {
                value: data1[10].confirmed,
                deaths: data1[10].deaths,
                active: data1[10].active,
                recovered:
                  data1[10].confirmed - data1[10].deaths - data1[10].active,
              },
              Haryana: {
                value: data1[11].confirmed,
                deaths: data1[11].deaths,
                active: data1[11].active,
                recovered:
                  data1[11].confirmed - data1[11].deaths - data1[11].active,
              },
              "Himachal Pradesh": {
                value: data1[12].confirmed,
                deaths: data1[12].deaths,
                active: data1[12].active,
                recovered:
                  data1[12].confirmed - data1[12].deaths - data1[12].active,
              },
              "Jammu & Kashmir": {
                value: data1[13].confirmed,
                deaths: data1[13].deaths,
                active: data1[13].active,
                recovered:
                  data1[13].confirmed - data1[13].deaths - data1[13].active,
              },
              Jharkhand: {
                value: data1[14].confirmed,
                deaths: data1[14].deaths,
                active: data1[14].active,
                recovered:
                  data1[14].confirmed - data1[14].deaths - data1[14].active,
              },
              Karnataka: {
                value: data1[15].confirmed,
                deaths: data1[15].deaths,
                active: data1[15].active,
                recovered:
                  data1[15].confirmed - data1[15].deaths - data1[15].active,
              },
              Kerala: {
                value: data1[16].confirmed,
                deaths: data1[16].deaths,
                active: data1[16].active,
                recovered:
                  data1[16].confirmed - data1[16].deaths - data1[16].active,
              },
              Lakshadweep: {
                value: data1[18].confirmed,
                deaths: data1[18].deaths,
                active: data1[18].active,
                recovered:
                  data1[18].confirmed - data1[18].deaths - data1[18].active,
              },
              "Madhya Pradesh": {
                value: data1[19].confirmed,
                deaths: data1[19].deaths,
                active: data1[19].active,
                recovered:
                  data1[19].confirmed - data1[19].deaths - data1[19].active,
              },
              Maharashtra: {
                value: data1[20].confirmed,
                deaths: data1[20].deaths,
                active: data1[20].active,
                recovered:
                  data1[20].confirmed - data1[20].deaths - data1[20].active,
              },
              Manipur: {
                value: data1[21].confirmed,
                deaths: data1[21].deaths,
                active: data1[21].active,
                recovered:
                  data1[21].confirmed - data1[21].deaths - data1[21].active,
              },
              Meghalaya: {
                value: data1[22].confirmed,
                deaths: data1[22].deaths,
                active: data1[22].active,
                recovered:
                  data1[22].confirmed - data1[22].deaths - data1[22].active,
              },
              Mizoram: {
                value: data1[23].confirmed,
                deaths: data1[23].deaths,
                active: data1[23].active,
                recovered:
                  data1[23].confirmed - data1[23].deaths - data1[23].active,
              },
              Nagaland: {
                value: data1[24].confirmed,
                deaths: data1[24].deaths,
                active: data1[24].active,
                recovered:
                  data1[24].confirmed - data1[24].deaths - data1[24].active,
              },
              Odisha: {
                value: data1[25].confirmed,
                deaths: data1[25].deaths,
                active: data1[25].active,
                recovered:
                  data1[25].confirmed - data1[25].deaths - data1[25].active,
              },
              Puducherry: {
                value: data1[26].confirmed,
                deaths: data1[26].deaths,
                active: data1[26].active,
                recovered:
                  data1[26].confirmed - data1[26].deaths - data1[26].active,
              },
              Punjab: {
                value: data1[27].confirmed,
                deaths: data1[27].deaths,
                active: data1[27].active,
                recovered:
                  data1[27].confirmed - data1[27].deaths - data1[27].active,
              },
              Rajasthan: {
                value: data1[28].confirmed,
                deaths: data1[28].deaths,
                active: data1[28].active,
                recovered:
                  data1[28].confirmed - data1[28].deaths - data1[28].active,
              },
              Sikkim: {
                value: data1[29].confirmed,
                deaths: data1[29].deaths,
                active: data1[29].active,
                recovered:
                  data1[29].confirmed - data1[29].deaths - data1[29].active,
              },
              "Tamil Nadu": {
                value: data1[31].confirmed,
                deaths: data1[31].deaths,
                active: data1[31].active,
                recovered:
                  data1[31].confirmed - data1[31].deaths - data1[31].active,
              },
              Telangana: {
                value: data1[32].confirmed,
                deaths: data1[32].deaths,
                active: data1[32].active,
                recovered:
                  data1[32].confirmed - data1[32].deaths - data1[32].active,
              },
              Tripura: {
                value: data1[34].confirmed,
                deaths: data1[34].deaths,
                active: data1[34].active,
                recovered:
                  data1[34].confirmed - data1[34].deaths - data1[34].active,
              },
              "Uttar Pradesh": {
                value: data1[35].confirmed,
                deaths: data1[35].deaths,
                active: data1[35].active,
                recovered:
                  data1[35].confirmed - data1[35].deaths - data1[35].active,
              },
              Uttarakhand: {
                value: data1[36].confirmed,
                deaths: data1[36].deaths,
                active: data1[36].active,
                recovered:
                  data1[36].confirmed - data1[36].deaths - data1[36].active,
              },
              "West Bengal": {
                value: data1[37].confirmed,
                deaths: data1[37].deaths,
                active: data1[37].active,
                recovered:
                  data1[37].confirmed - data1[37].deaths - data1[37].active,
              },
            }}
            mapLayout={{
              startColor: "#FFDAB9",
              endColor: "#FF6347",
              legend: "white",
              hoverTitle: "Count",
              noDataColor: "#f5f5f5",
              borderColor: "#8D8D8D",
              hoverBorderColor: "#8D8D8D",
              hoverColor: "white",
            }}
            hoverComponent={({ value }) => {
              let x = 0;
              setConfirmed(value.value);
              setDeaths(value.deaths);
              setActivelocal(value.active);
              setRecoveredlocal(value.recovered);

              return (
                <>
                  <p>{value.name}</p>
                  <p>{value.value}</p>
                </>
              );
            }}
          />
        </div>
      </div>
    );
  }
  return <div></div>;
};
