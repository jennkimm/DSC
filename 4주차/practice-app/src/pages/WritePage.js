import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import WriteForm from '../components/auth/WriteForm';

const WritePage = () => {
  return (
    <AuthTemplate>
        <WriteForm/>
    </AuthTemplate>
  );
};

export default WritePage;