import PropTypes from "prop-types";

const GenderFilterInput = ({
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
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Genderless">Genderless</option>
      <option value="unknown">Unknown</option>
    </select>
  );
};

GenderFilterInput.propTypes = {
  // Prop type validation for the column object
  column: PropTypes.object.isRequired,
  // Prop type validation for the filterInputs object
  filterInputs: PropTypes.object.isRequired,
  // Prop type validation for the setFilter function
  setFilter: PropTypes.func.isRequired,
  // Prop type validation for the setFilterInputs function
  setFilterInputs: PropTypes.func.isRequired,
};

export default GenderFilterInput;
