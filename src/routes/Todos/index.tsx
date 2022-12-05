import Todo from '../../components/Todo';
import styles from './todos.module.scss';

const Todos = () => {
  return (
    <div className={styles.wrap}>
      <h1>Todo List</h1>
      <Todo />
    </div>
  );
};

export default Todos;
