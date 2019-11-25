import React, { Component } from 'react';
import './App.css';
import LeftSideBar from './components/left-side-bar';
import RightSideBar from './components/right-side-content';
import axios from 'axios'

class App extends Component {
  state = {
    initialData: {}
  }

  render() {
    return (
      <div className="Main-container">
        <LeftSideBar style={styles.lefSideBar}
          name={this.state.initialData.name}
          pic={this.state.initialData.avatar_url}
          description={this.state.initialData.bio}
          company={this.state.initialData.company}
          country={this.state.initialData.location}
        />
        <RightSideBar login={this.state.initialData.login} />
      </div>
    )
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/supreetsingh247').then((data) => {
      this.setState({ initialData: data.data })
    })
  }
}

const styles = {
  mainContainer: {
    display: 'flex',
    padding: 30
  }
}

export default App;
