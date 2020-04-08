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
    console.log(event.target.value);
    this.setState({
        search: event.target.value
    })
  }

  render() {
    return (
        <div className="App">
          <main className="App-container">
           <InputBox handleSearch={this.updateSearch}/>
           <LinearSearch searchInput={this.state.search}/>
           <BinarySearch searchInput={this.state.search}/>
           <Dataset />
          </main>
        </div>
      );
  }
}

export default App;
