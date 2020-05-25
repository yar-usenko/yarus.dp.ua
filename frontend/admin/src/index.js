import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router } from "react-router-dom";
import Root from './containers/Root'
import api from './api'

const $root = document.createElement("div");
$root.setAttribute("id", "∇");
document.body.prepend($root);

ReactDOM.render(
  <ApolloProvider client={api}>
    <Router>
      <Root />
    </Router>
  </ApolloProvider>,
  $root
);
