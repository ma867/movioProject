# Movio
This application is my personal reiteration of movie review platform Rotten Tomatoes.

### Trello Board
[Link](https://trello.com/b/qJGs7XM9/unit-3-project)

### Live Link
See the project on [Heroku](https://movio.herokuapp.com/

### Technologies\Resources Used:
* JavaScript
* HTML
* CSS
* Bootstrap 4/5
* MongoDB
* NodeJS & Express
* React
* Heroku
* Metacritic Web API
* IMDB Top 100 API
* OMDB Web API
* Postman

### Design Approach

* **Defining the Models:** With a clear flow, I defined 2 models: user,  and review. For each model, I defined the keys used and the data type (see ERD diagram below).

    ![ERD](https://i.imgur.com/gB76T6Y.png)
 
* **Low-Fidelity Prototype:** With the barebones all set, instead of creating wireframes I wanted to emulate a site I had found while researching UIs. Belows are the images:
![wireframes](https://i.imgur.com/4zDh767.png)

* **Development:** For the coding process, I divided my work into small technical tasks as you would in an agile system. First, dependencies and boiler plate code was written to ensure that express and any of the modules installed ran properly. Then, I focused on creating all the INDUCES routes and their respective files for the reviews route I began implementing the  code for making calls to the API's to get all the movie data necessary. Lastly, I focused on the code to update the database from the movie review page, manipulating the virtual DOM, and adding CSS styling to make it more user friendly. This was an iterative step.


## Steps to Launch App

In the project directory, you can run:

 1.  `npm i`
 2.  `npm run dev`
 3.  `npm run start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

