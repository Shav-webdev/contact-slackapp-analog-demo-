import React from "react";
import AdminDashboardPage from "../pages/auth/DashboardPage";
import  AuthLogin  from "../pages/auth/AuthLogin";
import HomePage from "../pages/home/HomePage";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthRegister from "../pages/auth/AuthRegister";

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/dashboard/overview">
          <AdminDashboardPage />
        </Route>
        <Route path="/dashboard/workspaces">
          <AdminDashboardPage />
        </Route>
        <Redirect
          to={localStorage.getItem("selectedMenuItem") || "/dashboard/overview"}
        />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/login">
        <AuthLogin />
      </Route>
      <Route path="/register">
        <AuthRegister />
      </Route>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
