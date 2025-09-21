import { React, useState } from "react";
import { Button } from "react-bulma-components";

const CustomButton = ({ onClickFunc, messageOne, messageTwo }) => {
  const [enabled, setIsEnabled] = useState(true);

  return (
    <Button
      disabled={!enabled}
      onClick={() => {
        if (messageOne !== messageTwo) {
          setIsEnabled(!enabled);
        }

        onClickFunc();
      }}
    >
      {enabled ? messageOne : messageTwo}
    </Button>
  );
};

export default CustomButton;
