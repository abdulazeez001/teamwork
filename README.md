# Teamwork 
Teamwork is an internal social network for employees of an organization. The goal of this application is to facilitate more interaction between colleagues and promote team bonding. 
## Architecture
The project uses a Service-Oriented Architecture with 3 Layers: Routes, Services and Data Access. 
The Date Access layer has 3 sub-layers: Repository, Model, Database.
The business logic of takes place in the Service layer which interacts with 
all layers of the architecture. The Utilities component takes care of the 
basic needs of all layers. Third-Party Services component are included in the Service 
layer, they interact with APIs needed by the system. 

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


