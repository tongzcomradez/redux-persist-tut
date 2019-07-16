import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import logo from './logo.svg';
import './App.css';

function App() {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Hello: {auth.username}

        {
          auth.username === 'guest' && (
            <button
              className="btn"
              onClick={() => dispatch({ type: 'LOGIN' })}
            >
              login
          </button>
          )
        }

        {
          auth.username !== 'guest' && (
            <button
              className="btn"
              onClick={() => dispatch({ type: 'LOGOUT' })}
            >
              logout
            </button>
          )
        }


      </header>
    </div>
  );
}

export default App;
