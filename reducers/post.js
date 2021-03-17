import shortId from "shortid";
export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "John Doe",
      },
      Content: "First Post",
      Images: [
        {
          src: "http://via.placeholder.com/450x600",
        },
        {
          src: "http://via.placeholder.com/450x600/FFFF00",
        },
        {
          src: "http://via.placeholder.com/450x600/FF00FF",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "John",
          },
          content: "Sample comment.",
        },
        {
          User: {
            nickname: "Jane",
          },
          content: "Another comment.",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";

export const addPost = (data) => {
  return {
    type: ADD_POST,
    data,
  };
};

const dummyPost = (data) => {
  return {
    id: shortId.generate(),
    content: data.text,
    User: {
      id: 1,
      nickname: "Jane Doe",
    },
    Images: [],
    Comments: [],
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        mainPosts: [dummyPost(action.data), ...state.mainPosts],
        postAdded: true,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
