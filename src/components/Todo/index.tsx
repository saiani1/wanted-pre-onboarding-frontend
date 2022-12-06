import { CheckBtn, EditBtn, DeleteBtn } from '../../assets/svg/index';
import styles from './todo.module.scss';

const Todo = () => {
  return (
    <li className={styles.wrap}>
      <div className={styles.left}>
        <div className={styles.inputWrap}>
          <input type='checkbox' />
          <CheckBtn className={styles.icon} />
        </div>
        <p>밥 먹기</p>
      </div>
      <div className={styles.btnWrap}>
        <button type='button'>
          <EditBtn className={styles.icon} />
        </button>
        <button type='button'>
          <DeleteBtn className={styles.icon} />
        </button>
      </div>
    </li>
  );
};

export default Todo;
