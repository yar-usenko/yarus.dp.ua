import React from 'react';
import { Switch, Route } from "react-router-dom";

import Layout from '../components/Layout'

import Home from '../containers/Home.jsx'
import Category from '../containers/Category.jsx'
import Product from '../containers/Product.jsx'
import Cart from '../containers/Cart.jsx'
import Article from '../containers/Article.jsx'
import NotFound from '../containers/NotFound.jsx'

const RootContainer = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/category">
          <Category />
        </Route>
        <Route exact path="/product">
          <Product />
        </Route>
        <Route exact path="/my/cart">
          <Cart />
        </Route>
        <Route exact path="/article">
          <Article />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  )
}

export default RootContainer;
