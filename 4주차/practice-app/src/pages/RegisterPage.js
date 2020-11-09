import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import RegisterForm from '../containers/auth/RegisterForm';

const RegisterPage = () => {
  return (
     <AuthTemplate>
       {/* 이 부분에 회원가입 폼이 들어가도록 수정*/}
       Register form
    </AuthTemplate>
  );
};

export default RegisterPage;