import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/player/';

export default [
  <Route path="/players/create" component={Create} exact key="create" />,
  <Route path="/players/edit/:id" component={Update} exact key="update" />,
  <Route path="/players/show/:id" component={Show} exact key="show" />,
  <Route path="/players/" component={List} exact strict key="list" />,
  <Route path="/players/:page" component={List} exact strict key="page" />
];
