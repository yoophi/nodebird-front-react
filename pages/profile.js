import React, { useEffect } from "react";

import AppLayout from "../components/AppLayout";
import FollowList from "../components/FollowList";
import Head from "next/head";
import NicknameEditForm from "../components/NicknameEditForm";
import Router from "next/router";
import { useSelector } from "react-redux";

const Profile = () => {
  const { me } = useSelector((state) => state.user);
  useEffect(() => {
    if (!(me && me.id)) {
      Router.push("/");
    }
  }, [me && me.id]);
  if (!me) {
    return null;
  }
  return (
    <AppLayout>
      <Head>
        <title>NodeBird</title>
      </Head>
      <NicknameEditForm />
      <FollowList header="Following List" data={me.Followings} />
      <FollowList header="Follower List" data={me.Followers} />
    </AppLayout>
  );
};

export default Profile;
