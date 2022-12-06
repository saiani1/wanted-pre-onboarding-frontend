import { Routes, Route } from 'react-router-dom';

import Login from './Login/index';
import Todos from './Todos/index';

import styles from './routes.module.scss';

const App = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.appWrap}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='todo' element={<Todos />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
