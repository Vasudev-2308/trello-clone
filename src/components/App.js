import "../styles/App.css";

import React, { Component } from "react";
import Board from "./Board";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">U-Track</div>
        <Board />
        <div className="chatbody">
          <iframe 
          title="ChatBot"
          src="https://web.powerva.microsoft.com/environments/Default-6097692a-0a7b-4e97-be15-92710bdb2994/bots/new_bot_113bc765e3be427e9a14138db29d145e/webchat" frameBorder="0"></iframe>
        </div>
      </div>
    );
  }
}

export default App;
