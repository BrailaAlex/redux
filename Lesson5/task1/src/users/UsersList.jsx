import React from "react";
import { connect } from "react-redux";
import User from "./User.jsx";
import Pagination from "./Pagination.jsx";
import * as userActions from "./users.actions";
import { usersListSelector, currentPageSelector } from "./users.selectors";

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
  return {
    users: usersListSelector(state),
    currentPage: currentPageSelector(state),
  };
};

const mapDispatch = {
  goNext: userActions.goNext,
  goPrev: userActions.goPrev,
};

const connector = connect(mapState, mapDispatch);

const Users = connector(UsersList);

export default Users;
