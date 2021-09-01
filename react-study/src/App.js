import ToDoList from "./Components/ToDoList";
import styles from './Components/App.module.css'

function App() {

    const todos = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ']

    return <div className = { styles.wrapper } > < ToDoList todos = { todos }
    / ></div >
}

export default App;