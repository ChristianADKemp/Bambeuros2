# Bambooeuros

### Requirements:


- Create an account / log in
- View their current balance and transactions
- Send Bambeuros to other users


##### Time and Date 7:10am, 27/01/2021

My approach here, will be to create a React based app from the CRA template and Bootstrap4 for quick styles.
I will be aiming to build the App without any extra JS frameworks initially, then I will try (time permitting) to integrate Express & MongoDB.

##### Assumptions

- Data needs to be persisted into a database for continual usage
- Users can see all other users
- No restrictions on sending currency, and no way to retract

##### Steps

1. create-react-app
2. installing dependancies using npm install (bootstrap4, react-router-dom)
3. pruning surplus files from create-react-app (e.g. logo.svg) 
4. create 3 components; dashboard, login, register
5. creating route logic within app.js 
6. auth management for users with localStorage
7. state management for the wallet with the ability to send a custom amount of currency, and track history  
8. containerize App
9. create another docker for Express/MongoDB, use docker-compose to manage dockerfiles
10. Move localStorage memory and user registration into MongoDB, using Express/GraphQL to communicate with React app

####How To Run

1. clone/download the repository
2. cd bambeuros
3. npm install
4. npm start
