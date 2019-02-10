import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../component/ExpenseDashboardPage';
import AddExpensePage from '../component/AddExpensePage';
import EditExpensePage from '../component/EditExpensePage';
import LoginPage from '../component/LoginPage';
import HelpPage from '../component/HelpPage';
import NotFoundPage from '../component/NotFoundPage';
import PrivateRoute from './PrivateRoute';


export const history = createHistory();

//switch will only find one match, if didn't find a match, run the last one.
const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={LoginPage} exact={true}/>
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;

