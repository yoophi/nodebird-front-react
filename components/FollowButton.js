import { Button } from "antd";
import PropTypes from "prop-types";
import React from "react";

const FollowButton = ({ post }) => {
  return <Button>Follow</Button>;
};

FollowButton.propTypes = {
  post: PropTypes.object.isRequired,
};

export default FollowButton;
