import React, {useState} from 'react';
import styles from './ToDoItem.module.css';

const ToDoItem = ({title}) => {



    const [isPressed, setIsPressed]=useState (false);
    return (
            <div className={styles.item} onClick={() => setIsPressed (!isPressed)}>
               <div>
                  <span className={styles.title}>{isPressed && 'Hi'}{title}</span>
              </div>
          </div>
    );
};

export default ToDoItem;