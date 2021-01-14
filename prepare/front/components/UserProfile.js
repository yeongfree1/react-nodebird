import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../reducers';

const UserProfile = () => {
  const dispath = useDispatch();

  const onLogOut = useCallback(() => {
    dispath(logoutAction());
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          짹쨱 <br />0
        </div>,
        <div key="followings">
          팔로잉 <br />0
        </div>,
        <div key="followings">
          팔로워 <br />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>ZC</Avatar>} title="한영관" />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
