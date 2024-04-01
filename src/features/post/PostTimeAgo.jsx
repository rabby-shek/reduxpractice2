import React from "react";
import { parseISO, formatDistanceToNow } from "date-fns";

/**
 * The PostTimeAgo component is used to display the time since a given timestamp as a string.
 *
 * @param {string} timestamp - A string representing a timestamp in the ISO format (e.g. "2023-02-22T14:32:00.000Z")
 * @returns A functional component that renders the time since the `timestamp` as a string.
 */

const PostTimeAgo = ({ timestamp }) => {
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }
  return <span>{timeAgo}</span>;
};

export default PostTimeAgo;
