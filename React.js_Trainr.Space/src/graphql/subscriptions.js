/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateClass = /* GraphQL */ `
  subscription OnCreateClass {
    onCreateClass {
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
export const onUpdateClass = /* GraphQL */ `
  subscription OnUpdateClass {
    onUpdateClass {
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
export const onDeleteClass = /* GraphQL */ `
  subscription OnDeleteClass {
    onDeleteClass {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateFile = /* GraphQL */ `
  subscription OnCreateFile {
    onCreateFile {
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
export const onUpdateFile = /* GraphQL */ `
  subscription OnUpdateFile {
    onUpdateFile {
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
export const onDeleteFile = /* GraphQL */ `
  subscription OnDeleteFile {
    onDeleteFile {
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
export const onCreateClassUser = /* GraphQL */ `
  subscription OnCreateClassUser {
    onCreateClassUser {
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
export const onUpdateClassUser = /* GraphQL */ `
  subscription OnUpdateClassUser {
    onUpdateClassUser {
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
export const onDeleteClassUser = /* GraphQL */ `
  subscription OnDeleteClassUser {
    onDeleteClassUser {
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
