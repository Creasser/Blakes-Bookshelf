# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Digital Bookcase

This web application allows users to keep a digital version of their bookcase. Users are able to add books to the bookcase through a controlled form component. Each book in the collection has its own personal page that displays additional data. When a user adds a book to the collection they must include the title, author, page count, cover image, summary, and a link to purchase the book. This data is sent to the db.json file once it is submitted
<br />

This application uses react.js to create the frontend. useState, useEffect, and react-router-dom were used to assist in the frontend developement of this project. It utilizes react-router-dom to implement client side routing to the applicaition and create a single page application. Using react-router-dom allows for the application to seem like it is multiple pages while only using a single HTML file.
<br />

## How To Run

To use this application, fork and clone this repo into your local machine. Open up the repo with your text editor and run npm install in your terminal. Once the dependencies are installed, you need to make sure that you also have json-server installed on your local machine. Inside the terminal, make sure you are inside the repo, start the json-server by using the command ``` json-server --watch db.json --port 4000 ```. After the json-server is running you can start the application by running npm start in your terminal. Now you can start using the Digital Bookcase!
