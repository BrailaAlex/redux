import { connect } from "react-redux";
import * as userActions from "./users.actions";
import React from "react";
import Pagination from "./Pagination";
import User from "./User";

class Userslist extends React.Component {
  render() {
    const { users, currentPage, goPrev, goNext } = this.props;
    const itemsOnPage = 3;
    const currentUserslist = users.slice(
      currentPage * itemsOnPage,
      (currentPage + 1) * itemsOnPage
    );
    return (
      <div>
        <Pagination
          goPrev={goPrev}
          goNext={goNext}
          currentPage={currentPage}
          totalItems={users.length}
          itemsPerPage={itemsOnPage}
        />
        <ul className="users">
          {currentUserslist.map((user) => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    currentPage: state.currentPage,
    users: state.usersList,
  };
};

const mapDispatch = {
  goPrev: userActions.goPrev,
  goNext: userActions.goNext,
};

const connector = connect(mapState, mapDispatch);
const connectedUsers = connector(Userslist);

export default connectedUsers;
