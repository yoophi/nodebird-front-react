import { Button, Form, Input } from "antd";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ADD_POST_REQUEST } from "../reducers/post";

const PostForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const { imagePaths, addPostLoading, addPostDone } = useSelector(
    (state) => state.post
  );

  const imageInput = useRef();
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  useEffect(() => {
    if (addPostDone) {
      setText("");
    }
  }, [addPostDone]);

  const onSubmitForm = useCallback(() => {
    dispatch({
      type: ADD_POST_REQUEST,
      data: text,
    });
  }, [text]);

  const onChangeText = useCallback((e) => {
	  console.log(e.target.value);
    setText(e.target.value);
  }, []);

  return (
    <Form
      style={{ margin: "10px 0 20px" }}
      encType="multipart/form-data"
      onFinish={onSubmitForm}
    >
      <Input.TextArea
        maxLength={140}
        placeholder="What's up?"
        value={text}
        onChange={onChangeText}
      />
      <div>
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>Image Upload</Button>
        <Button 
          type="primary" 
          style={{ float: "right" }} 
          htmlType="submit"
          loading={addPostLoading}
        >
          Tweet
        </Button>
      </div>
      <div>
        {imagePaths.map((v) => (
          <div key={v} style={{ display: "inline-block" }}>
            <img
              src={`${v}`} 
              style={{ width: "200px" }}
              alt={v}
            />
            <div>
              <Button>Remove</Button>
            </div>
          </div>
          ))}
      </div>
    </Form>
  );
};

export default PostForm;
