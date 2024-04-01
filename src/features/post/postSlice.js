import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
// The initial state for the post state
const initialState = [
  {
    id: 1,
    title: "Learning redux toolkit",
    content: "I have heard good things.",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: 2,
    title: "Learning redux toolkit with reactJs",
    content: "I have heard good things here also.",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
  },
];

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      // The addPost reducer takes a payload object containing the title and content of the new post
      // and adds it to the state array
      reducer(state, action) {
        state.push(action.payload);
      },
      // The addPost prepare function generates a unique id for the new post and returns a payload
      // object containing the title, content, and id properties
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
          },
        };
      },
    },
  },
});

export const selectAllPost = (state) => state.posts;
export const { addPost } = postSlice.actions;
export default postSlice.reducer;
