import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'
import './global.css';


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
          <Sidebar />
          <main>
            <Post 
            author="Cairon Henrique"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque suscipit incidunt accusamus ullam expedita rerum, dicta itaque similique voluptatibus sapiente eligendi doloribus corporis, excepturi quisquam voluptate. Nulla error quos veritatis."
            />
            <Post 
            author="Cairon Henrique"
            content="Um novo post como test"
            /> 
          </main>
      </div>
    </div>
  )
}


