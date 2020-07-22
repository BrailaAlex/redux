import React from "react";
import { connect } from "react-redux";
import AvailableOptions from "./AvailableOptions";
import SelectedOptions from "./SelectedOptions";

const TransferList = () => {
  return (
    <div className="transfer-list">
      <AvailableOptions title="Available options" />
      <SelectedOptions title="Selected options" />
    </div>
  );
};

export default TransferList;
