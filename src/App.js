import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import PageHeader from "./components/PageHeader/PageHeader";
import Homepage from "./pages/Homepage/Homepage";
import Upload from "./pages/Upload/Upload";

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
        <PageHeader />
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
