import React, { useState } from "react";
const commentsData = [
  { id: 1,
    name: "Divyansh Singhal",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    replies: [
      {
        id: 2,
        name: "Divyansh Singhal",
        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        replies: [
          {
            id: 3,
            name: "Divyansh Singhal",
            text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            replies: [
              {
                id: 4,
                name: "Divyansh Singhal",
                text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        id:5,
        name: "Divyansh Singhal",
        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        replies: [],
      },
      {
        id:6,
        name: "Divyansh Singhal",
        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        replies: [],
      },
    ],
  },
  {
    id:7,
    name: "Divyansh Singhal",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    replies: [],
  },
  {
    id:8,
    name: "Divyansh Singhal",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    replies: [],
  },
];
const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 my-2 rounded-lg">
      <img
        className="w-8 h-8"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-4">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
const CommentList = ({ comments }) => {
  return comments?.map((comment) => (
    <div key={comment.id}>
      <Comment data={comment} />
      <div className="pl-5 border-l border-black ml-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  const [likes, setLikes] = useState(true);
  return (
    <div className="m-5 p-5">
      <button
        onClick={() => {
          setLikes(!likes);
          console.log("likes");
        }}
      >
        {likes ? "👍 Like" : "👎 Unlike"}
      </button>
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
