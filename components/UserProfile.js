import { Avatar, Button, Card } from "antd";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { LOG_OUT_REQUEST } from "../reducers/user";

const UserProfile = () => {
  const { me, logOutLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          Tweets
          <br />
          {me.Posts.length}
        </div>,
        <div key="following">
          Followings
          <br />
          {me.Followings.length}
        </div>,
        <div key="follower">
          Followers
          <br />
          {me.Followers.length}
        </div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{me.nickname[0]}</Avatar>}
        title={me.nickname}
      />
      <Button onClick={onLogout} loading={logOutLoading}>
        Logout
      </Button>
    </Card>
  );
};

export default UserProfile;
