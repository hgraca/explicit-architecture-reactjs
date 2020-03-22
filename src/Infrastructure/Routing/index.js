import React from 'react';
import { Route, Switch } from 'react-router-dom'

export default () => (
  <Switch>
    <Route
      exact
      path='/'
      render={
        () => <SomeTemplate
          headerComponent={ <SomeHeader/> }
          contentComponent={ <SomeContentPage/> }
        />
      }
    />
  </Switch>
);
