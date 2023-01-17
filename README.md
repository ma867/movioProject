# Movi0

## ERD Diagram
[Imgur](https://i.imgur.com/gB76T6Y.png)

## Trello Board
[Link](https://trello.com/b/qJGs7XM9/unit-3-project)


# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


# You-Kbox: Your Personal Jukebox

### Live Heroku App
Check out the application [here!](https://you-kbox.herokuapp.com/#)

### Trello 
Check out the trello board [here](https://trello.com/invite/b/G95vafPm/ATTIf1912e14f601ca200a55643a381218ad3F5BE4E8/playlist-application)

### Project Description
This application is my personal reiteration of streaming platforms like SoundCloud and the now defunct, 8track.



### Technologies\Resources Used:
* JavaScript
* HTML
* CSS
* Bootstrap 4/5
* MongoDB
* NodeJS & Express
* Heroku
* Spotify Web API
* Postman

### Design Approach
* **Ideation/Brainstorm:** The first step after deciding on my theme. Given my love for music, I figure I would create my own version, that would mimick the same user-flow: users can add songs, create playlists, and search music.
* **Defining the Models:** With a clear flow, I defined 3 models: user, song, and playlist. For each model, I defined the keys used and the data type (see ERD diagram below).

    ![ERD](https://i.imgur.com/6aKRytK.png)
 
* **Low-Fidelity Prototype:** With the barebones all set, I proceeded to create a wireframe of the UI for the JSX views. For the sake of consistency, The same UI was used for both the /songs and /playlists routes. Belows are the images:
![wireframes](https://i.imgur.com/NegCpjG.png)
![wireframes](https://i.imgur.com/3ndvt0a.png)
![wireframes](https://i.imgur.com/FZuxZOB.png)

* **Development:** For the coding process, I divided my work into small technical tasks as you would in an agile system. First, dependencies and boiler plate code was written to ensure that express and any of the modules installed ran properly. Then, I focused on creating all the INDUCES routes and their respective JSX views for the songs route. Using that same format, applied the same changes to the playlists route. Lastly, I began implementing the  code for manipulating the DOM as well as adding CSS styling to make it more user friendly. This was an iterative step.






### INDUCES Tables
|Action| URL| HTTP Verb | JSX View Filename | mongoose method |
| ----------- | -------------| --------------| -------------| --------------|
| Index| /songs, /playlists | GET | Index.jsx | Song.find({}), Playlist.find({}) |
| Show| /songs/:id, /playlists/:id | GET | Show.jsx | Song.findById(req.params.id), Playlist.findById(req.params.id)|
| New | /songs/new, /playlists/new | GET | New.jsx | none |
| Create | /songs, /playlists | POST | none | Song.create(req.body), Playlist.create(req.body)|
| Edit | /songs/:id/edit, /playlists/:id/edit | GET | Edit.jsx | Song.findById(req.params.id), Playlist.findById(req.params.id) | 
| Update| /songs/:id, /playlists/:id | PUT | none | Song.findByIdAndUpdate(req.params.id), Playlist.findByIdAndUpdate(req.params.id) |
| Destroy| /songs/:id, /playlists/:id  | DELETE | none | Song.findByIdAndDelete(req.params.id), Playlist.findByIdAndDelete(req.params.id) |

## Steps to Launch App

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
