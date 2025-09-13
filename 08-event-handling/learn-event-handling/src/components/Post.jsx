import { Fragment } from "react";

function Post() {
  const posts = [
    {
      id: 1,
      title: "What is React?",
      description: "A Beautiful Library to create...",
    },
    {
      id: 2,
      title: "What is Web Development?",
      description: "A development process through which...",
    },
  ];
  return posts.map((post) => (
    <Fragment key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
    </Fragment>
  ));
}

export default Post;
