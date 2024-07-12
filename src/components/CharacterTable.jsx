import { useEffect, useState, useMemo } from "react";
import { useTable, usePagination, useFilters, useSortBy } from "react-table";
import { fetchAllCharacters } from "../api";
import TableHeader from "./TableHeader ";
import PaginationControls from "./PaginationControls";
import { AnimatePresence } from "framer-motion";
import CharacterDetails from "./CharacterDetails";

const CharacterTable = () => {
  const [data, setData] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [filterInputs, setFilterInputs] = useState({
    status: "",
    gender: "",
    searchName: "",
    searchSpecies: "",
    searchOrigin: "",
  });

  const [pageSize, setPageSize] = useState(10);
  const [sortOption, setSortOption] = useState("none");

  // Fetch data from API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchAllCharacters();
      setData(result);
    };
    fetchData();
  }, []);

  // Define table columns and their properties
  const columns = useMemo(
    () => [
      {
        Header: "No",
        accessor: (row, i) => i + 1,
        id: "rowIndex",
        disableFilters: true,
      },
      { Header: "Name", accessor: "name" },
      {
        Header: "Status",
        accessor: "status",
        Filter: "status",
        filter: "exactText",
      },
      {
        Header: "Species",
        accessor: "species",
      },
      {
        Header: "Gender",
        accessor: "gender",
        Filter: "gender",
        filter: "exactText",
      },
      {
        Header: "Origin",
        accessor: "origin.name",
      },
    ],
    []
  );

  // Custom filter type for exact text match
  const filterTypes = useMemo(
    () => ({
      exactText: (rows, id, filterValue) => {
        return rows.filter((row) => row.values[id] === filterValue);
      },
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setFilter,
    setAllFilters,
    setPageSize: setTablePageSize,
    setSortBy,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
      filterTypes,
    },
    useFilters,
    useSortBy,
    usePagination
  );

  // Update table page size when pageSize state changes
  useEffect(() => {
    setTablePageSize(pageSize);
  }, [pageSize, setTablePageSize]);

  // Handle row click to show character details
  const handleRowClick = (row) => {
    setSelectedCharacter(row.original);
  };

  // Handle reset filters button click
  const handleResetFilters = () => {
    setAllFilters([]);
    setFilter("species", undefined); // Reset species filter
    setFilter("origin.name", undefined); // Reset origin filter
    setFilterInputs({
      status: "",
      gender: "",
      searchName: "",
      searchSpecies: "",
      searchOrigin: "",
    });
    setSortBy([]);
    setSortOption("none");
  };

  // Handle sort option change
  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOption(value);
    if (value === "a-z") {
      setSortBy([{ id: "name", desc: false }]);
    } else if (value === "z-a") {
      setSortBy([{ id: "name", desc: true }]);
    } else {
      setSortBy([]);
    }
  };

  return (
    <div className="table-wrapper">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <button onClick={handleResetFilters} className="pagination-button">
            Reset Filters
          </button>
          <div>
            <span className="me-3 ms-2">Rows Per Page:</span>
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              className="filter-select"
            >
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
              <option value={50}>50</option>
              <option value={70}>70</option>
              <option value={100}>100</option>
            </select>
          </div>
        </div>
        <div>
          <strong>Total Rows: {data.length}</strong>
        </div>
      </div>
      <table {...getTableProps()} className="table">
        <TableHeader
          headerGroups={headerGroups}
          filterInputs={filterInputs}
          setFilter={setFilter}
          setFilterInputs={setFilterInputs}
          sortOption={sortOption}
          handleSortChange={handleSortChange}
        />
        <tbody {...getTableBodyProps()}>
          {page.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center text-red-600 p-4"
              >
                No results found
              </td>
            </tr>
          ) : (
            page.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  key={row.id}
                  onClick={() => handleRowClick(row)}
                  className="tr"
                >
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      key={cell.column.id}
                      className="td"
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      <PaginationControls
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        pageIndex={pageIndex}
        pageCount={pageCount}
        gotoPage={gotoPage}
        previousPage={previousPage}
        nextPage={nextPage}
        pageOptions={pageOptions}
      />
      <AnimatePresence>
        {selectedCharacter && (
          <CharacterDetails
            character={selectedCharacter}
            onClose={() => setSelectedCharacter(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default CharacterTable;
