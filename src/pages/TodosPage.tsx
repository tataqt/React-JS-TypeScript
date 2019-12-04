import React, { useState, useEffect } from "react";
import { ToDoForm } from '../components/ToDoForm';
import { ToDoList } from '../components/ToDoList';
import { IToDo } from '../interfaces';

export const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<IToDo[]>([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as IToDo[];
        setTodos(saved)
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addHandler = (title: string) => {
        const newToDo: IToDo = {
            title: title,
            id: Date.now(),
            completed: false
        }
        //setTodos([newToDo, ...todos])
        setTodos(prev => [newToDo, ...prev])
    }

    const toggleHandler = (id: number) => {
        setTodos(prev => prev.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        }
        ))
    }

    const removeHandler = (id: number) => {
        const shouldRemove = window.confirm("Are you sure that you want to delete this element?");
        if (shouldRemove) {
            setTodos(prev => prev.filter(todo => todo.id !== id))
        }
    }
    
    return (
        <React.Fragment>
            <ToDoForm onAdd={addHandler} />
            <ToDoList
                todos={todos}
                onToggle={toggleHandler}
                onRemove={removeHandler}
            />
        </React.Fragment>
    )
}