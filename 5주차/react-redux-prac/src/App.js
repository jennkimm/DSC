import React from 'react';
import Counter from './components/Counter';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

const App = () => {
  return (
    <div>
      <TodosContainer/>
      <hr />
    </div>
  )
}

export default App;