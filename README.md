# 2doBackend

## INFO

This is a backend for a todo list which saves data in a mongoDb. Basic crud operations are present in this backend

## Setup

1. Clone the repositary
2. Install all the dependencies by using command
   - npm install
     (this will install all the dependencies)
3. There is an 'config.env' file which has the data base url
4. If you want to change the url just go in config.env and enter the desired database name
   - mongodb://127.0.0.1:27017/"database Name"
   - Now the default database is todoList
5. The default port no. is 4000
6. Now the diffrent crud operations are given below

   - http://localhost:4000/users //gets all users
   - http://localhost:4000/delete //deletes a user

   - http://localhost:4000/gettask //gets all the tasks
   - http://localhost:4000/updatetask //updates the specified task
   - http://localhost:4000/deletetasks //deletes the specified task
   - http://localhost:4000/addtask //adds the specific task

7. If u want to change the input data go into the particular controller function in controllers folder
   - taskController.js is for tasks
     - There are 3 functions
       1. addTask
       2. deleteTask
       3. updateTask
     - For user defined data just change taskName as you want in the database operations.
       - ({taskName: "Whatever u Want"})
   - userController.js is For users
     - There are 2 functions
       1. getAllUsers
       2. deleteUser
     - users have an email so email can be used as query to select a particular user or to delete user
8. A default user is added at the start as user@gmail.com & password = "1234"
   - to change or add another user go to line 32 in app.js
     - let newUser = new User({ email: "user@gmail.com", password: " 1234" });
   - You can change the email and password as required.
9. When you run the server again the adding a user is run again and again but not to worry as the program checks for same user and if same user is present it will give u a validation error
