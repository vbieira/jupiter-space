import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Ranking from '../Ranking';
import SignUpPage from '../SignUp/SignUp';
import SignInPage from '../SignIn/SignIn';
import ForgotPasswordPage from '../ForgotPassword';
import Dashboard from '../Dashboard';
import Subjects from '../Subjects/Subjects';
import CreateSubjectsForm from '../CreateSubject/CreateSubjectsForm'
import SignOutPage from '../SignOut/SignOutPage';

import * as ROUTES from '../../constants/routes';

const Routes = () => (
  <Switch>
    <Route exact path={ROUTES.USERS_SIGN_UP} component={SignUpPage} />
    <Route exact path={'/signout'} component={SignOutPage} />
    <Route exact path={'/'} component={SignInPage} />
    <Route exact path={ROUTES.RANKING} component={Ranking} />
    <Route exact path={ROUTES.USERS_FORGOT_PASSWORD} component={ForgotPasswordPage} />
    <Route exact path={ROUTES.SUBJECTS} component={Subjects} />
    <Route exact path={ROUTES.SUBJECTS_NEW} component={CreateSubjectsForm} />
    <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
  </Switch>
);

export default Routes;