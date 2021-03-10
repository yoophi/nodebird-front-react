import { Button, Card, Popover } from "antd";
import {
  EllipsisOutlined,
  HeartOutlined,
  HeartTwoTone,
  MessageOutlined,
  RetweetOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";

import PostImages from "./PostImages";
import styled from "styled-components";

const CardWrapper = styled.div`
  background-color: red;
  margin-bottom: 20px;
`;

const PostCard = ({ post }) => {
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const [liked, setLiked] = useState(false);
  return (
    <CardWrapper key={PostCard.id}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          liked ? (
            <HeartTwoTone twoToneColor="#eb2f96" />
          ) : (
            <HeartOutlined key="heart" />
          ),
          <MessageOutlined key="message" />,
          <Popover
            key="ellipsis"
            content={
              <Button.Group>
                <Button>Report abuse</Button>
                <Button>Edit</Button>
                <Button danger>Remove</Button>
              </Button.Group>
            }
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
      ></Card>
      <div>PostCard</div>
    </CardWrapper>
  );
};

export default PostCard;
