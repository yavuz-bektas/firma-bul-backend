# Introduction - Firma Bul

**Author:** Yavuz Bektas

Firma Bul is a modular and lightweight application built with `Vue.js`.

- **license** - MIT

In the documentation you will learn how to install it, how to use the interface and how to link with backend

## `Live - demo`
### http://3.16.214.155/

## Ecosystem and Libraries

| Name      | Description                             |
| --------- | --------------------------------------- |
| `Vue.JS`   | The Progressive JavaScript Framework.          |
| `Express.JS` | Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. |
| `Tailwind` | Tailwind CSS is a design system implementation in pure CSS. |
| `Axios` | Promise based HTTP client for the browser and node.js |
| `JS Cookie` | A simple, lightweight JavaScript API for handling cookies |
| `Vue-Router` | Vue Router is the official router for Vue.js  |
| `Vuex` | Vuex is a state management pattern + library for Vue.js applications |
| `JWT` | JSON Web Token (JWT) is a compact URL-safe means of representing claims to be transferred between two parties. |
| `Lodash` | Lodash · A modern JavaScript utility library delivering modularity, performance & extras. |

## Backend Ecosystem

| Name      | Description                             |
| --------- | --------------------------------------- |
| `MongoDB`   | With a document data model that maps to how developers think and code and a powerful,. |
| `PostgreSQL`   | PostgreSQL is a powerful, open source object-relational database system with over 30 years of active development. |
| `Bcrypt`   | A library to help you hash passwords.. |

## :clipboard: Contribution guide
* `npm install` or `yarn install`
* Please don't use jQuery or jQuery based plugins since there are many pure Vue alternatives

## Screenshots

### Signin
![Dash](/image/signin.png)

### Register 
![Dash](/image/register.png)

### Dashboard 
![Dash](/image/maindashboard.png)

### Factory 
![Dash](/image/factory.png)

### User List 
![Dash](/image/userlist.png)

### Factory Detail 
![Dash](/image/factorydetail.png)

### Factory Detail-2
![Dash](/image/factorydetail2.png)

### User Information
![Dash](/image/userinformation.png)

## API Endpoints in order to check Auth for MongoDB

| Name    | Description                                                                                                                                                                                                                |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/signup` | <br/>**Arguments**<br/><ul><li>**`post: request`** — Auth Router</li></ul>                                                                                                                                         |
| `/me` | <br/>**Arguments**<br/><ul><li>**`get: request`** — Auth Router</li></ul>  
| `/userfind` | <br/>**Arguments**<br/><ul><li>**`get: request`** — Find user with id</li></ul>  
| `/signin` | <br/>**Arguments**<br/><ul><li>**`post: request`** — Login request</li></ul>
| `/getallusers` | <br/>**Arguments**<br/><ul><li>**`post: request`** — In order to find all users</li></ul>
| `/updateuser` | <br/>**Arguments**<br/><ul><li>**`put: request`** — Update user attributes with ID</li></ul>

## API Endpoints in order to check Factories data for PosgtreSQL

| Name    | Description                                                                                                                                                                                                                |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/findfactoriesbyid` | <br/>**Arguments**<br/><ul><li>**`post: request`** — Find factroies by ID</li></ul>                                                                                                                                         |
| `/addfactory` | <br/>**Arguments**<br/><ul><li>**`post: request`** — Add Factory Data</li></ul>  
| `/getallfactory` | <br/>**Arguments**<br/><ul><li>**`get: request`** — Find all factories</li></ul>  
| `/findfactoriesbywithid` | <br/>**Arguments**<br/><ul><li>**`post: request`** — Find facotry with ID </li></ul>
| `/updatefactory` | <br/>**Arguments**<br/><ul><li>**`put: request`** — In order to update factory based ID</li></ul>
| `/deletebyfactoryid` | <br/>**Arguments**<br/><ul><li>**`post: request`** — Delete one factory with ID</li></ul>
| `/addfactoryattr` | <br/>**Arguments**<br/><ul><li>**`post: request`** — Add factory detail</li></ul>
| `/findfactoriesbyname` | <br/>**Arguments**<br/><ul><li>**`post: request`** — Find factories details based name</li></ul>
| `/findfactoriesbyname` | <br/>**Arguments**<br/><ul><li>**`post: request`** — Find factories details based name</li></ul>
| `/updateByName` | <br/>**Arguments**<br/><ul><li>**`put: request`** — Find factory and update</li></ul>

## Environment Variables


For easier scripting, you can specify configuration settings by using environment variables.

**Example**

```js
PORT = 3000;

MONGO_SERVER = mongodb://localhost:27017/admin


// Your MongoDB database credentials should now be stored in a more secure location via the .env file.
```

## :paperclip: Ready For Use Solutions

- [X] Login - Login panel
- [X] Register - Register panel
- [X] Account Settings - Account Settings Panel
- [X] Dashboard - is a powerful knowledge base for your project with user. friendly navigation and search features.
- [X] Error - “404” page template
- [X] User List - Follow with admin Panel and activate user
- [X] Factories - Find all factories and edit or add new one
- [X] Factories Details - Find all factories details and edit or add new one
- [X] Sign out - router guard
- [X] Add Data - follow the wizard

##
Star my GitHub repo ⭐  to continue improving
