
import styles from  './App.module.css'
import MainMenu from './Components/MainMenu';



function App() {
const todos = ['А', 'Б', 'С', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'К', 'Л', 'М', 'Н','О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь']

  const items = [
    {title: 'Часы', page: 1, icon: 'clock'},
    {title: 'Фото', page: 1, icon: 'photo'},
    {title: 'Папка 1', children: [ {title: 'AppStor', page: 2, icon: 'store'}, {title: 'Clips', page: 2, icon:'clips'}, {title: 'Книги', page: 2, icon:'books'} ,{title: 'Контакты', page: 2, icon:'contacts'},
    {title: 'Дом', page: 2, icon:'home'},
    {title: 'Почта', page: 2, icon:'mail'},
    {title: 'Перевод', page: 2, icon:'translate'},], page: 1},
    {title: 'Папка 2', children: [ {title: 'Калькул', page: 1, icon: 'calculator'},
    {title: 'Камера', page: 1, icon: 'camera'},
    {title: 'Музыка', page: 1, icon: 'music'},
    {title: 'Safari', page: 1, icon: 'safari'},
    {title: 'AppStor', page: 1, icon: 'store'},
    {title: 'FaceTime', page: 1, icon: 'facetime'},{title: 'Настройки', page: 1, icon: 'settings'},
    ], page: 1},
    {title: 'Папка 3', children: [ {title: 'Часы', page: 1, icon: 'clock'}, {title: 'Фото', page: 1, icon: 'photo'}, {title: 'Калькул', page: 1, icon: 'calculator'} ,{title: 'Камера', page: 1, icon: 'camera'}, {title: 'Музыка', page: 1, icon: 'music'}, {title: 'Safari', page: 1, icon: 'safari'},
    {title: 'AppStor', page: 1, icon: 'store'},
    {title: 'FaceTime', page: 1, icon: 'facetime'},
    {title: 'Настройки', page: 1, icon: 'settings'}, ], page: 2},
    {title: 'Калькул', page: 1, icon: 'calculator'},
    {title: 'Камера', page: 1, icon: 'camera'},
    {title: 'Музыка', page: 1, icon: 'music'},
    {title: 'Safari', page: 1, icon: 'safari'},
    {title: 'AppStor', page: 1, icon: 'store'},
    {title: 'FaceTime', page: 1, icon: 'facetime'},
    {title: 'Настройки', page: 1, icon: 'settings'},
    {title: 'AppStor', page: 2, icon: 'store'},
    {title: 'Clips', page: 2, icon:'clips'},
    {title: 'Книги', page: 2, icon:'books'},
    {title: 'Контакты', page: 2, icon:'contacts'},
    {title: 'Дом', page: 2, icon:'home'},
    {title: 'Почта', page: 2, icon:'mail'},
    {title: 'Перевод', page: 2, icon:'translate'},
    
  ]

  return (
      <div className = {styles.wr}>
        <MainMenu todos={items}/>
      </div>
  );
}

export default App;
