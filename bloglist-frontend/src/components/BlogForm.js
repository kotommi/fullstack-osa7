import React, { useState } from "react";
import { changeNotification } from "../reducers/notificationReducer";
import { createBlog } from "../reducers/blogReducer";
import { connect } from "react-redux";
import { Form, Button } from "semantic-ui-react";

const BlogForm = props => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");

  const bottomStyle = {
    marginBottom: "10px"
  };

  const handleAdd = async event => {
    event.preventDefault();
    const newBlog = {
      title: title,
      author: author,
      url: url
    };
    try {
      props.blogFormRef.current.toggleVisibility();
      props.createBlog(newBlog);
      props.changeNotification(
        `a new blog ${newBlog.title} by ${newBlog.author} added`
      );
      setTitle("");
      setAuthor("");
      setUrl("");
    } catch (exception) {
      const message = exception.response.data.error;
      props.changeNotification(message);
    }
  };

  return (
    <Form className="blogform" onSubmit={handleAdd}>
      <Form.Field>
        <h2>Create new</h2>
        Title:
        <input
          id="title"
          type="text"
          value={title}
          name="Title"
          onChange={({ target }) => setTitle(target.value)}
        />
      </Form.Field>
      <Form.Field>
        Author:
        <input
          id="author"
          type="text"
          value={author}
          name="Author"
          onChange={({ target }) => setAuthor(target.value)}
        />
      </Form.Field>
      <Form.Field>
        url:
        <input
          id="url"
          type="text"
          value={url}
          name="Url"
          onChange={({ target }) => setUrl(target.value)}
        />
      </Form.Field>
      <div>
        <Button id="create" style={bottomStyle} type="submit">
          create
        </Button>
      </div>
    </Form>
  );
};

const mapDispatchToProps = {
  changeNotification,
  createBlog
};

export default connect(
  null,
  mapDispatchToProps
)(BlogForm);
