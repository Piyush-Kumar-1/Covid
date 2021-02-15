import "./App.css";
import { Doughnut1 } from "./Doughnut";
import { Fetch } from "./Fetch";
import { LineChart } from "./LineChart";
import { Table } from "./Table";
import { Map1 } from "./Map1";

function App() {
  return (
    <div className="app">
      <Fetch />
      <div className="app__left">
        <div className="chart">
          <Doughnut1 />
          <LineChart />
        </div>

        <Table className="table" />
      </div>
      <div className="app__right">
        <Map1 className="map" />
      </div>
    </div>
  );
}

export default App;
