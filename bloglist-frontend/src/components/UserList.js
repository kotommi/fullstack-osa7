import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Table, Header } from "semantic-ui-react";

const UserList = props => {
  const getRows = () => {
    if (!props.users) {
      return <Header as="h1">Users</Header>;
    }
    return props.users.map(user => {
      return (
        <Table.Row key={user.id}>
          <Table.Cell>
            <Link id={`${user.username}Link`} to={`/users/${user.id}`}>
              {user.username}
            </Link>
          </Table.Cell>
          <Table.Cell>{user.blogs ? user.blogs.length : 0}</Table.Cell>
        </Table.Row>
      );
    });
  };

  return (
    <div>
      <Header>Users</Header>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>username</Table.HeaderCell>
            <Table.HeaderCell>blogs created</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{getRows()}</Table.Body>
      </Table>
    </div>
  );
};

const mapStateToProps = state => {
  return { users: state.users };
};

export default connect(mapStateToProps)(UserList);
