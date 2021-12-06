  import React from "react";

  class Widget2 extends React.Component {
      constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
    
      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
          this.setState({
              date: new Date()
        }); 
  }

      render() {
        return (
          <div>
            <h1>Bonjour, BOSS !</h1>
            <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
          </div>
        );
      }
    }

    export default Widget2