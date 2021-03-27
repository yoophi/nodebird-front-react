import { Form, Input } from "antd";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CHANGE_NICKNAME_REQUEST } from "../reducers/user";
import useInput from "../hooks/useInput";

const NicknameEditForm = () => {
  const { me } = useSelector((state) => state.user);
  const [nickname, onChangeNickname] = useInput(me?.nickname || "");
  const dispatch = useDispatch();

  const onSubmit = useCallback(() => {
    dispatch({
      type: CHANGE_NICKNAME_REQUEST,
      data: nickname,
    });
  }, [nickname]);

  return (
    <Form
      style={{
        marginBottom: "20px",
        border: "1px solid #d9d9d9",
        padding: "20px",
      }}
    >
      <Input.Search
        value={nickname}
        onChange={onChangeNickname}
        addonBefore="Nickname"
        enterButton="Update"
        onSearch={onSubmit}    
      />
    </Form>
  );
};

export default NicknameEditForm;
