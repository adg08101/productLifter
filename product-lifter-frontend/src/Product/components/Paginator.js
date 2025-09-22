import React from "react";

const Paginator = ({
  disablePrev,
  disableNext,
  nextFunction,
  prevFunction,
  pages,
  goToPageFunction,
  currentPage,
}) => {
  const pagesArray = [];
  for (let i = 0; i < pages; i++) {
    pagesArray.push(i + 1);
  }

  const iterate = pagesArray.map((p) => {
    const className =
      p == currentPage ? "pagination-link is-current" : "pagination-link";
    return (
      <li>
        <a key={p} id={p} onClick={goToPageFunction} className={className}>
          {p}
        </a>
      </li>
    );
  });

  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      {!disablePrev ? (
        <div className="is-pulled-left">
          <a key="prev" className="pagination-previous" onClick={prevFunction}>
            Back
          </a>
        </div>
      ) : null}
      {!disableNext ? (
        <a key="next" className="pagination-next" onClick={nextFunction}>
          Next
        </a>
      ) : null}

      <ul className="pagination-list">{iterate}</ul>
    </nav>
  );
};

export default Paginator;
