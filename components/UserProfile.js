import { Avatar, Button, Card } from "antd";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { logoutAction } from "../reducers/user";

const UserProfile = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
    dispatch(logoutAction);
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          Tweets
          <br />
          {user.Posts.length}
        </div>,
        <div key="following">
          Followings
          <br />
          {user.Followings.length}
        </div>,
        <div key="follower">
          Followers
          <br />
          {user.Followers.length}
        </div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{user.nickname[0]}</Avatar>}
        title={user.nickname}
      />
      <Button onClick={onLogout}>Logout</Button>
    </Card>
  );
};

export default UserProfile;
