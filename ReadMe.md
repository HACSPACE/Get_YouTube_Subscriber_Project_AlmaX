# Get YouTube Subscriber Backend Development Project

# API DOCUMENTATION
https://documenter.getpostman.com/view/33528582/2sA2xiWBjL

## Table of Contents

- [Introduction](#introduction)
- [Folder Structure](#Folde_Structure)
- [Features](#features)
- [Technologies Used](#technologies_used)
- [Installation](#getting-started)
- [Usage](#usage)   
- [Contributing](#contributing)

## Introduction

Welcome to the Get YouTube Subscriber backend development project! This project aims to provide a backend solution for managing subscribers of YouTube channels. With this backend application, users can perform various operations such as retrieving subscriber data, fetching subscriber information by ID, and more.

## Folder Structure

# __tests__
* [__tests__](.\__tests__)
    * [test.js](./__tests__/test.js)


# src

* [models](.\src\models)
    * [subscriber.js](.\src\models\subscriber.js)
        
* [public](.\src\public)
    * [images](.\src\public)
        * [YouTubeLogo.png](.\src\public\YouTubeLogo.png)
    * [scripts](.\src\scripts)
        * [script.js](.\src\scripts\script.js)

* [views](.\src\views)
    * [admin.ejs](.\src\views\admin.ejs)
    * [startNow.ejs](.\src\views\startNow.ejs)
      
* [app.js](.\src\app.js)
* [createDatabase.js](.\src\createDatabase.js)
* [data.js](.\src\data.js)
* [index.js](.\src\index.js)

## Features

Our Get YouTube Subscriber backend application offers the following key features:

- **Retrieve Subscriber Data**: Fetch data of all subscribers. The APIs provided by this application 
-> `GET /subscribers`: Returns an array of all subscribers in the database.

- **Retrieve Subscriber names**: Get subscriber name and subscribed channel.The APIs provided by this application 
-> `GET /subscribers/names`: Returns an array of all subscribers with only two fields name and subscribedChannel.

- **Retrieve Subscriber Information**: Get subscriber details by their unique ID.The APIs provided by this application 
-> `GET /subscribers/:id`: Returns the details of a subscriber with the given ID.

- **Technologies Used**
    * Node.js: Backend development platform.
    * Express.js: Web framework for Node.js.
    * MongoDB: NoSQL database for storing subscriber information.
    * Mongoose: MongoDB object modeling for Node.js.

## Installation

1. Clone this repository:

```bash
 git clone "https://github.com/HACSPACE/Get_YouTube_Subscriber_Project_AlmaX.git"
```

2. Install dependencies:

```bash
 npm install
```

3. Create a .env file and add monogodb uri and port.

4. Create a database:

```bash
node ./src/createDatabase.js
```

5. Start the application:

```bash
 node ./src/index.js
```

6. Run tests:

```bash 
npm test
```

## Usage
Make requests to the specified endpoints to retrieve subscriber data.
Customize and extend the backend functionality as per your requirements.
Refer to the API documentation for detailed information on available endpoints and request/response formats.

## Contributing
Contributions are welcome! Feel free to fork the repository and submit pull requests to contribute new features, enhancements, or bug fixes.

- **Rahul Singh ([GitHub Profile](https://github.com/HACSPACE))**


-**Thank you for choosing our Get Youtube Subscriber.**

# Get_YouTube_Subscriber_Project_AlmaX