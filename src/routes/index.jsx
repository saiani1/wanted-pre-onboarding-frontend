import { Routes, Route } from 'react-router-dom';

import Auth from './Auth/index';
import Todos from './Todos/index';

import styles from './routes.module.scss';

const App = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.appWrap}>
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path='todo' element={<Todos />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
