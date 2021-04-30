import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

class MainApp extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    this.setState({ loading: false });
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      // if your component doesn't have to wait for an async action, remove this block
      return null; // render null when app is not ready
    }

    return <App />;
  }
}

// function demoAsyncCall() {
//   return new Promise((resolve) => setTimeout(() => resolve(), 2500));
// }

ReactDOM.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
