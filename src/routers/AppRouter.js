import React from 'react';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.js';
import AddExpensePage from '../components/AddExpensePage.js';
import EditExpensePage from '../components/EditExpensePage.js';
import HelpExpensePage from '../components/HelpExpensePage.js';
import NotFoundPage from '../components/NotFoundPage.js';
import Header from '../components/Header.js';

const AppRouter=()=>(
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path='/' exact={true} component={ExpenseDashboardPage}/>
        <Route path='/create' component={AddExpensePage}/>
        <Route path='/edit/:id' component={EditExpensePage}/>
        <Route path='/help' component={HelpExpensePage}/>
        <Route component= {NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
