import { AddBtn } from '../../assets/svg/index';
import Todo from '../../components/Todo';
import styles from './todos.module.scss';

const Todos = () => {
  return (
    <div className={styles.wrap}>
      <h1>Todo List</h1>
      <form className={styles.inputWrap}>
        <input type='text' />
        <button type='submit'>
          <AddBtn className={styles.icon} />
        </button>
      </form>
      <ul className={styles.todoWrap}>
        <Todo />
      </ul>
    </div>
  );
};

export default Todos;
