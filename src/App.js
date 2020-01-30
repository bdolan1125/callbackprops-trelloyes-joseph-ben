import React, { Component } from 'react';
import List from './List'
import './App.css';
import store from './STORE'

class App extends Component {
  state = JSON.parse(JSON.stringify(store));
  
  removeOnClick = (arg) =>{
    console.log(this.state)
    console.log(arg)
    this.setState({})
  }

  findOnClick() {
    // cardIds.map().filter()
  }

  render() {
    const { store } = this.props
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
              removeOnClick={this.removeOnClick}
            />
          ))}
        </div>
      </main>
    );
  };
}

export default App;
