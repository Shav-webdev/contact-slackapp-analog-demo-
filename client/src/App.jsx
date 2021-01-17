import React, { useEffect } from "react";
import "./App.module.scss";
import { Router } from "react-router-dom";
import { useRoutes } from "./routes/routes";
import { history } from "./routes/history";
import { useDispatch, useSelector } from "react-redux";
import { autoLoginSuccess } from "./redux/actions/auth.actions";
import "./i18n";

const App = () => {
  const dispatch = useDispatch();

  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    dispatch(autoLoginSuccess());
  }, [dispatch]);

  const routes = useRoutes(!!token);

  return (
    <div className="App">
      <Router history={history}>{routes}</Router>
    </div>
  );
};

export default App;
