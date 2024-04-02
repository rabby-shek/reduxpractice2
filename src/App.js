import Test from "./Test";
import AddPost from "./features/post/AddPost";
import PostList from "./features/post/PostList";

function App() {
  console.log("app rendered");
  return (
    <div className="app">
      <AddPost />
      <PostList />
      <Test />
    </div>
  );
}

export default App;
