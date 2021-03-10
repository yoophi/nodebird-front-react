import { Avatar, Button, Card } from "antd";

import React from "react";

const dummy = {
  nickname: "John",
  Posts: [],
  Followings: [],
  Followers: [],
  isLoggedIn: false,
};

const UserProfile = () => {
  return (
    <Card
      actions={[
        <div key="twit">
          Tweets
          <br />
          {dummy.Posts.length}
        </div>,
        <div key="following">
          Followings
          <br />
          {dummy.Followings.length}
        </div>,
        <div key="follower">
          Followers
          <br />
          {dummy.Followers.length}
        </div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
        title={dummy.nickname}
      />
      <Button>Logout</Button>
    </Card>
  );
};

export default UserProfile;
