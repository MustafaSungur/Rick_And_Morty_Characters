import PropTypes from "prop-types";

const StatusFilterInput = ({
  column,
  filterInputs,
  setFilter,
  setFilterInputs,
}) => {
  // Handle the change event when a new value is selected from the dropdown
  const handleChange = (e) => {
    // Update the filter for the column in the table
    setFilter(column.id, e.target.value || undefined);
    // Update the filterInputs state with the new value
    setFilterInputs((prev) => ({
      ...prev,
      [column.id]: e.target.value,
    }));
  };

  return (
    <select
      value={filterInputs[column.id] || ""}
      onChange={handleChange}
      className="filter-select"
    >
      <option value="">All</option>
      <option value="Alive">Alive</option>
      <option value="Dead">Dead</option>
      <option value="unknown">Unknown</option>
    </select>
  );
};

StatusFilterInput.propTypes = {
  column: PropTypes.object.isRequired, // Prop type validation for the column object
  filterInputs: PropTypes.object.isRequired, // Prop type validation for the filterInputs object
  setFilter: PropTypes.func.isRequired, // Prop type validation for the setFilter function
  setFilterInputs: PropTypes.func.isRequired, // Prop type validation for the setFilterInputs function
};

export default StatusFilterInput;
