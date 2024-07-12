## Character Table with Filters and PaginationCharacter Table with Filters and Pagination
This project is a React-based application that displays a list of characters in a table format. The application includes features for filtering, sorting, and paginating the character data. It uses react-table for table functionalities and framer-motion for animations.

### Features
- Dynamic Filtering: Filter characters by status, gender, name, species, and origin.
- Sorting: Sort characters alphabetically by name.
- Pagination: Navigate through multiple pages of character data.
- Responsive Design: User-friendly design for both desktop and mobile views.
- Character Details: Click on a character row to view detailed information.
### Technologies Used
- React: For building the user interface.
- react-table: For table functionalities including filtering, sorting, and pagination.
- framer-motion: For smooth animations.
- PropTypes: For type-checking props.
- react-icons: For pagination control icons.

### Detailed Description
#### CharacterTable Component
- Fetches character data from an API and manages state for data, selected character, filters, pagination, and sorting.
- Utilizes react-table hooks for managing table functionalities.
- Handles user interactions for row clicks, filter resets, and sort changes.
#### TableHeader Component
- Renders table headers and corresponding filter inputs.
- Includes different filter components based on the column id, such as StatusFilterInput, GenderFilterInput, etc.
#### PaginationControls Component
- Provides navigation controls for paginating through the character data.
- Includes buttons for first, previous, next, and last page navigation.
- Displays the current page and total number of pages.
- Allows the user to directly input a page number to navigate to.
#### CharacterDetails Component
- Displays detailed information about a selected character.
- Uses framer-motion for animations when showing or hiding the details.
