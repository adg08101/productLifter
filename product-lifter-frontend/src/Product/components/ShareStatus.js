import React, { useState } from "react";

const ShareStatus = () => {
  function ChildOne(props) {
    return (
      <button onClick={() => props.updateParentState(props.currentValue + 1)}>
        Incrementar en ChildOne
      </button>
    );
  }

  function ChildTwo({ currentValue }) {
    return <p>Valor actual: {currentValue}</p>;
  }

  function Parent() {
    const [value, setValue] = useState(1);

    const handleUpdate = (newValue) => {
      setValue(newValue);
    };

    return (
      <div>
        <ChildOne updateParentState={handleUpdate} currentValue={value} />
        <ChildTwo currentValue={value} />
      </div>
    );
  }
};

export default ShareStatus;
