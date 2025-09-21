import React from "react";
import { Button } from "react-bulma-components";

const AddButton = ({ text, onClickFunc }) => {
  return (
    <div className="is-pulled-right">
      <Button color="info" onClick={onClickFunc}>
        {text}
      </Button>
    </div>
  );
};

export default AddButton;
