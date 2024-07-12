# Employee Management API

This project is an Employee Management API built using Node.js, Express.js, and MongoDB. It provides CRUD functionalities for managing employee records, including the ability to upload employee profile images.

## Installation

1. npm install

2. Set up the .env file in the root directory with the following contents:

````PORT=3000
```MONGO_URI=mongodb://127.0.0.1:27017/Interview_Test_Node

3. Run the seeder file to create a login user:

```npm run seeder

4. Start the application:

```npm start

5. Node_Test.postman_collection.json (POSTMAN COLLECTION)


API Endpoints

LOGIN MODULE

1.  Login
    URL: /api/login/login
    Method: POST
    Description: User login.
    Body Parameters:
    f_userName (string, required)
    f_Pwd (string, required)

EMPLOYEE MODULE


1.  Add Employee
    URL: /api/employee/add
    Method: POST
    Description: Add a new employee.
    Body Parameters:
    f_Name (string, required)
    f_Email (string, required)
    f_Mobile (string, optional)
    f_Designation (string, optional)
    f_gender (string, optional)
    f_Course (string, optional)
    imageFile (file, optional)
````

2. Update Employee
   URL: /api/employee/:id
   Method: PUT
   Description: Update an existing employee.
   Body Parameters: (Include only the fields you want to update)
   f_Name (string, optional)
   f_Email (string, optional)
   f_Mobile (string, optional)
   f_Designation (string, optional)
   f_gender (string, optional)
   f_Course (string, optional)
   imageFile (file, optional)

3. Get All Employees
   URL: /api/employee
   Method: GET
   Description: Get a list of all employees with search, paging, active/deactive filter, and sorting.
   Query Parameters:
   page (number, optional, default: 1)
   limit (number, optional, default: 10)
   searchQuery (string, optional)
   isActive (boolean, optional)
   sortField (string, optional, default: 'f_Createdate')
   sortOrder (string, optional, default: 'asc')

4. Get Employee by ID
   URL: /api/employee/:id
   Method: GET
   Description: Get details of a single employee by ID.

5. Delete Employee
   URL: /api/employee/:id
   Method: DELETE
   Description: Delete an employee by ID.
