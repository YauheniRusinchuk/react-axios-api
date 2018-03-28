import React, { Component } from 'react';
import PostList from './components/postList';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get(
      'https://newsapi.org/v2/everything?sources=lenta&apiKey=3853fddd2e404e7aa7739c1bb86c602c'
    ).then(res => {
      this.setState({
        data: res.data.articles
      })
    }).catch((err) => {
      console.log('I\'m sorry, Error......')
    })
  }

  render() {
    return (
      <div>
        <PostList  data={this.state.data} />
      </div>
    );
  }
}

export default App;
