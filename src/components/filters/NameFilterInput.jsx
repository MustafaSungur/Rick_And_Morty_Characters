import PropTypes from "prop-types";

const NameFilterInput = ({
  column,
  filterInputs,
  setFilter,
  setFilterInputs,
  sortOption,
  handleSortChange,
}) => {
  // Handle the change event when a new value is entered in the input field
  const handleChange = (e) => {
    // Update the filter for the column in the table
    setFilter(column.id, e.target.value || undefined);
    // Update the filterInputs state with the new value
    setFilterInputs((prev) => ({
      ...prev,
      searchName: e.target.value,
    }));
  };

  return (
    <div className="flex gap-2">
      {/* Input field for searching by name */}
      <input
        type="text"
        value={filterInputs.searchName || ""}
        onChange={handleChange}
        placeholder={`Search ${column.id}`}
        className="search-input w-1/2"
      />
      {/* Select dropdown for sorting options */}
      <select
        value={sortOption}
        onChange={handleSortChange}
        className="filter-select w-1/2"
      >
        <option value="none">Sort</option>
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
      </select>
    </div>
  );
};

NameFilterInput.propTypes = {
  // Prop type validation for the column object
  column: PropTypes.object.isRequired,
  // Prop type validation for the filterInputs object
  filterInputs: PropTypes.object.isRequired,
  // Prop type validation for the setFilter function
  setFilter: PropTypes.func.isRequired,
  // Prop type validation for the setFilterInputs function
  setFilterInputs: PropTypes.func.isRequired,
  // Prop type validation for the sortOption string
  sortOption: PropTypes.string.isRequired,
  // Prop type validation for the handleSortChange function
  handleSortChange: PropTypes.func.isRequired,
};

export default NameFilterInput;
