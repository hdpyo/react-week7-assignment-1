import { useDispatch, useSelector } from 'react-redux';

import { get } from './utils';

import {
  requestLogin, setAccessToken,
  updateLoginField,
} from './actions';

import LoginForm from './LoginForm';
import LogoutForm from './LogoutForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { email, password } = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  function handleSubmit() {
    dispatch(requestLogin());
  }

  function handleChange({ name, value }) {
    // TODO: 이메일, 비밀번호 상태를 변경하는 액션
    dispatch(updateLoginField({ name, value }));
  }

  function handleClickLogout() {
    dispatch(setAccessToken(''));
  }

  return (
    <>
      {accessToken ? (
        <LogoutForm onClick={handleClickLogout} />
      ) : (
        <LoginForm
          loginFields={{ email, password }}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
}
