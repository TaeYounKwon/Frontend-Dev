/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      firstName
      lastName
      isTrainer
      classes {
        items {
          id
          userID
          classID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      email
      firstName
      lastName
      isTrainer
      classes {
        items {
          id
          userID
          classID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      email
      firstName
      lastName
      isTrainer
      classes {
        items {
          id
          userID
          classID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createClass = /* GraphQL */ `
  mutation CreateClass(
    $input: CreateClassInput!
    $condition: ModelClassConditionInput
  ) {
    createClass(input: $input, condition: $condition) {
      id
      name
      instructor
      description
      posts {
        items {
          id
          title
          username
          createdAt
          updatedAt
          classPostsId
        }
        nextToken
      }
      files {
        items {
          id
          name
          link
          createdAt
          updatedAt
          classFilesId
        }
        nextToken
      }
      students {
        items {
          id
          userID
          classID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateClass = /* GraphQL */ `
  mutation UpdateClass(
    $input: UpdateClassInput!
    $condition: ModelClassConditionInput
  ) {
    updateClass(input: $input, condition: $condition) {
      id
      name
      instructor
      description
      posts {
        items {
          id
          title
          username
          createdAt
          updatedAt
          classPostsId
        }
        nextToken
      }
      files {
        items {
          id
          name
          link
          createdAt
          updatedAt
          classFilesId
        }
        nextToken
      }
      students {
        items {
          id
          userID
          classID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteClass = /* GraphQL */ `
  mutation DeleteClass(
    $input: DeleteClassInput!
    $condition: ModelClassConditionInput
  ) {
    deleteClass(input: $input, condition: $condition) {
      id
      name
      instructor
      description
      posts {
        items {
          id
          title
          username
          createdAt
          updatedAt
          classPostsId
        }
        nextToken
      }
      files {
        items {
          id
          name
          link
          createdAt
          updatedAt
          classFilesId
        }
        nextToken
      }
      students {
        items {
          id
          userID
          classID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      title
      username
      class {
        id
        name
        instructor
        description
        posts {
          nextToken
        }
        files {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          content
          username
          createdAt
          updatedAt
          postCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
      classPostsId
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      title
      username
      class {
        id
        name
        instructor
        description
        posts {
          nextToken
        }
        files {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          content
          username
          createdAt
          updatedAt
          postCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
      classPostsId
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      title
      username
      class {
        id
        name
        instructor
        description
        posts {
          nextToken
        }
        files {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          content
          username
          createdAt
          updatedAt
          postCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
      classPostsId
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      content
      post {
        id
        title
        username
        class {
          id
          name
          instructor
          description
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        classPostsId
      }
      username
      createdAt
      updatedAt
      postCommentsId
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      content
      post {
        id
        title
        username
        class {
          id
          name
          instructor
          description
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        classPostsId
      }
      username
      createdAt
      updatedAt
      postCommentsId
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      content
      post {
        id
        title
        username
        class {
          id
          name
          instructor
          description
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        classPostsId
      }
      username
      createdAt
      updatedAt
      postCommentsId
    }
  }
`;
export const createFile = /* GraphQL */ `
  mutation CreateFile(
    $input: CreateFileInput!
    $condition: ModelFileConditionInput
  ) {
    createFile(input: $input, condition: $condition) {
      id
      name
      link
      class {
        id
        name
        instructor
        description
        posts {
          nextToken
        }
        files {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      classFilesId
    }
  }
`;
export const updateFile = /* GraphQL */ `
  mutation UpdateFile(
    $input: UpdateFileInput!
    $condition: ModelFileConditionInput
  ) {
    updateFile(input: $input, condition: $condition) {
      id
      name
      link
      class {
        id
        name
        instructor
        description
        posts {
          nextToken
        }
        files {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      classFilesId
    }
  }
`;
export const deleteFile = /* GraphQL */ `
  mutation DeleteFile(
    $input: DeleteFileInput!
    $condition: ModelFileConditionInput
  ) {
    deleteFile(input: $input, condition: $condition) {
      id
      name
      link
      class {
        id
        name
        instructor
        description
        posts {
          nextToken
        }
        files {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      classFilesId
    }
  }
`;
export const createClassUser = /* GraphQL */ `
  mutation CreateClassUser(
    $input: CreateClassUserInput!
    $condition: ModelClassUserConditionInput
  ) {
    createClassUser(input: $input, condition: $condition) {
      id
      userID
      classID
      user {
        id
        email
        firstName
        lastName
        isTrainer
        classes {
          nextToken
        }
        createdAt
        updatedAt
      }
      class {
        id
        name
        instructor
        description
        posts {
          nextToken
        }
        files {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateClassUser = /* GraphQL */ `
  mutation UpdateClassUser(
    $input: UpdateClassUserInput!
    $condition: ModelClassUserConditionInput
  ) {
    updateClassUser(input: $input, condition: $condition) {
      id
      userID
      classID
      user {
        id
        email
        firstName
        lastName
        isTrainer
        classes {
          nextToken
        }
        createdAt
        updatedAt
      }
      class {
        id
        name
        instructor
        description
        posts {
          nextToken
        }
        files {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteClassUser = /* GraphQL */ `
  mutation DeleteClassUser(
    $input: DeleteClassUserInput!
    $condition: ModelClassUserConditionInput
  ) {
    deleteClassUser(input: $input, condition: $condition) {
      id
      userID
      classID
      user {
        id
        email
        firstName
        lastName
        isTrainer
        classes {
          nextToken
        }
        createdAt
        updatedAt
      }
      class {
        id
        name
        instructor
        description
        posts {
          nextToken
        }
        files {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
