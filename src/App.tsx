import React from 'react';
import './App.css';
import CharacterList from './components/character-list';
import CountContainer from './components/count-container';
import Intro from './components/intro';
import { Person } from './components/person';
import {Provider} from 'react-redux';
import store from '../src/redux/store'
import CountRedux from './components/count-redux';



function App() {
  return (
   

    <div className="App"> 
    <Provider store={store}>
     
      <Intro></Intro>
      <Person name="Adam" age={26}></Person>
      <Person name="Bill" age={40}></Person>
      <CharacterList characters={["Kohga","Sooga"]}></CharacterList>
      <CountContainer></CountContainer>
      <CountRedux title="Hello" ></CountRedux>
      <CountRedux title="World"></CountRedux>
    </Provider>
    </div>

    
  );
}

export default App;
