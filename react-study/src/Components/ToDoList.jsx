import React from 'react';
import ToDoItem from './ToDoItem';
import styles from './ToDoList.module.css';

const ToDoList = ({todos}) => {
    return <div className ={styles.list}>
        {todos.map(e => <ToDoItem title={e}/>)}
        </div>;
};

export default ToDoList;