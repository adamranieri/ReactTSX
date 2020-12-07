import React from 'react';
import './App.css';
import Intro from './components/intro';
import { Person } from './components/person';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { countReducer } from './store';



const store = createStore(countReducer);

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Intro></Intro>
      <Person name="Adam" age={26}></Person>
      <Person name="Bill" age={40}></Person>
      
    </div>
    </Provider>
  );
}

export default App;