import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/game/';

export default [
  <Route path="/games/create" component={Create} exact key="create" />,
  <Route path="/games/edit/:id" component={Update} exact key="update" />,
  <Route path="/games/show/:id" component={Show} exact key="show" />,
  <Route path="/games/" component={List} exact strict key="list" />,
  <Route path="/games/:page" component={List} exact strict key="page" />
];
