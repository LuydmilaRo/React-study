import ToDoList from './Components/ToDoList';
import styles from './Components/App.module.css';
import MainMenu from './Components/MainMenu';

function App() {
  const todos = ['А', 'Б', 'С', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь']

  const items = [
    {title: 'A'},
    {title: 'Б'},
    {title: 'В', children: [ {title: 'Г'}, {title: 'Д'} ]},
    {title: 'В', children: [ {title: 'Г'}, {title: 'Д'} ]},
    {title: 'В', children: [ {title: 'Г'}, {title: 'Д'}, {title: 'Е'} ]}
  ]

  return (
      <div className = {styles.wrapper}>
        <MainMenu todos={items}/>
      </div>
  );
}

export default App;