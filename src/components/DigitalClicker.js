import React from "react";

class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0,
    };
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    );
  }

  handleClick = () => {
    this.setState((prevState) => {
      return {
        timesClicked: prevState.timesClicked + 1,
      };
    });
  };
}

export default DigitalClicker;
