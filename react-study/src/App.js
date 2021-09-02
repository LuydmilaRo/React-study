import ToDoList from "./Components/ToDoList";
import styles from './Components/App.module.css';

function App() {
    const todos = [{title: 'A'},
                   {title: 'Б'},
                   {title: 'В'}, 
                   {title: 'Г'},
                   {title: 'Д'},
                   {title: 'Е'},
                   {title: 'Ё', children : [ {title: 'A'}, {title: 'B'}, {title: 'C'}, {title: 'D'}, {title: 'E'},{title: 'F'},{title: 'G'},{title: 'H'},{title: 'J'}, ]},
                   {title: 'Ж'},
                   {title: 'З'},
                   {title: 'И'},
                   {title: 'Й'},
                   {title: 'К'},
                   {title: 'Л'},
                   {title: 'М'},
                   {title: 'Н'},
                   {title: 'О'},
                   {title: 'П'},
                   {title: 'Р'},
                   {title: 'С'},
                   {title: 'Т'},
                   {title: 'У'},
                   {title: 'Ф'},
                   {title: 'Х'},
                   {title: 'Ц'},
                   {title: 'Ч'},
                   {title: 'Ш'},
                   {title: 'Щ'},
                   {title: 'Ъ'},
                   {title: 'Ы'},
                   {title: 'Ь'},
                   {title: 'Э'},
                   {title: 'Ю'}]


    return (
        <div className = {styles.wrapper}>
          <ToDoList todos={todos}/>
        </div>
    );
};

export default App;