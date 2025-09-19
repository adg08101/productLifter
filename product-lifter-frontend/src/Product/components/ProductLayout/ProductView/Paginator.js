import React from "react";

const Paginator = ({
  disablePrev,
  disableNext,
  nextFunction,
  prevFunction,
}) => {
  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      {!disablePrev ? (
        <div className="is-pulled-left">
          <a
            disabled={disablePrev}
            href="#"
            className="pagination-previous"
            onClick={prevFunction}
          >
            Previous
          </a>
        </div>
      ) : null}
      {!disableNext ? (
        <a
          disabled={disableNext}
          href="#"
          className="pagination-next"
          onClick={nextFunction}
        >
          Next page
        </a>
      ) : null}
      <ul className="pagination-list">
        <li>
          <a href="#" className="pagination-link" aria-label="Goto page 1">
            1
          </a>
        </li>
        <li>
          <a href="#" className="pagination-link" aria-label="Goto page 45">
            45
          </a>
        </li>
        <li>
          <a
            className="pagination-link is-current"
            aria-label="Page 46"
            aria-current="page"
          >
            46
          </a>
        </li>
        <li>
          <a href="#" className="pagination-link" aria-label="Goto page 47">
            47
          </a>
        </li>
        <li>
          <a href="#" className="pagination-link" aria-label="Goto page 86">
            86
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Paginator;
