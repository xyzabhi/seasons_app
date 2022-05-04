import React from "react";
import SeasonsDisplay from "./SeasonsDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: null };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  renderContent = () => {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>{this.state.errorMessage}</div>;
    } else if (!this.state.errorMessage && this.state.lat) {
      return <SeasonsDisplay lat={this.state.lat} />;
    } else {
      return (
        <div>
          <Spinner message="Please accept location request.." />
        </div>
      );
    }
  };

  render() {
    return <div className="box red">{this.renderContent()}</div>;
  }
}

export default App;
