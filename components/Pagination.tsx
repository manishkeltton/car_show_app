"use client"

import ReactPaginate from 'react-paginate'

const Pagination = ({ pageCount,handlePageClick }: any) => {

  return (
    <div>
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        // subContainerClassName={"pages pagination"}
        activeClassName={"active"} />
    </div>
  )
}

export default Pagination