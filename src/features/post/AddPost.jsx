/**
 * This is Add post section
 * With a title , content and a submit button
 * @component
 * @return {jsx.component}
 */

import React, { useState } from "react";
import { addPost } from "./postSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

/**
 * The AddPost component allows a user to add a new post to the Redux store
 * in order to display it in a list of posts.
 *
 * @returns A functional component that renders a form for entering the title and content
 * of a new post, and sends a post object to the Redux store when the form is submitted.
 */

const AddPost = () => {
  const users = useSelector(selectAllUsers);
  const [postData, setPostData] = useState({
    title: "",
    content: "",
    userId: users[0].id,
  });

  const { title, content, userId } = postData;
  const dispatch = useDispatch();

  /**
   * The `handleAddPostInputChange` function is called when the value of an input element
   * in the form changes. It takes an event object as its parameter, and uses the `name` and `value`
   * properties of the event target to update the corresponding property in the `postData` state.
   *
   * @param {event} e - The event object for the input change event.
   */

  const handleAddPostInputChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevPostData) => ({ ...prevPostData, [name]: value }));
  };

  /**
   * The `handleAddPost` function is called when the user clicks the "Save Post" button.
   * Checks if both the `title` and `content` states have a value, and if so,
   * dispatches the `addPost` action with the `title` and `content` as its payload.
   * Resets both `title` and `content` states to empty strings.
   */

  const handleAddPost = () => {
    if (title && content && userId) {
      dispatch(addPost(title, content, userId));

      console.log(postData);
      setPostData({
        title: "",
        content: "",
        userId: users[0].id,
      });
      console.log("submitted");
    }
  };

  console.log(" form rendered");

  return (
    <section className="add-post-section">
      <h2>Add a new post</h2>
      <form>
        <select
          name="userId"
          id="author"
          value={userId}
          onChange={handleAddPostInputChange}
        >
          {users.map((user) => {
            return (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            );
          })}
        </select>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleAddPostInputChange}
          placeholder="Title"
        />
        <br />
        <textarea
          id="content"
          name="content"
          value={content}
          onChange={handleAddPostInputChange}
          placeholder="Content"
        ></textarea>
        <br />
        <button type="button" onClick={handleAddPost}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default React.memo(AddPost);
