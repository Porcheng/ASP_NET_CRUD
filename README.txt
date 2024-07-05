# Employee Management System
## Project Description
The Employee Management System is a web application designed to manage employee records, including adding, editing, deleting, and searching for employees. The application is built with ASP.NET for the backend and React for the frontend. It includes an advanced search feature that allows users to search employees by various criteria such as ID, gender, and birth date.

# Features
 - Add new employees
 - Edit employee details
 - Delete employees
 - Search employees by ID, gender, and birth date
   * Export search results to Excel and PDF
** Prerequisites
 - .NET SDK
 - Node.js and npm
 - SQL Server
** Setup Instructions
    1. Clone the repository:
    

    2. Update the database connection string:
     - Open "appsettings.json" and update the ConnectionStrings section with your SQL Server details.
     - Run the SQL script to create the database and tables: Use SQL Server Management Studio or any SQL client to run the provided SQL script (create_table.sql) to set up the database and tables.
 
    3. double-click "run.bat" to start the application
