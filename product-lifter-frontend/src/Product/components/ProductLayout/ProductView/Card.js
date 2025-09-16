import React from "react";
import { Columns } from "react-bulma-components";

const Card = ({ props }) => {
  return (
    <Columns.Column>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={props.image} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={props.image} alt="Placeholder image" />
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
