import React from "react";
import { Section, Loader, Container } from "react-bulma-components";

const Loading = ({ visible = true }) => {
  return (
    <div className="is-flex columns is-centered">
      {visible ? (
        <Loader
          style={{
            width: 100,
            height: 100,
          }}
        />
      ) : null}
    </div>
  );
};

export default Loading;
