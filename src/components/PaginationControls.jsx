import PropTypes from "prop-types";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";

const PaginationControls = ({
  canPreviousPage,
  canNextPage,
  pageIndex,
  pageCount,
  gotoPage,
  previousPage,
  nextPage,
  pageOptions,
}) => {
  return (
    <div className="flex justify-center gap-16 items-center">
      <div className="flex items-center">
        {/* Button to go to the first page */}
        <button
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
          className="pagination-button"
        >
          <MdOutlineKeyboardDoubleArrowLeft size={20} />
        </button>
        {/* Button to go to the previous page */}
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="pagination-button"
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
        {/* Button to go to the next page */}
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="pagination-button"
        >
          <MdOutlineKeyboardArrowRight />
        </button>
        {/* Button to go to the last page */}
        <button
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
          className="pagination-button"
        >
          <MdOutlineKeyboardDoubleArrowRight size={20} />
        </button>
      </div>
      <div>
        {/* Display current page and total pages */}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        {/* Input to go to a specific page */}
        <span>
          | Go to page:{" "}
          <input
            type="number"
            min={1}
            max={pageOptions.length}
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            className="w-16 p-2 bg-slate-50 border border-gray-300 rounded-xl outline-none"
          />
        </span>
      </div>
    </div>
  );
};

PaginationControls.propTypes = {
  canPreviousPage: PropTypes.bool.isRequired, // Indicates if the previous page button is enabled
  canNextPage: PropTypes.bool.isRequired, // Indicates if the next page button is enabled
  pageIndex: PropTypes.number.isRequired, // The current page index
  pageCount: PropTypes.number.isRequired, // The total number of pages
  gotoPage: PropTypes.func.isRequired, // Function to go to a specific page
  previousPage: PropTypes.func.isRequired, // Function to go to the previous page
  nextPage: PropTypes.func.isRequired, // Function to go to the next page
  pageOptions: PropTypes.array.isRequired, // Array of page options
};

export default PaginationControls;
