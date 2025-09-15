import { useState, useEffect } from "react";
import { Section, Button } from "react-bulma-components";

const ManualFetch = ({ onClickFunc }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Section>
      <Button
        disabled={!isLoading}
        onClick={() => {
          setIsLoading(false);
          onClickFunc();
        }}
      >
        {isLoading ? "stop_fetch" : "done"}
      </Button>
    </Section>
  );
};

export default ManualFetch;
