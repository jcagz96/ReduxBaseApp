import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, login, logout, add, remove } from './redux/actions';

function App() {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.islogged);
  const carrinho = useSelector(state => state.carrinho);

  const dispatch = useDispatch();

  const [item, setItem] = useState('');

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


      <h1> Nr de items no carrinho: {carrinho.length}</h1>
      <h1> Items no carrinho: {JSON.stringify(carrinho)}</h1>
      <input
        placeholder="Insira um item"
        value={item}
        onChange={e => setItem(e.target.value)}
      />
      <button onClick={() => dispatch(add(item))}>Adicionar</button>
      <button onClick={() => dispatch(remove(item))}>Remover</button>


    </div>
  );
}

export default App;
