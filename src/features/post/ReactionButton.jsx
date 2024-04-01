import React from "react";
import { useDispatch } from "react-redux";
import { reactionAdded } from "./postSlice";
const reactionEmojis = {
  like: "👍",
  wow: "😮",
  heart: "❤️",
};

/**
 * The ReactionButton component is used to display a list of reaction buttons for a post.
 *
 * @param {object} post - An object containing information about the post.
 * @returns A memoized functional component that renders a list of reaction buttons for the post.
 */

const ReactionButton = React.memo(({ post }) => {
  const dispatch = useDispatch();

  /**
   * The `handleEmojiClick` function is called when the user clicks on a reaction button.
   * It dispatches the `reactionAdded` action with the `postId` and `reaction` properties
   * of the post object as its payload.
   *
   * @param {string} name - The name of the reaction button that was clicked.
   */
  const handleEmojiClick = (name) => {
    dispatch(reactionAdded({ postId: post.id, reaction: name }));
  };
  return (
    <div>
      {Object.entries(reactionEmojis).map(([name, emoji]) => {
        return (
          <button
            key={name}
            type="button"
            onClick={() => handleEmojiClick(name)}
          >
            {emoji} {post.reactions[name]}
          </button>
        );
      })}
    </div>
  );
});

export default ReactionButton;
