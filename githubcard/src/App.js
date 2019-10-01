import React from "react";
import "./App.css";
import axios from "axios";
import UserCard from "./Components/UserCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followersData: []
    };
  }

  // componentDidMount() {
  //   this.fetchUser()
  //     .then(user => this.setState({ userData: user }))
  //     .catch(err => console.log(`Error User`, err));
  // }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/darrenjcarrillo`)
      .then(res => {
        console.log(`this is data`, res);
        this.setState({
          user: res.data
        });
      })
      .catch(err => console.log(err));
  }

  // fetchUser = e => {
  //   axios
  //     .get("https://api.github.com/users/darrenjcarrillo")
  //     .then(res => {
  //       // console.log(`this is data`, res);
  //       this.setState({
  //         followersData: res.data
  //       });
  //     })
  //     .catch(err => console.log(err));
  // };

  render() {
    return (
      <div className="App">
        <h1>GitHub User</h1>
        <UserCard key={this.state.user} user={this.state.user} />
      </div>
    );
  }
}

export default App;
