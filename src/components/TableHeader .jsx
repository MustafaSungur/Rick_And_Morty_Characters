import PropTypes from "prop-types";
import StatusFilterInput from "./filters/StatusFilterInput";
import GenderFilterInput from "./filters/GenderFilterInput";
import NameFilterInput from "./filters/NameFilterInput";
import SpeciesFilterInput from "./filters/SpeciesFilterInput";
import OriginFilterInput from "./filters/OriginFilterInput";

const TableHeader = ({
  headerGroups,
  filterInputs,
  setFilter,
  setFilterInputs,
  sortOption,
  handleSortChange,
}) => {
  return (
    <thead>
      {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
          {headerGroup.headers.map((column) => (
            <th key={column.id} className="th">
              {column.render("Header")}
              <div className="mt-2">
                {/* Render appropriate filter input based on the column id */}
                {column.id === "status" ? (
                  <StatusFilterInput
                    column={column}
                    filterInputs={filterInputs}
                    setFilter={setFilter}
                    setFilterInputs={setFilterInputs}
                  />
                ) : column.id === "gender" ? (
                  <GenderFilterInput
                    column={column}
                    filterInputs={filterInputs}
                    setFilter={setFilter}
                    setFilterInputs={setFilterInputs}
                  />
                ) : column.id === "name" ? (
                  <NameFilterInput
                    column={column}
                    filterInputs={filterInputs}
                    setFilter={setFilter}
                    setFilterInputs={setFilterInputs}
                    sortOption={sortOption}
                    handleSortChange={handleSortChange}
                  />
                ) : column.id === "species" ? (
                  <SpeciesFilterInput
                    column={column}
                    filterInputs={filterInputs}
                    setFilter={setFilter}
                    setFilterInputs={setFilterInputs}
                  />
                ) : column.id === "origin.name" ? (
                  <OriginFilterInput
                    column={column}
                    filterInputs={filterInputs}
                    setFilter={setFilter}
                    setFilterInputs={setFilterInputs}
                  />
                ) : null}
              </div>
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

TableHeader.propTypes = {
  headerGroups: PropTypes.array.isRequired, // Array of header groups for the table
  filterInputs: PropTypes.object.isRequired, // Object containing the current filter inputs
  setFilter: PropTypes.func.isRequired, // Function to set the filter for a column
  setFilterInputs: PropTypes.func.isRequired, // Function to update the filter inputs state
  sortOption: PropTypes.string.isRequired, // Current sort option
  handleSortChange: PropTypes.func.isRequired, // Function to handle sort option change
};

export default TableHeader;
