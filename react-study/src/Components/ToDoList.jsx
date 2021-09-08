import React, {useState} from 'react';
import ToDoItem from './ToDoItem';
import styles from './ToDoList.module.css';
import ModalItem from './ModalItem';
import Folders from './Folders';



const ToDoList = ({todos, mini, rootElement}) => {

  const [openIndex, setOpenIndex] = useState(-1);

  function onFoldersClick(i) {
    setOpenIndex(i === openIndex ? -1 : i)
  }

  return todos.map((e, i) => {
      if (e.children)
        return <Folders
            todos={e.children}
            modal={openIndex === i}
            rootElement={rootElement}
            onClick={() => onFoldersClick(i)} />
      else
        return <ToDoItem title={e.title} mini={mini} />
    })

};

export default ToDoList;