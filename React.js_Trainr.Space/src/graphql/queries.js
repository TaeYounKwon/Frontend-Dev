/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getClass = /* GraphQL */ `
  query GetClass($id: ID!) {
    getClass(id: $id) {
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
export const listClasses = /* GraphQL */ `
  query ListClasses(
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        post {
          id
          title
          username
          createdAt
          updatedAt
          classPostsId
        }
        username
        createdAt
        updatedAt
        postCommentsId
      }
      nextToken
    }
  }
`;
export const getFile = /* GraphQL */ `
  query GetFile($id: ID!) {
    getFile(id: $id) {
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
export const listFiles = /* GraphQL */ `
  query ListFiles(
    $filter: ModelFileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        link
        class {
          id
          name
          instructor
          description
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        classFilesId
      }
      nextToken
    }
  }
`;
export const getClassUser = /* GraphQL */ `
  query GetClassUser($id: ID!) {
    getClassUser(id: $id) {
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
export const listClassUsers = /* GraphQL */ `
  query ListClassUsers(
    $filter: ModelClassUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClassUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        classID
        user {
          id
          email
          firstName
          lastName
          isTrainer
          createdAt
          updatedAt
        }
        class {
          id
          name
          instructor
          description
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
