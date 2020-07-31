import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./components/home";
import Blogs from "./components/blogs";
import Contact from "./components/contact";
import About from "./components/about";
import NotFound from "./components/notFound";

import Footer from "./components/common/footer";
import TakeMeUp from "./components/common/takeMeUp";

//import "./App.css";

function App() {
  return (
    <React.Fragment>
      <main className="container">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blogs" component={Blogs} />
          {/*<Route path="/gallery" component={Gallery} />*/}
          <Route path="/contact" component={Contact} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
      <TakeMeUp />
      <Footer />
    </React.Fragment>
  );
}

export default App;
