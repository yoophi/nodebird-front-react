import { Button, Col, Input, Menu, Row } from "antd";

import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import { createGlobalStyle } from "styled-components";
import { useSelector } from "react-redux";

const Global = createGlobalStyle`
  .ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  
  .ant-col:first-child {
    padding-left: 0 !important;
  }
  
  .ant-col:last-child {
    padding-right: 0 !important;
  }
`;

const AppLayout = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.user);
  return (
    <div>
      <Global />
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>NodeBird</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: "middle" }} />
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="#" target="_blank" rel="noreferrer noopener">
            React Example
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
