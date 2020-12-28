import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Cockpit as CockpitView,
  ForecastingModule as ForecastingModuleView,
  OwnSimulations as OwnSimulationsView,
  JobOffer as JobOfferView,
  Profile as ProfileView,
  Analyzes as AnalyzesView,
  SavedSimulations as SavedSimulationsView,
  Help as HelpView,
  SignUp as SignUpView,
  SignUpAsAdvanced as SignUpAsAdvancedView,
  SignIn as SignInView,
  ValidateUser as ValidateUserView,
  Forgot as ForgotView,
  ResetPassword as ResetPasswordView,
  NotFound as NotFoundView
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/login"/>
      <RouteWithLayout
        component={CockpitView}
        exact
        layout={MainLayout}
        path="/cockpit"
      />
      <RouteWithLayout
        component={ForecastingModuleView}
        exact
        layout={MainLayout}
        path="/forecasting_module"
      />
      <RouteWithLayout
        component={OwnSimulationsView}
        exact
        layout={MainLayout}
        path="/own_simulations"
      />
      <RouteWithLayout
        component={JobOfferView}
        exact
        layout={MainLayout}
        path="/job_offer"
      />
      <RouteWithLayout
        component={ProfileView}
        exact
        layout={MainLayout}
        path="/profile"
      />
      <RouteWithLayout
        component={AnalyzesView}
        exact
        layout={MainLayout}
        path="/analyzes"
      />
      <RouteWithLayout
        component={SavedSimulationsView}
        exact
        layout={MainLayout}
        path="/saved_simulations"
      />
      <RouteWithLayout
        component={HelpView}
        exact
        layout={MainLayout}
        path="/help"
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/register"
      />
      <RouteWithLayout
        component={SignUpAsAdvancedView}
        exact
        layout={MinimalLayout}
        path="/registerAsAdvanced"
      />
      <RouteWithLayout
        component={ValidateUserView}
        exact
        layout={MinimalLayout}
        path="/verification"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/login"
      />
      <RouteWithLayout
        component={ForgotView}
        exact
        layout={MinimalLayout}
        path="/forgotpassword"
      />
      <RouteWithLayout
        component={ResetPasswordView}
        exact
        layout={MinimalLayout}
        path="/reset_password"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
