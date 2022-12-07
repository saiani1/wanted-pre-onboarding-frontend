import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import cx from 'classnames';

import styles from './auth.module.scss';
import AuthContext from '../../store/auth-context';
import { signup, signin } from '../../services/auth';

const Auth = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const [clickedTab, setClickedTab] = useState('signin');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validForm, setValidForm] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    if (authCtx.isLogin) navigate('/todo');
  });

  const tabClickHandler = e => {
    setClickedTab(e.currentTarget.name);
  };

  const enteredInputHandler = e => {
    const { value } = e.target;
    const { type } = e.target;

    if (type === 'email') {
      setEnteredEmail(value);

      if (value.includes('@')) {
        setValidEmail(true);
        setEmailError('');
      } else {
        setValidEmail(false);
        setEmailError('이메일 형식에 맞지 않습니다.');
      }
    }
    if (type === 'password') {
      setEnteredPassword(value);

      if (value.length > 7) {
        setValidPassword(true);
        setPasswordError('');
      } else {
        setValidPassword(false);
        setPasswordError('비밀번호는 8자 이상 적어주세요.');
      }
    }

    if (validEmail && validPassword) setValidForm(true);
    else setValidForm(false);

    console.log(value, validEmail, validPassword, validForm);
  };

  const submitHandler = e => {
    e.preventDefault();

    if (validForm) {
      if (clickedTab === 'signin') {
        signin(enteredEmail, enteredPassword)
          .then(res => {
            authCtx.login(JSON.stringify(res.data.access_token));
          })
          .catch(err => {
            setSubmitError(err.response.data.message);
          });
      }

      if (clickedTab === 'signup') {
        signup(enteredEmail, enteredPassword)
          .then(() => {
            setClickedTab('signin');
            setSubmitError('회원가입이 완료되었습니다. 로그인해주세요.');
          })
          .catch(err => {
            setSubmitError(err.response.data.message);
          });
      }
    }
  };

  return (
    <form className={styles.wrap} onSubmit={submitHandler} noValidate>
      <div className={styles.tabWrap}>
        <button
          type='button'
          name='signin'
          className={cx({ [styles.active]: clickedTab === 'signin' })}
          onClick={tabClickHandler}
        >
          Sign In
        </button>
        <button
          type='button'
          name='signup'
          className={cx(styles.signupBtn, {
            [styles.active]: clickedTab === 'signup',
          })}
          onClick={tabClickHandler}
        >
          Sign Up
        </button>
        <div className={styles.bar} />
      </div>
      <div className={styles.inputWrap}>
        <label htmlFor='email'>E-mail</label>
        <input
          type='email'
          id='email'
          value={enteredEmail}
          onChange={enteredInputHandler}
          placeholder='ex) abc@abc.com'
        />
        <span className={styles.error}>{emailError}</span>
      </div>
      <div className={styles.inputWrap}>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          value={enteredPassword}
          onChange={enteredInputHandler}
          placeholder='8자 이상'
        />
        <span className={styles.error}>{passwordError}</span>
      </div>
      <div className={styles.submitWrap}>
        {submitError && <p className={styles.submitError}>{submitError}</p>}
        <button
          type='submit'
          className={cx(styles.submitBtn, { [styles.active]: validForm })}
          disabled={!validForm}
        >
          SUBMIT
        </button>
      </div>
    </form>
  );
};

export default Auth;
