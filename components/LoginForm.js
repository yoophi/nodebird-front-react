import { Button, Form, Input } from "antd";
import React, { useCallback } from "react";

import Link from "next/link";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { loginAction } from "../reducers/user";

const LoginForm = () => {
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");
  const dispatch = useDispatch();

  const onSubmitForm = useCallback(() => {
    dispatch(
      loginAction({
        id,
        password,
      })
    );
  }, [id, password]);

  return (
    <Form onFinish={onSubmitForm} style={{ padding: "10px" }}>
      <div>
        <label htmlFor="user-id">Username</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">Password</label>
        <br />
        <Input
          name="user-password"
          value={password}
          onChange={onChangePassword}
          type="password"
          required
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <Button type="primary" htmlType="submit" loading={false}>
          Login
        </Button>
        <Link href="/signup">
          <a>
            <Button>Join</Button>
          </a>
        </Link>
      </div>
    </Form>
  );
};

export default LoginForm;
