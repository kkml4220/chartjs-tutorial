import { useState } from "react";
import "./App.css";

import { UserData } from "./data";
import BarPlot from "./components/BarPlot";
import LinePlot from "./components/LinePlot";
import PiePlot from "./components/PiePlot";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
      },
    ],
  });

  return (
    <div className="App">
      <div style={{ width: "400px" }}>
        <BarPlot chartData={userData} />
      </div>
      <div style={{ width: "400px" }}>
        <LinePlot chartData={userData} />
      </div>
      <div style={{ width: "400px" }}>
        <PiePlot chartData={userData} />
      </div>
    </div>
  );
}

export default App;
