import React from "react";
import "./App.css";
import axios from "axios";
import UserCard from "./Components/UserCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      UserData: [],
      FollowersData: []
    };
  }

  fetchUser = e => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/darrenjcarrillo`)
      .then(res => {
        // console.log(`this is data`, res);
        this.setState({
          UserData: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <h1>GitHub User</h1>
        {console.log(this.state.UserData)}
        <UserCard UserData={this.state.UserData} />
      </div>
    );
  }
}

export default App;
