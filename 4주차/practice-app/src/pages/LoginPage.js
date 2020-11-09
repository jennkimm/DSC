import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../containers/auth/LoginForm';

const LoginPage = () => {
  return (
    <AuthTemplate>
      {/* 이 부분에 로그인 폼이 들어가도록 수정*/}
      Login Form
    </AuthTemplate>
  );
};

export default LoginPage;