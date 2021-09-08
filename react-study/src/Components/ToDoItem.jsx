import React from 'react';
import styles from './ToDoItem.module.css';
import cn from 'classnames';

const ToDoItem = ({title, onClick, mini}) => {
    return (
      <div className={cn(styles.item, {[styles.mini]: mini})} onClick={onClick}>
        <span className={styles.title}>{title}</span>
      </div>
    )
  };
  
  export default ToDoItem;