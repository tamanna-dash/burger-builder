import React, { Component } from 'react'
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder'
import Checkout from './Containers/Checkout/Checkout'
import {Route, Switch} from 'react-router-dom'
import Orders from './Containers/Orders/Orders'

export default class App extends Component {
  render() {
    return (
      <div>
        <Layout>

        <Switch>
            <Route path="/" exact component={BurgerBuilder} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/Orders" component={Orders} />
        </Switch>
        </Layout>
        
      </div>
    )
  }
}

