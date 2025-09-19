import React from "react";

const Paginator = ({
  disablePrev,
  disableNext,
  nextFunction,
  prevFunction,
  pages,
  goToPageFunction,
}) => {
  const pagesArray = [];
  for (let i = 0; i < pages; i++) {
    pagesArray.push(i + 1);
  }

  const iterate = pagesArray.map((p) => {
    return (
      <li>
        <a id={p} onClick={goToPageFunction} className="pagination-link">
          {p}
        </a>
      </li>
    );
  });

  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      {!disablePrev ? (
        <div className="is-pulled-left">
          <a
            disabled={disablePrev}
            className="pagination-previous"
            onClick={prevFunction}
          >
            Back
          </a>
        </div>
      ) : null}
      {!disableNext ? (
        <a
          disabled={disableNext}
          className="pagination-next"
          onClick={nextFunction}
        >
          Next
        </a>
      ) : null}

      <ul className="pagination-list">{iterate}</ul>
    </nav>
  );
};

export default Paginator;
