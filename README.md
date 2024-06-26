# Description:
A command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and PostgreSQL.

# Table of Content
* Challenge Elements
* installation
* usage
* link
* licence
* contribution

# Challenge Elements:
User Story
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database

# Installation

* Enter git clone https://github.com/saba0705/SQL-Employee-Tracker to clone the repository.
* Install the dependencies using npm install.

# Usage

* Use psql -U postgres
* Enter \i db/schema.sql to create the data
* Enter \i db/seeds.sql to seed the data
* Enter \q
* Then run the command node index.js to run the app.
* The command prompt will begin on your terminal.

# link to walkthrough video 
https://app.screencastify.com/v3/watch/iYglROkkHDfNTJQk153W 


# Licence

Copyright (c) Saba Pervez. All rights reserved.

Licensed under the MIT license.

# Contributions
We'd love for you to contribute! In order to do so, fork this repository. Your pull request will need approval in order to merge to main.

