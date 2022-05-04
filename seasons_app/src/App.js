import React from "react";
import SeasonsDisplay from "./SeasonsDisplay";

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );
    return (
      <div>
        <SeasonsDisplay />
      </div>
    );
  }
}

export default App;
