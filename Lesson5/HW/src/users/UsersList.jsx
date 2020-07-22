import React from "react";
import { connect } from "react-redux";
import Filter from "./Filter";
import User from "./User";
import { getFilterText } from "./users.actions";
import { filteredListSelector, filterTextSelector } from "./users.selectors";

class UsersList extends React.Component {
  onFilterTextInput = (event) => {
    const filterText = event.target.value;
    this.props.getFilterText(filterText);
  };

  render() {
    const { filterText, usersList } = this.props;
    return (
      <div>
        <Filter
          onChange={this.onFilterTextInput}
          count={usersList.length}
          filterText={filterText}
        />
        <ul className="users">
          {usersList.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    usersList: filteredListSelector(state),
    filterText: filterTextSelector(state),
  };
};

const mapDispatch = {
  getFilterText,
};
export default connect(mapState, mapDispatch)(UsersList);
