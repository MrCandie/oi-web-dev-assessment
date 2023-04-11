import React from "react";
import classes from "./pagination.module.css";

function Pagination(props) {
  const { totalPost, postPerPage, setCurrentPage, currentPage } = props;

  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pages.push(i);
  }

  console.log(pages);

  return (
    <div className={classes.container}>
      {pages.map((page, i) => (
        <button
          onClick={() => {
            setCurrentPage(page);
          }}
          key={i}
          className={
            page === currentPage ? `${classes.active}` : `${classes.btn}`
          }
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
