/**
 * This component contains the post list
 * With title and content
 * @component
 * @returns {jsx.element} => A React component
 */

import React from "react";

// redux toolkit
import { useSelector } from "react-redux";
import { selectAllPost } from "./postSlice";
import PostAuthor from "./PostAuthor";
import PostTimeAgo from "./PostTimeAgo";
import ReactionButton from "./ReactionButton";
const PostList = () => {
  const posts = useSelector(selectAllPost);

  const orderedPost = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date)); // sort by date in descending order

  return (
    <section className="post-list-section">
      <h2>Posts</h2>
      <div className="post-list">
        {/* mapping tha posts into the jsx element */}
        {orderedPost.map((post) => {
          return (
            <article key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content.substring(0, 100)}</p>
              <p>
                <PostAuthor userId={post.userId} />
              </p>
              <p>
                <PostTimeAgo timestamp={post.date} />
              </p>
              <ReactionButton post={post} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default PostList;
