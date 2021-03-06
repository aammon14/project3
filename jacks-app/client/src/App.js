import React, { Component } from "react";
import EditItem from "./Components/EditItem";
import Item from "./Components/Item";
import Login from "./Components/Login";
import Menu from "./Components/Menu";
import Order from "./Components/Order";
import PreviousOrders from "./Components/PreviousOrders";
import Signup from "./Components/Signup";
import UserEdit from "./Components/UserEdit";
import Cart from "./Components/Cart";
import Menu_Maintenance from "./Components/Menu_Maintenance";
import KitchenMode from "./Components/KitchenMode";
import Category from "./Components/Category";
import Navbar from "./Components/Navbar";
import MenuImage from './Components/MenuImage';
import axios from "axios";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
      items: [],
      cart: [],
      order: 0,
      hasData: false,
      categories: []
    };

    this.getAllItems = this.getAllItems.bind(this);
    this.getAllUser = this.getAllUser.bind(this);
    this.getAllOrders = this.getAllOrders.bind(this);
    this.getCart = this.getCart.bind(this);
    this.changeOrderState = this.changeOrderState.bind(this);
    this.changeCartState = this.changeCartState.bind(this);
    this.changeUserState = this.changeUserState.bind(this);
    this.changeCategoryState = this.changeCategoryState.bind(this);
  }

  componentDidMount() {
    this.getAllItems();
    this.getAllOrders();
  }

  // Item Calls
  getAllItems() {
    axios({
      url: "/items",
      method: "Get"
    }).then(response => {
      this.setState({
        items: response.data,
        hasData: true
      });
    });
  }

  // User Calls
  getAllUser() {
    axios({
      url: "/users",
      method: "get"
    }).then(response => {
      this.setState({
        users: response.data,
        hasData: true
      });
    });
  }

  // Order Calls
  getAllOrders() {
    axios({
      url: "/orders",
      method: "get"
    }).then(response => {
      this.setState({
        orders: response.data,
        hasData: true
      });
    });
  }

  // Checkout Cart Calls
  getCart() {
    axios({
      url: `/cart/${this.state.order}`,
      method: "get"
    }).then(response => {
      this.setState({
        cart: response.data,
        hasData: true
      });
    });
  }

  changeOrderState(order) {
    this.setState({ order: order });
  }

  changeCartState(cart) {
    this.setState({ cart: cart });
  }

  changeUserState(user) {
    this.setState({ user: user });
  }

  changeCategoryState(categories) {
    this.setState({ categories: categories });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="main-container background">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/Sign_in" />} />
            <Route
              exact
              path="/items"
              render={props => {
                return (
                  <div>
                    <div className="items_page">
                      <Navbar />
                      <MenuImage />
                      <Category
                        {...props}
                        state={this.state}
                        getAllItems={this.getAllItems}
                        changeCategoryState={this.changeCategoryState}
                      />
                      <Menu
                        {...props}
                        items={this.state.items}
                        getAllItems={this.getAllItems}
                        changeOrderState={this.changeOrderState.bind(this)}
                        changeCartState={this.changeCartState.bind(this)}
                        orders={this.state.orders}
                        state={this.state}
                        getCart={this.getCart}
                      />
                      <Cart
                        {...props}
                        state={this.state}
                        cart={this.state.cart}
                        getCart={this.getCart}
                        changeOrderState={this.changeOrderState.bind(this)}
                        changeCartState={this.changeCartState.bind(this)}
                      />
                    </div>
                  </div>
                );
              }}
            />

            <Route
              exact
              path="/items/:id"
              render={props => {
                return (
                  <div>
                   <Navbar />
                  <Item
                    {...props}
                    state={this.state}
                    changeOrderState={this.changeOrderState.bind(this)}
                    changeCartState={this.changeCartState.bind(this)}
                    getAllItems={this.getAllItems}
                    addItemToCart={this.addItemToCart}
                    getCart={this.getCart}
                  />
                  </div>
                );
              }}
            />
            <Route
              exact
              path="/orders"
              render={props => {
                return (
                   <div>
                   <Navbar />
                  <PreviousOrders
                    {...props}
                    orders={this.state.orders}
                    getAllOrders={this.getAllOrders}
                  />
                  </div>
                );
              }}
            />
            <Route
              exact
              path="/orders/:id"
              render={props => {
                return (
                  <div>
                   <Navbar />
                  <Order
                    {...props}
                    orders={this.state.orders}
                    getAllOrders={this.getAllItems}
                  />
                  </div>
                );
              }}
            />
            <Route
              exact
              path="/orders/:id/edit"
              render={props => {
                return (
                  <div>
                   <Navbar />
                  <EditItem
                    {...props}
                    orders={this.state.orders}
                    getAllOrders={this.getAllItems}
                  />
                  </div>
                );
              }}
            />
            <Route
              exact
              path="/users/profile"
              render={props => {
                return (
                  <div>
                   <Navbar />
                  <UserEdit
                    {...props}
                    state={this.state}
                    getAllUser={this.getAllUser}
                    changeUserState={this.changeUserState}
                  />
                  </div>
                );
              }}
            />
            <Route
              exact
              path="/Menu_Maintenance"
              render={props => {
                return (
                  <div>
                   <Navbar />
                  <Menu_Maintenance
                    {...props}
                    users={this.state.users}
                    getAllUser={this.getAllUser}
                    items={this.state.items}
                    getAllItems={this.getAllItems}
                  />
                  </div>
                );
              }}
            />
            <Route
              exact
              path="/kitchen"
              render={props => {
                return (
                  <div>
                   <Navbar />
                  <KitchenMode
                    {...props}
                    state={this.state}
                    changeOrderState={this.changeOrderState.bind(this)}
                  />
                  </div>
                );
              }}
            />
            <Route
              exact
              path="/Sign_up"
              render={props => {
                return (
                  <Signup
                    {...props}
                    state={this.state}
                    getAllUser={this.getAllUser}
                    changeUserState={this.changeUserState}
                  />
                );
              }}
            />
            <Route
              exact
              path="/Sign_in"
              render={props => {
                return (
                  <Login
                    {...props}
                    users={this.state.users}
                    getAllUser={this.getAllUser}
                    changeUserState={this.changeUserState}
                  />
                );
              }}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
