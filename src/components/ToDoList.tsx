import React from 'react';
import { IToDo } from '../interfaces';

type ToDoListProps = {
    todos: IToDo[]
}

export const ToDoList: React.FC<ToDoListProps> = ({ todos }) => {
    
    return (
        <ul>
            {todos.map(todo => {
                const classes = ['todo'];
                if(todo.completed){
                    classes.push('completed')
                }
                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label htmlFor="">
                            <input type="checkbox" checked={todo.completed} />
                            <span>{todo.title}</span>
                            <i className="material-icons red-text">delete</i>
                        </label>
                    </li>
                )
            })}

        </ul>
    )
}