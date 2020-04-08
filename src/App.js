import React, {Component} from 'react';
import './App.css';
import LinearSearch from './LinearSearch';
import BinarySearch from './BinarySearch';
import Dataset from './Dataset';
import InputBox from './InputBox';

class App extends Component {

  state = {
    search: 0
  }

  updateSearch = (event) => {
    this.setState({
        search: event.target.value
    })
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
           <InputBox handleSearch={this.updateSearch}/>
           <LinearSearch searchInput={this.state.search}/>
           <BinarySearch searchInput={this.state.search}/>
           <Dataset />
          </header>
        </div>
      );
  }
}

export default App;
