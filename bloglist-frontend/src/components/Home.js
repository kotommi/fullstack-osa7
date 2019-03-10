import React from "react";

import Togglable from "./Togglable";
import BlogList from "./BlogList";
import BlogForm from "./BlogForm";
import { Header } from "semantic-ui-react";

const Home = () => {
  const blogFormRef = React.createRef();
  return (
    <div>
      <Header as="h1">blogs</Header>
      <Togglable buttonLabel={"create new"} ref={blogFormRef}>
        <BlogForm blogFormRef={blogFormRef} />
      </Togglable>
      <BlogList />
    </div>
  );
};

export default Home;
