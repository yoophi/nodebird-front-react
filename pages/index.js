import AppLayout from "../components/AppLayout";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "sample",
      },
      content: "First post",
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
    },
  ],
};

const Home = () => (
  <AppLayout>
    {dummy.isLoggedIn && <PostForm />}
    {dummy.mainPosts.map((c) => {
      return <PostCard key={c.id} post={c} />;
    })}
  </AppLayout>
);

export default Home;
