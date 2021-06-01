/* eslint-disable */
import React, { Component } from 'react';

const UserContext = React.createContext();

class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
    user: {}
  }
  this.setUser = this.setUser.bind(this);
  }
  // Method to update state
  setUser = (user) => {
    this.setState({user})
  }

  render() {
    const { children } = this.props
    const { user } = this.state
    const { setUser } = this

    return (
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        {children}
      </UserContext.Provider>
    )
  }
}

export default UserContext;

export { UserProvider };
