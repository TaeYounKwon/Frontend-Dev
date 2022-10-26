import { API } from "aws-amplify";
import React, { useState, useEffect } from "react";
import { Button, Collapse, Input, Form } from "reactstrap";
import { store } from "../store";
import uuid from "react-uuid";
import "./styles/PostComments.css";
import myUser from "../media/myUser.png";
import postClose from "../media/close.png";
import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";
import postSend from "../media/send.png";
export default function PostComments({ postID, key }) {
  const [commentInput, setCommentInput] = useState("");
  const [buttonID, setButtonID] = useState("postCommentButton" + key);
  const [user, setUser] = useState(store.getState().user);
  const [commentSub, setCommentSub] = useState(0);
  const [postInfo, setPostInfo] = useState(null);
  const [status, setStatus] = useState("Show");
  const [isOpen, setIsOpen] = useState(false);
  const [disableButtonComment, setDisableButtonComment] = useState(true);

  async function submitComment(postID) {
    document.getElementById(buttonID).value = "";

    const CommentInput = {
      id: uuid(),
      postCommentsId: postID,
      content: commentInput,
      username: user.user.firstName,
    };

    await API.graphql({
      query: mutations.createComment,
      variables: { input: CommentInput },
    });

    setCommentInput("");

    setCommentSub(commentSub + 1);
  }

  async function deleteComment(commentID) {
    const CommentDelete = {
      id: commentID,
    };

    await API.graphql({
      query: mutations.deleteComment,
      variables: { input: CommentDelete },
    });

    setCommentSub(commentSub + 1);
  }

  const toggle = () => {
    setIsOpen(!isOpen);

    switch (status) {
      case "Show":
        setStatus("Hide");
        break;
      case "Hide":
        setStatus("Show");
        break;

      default:
        break;
    }
  };

  async function getPostInfo() {
    const { data } = await API.graphql({
      query: queries.getPost,
      variables: { id: postID },
    });

    return data;
  }

  useEffect(async () => {
    await setUser(store.getState().user);

    commentInput.length >= 1
      ? setDisableButtonComment(false)
      : setDisableButtonComment(true);

    await getPostInfo().then((res) => setPostInfo(res.getPost.comments.items));
  }, [commentSub, commentInput, store.getState().user]);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 p-2 bg-white border-top ">
      <div className="d-flex flex-column justify-content-between w-100">
        <Form className="d-flex m-input-comment justify-content-between w-100 ">
          <Input
            className="input-comments"
            placeholder="Write a comment..."
            onChange={(e) => setCommentInput(e.target.value)}
          />
          <button
            type="button"
            id={buttonID}
            onClick={() => submitComment(postID)}
            className="btn-custom-postSend border-0 bg-transparent"
            disabled={disableButtonComment}
          >
            <img className="icon-postSend" src={postSend} alt={postSend}></img>
          </button>
        </Form>
      </div>

      {postInfo != null && postInfo.length > 0 ? (
        <div className="w-100">
          <div
            type="button"
            onClick={() => toggle()}
            className="d-flex justify-content-center commentStatus align-items-center text-white px-3 mt-2 w-100"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(29, 116, 153, 0.2), rgba(29, 116, 153, 0.5), rgba(29, 116, 153, 0.9), rgba(29, 116, 153, 0.5), rgba(29, 116, 153, 0.2))",
              fontSize: "17px",
              borderRadius: "3em",
            }}
          >
            {status} Comments
          </div>
          <Collapse className="w-100" isOpen={isOpen}>
            <div className="d-flex flex-column justify-content-between w-100">
              {postInfo.map((comment) => {
                return (
                  <div className="post-comments border-bottom d-flex flex-column justify-content-between w-100 ">
                    <div className="d-flex justify-content-between">
                      <div className="font-custom-username1">
                        <img
                          className="icon-userpost1"
                          src={myUser}
                          alt={myUser}
                        ></img>
                        {comment.username}
                      </div>
                      <button
                        type="button"
                        className="border-0 bg-transparent btn-custom-postClose1"
                        size="sm"
                        onClick={() => deleteComment(comment.id)}
                      >
                        <img
                          className="icon-postClose1"
                          src={postClose}
                          alt={postClose}
                        ></img>
                      </button>
                    </div>
                    <div className="font-comments">{comment.content}</div>
                  </div>
                );
              })}
            </div>
          </Collapse>
        </div>
      ) : null}
    </div>
  );
}
