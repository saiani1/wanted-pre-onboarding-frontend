/* eslint-disable react/prop-types */
import { useState } from 'react';

import styles from './todo.module.scss';
import { updateTodo, deleteTodo } from '../../services/todo';
import { CheckBtn, EditBtn, DeleteBtn, CloseBtn } from '../../assets/svg/index';

const Todo = ({ data, setIsChange }) => {
  const { id, isCompleted, todo } = data;
  const [updateMode, setUpdateMode] = useState(false);
  const [enteredEditTodo, setEnteredEditTodo] = useState('');
  const token = localStorage.getItem('token');

  const editTodoChangeHandler = e => {
    setEnteredEditTodo(e.target.value);
  };

  const completeChangeHandler = e => {
    const check = e.target.checked;
    updateTodo(id, todo, check, token).catch(err => console.log(err));
  };

  const editBtnClickHandler = () => {
    setUpdateMode(true);

    if (updateMode && enteredEditTodo) {
      updateTodo(id, enteredEditTodo, isCompleted, token)
        .then(() => {
          setIsChange(true);
          setUpdateMode(false);
        })
        .catch(err => console.log(err));
    }
  };

  const deleteBtnClickHandler = () => {
    if (updateMode) setUpdateMode(false);
    else {
      deleteTodo(id, token)
        .then(() => setIsChange(true))
        .catch(err => console.log(err));
    }
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
            defaultValue={todo}
            onChange={editTodoChangeHandler}
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
        <button type='button' onClick={deleteBtnClickHandler}>
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
