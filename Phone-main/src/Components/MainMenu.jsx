import React, {useEffect, useRef, useState} from 'react';
import styles from './MainMenu.module.css'
import TodoList from './TodoList';
import DotList from './DotList';

const MainMenu = ({todos}) => {
  // const [pageIndex, setOpenPage] = useState(0);
  const ref = useRef()

  const pageCount = Array.from(todos.reduce ((acc, curr)=>{
    acc.add(curr.page)
    return acc;
  },new Set()))

  const [pageIndex] = useState(1);

  const [currentList, setCurrentList] = useState([]);

  useEffect(() => {

    setCurrentList(todos.filter((e)=>e.page===pageIndex))


  }, [pageIndex, todos])


  return (
      <div className={styles.wrapper} ref={ref}>
        <TodoList currentList={currentList} rootElement={ref} />
        <div className={styles.pointDisplay}>
           <DotList pageCount={pageCount} pageIndex={pageIndex}/>
        </div>
      </div>   
  );

};

export default MainMenu;