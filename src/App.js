import React from 'react';
import Todo from './Components/Todo'
import List from './Components/List'
import './App.css';
import Total from './Components/Total';
import Login from './Components/Login';
import {store} from './Redux/store'

function App() {

  const{auth:{isAuth}}=store.getState()
  
  return (
    <div className="App">
      {
        !isAuth ? <Login/> :
        <>
          <Total/>
          <Todo/>
          <List/>
        </>

      }
    </div>
  );
}

export default App;
