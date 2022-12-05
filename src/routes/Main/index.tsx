import { Link } from 'react-router-dom';
import styles from './main.module.scss';

const Main = () => {
  return (
    <div className={styles.wrap}>
      <h1>
        Hello,
        <br /> <span>Stranger 🙋‍♀️</span>
      </h1>
      <div className={styles.btnWrap}>
        <Link to='/login'>Log In</Link>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/todos'>Todo</Link>
      </div>
    </div>
  );
};

export default Main;
