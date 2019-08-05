import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListTodo from './pages/todo-list'
import FormTodo from './pages/form-todo'

const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ListTodo} />
        <Route path="/create-task" component={FormTodo}/>
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
  
  export default Routes;