import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import InstaImport from "./pages/InstaImport";
import Explore from "./pages/Explore";
import Gallery from "./pages/Gallery";
import PhotoDetail from "./pages/PhotoDetail";
import ShoppingCart from "./pages/ShoppingCart";
import BuyerInfo from "./pages/BuyerInfo";
import NotFound from "./pages/NotFound";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/explore" component={Explore} />
        <Route exact path="/gallery/:name" component={Gallery} />
        <Route path="/gallery/:name/:id" component={PhotoDetail} />
        <Route path="/cart" component={ShoppingCart} />
        <Route path="/delivery-info" component={BuyerInfo} />
        <Route path="/import" component={InstaImport} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
