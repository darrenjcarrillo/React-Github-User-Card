import React from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";
import UserCard from "./Components/UserCard";

const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-content: space-around;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followersData: []
    };
  }

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

    // another axios for followers
    axios
      .get(`https://api.github.com/users/darrenjcarrillo/followers`)
      .then(res => {
        console.log(`this is followers`, res);
        this.setState({
          followersData: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1>GitHub User</h1>
        <AppContainer>
          <UserCard key={this.state.user} user={this.state.user} />
          {this.state.followersData.map(item => (
            <UserCard key={item.id} user={item} />
          ))}
        </AppContainer>
      </div>
    );
  }
}

export default App;
