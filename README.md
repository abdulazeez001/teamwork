# Teamwork 
Teamwork is an internal social network for employees of an organization. The goal of this application is to facilitate more interaction between colleagues and promote team bonding. 
## Architecture
The project uses a Monolith Architecture with 3 Layers: Routes, Services and Data Access. 
The Date Access layer has 3 sub-layers: Repository, Model, Database.
The business logic of takes place in the Service layer which interacts with 
all layers of the architecture. The Utilities component takes care of the 
basic needs of all layers. Third-Party Services component are included in the Service 
layer, they interact with APIs needed by the system. 

## Technologies

- [NodeJS](https://nodejs.org/) - Runtime Environment
- [ExpressJs](https://expressjs.com/) - Web Application Framework
- [Joi]() - Validation library
- [Cloudinary]() - For saving gifs,images and videos
- [Mocha]() - For Testing
- [Chai]() - Assertion Library
- [Supertest]() - For Api Testing
- [jsonwebtoken]() - For Authentication
- [bcryptjs]() - For password hashing
- [PostgreSQL]() - Database

## API Deployment (Non-Persistent)

API is deployed at [Not yet :(]()

## Features

### Admin

- create an employee user account
- view all users
- sign in

### Employee

- sign in
- create and share gifs with other colleagues 
- write and/or share articles with colleagues on topics of interest to
them
-  edit their articles
- delete their articles.
- delete their gifs post.
- comment on other colleagues' article post.
- comment on other colleagues' gif post.
- view all articles, showing the most recently posted articles first
-  view a specific article.


## API Endpoints

###

<table>

<tr><th>HTTP VERB</th><th>ENDPOINT</th><th>FUNCTIONALITY</th></tr>

<th colspan=3>Admin</th>

<tr><td>POST</td> <td>/auth/create-user</td> <td>Create user account</td></tr>

<th colspan=3>Employee</th>

<tr><td>POST</td> <td>/auth/signin</td> <td> Login a user</td></tr>

<tr><td>POST</td> <td>/gifs</td> <td>Create a gif</td></tr>

<tr><td>POST</td> <td>/articles</td> <td>Create an article</td></tr>

<tr><td>PUT</td> <td>/articles/<:articleId></td> <td>Edit an article</td></tr>

<tr><td>DELETE</td> <td>/articles/<:articleId></td> <td>Delete their articles</td></tr>

<tr><td>DELETE</td> <td>/gifs/<:gifId>
</td> <td>Delete their gifs</td></tr>

<tr><td>POST</td> <td>/articles/<:articleId>/comment</td> <td>Comment on other article post</td></tr>

<tr><td>POST</td> <td>/gifs/<:gifId>/comment</td> <td>Comment on other gif post</td></tr>

<tr><td>GET</td> <td> /feed</td> <td>view all articles or gifs</td></tr>

<tr><td>GET</td> <td> /articles/<:articleId></td> <td>view a specific article</td></tr>

<tr><td>GET</td> <td>/gifs/<:gifId></td> <td> view a specific gif post.</td></tr>

 
</table>

## Getting Started
To get a local copy up and running follow these simple example steps.

### Prerequisites
- Node v14.16.1
- npm v7.9.0
- Git Bash

#### Vscode Editor
If you use vscode as your code editor, please install the following extensions
- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)


### Installation
1. Fork the repo and Clone your fork
   ```sh
   git clone https://github.com/abdulazeez001/teamwork.git
   ```

2. Install NPM packages
   ```sh
   npm install
   ```
3. Change the line endings for project files by running the following commands sequentially
   ```sh
   git config --local core.autocrlf input
   ```
   ```sh
   git rm --cached -r . 
   ```
   ```sh
   git reset --hard 
   ```
4. Create an environment variable file with the following command and copy the content of *env.example* file into it.
    ```sh
   touch .env 
   ```
5. Run the project `npm start`


