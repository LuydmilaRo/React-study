import React, {useRef, useState} from 'react';
import styles from './MainMenu.module.css';
import ToDoList from './TodoList';

const MainMenu = ({todos}) => {

  const ref = useRef()


  return (
      <div className={styles.wrapper} ref={ref}>
        <ToDoList todos={todos} rootElement={ref} />
      </div>
  );
};

export default MainMenu;