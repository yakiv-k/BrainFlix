import "./App.scss";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import Upload from "./pages/Upload/Upload";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Homepage}></Route>
            <Route path="/Upload" component={Upload}></Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
