import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import NicknameEditFrom from '../components/NicknameEditFrom';
import FollowList from '../components/FollowList';

const Profile = () => {
  const followingList = [{ nickname: '영' }, { nickname: '바보' }, { nickname: '버드버드' }];
  const followerList = [{ nickname: '영' }, { nickname: '바보' }, { nickname: '버드버드' }];
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditFrom />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
