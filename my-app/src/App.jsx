import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.helloAPI = this.helloAPI.bind(this);
  }
  componentDidMount() {
    this.helloAPI();
  }

  helloAPI() {
    console.log('test1')
    axios.get('http://localhost:3000/products')
    .then(res => console.log(res))
    .catch(res => console.log(res))
  }


  render() {
    return (
      <div>Hello World!</div>
    )
  }
}

export default App;
