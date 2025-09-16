import { useState } from "react";
import { Section, Button } from "react-bulma-components";

const ManualFetch = ({ onClickFunc, messageOne, messageTwo }) => {
  const [enabled, setIsEnabled] = useState(true);

  return (
    <Section>
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
    </Section>
  );
};

export default ManualFetch;
