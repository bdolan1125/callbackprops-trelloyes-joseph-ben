import React, { Component } from 'react';
import List from './List'
import './App.css';
import store from './STORE'

class App extends Component {
  state = JSON.parse(JSON.stringify(store));
  
  removeOnClick = (arg) =>{
    let allLists = this.state.lists
    allLists = allLists.map(list =>{
      list.cardIds = list.cardIds.filter(cardId =>{
        return cardId !== arg;

        
      })
      return list
    })
    this.setState({lists: allLists})
  }

  randomOnClick = (arg) =>{
    this.state.allCards.push(()=>{
      
    })
  }

  render() {
    const { store } = this.props
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.state.lists.map(list => (
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
