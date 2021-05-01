import { useState } from "react";
import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import GdeSeNalazimo from "./Containers/Mobile/GdeSeNalazimo";
import DesktopContainer from "./Containers/Desktop/DesktopContainer";
import Home from "./Containers/Main/Home";
import Burito from "./Containers/Mobile/Burito";
import Landing from "./Containers/Mobile/Landing";
import MobileContainer from "./Containers/Mobile/MobileContainer";
import Layout from "./Layout/Layout";
import Kontakt from "./Containers/Mobile/Kontakt";
import ONama from "./Containers/Mobile/ONama";
import Meni from "./Containers/Mobile/Meni";
import "antd/dist/antd.css";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading === true) {
    return <Landing />;
  } else if (loading === false) {
    return <MainApp />;
  } else {
    console.log("Somethings wrong");
  }
}

function MainApp() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/meni" component={Meni} />
          <Route exact path="/burito" component={Burito} />
          <Route exact path="/gdesenalazimo" component={GdeSeNalazimo} />
          <Route exact path="/kontakt" component={Kontakt} />
          <Route exact path="/onama" component={ONama} />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
