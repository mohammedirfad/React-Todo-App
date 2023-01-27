import React from 'react';
import TodoList from './components/TodoList';
import { Wave1} from './examples.js';

import './App.css';


// const styles = {
//   fontFamily: 'sans-serif',
//   textAlign: 'center',
// };



function App() {
   return (
    <div className='todo-app'>
      
      {/* <h1>Todo-app</h1>  */}
      <Wave1/>

     
     
      <TodoList />

    </div>

  );
}


export default App;

