Project Name : Form & Table Filter

Tools are : Reactjs, Tailwindcss

About : Based on need, country, city, state, week it give the data 

Purpose: It allows users to filter data based on criteria (e.g., need, country, state, city, and week) and view results with pagination.

Components:

    FormList (displays form)
    AboutForm (input form to add tasks)
    FilterControls (filters from by priority/status)

Need Filters: 

    1. Need: Users specify a particular need category (e.g., "Fashion" ,"Beauty","Electronics"). 
    2. Country, State, City: Geographic filters to refine results by location. 
    3. Week: A week-based filter allowing users to select specific weeks or a range up to a given week.

Search and Filtering:

    4. Search Button: When clicked, it displays filtered results based on selected criteria. 
    5. Default Selection: Initially shows results for "Fashion" as need and "Week 3" by default. 
    6. Filtering: Results update based on each filter; for example, selecting "Week 4" shows data for Weeks 1 through 4.

Pagination: 

    7. Items Per Page: Displays 10 results per page. 
    9. Page Navigation: Users can navigate through pages to view all matching results. 
    10. Page Reset: After clicking search, results start from page 1.
    11. No Results Message: If no data matches the filters, a message prompts users to adjust their options. 

This structure gives a clear view of how filters, pagination, and search functionality are implemented in the project.

