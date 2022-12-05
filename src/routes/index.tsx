import { Routes, Route } from 'react-router-dom';

import Main from './Main/index';
import Login from './Login/index';
import SignUp from './SignUp/index';
import Todos from './Todos/index';
import CreateTodo from './Todos/CreateTodo';

import styles from './routes.module.scss';

const App = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.appWrap}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='todos' element={<Todos />} />
          <Route path='todos/create' element={<CreateTodo />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
