import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, login, logout } from './redux/actions';

function App() {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.islogged);

  const dispatch = useDispatch();

  return (
    <div>
      <h1> Contador: {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>

      <h1>Teste </h1>
      {!isLogged ? (
        <div>
          <h6>Deve fazer login para ter acesso ao conteúdo</h6>
          <button onClick={() => dispatch(login())}>Login</button>
        </div>

      ) : (
          <div>
            <h6>Se prentende sair clique no botão abaixo</h6>
            <button onClick={() => dispatch(logout())}>Logout</button>
          </div>
        )}





    </div>
  );
}

export default App;
