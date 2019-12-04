import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ToDoForm } from './components/ToDoForm';
import { ToDoList } from './components/ToDoList';
import { IToDo } from './interfaces';

const App: React.FC = () => {
  const [todos, setTodos] = useState<IToDo[]>([]);

  const addHandler = (title: string) => {
    const newToDo: IToDo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    //setTodos([newToDo, ...todos])
    setTodos(prev => [newToDo, ...prev])
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <ToDoForm onAdd={addHandler} />
        <ToDoList todos={todos} />
      </div>
    </>
  );
}

export default App;
