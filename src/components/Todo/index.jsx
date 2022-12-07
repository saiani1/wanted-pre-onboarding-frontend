/* eslint-disable react/prop-types */
import { useState } from 'react';

import { updateTodo, deleteTodo } from '../../services/todo';
import styles from './todo.module.scss';
import { CheckBtn, EditBtn, DeleteBtn, CloseBtn } from '../../assets/svg/index';

const Todo = ({ data, setIsChange }) => {
  const { id, isCompleted, todo } = data;
  const [updateMode, setUpdateMode] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [enteredEditTodo, setEnteredEditTodo] = useState('');
  const token = localStorage.getItem('token');

  const editTodoChangeHandler = e => {
    setEnteredEditTodo(e.target.value);
  };

  const completeChangeHandler = () => {
    setIsComplete(prev => !prev);
  };

  const editBtnClickHandler = () => {
    if (updateMode && enteredEditTodo) {
      setIsChange(true);
      updateTodo(id, enteredEditTodo, isCompleted, token);
    }
    setUpdateMode(prev => !prev);
  };

  return (
    <li className={styles.wrap}>
      <div className={styles.left}>
        <div className={styles.inputWrap}>
          <input
            type='checkbox'
            defaultChecked={isCompleted}
            onChange={completeChangeHandler}
          />
          <CheckBtn className={styles.icon} />
        </div>
        {updateMode ? (
          <input
            type='text'
            onChange={editTodoChangeHandler}
            placeholder={todo}
          />
        ) : (
          <p>{todo}</p>
        )}
      </div>
      <div className={styles.btnWrap}>
        <button type='button' onClick={editBtnClickHandler}>
          {updateMode ? (
            <CheckBtn className={styles.icon} />
          ) : (
            <EditBtn className={styles.icon} />
          )}
        </button>
        <button type='button'>
          {updateMode ? (
            <CloseBtn className={styles.icon} />
          ) : (
            <DeleteBtn className={styles.icon} />
          )}
        </button>
      </div>
    </li>
  );
};

export default Todo;
