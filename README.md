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

<br />

## Reflection on the App

- What was the context for this project? (ie: was this a side project? was this for Turing? was this for an experiment?)
- What did you set out to build?
- Why was this project challenging and therefore a really good learning experience?
- What were some unexpected obstacles?
- What tools did you use to implement this project?
  - This might seem obvious because you are IN this codebase, but to all other humans now is the time to talk about why you chose webpack instead of create react app, or D3, or vanilla JS instead of a framework etc. Brag about your choices and justify them here.

#### Example:

This was a 3 week long project built during my third module at Turing School of Software and Design. Project goals included using technologies learned up until this point and familiarizing myself with documentation for new features.

Originally I wanted to build an application that allowed users to pull data from the Twitter API based on what they were interested in, such as 'most tagged users'. I started this process by using the `create-react-app` boilerplate, then adding `react-router-4.0` and `redux`.

One of the main challenges I ran into was Authentication. This lead me to spend a few days on a research spike into OAuth, Auth0, and two-factor authentication using Firebase or other third parties. Due to project time constraints, I had to table authentication and focus more on data visualization from parts of the API that weren't restricted to authenticated users.

At the end of the day, the technologies implemented in this project are React, React-Router 4.0, Redux, LoDash, D3, and a significant amount of VanillaJS, JSX, and CSS. I chose to use the `create-react-app` boilerplate to minimize initial setup and invest more time in diving into weird technological rabbit holes. In the next iteration I plan on handrolling a `webpack.config.js` file to more fully understand the build process.
