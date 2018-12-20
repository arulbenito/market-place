import React from 'react';
import './Pagination.scss';
import _ from 'lodash';

const Pagination = (props) => {
  const pageCount = Math.ceil(props.itemsCount / props.pageSize);
  const pages = _.range(1, pageCount + 1);

  if (pageCount === 1) {
    return null
  }

  return (
    <div id={props.id} className={props.className}>
      <nav>
        <ul className="pagination">
          {pages.map(page => {
            return (
              <li key={page} className={page === props.currentPage ? 'page-item active' : 'page-item '}>
                <button className="page-link" onClick={() => props.onPageChange(page)}>{page}</button>
              </li>)
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;

