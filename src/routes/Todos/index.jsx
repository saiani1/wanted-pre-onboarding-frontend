/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './todos.module.scss';
import AuthContext from '../../store/auth-context';
import Todo from '../../components/Todo';
import { createTodo, getTodos } from '../../services/todo';
import { AddBtn } from '../../assets/svg/index';

const Todos = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const [enteredTodo, setEnteredTodo] = useState('');
  const [getData, setGetData] = useState([]);
  const [isChange, setIsChange] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!authCtx.isLogin) navigate('/');
    else {
      getTodos(token)
        .then(res => setGetData(res.data))
        .catch(err => console.log(err));
    }
    setIsChange(false);
  }, [isChange]);

  const submitHandler = e => {
    e.preventDefault();

    if (enteredTodo) {
      createTodo(enteredTodo, token)
        .then(() => {
          setIsChange(true);
          setEnteredTodo('');
        })
        .catch(err => console.log(err));
    }
  };

  const enterTodoHandler = e => {
    setEnteredTodo(e.target.value);
  };

  return (
    <div className={styles.wrap}>
      <h1>Todo List</h1>
      <form className={styles.inputWrap} onSubmit={submitHandler}>
        <input type='text' value={enteredTodo} onChange={enterTodoHandler} />
        <button type='submit'>
          <AddBtn className={styles.icon} />
        </button>
      </form>
      <ul className={styles.todoWrap}>
        {getData &&
          getData.map(data => (
            <Todo key={data.id} data={data} setIsChange={setIsChange} />
          ))}
      </ul>
    </div>
  );
};

export default Todos;
