import React from "react";
import { Button } from "react-bulma-components";

const AddButton = ({ text }) => {
  return (
    <div className="is-pulled-right">
      <Button color="info">{text}</Button>
    </div>
  );
};

export default AddButton;
