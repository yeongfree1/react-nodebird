import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const SignUp = () => {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>회원가입 | NodeBird</title>
      </Head>
      <AppLayout>회원가입</AppLayout>
    </>
  );
};

export default SignUp;
