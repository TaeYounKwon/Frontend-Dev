import React, { useState, useEffect } from "react";
import { Button, Nav, NavItem } from "reactstrap";
import { API } from "aws-amplify";
import uuid from "react-uuid";

import * as queries from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";
import ClassPosts from "../../components/ClassPosts.js";
import ClassFiles from "../../components/ClassFiles.js";

import myUser from "../../media/myUser.png";
import myClass from "../../media/myClass.png";
import myLogo from "../../media/original.png";
import myComment from "../../media/comment.png";
import myFile from "../../media/folder.png";
import "./ClassPage.css";

export default function ClassPage({ user, userClasses }) {
  var classID = "";
  const [isInstructor, setIsInstructor] = useState(false);
  const [classInfo, setClassInfo] = useState(null);
  const [content, setContent] = useState("Home");
  const [postButton, setPostButton] = useState(0);
  const [isStudent, setIsStudent] = useState(false);
  const [postInput, setPostInput] = useState("");
  const [commentInput, setCommentInput] = useState("");
  var classIds = window.location.href.split("/");
  classID = classIds[classIds.length - 1];

  async function getClassInfo() {
    const { data } = await API.graphql({
      query: queries.getClass,
      variables: { id: classID },
    });

    return data;
  }

  async function subscribeToClass() {
    const ClassUserInput = {
      userID: user.id,
      classID: classInfo.id,
    };

    await API.graphql({
      query: mutations.createClassUser,
      variables: { input: ClassUserInput },
    });

    setPostButton(postButton + 1);

    window.location.reload();
  }

  async function unsubscribeToClass() {
    const ClassUserInput = {
      id: user.id,
    };

    await API.graphql({
      query: mutations.deleteClassUser,
      variables: { input: ClassUserInput },
    });

    window.location.reload();
  }

  async function submitPost() {
    const PostInput = {
      id: uuid(),
      classPostsId: classInfo.id,
      title: postInput,
      username: user.firstName,
    };

    await API.graphql({
      query: mutations.createPost,
      variables: { input: PostInput },
    });

    setPostInput("");

    setPostButton(postButton + 1);
  }

  async function deletePost(post) {
    const { data } = await API.graphql({
      query: queries.getPost,
      variables: { id: post.id },
    });

    const { getPost } = data;

    if (getPost.comments.items.length > 0) {
      getPost.comments.items.map((comment) => {
        deleteComment(comment.id);
      });
    }

    await API.graphql({
      query: mutations.deletePost,
      variables: {
        input: {
          id: post.id,
        },
      },
    });

    setPostButton(postButton + 1);
  }

  async function deleteComment(commentID) {
    const CommentDelete = {
      id: commentID,
    };

    await API.graphql({
      query: mutations.deleteComment,
      variables: { input: CommentDelete },
    });

    setPostButton(postButton + 1);
  }

  function pageContent() {
    switch (content) {
      case "Home":
        return (
          <ClassPosts
            classInfo={classInfo}
            postButton={postButton}
            isStudent={isStudent}
            unsubscribeToClass={unsubscribeToClass}
            subscribeToClass={subscribeToClass}
            setPostInput={setPostInput}
            postInput={postInput}
            submitPost={submitPost}
            deletePost={deletePost}
            commentInput={commentInput}
            setCommentInput={setCommentInput}
          />
        );
      case "File":
        return (
          <ClassFiles courseName={classInfo.id} isInstructor={isInstructor} />
        );

      default:
        return (
          <ClassPosts
            classInfo={classInfo}
            postButton={postButton}
            isStudent={isStudent}
            unsubscribeToClass={unsubscribeToClass}
            subscribeToClass={subscribeToClass}
            setPostInput={setPostInput}
            postInput={postInput}
            submitPost={submitPost}
            deletePost={deletePost}
            commentInput={commentInput}
            setCommentInput={setCommentInput}
          />
        );
    }
  }

  useEffect(async () => {
    await getClassInfo().then((res) => setClassInfo(res.getClass));

    if (classInfo.instructor === user.id) {
      await setIsInstructor(true);
    }

    console.log(isInstructor, isStudent);

    if (userClasses[classID]) {
      setIsStudent(true);
    }
  }, [classID, postButton, isInstructor]);

  return (
    <div className="d-flex justify-content-center">
      {classInfo == null ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <div className="container-lg  d-flex flex-column justify-content-between align-items-center mt-3 text-center">
          <div className="card post-side rounded border-0 bg-transparent mt-3">
            <li className="list-className list-group-item bg-transparent border-2 border-top-0 border-start-0 border-end-0 border-custom-1">
              <div className="font-className text-center">
                <img className="icon-user" src={myUser} alt={myUser}></img>
                {classInfo.name}
              </div>
              {isStudent ? (
                <div className="text-center">
                  <button
                    className="btn-custom-subscrib rounded border-0 "
                    onClick={() => unsubscribeToClass()}
                  >
                    Unsubscribe
                  </button>
                </div>
              ) : (
                <div className="text-end">
                  <button
                    className="btn-custom-subscrib rounded"
                    onClick={() => subscribeToClass()}
                  >
                    Subscribe
                  </button>
                </div>
              )}
              <div className="font-description text-start">
                {classInfo.description}
              </div>
            </li>

            <li className="list-comments list-group-item bg-custom-1 d-flex flex-column border-0 rounded align-items-center">
              <div className="margin-before"></div>
              <Nav tabs className="d-flex header-comments border-bottom">
                <NavItem
                  type="button"
                  className="cursor-pointer icon-comments-margin"
                  onClick={() => setContent("Home")}
                >
                  <img
                    className="icon-comments"
                    src={myComment}
                    alt={myComment}
                  ></img>
                  Comment
                </NavItem>
                <NavItem type="button" onClick={() => setContent("File")}>
                  <img
                    className="icon-comments2"
                    src={myFile}
                    alt={myFile}
                  ></img>
                  Files
                </NavItem>
              </Nav>
              {pageContent()}
            </li>
          </div>
        </div>
      )}
    </div>
  );
}
