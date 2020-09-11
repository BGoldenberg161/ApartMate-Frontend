# Welcome to Apartmate!

## Getting Started

To run Apartmate on your local machine, go ahead and fork and clone the backend and frontend repo from github. Then install the dependencies needed for both sides by running ```npm i ``` in your terminal. 
Then create a .env to keep your REACT_APP_SERVER_URL, JWT_SECRET and MONGO_URI.

In order to run the backend repo, you need to input ```nodemon``` in the backend terminal and for the client/frontend repo, you need to run ```npm start```. 

# About Our Project 
## ERD
For our ERD, this was our blueprint layer and as we created our API, a few things had to be changed as we realized we were able to group things differently. However, this helped us get our API started and see what we needed starting out. 

<img src="src/assets/images/erd.png">

## Wireframe

We started out with a basic idea of how we wanted Apartmate to look like and like any ideas, we knew it would change as we went on but wanted to stick to the original wireframe. We wanted to keep our app simplistic as we didn't want any of too much styling to take away from the functionality of our app. We did add in a toggle to switch from light mode to dark mode as well since it is a very popular option offered in cellphones. 

<img src="src/assets/images/wireframe.png">

# Code information and technology uses goes down here ? 

## Technology We Used

- Mongoose
- MongoDB 
- React
- Material UI
- Axios
- Dotenv
- React-copy-to-clipboard
- React-router-dom

# Models

## User Model

| Column Name | Data Type | Purpose |
| ---- | ------ | -------------------------- |
| Name | String | This has to be provided upon signing up & log in |
| Email | String | This must be provided upon signing up & to log in |
| Password | String | Must be provided | 
| Phone | String | Must be provided for us of Venmo |
| Venmo | String | Default |
| Group Id | Auto-generated |  ObjectId |
| Completed Chore | String | ObjectId |
| Date | Date | Auto-generated |

## Group Model

| Column Name | Data Type | Purpose |
| ---- | ------ | -------------------------- |
| Users | String | This has to be provided upon signing up & log in |
| Name | String | Must be provided |
| Pin | Integer | Must be provided | 
| Date | Date | Auto-generated |

## Venmo Model 

| Column Name | Data Type | Purpose |
| ---- | ------ | -------------------------- |
| Primary Venmo | String | Must be provided |
| Item | String | Default |
| Input Price | Float | user will create this later | 
| Users | String | ObjectId |
| Group Id | | Auto-generated |
|Split Price | Float | user will create this later |
|Date | Date |  Auto-generated |

## Chore Model 

| Column Name | Data Type | Purpose |
| ---- | ------ | -------------------------- |
| Task Name | String | Must be provided |
| Task Detail | String | Must be provided |
| User Id | String | Must be provided | 
| Group Id | String | Provided current date it was created |
| Complete Date | Date | Will provide when user completed task when clicked |
| Is Done | Boolean | will be changed later on when clicked done |
| Claim | String | will change later on when user claims a task |
| Claim Name | String | will change when user claims tasks |
| Is Repeating | Boolean | |
| Never Done | Boolean | |
| Date | Date | Auto-generated | 

# Routes

## User 

| Method | Path | Purpose |
| ---- | ------ | -------------------------- |
| POST | /register | user signs up for an account |
| POST | /login | user is able to log in once account is created |
| POST | /addVenmo | user is able to create their Venmo |
| GET | /current | we are able to see who is the current user |

## Group 

| Method | Path | Purpose |
| ---- | ------ | -------------------------- |
| GET | / | route to see all groups for a user  |
| GET | /:groupid | displays all users belonging to the group |
| POST | /create | create a group |
| PUT | /add/:groupid | adds a user to an existing group |

## Chore

| Method | Path | Purpose |
| ---- | ------ | -------------------------- |
| GET | /:groupid | displays all the chores for your group |
| POST | /new | creates a new chore |
| POST | /:id/complete | marks a chore complete and incomplete |
| PUT  | /claim/:id | claims a chore |
| GET | / | gets all chores associated to userid |
| DELETE | /:id/delete | deletes a chore |

## Venmo

| Method | Path | Purpose |
| ---- | ------ | -------------------------- |
| POST | /create | creates a venmo |

# Future implementations for ApartMate 😊




