## MusicHub Spotify API Search App | Martin Foakes

A web application used to query track data from the Spotify API, built with React, Redux, Typescript, and CSS.

## Installation and Setup Instructions

Clone this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Run TSLint:

`npm lint:ts`

To Run Test Suite:

`npm test`

To Start the development server:

`npm start`

To Start a remote development server for mobile debugging:

`npm start:remote`

To Visit App:

`localhost:3000/`

To build to Production:

`npm build`

Builds the app for production to the `build/` folder.

<br />

## Spotify API Authentication Process:

- In order to use this search-app, there is a redirect at the start of the service to take the user through the Spotify Login / Authentication process
- The Redirect URL contains a `redirect_uri` parameter that is used to redirect back to this App once Spotify has been authenticated
- It is important to note, that the value of this `redirect_uri` parameter is automatically encode based on the current `window.location.origin`
- Within the _Spotify Developer Dashboard_ for this App, **_there are only a handful of Redirect URIs white-listed for redirect after authorization_**
- They are:

  - http://localhost:3000 (default address for the `npm start` command)
  - http://localhost:3001 (secondary address if first port busy)
  - http://localhost:5000 (for usage of `serve build/` command)

- This basically means that only when using any of these base URIs, the Spotify redirect back to the search-app will be successful
- This does cause a breaking error when using the `npm start:remote` command and trying to authenticate on mobile, as the development URI will be set to the _Network Address_ of your local machine, and the Spotify Development dashboard will not be able to have that whitelisted
- **THE FIX:**: The Spotify auth process can be carried out on `localhost:3000` like normal on your local machine, then once the search-app has redirected back to, seeing the search bar, the address can be changed to your local network version, and then copied along with the `access_token` hash parameters over to a mobile device browser on the same network

<br />

## App Structure:

- The app components are broken down into split `containers`/ presentation `components`
- The `containers` are stateful, and have access to fetched API data, passing data to stateless functional `components` that handle rendering elements to the DOM
- Alongside most `container` and `component` files, there are style specific files:

  - `styles.ts` files: setting up CSS-in-JS styled components, exported into the main `*.tsx` files for use
  - `*.less` files: handle specifically overriding Ant Design default styles and themes

- Using these `*.less` files in this way was a workaround due to time constraints of the project. I felt it would be more beneficial time wise to handle overriding individual elements this way, rather than working through the list of [default less variables](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less) and overriding each one within the `craco.config.js` file
- There is a helper/ directory that contains sets of constants related to functionality / layout / typography / styling etc. that get used throughout the code base. As the size of an App grows a comprehensive set of constant variables can help a lot.

## Reflections on the App:

- One of the challenges I had early on was the handling of the `Spotify Authentication` itself. The actual process of handling authentication for this API was new to me, and I had to spend some time reading through the Spotify docs and experimenting with different setups for URI setups/redirects etc.
- The next set of reading I went through was with the `Ant Design` Documentation. Even though I had not used this specific UI framework before, I have used Material UI a lot in the past, and their usage is not too dissimilar from each other so it was a quick tool to grasp
- A lot of setup time for the project was concerned with the implementation of Redux within the App, normally for most Web Apps Redux would be used fairly comprehensively for handling state / actions.  
  However again thinking of time constraints to the project, I find that the use of Redux (being so functional in nature) with Typescript can sometimes often lead to a lot of conflicts and errors to resolve
- To this end, I implemented it to handling the main querying of data, and not 100% use across the App

The technologies implemented in this project are React, Redux, React-Router 4.0, Typescript, TSX, and CSS-in-JS (styled-components).

I used the `create-react-app` boilerplate to minimize initial setup.
