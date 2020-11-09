import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import AuthForm from '../components/auth/AuthForm';

const RegisterPage = () => {
  return (
     <AuthTemplate>
       {/* 이 부분에 회원가입 폼이 들어가도록 수정*/}
       <AuthForm type="register"/>
    </AuthTemplate>
  );
};

export default RegisterPage;