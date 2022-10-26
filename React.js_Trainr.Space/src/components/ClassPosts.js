import { useEffect, useState } from "react";
import { Button, Input, Form } from "reactstrap";

import PostComments from "./PostComments";
import "./styles/ClassPosts.css";
import myUser from "../media/myUser.png";
import postClose from "../media/close.png";
export default function ClassPosts({
  classInfo,
  setPostInput,
  postInput,
  submitPost,
  deletePost,
}) {
  const [disableButton, setDisableButton] = useState(true);

  useEffect(async () => {
    postInput.length > 0 ? setDisableButton(false) : setDisableButton(true);
  });

  return (
    <div className="text-center bg-transparent  p-1">
      <div className="d-flex flex-row align-items-start bg-transparent rounded p-3 mt-0">
        <Input
          id="postCommentButton"
          className="input-post-top"
          placeholder="What's on your mind?"
          onChange={(e) => setPostInput(e.target.value)}
        />
        <button
          type="button"
          onClick={() => submitPost()}
          className="btn-custom-post border-0 rounded"
          disabled={disableButton}
        >
          Post
        </button>
      </div>

      <div className="d-flex flex-column align-items-start rounded p-3 mt-0">
        {classInfo.posts.items.map((post, key) => {
          return (
            <div
              className=" d-flex posting-area flex-column bg-white w-100 rounded px-2 py-2 mb-3"
              key={key}
            >
              <div className="d-flex flex-column justify-content-between mx-4 mt-1">
                <div className="d-flex justify-content-between mb-3">
                  <div className="font-custom-username">
                    <img
                      className="icon-userpost"
                      src={myUser}
                      alt={myUser}
                    ></img>
                    {post.username}
                  </div>

                  <button
                    type="button"
                    className="border-0 bg-transparent btn-custom-postClose"
                    size="sm"
                    onClick={() => deletePost(post)}
                  >
                    <img
                      className="icon-postClose"
                      src={postClose}
                      alt={postClose}
                    ></img>
                  </button>
                </div>
                <div className="font-custom-post">{post.title}</div>
              </div>

              <PostComments postID={post.id} key={key} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
