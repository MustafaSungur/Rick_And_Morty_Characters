import PropTypes from "prop-types";

const SpeciesFilterInput = ({
  column,
  filterInputs,
  setFilter,
  setFilterInputs,
}) => {
  // Handle the change event when a new value is entered in the input field
  const handleChange = (e) => {
    // Update the filter for the column in the table
    setFilter(column.id, e.target.value || undefined);
    // Update the filterInputs state with the new value
    setFilterInputs((prev) => ({
      ...prev,
      searchSpecies: e.target.value,
    }));
  };

  return (
    <input
      type="text"
      value={filterInputs.searchSpecies || ""}
      onChange={handleChange}
      placeholder={`Search ${column.id}`}
      className="search-input"
    />
  );
};

SpeciesFilterInput.propTypes = {
  column: PropTypes.object.isRequired, // Prop type validation for the column object
  filterInputs: PropTypes.object.isRequired, // Prop type validation for the filterInputs object
  setFilter: PropTypes.func.isRequired, // Prop type validation for the setFilter function
  setFilterInputs: PropTypes.func.isRequired, // Prop type validation for the setFilterInputs function
};

export default SpeciesFilterInput;
