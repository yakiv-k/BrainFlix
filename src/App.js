import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import Upload from "./pages/Upload/Upload";

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
        <Header />
          <Switch>
            <Route path="/" exact component={Homepage}></Route>
            <Route path="/Videos/:id" component={Homepage}></Route>
            <Route path="/Upload" component={Upload}></Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
