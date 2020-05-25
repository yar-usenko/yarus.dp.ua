import React from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductListContainer from '../containers/ProductList'
import ProductFormContainer from '../containers/ProductForm'

const RootContainer = () => {
  return (
    <React.Fragment>
      <header>
        <Link to="/product">Товары</Link>
      </header>
      <Switch>
        <Route exact path="/product">
          <ProductListContainer />
        </Route>
        <Route path="/product/:productID">
          <ProductFormContainer />
        </Route>
      </Switch>
    </React.Fragment>

  )
}

export default RootContainer;
