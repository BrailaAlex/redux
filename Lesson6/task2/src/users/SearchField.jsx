import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as usersActions from "./users.actions";
import { getUserData } from "./users.gateway";

class SearchField extends React.Component {
  state = {
    userName: "",
  };

  onChange = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  handleSearchUser = () => this.props.fetchUserdata(this.state.userName);

  render() {
    return (
      <div className="name-form">
        <input
          type="text"
          onChange={this.onChange}
          value={this.state.userName}
          className="name-form__input"
        />
        <button onClick={this.handleSearchUser} className="name-form__btn btn">
          Show
        </button>
      </div>
    );
  }
}

const mapDispatch = {
  fetchUserdata: usersActions.fetchUserdata,
};

SearchField.propTypes = {
  fetchUserdata: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(SearchField);
