import React from "react";
import { connect } from "react-redux";
import * as userActions from "./users.actions";
import User from "./User";
import Pagination from "./Pagination";

class UsersList extends React.Component {
  render() {
    const { users, currentPage, goNext, goPrev } = this.props;
    const currentUsersList = users.slice(currentPage * 3, 3 + currentPage * 3);

    return (
      <div>
        <Pagination
          goNext={goNext}
          goPrev={goPrev}
          currentPage={currentPage}
          totalItems={users.length}
          itemsPerPage={3}
        />
        <ul className="users">
          {currentUsersList.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = (state) => {
  return { users: state.users.usersList, currentPage: state.users.currentPage };
};

const mapDispatch = {
  goNext: userActions.goNext,
  goPrev: userActions.goPrev,
};

const connector = connect(mapState, mapDispatch);

const Users = connector(UsersList);

export default Users;
