import React from 'react';
import ToDoItem from './ToDoItem';
import styles from './ToDoList.module.css';
import Folders from './Folders';

const ToDoList = ({todos}) => {
  return <div className ={styles.list} >
    {todos.map((e) => {
      if (e.children) {
        return (
          <Folders title={e.children}/>
        )
    }
      else
        return <ToDoItem title={e.title}/>
    })}
    
    </div>;
};

export default ToDoList;