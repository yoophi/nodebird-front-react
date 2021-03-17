import React, { useEffect } from "react";

import AppLayout from "../components/AppLayout";
import FollowList from "../components/FollowList";
import Head from "next/head";
import NicknameEditForm from "../components/NicknameEditForm";
import Router from "next/router";
import { useSelector } from "react-redux";

const Profile = () => {
  const { isLoggedIn } = useSelector((state) => state.user);

  useEffect(() => {
    if (!isLoggedIn) {
      Router.replace("/");
    }
  }, [isLoggedIn]);

  const followerList = [
    { nickname: "User A" },
    { nickname: "User B" },
    { nickname: "User C" },
  ];

  const followingList = [
    { nickname: "User 1" },
    { nickname: "User 2" },
    { nickname: "User 3" },
  ];

  return (
    <AppLayout>
      <Head>
        <title>NodeBird</title>
      </Head>
      <NicknameEditForm />
      <FollowList header="Following List" data={followingList} />
      <FollowList header="Follower List" data={followerList} />
    </AppLayout>
  );
};

export default Profile;
