import React, { Component } from "react";
import axios from 'axios';


class Signup extends Component {
  constructor(props) {
    super(props)
    this.createUser = this.createUser.bind(this);
  }

  createUser() {
    axios({
      url: "localhost:3000/users/",
      method: "post"
    }).then(response => {});
  }

  render(){
    return(
      <div>
        <h1>Please Log In</h1>
      </div>
      );
  }

  // methods
}
export default Signup;