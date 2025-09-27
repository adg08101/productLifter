import React from "react";
import { Columns } from "react-bulma-components";

const Card = ({ props, size }) => {
  const handleImage = () => {
    return props.image != "undefined"
      ? props.image
      : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAACUCAMAAABCx6fPAAAAHlBMVEX09PTa2tr39/ff39/s7Ozl5eXx8fHi4uLp6enX19fsYf1BAAADCElEQVR4nO2a25KrIBAAkbv//8OHAYxKNMme2qxVY/dLslmtYhoZBsQYAAAAAAAAAAAAAAAAAAAAAAAAAAAAABixhavbcBG2RV/i9zmFeHVzLkK6P4Y0zdM0udtJqM++z85Nswio3EVCG/cx+hxK/AP+4sb9CbaGX0b/c/zyy5yvbuB3kdRXuz9JsEP4KWTvQ/k9XN3Mb1FTf/QhpHTQ/SV6L5mgzA5Fjbu6sV+gRG9b74/hz5NL2cdtIow6p4cog3/sfAk17MOv2Og0Tg/xuPtNLwyHeK0JMj2oKxrT0P0vS+MmIauTkNfcH+v0YF6GKJcnlRIk1X24MPJyuToJQ1T2DTWHrFdd2PDfRCRMPZjwAXL55s9rG/9bSNfOPQ8czJRv0FI4pcekZ28rwYZ5WRPZo6LpFhLapFe/VQmpDvX0NjekkPRIsDUztq+ujoya9d/NEgWvR4LxbivBfVoTW5sVSVjXRF1CLOvpyvJ5RDaqJNTpoS4HFgkyabYtxbnx9ClFpi4JdbdokFAzf5rO0SahBvMkwcl+6rkGZRKsZMYazFZCCVKSX7iJhDUzbiWk/r+7SDC1PDB7CaHvLA2hB6dUgl2mh4Mnwe8cpDZ2VEqQaGRNvEuMvuaE3WoiyZjpFtRJWOrf/exQFlVxvwEZ6xDJiiXE5zph/yLCLe8gg0oJpq8ZBgkDj/ewNYdok9BWj/mNhO3CyqmV8DQcdmxfRcujo09C31d5IWG/oWqjQgk9M55KmNN4i0/aJCzvmkcJ86kDOcahTYKpM6Dd1wmlUkhNw4EDY5RtqqyZcfckSH3YSoKTm7RJCDX3jWWzHF5K89mZDHUS5BRO6flpkeBCXMoCf3ZYTZ2EnhkfEtYTCOenUrRJaJkx2i4hfLTtrlJCWRxMP3jvoFCCTIbB31zCY0P1zhI8EkoRvC6ZP71HnQQTnesbSe7FC8gt7XJVEkzOMZr7HtJ4YO97XGfD/0hQd865rBN+zNVN/n20nM0EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4Mv8AITAWP9SHKB8AAAAASUVORK5CYII=";
  };

  return (
    <Columns.Column size={size}>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={handleImage()} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={handleImage()} alt="Placeholder image" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{props.sku}</p>
              <p className="subtitle is-6">@{props.category}</p>
            </div>
          </div>

          <div className="content">
            {props.description} <a>@bulmaio</a>. <a href="#">#css</a>
            <a href="#">#responsive</a>
            <br />
            <time dateTime="2016-1-1">
              {props.createdAt} - {props.updatedAt}
            </time>
          </div>
        </div>
      </div>
    </Columns.Column>
  );
};

export default Card;
