import { useState } from 'react';
import cx from 'classnames';
import styles from './login.module.scss';

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validForm, setValidForm] = useState(false);

  const enteredInputHandler = (e: any) => {
    const { value } = e.target;
    const { type } = e.target;

    if (type === 'email') {
      setEnteredEmail(value);

      if (value.includes('@')) setValidEmail(true);
      else setValidEmail(false);
    }
    if (type === 'password') {
      setEnteredPassword(value);

      if (value.length >= 8) setValidPassword(true);
      else setValidPassword(false);
    }

    if (validEmail && validPassword) setValidForm(true);
    else setValidForm(false);

    console.log(value, validEmail, validPassword, validForm);
  };

  return (
    <form className={styles.wrap}>
      <h1>Log In</h1>
      <div className={styles.inputWrap}>
        <label htmlFor='email'>E-mail</label>
        <input
          type='email'
          id='email'
          value={enteredEmail}
          onChange={enteredInputHandler}
        />
      </div>
      <div className={styles.inputWrap}>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          value={enteredPassword}
          onChange={enteredInputHandler}
        />
      </div>
      <button
        type='submit'
        className={cx(styles.button, { [styles.active]: validForm })}
        disabled={!validForm}
      >
        SUBMIT
      </button>
    </form>
  );
};

export default Login;
