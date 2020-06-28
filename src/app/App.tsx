// tslint:disable: jsx-no-lambda
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { SearchBar, TrackDetails } from '../containers/';
import { Footer, LoginPrompt } from '../components/';
import GitLogo from '../images/github-logo.png';
import { AppHeader, AppBody } from './styles';
import './App.less';

interface AppState {
  apiToken: string;
  authUrl: string;
  loginRedirect: boolean;
}

class App extends React.Component<{}, AppState> {
  state = {
    apiToken: '',
    authUrl: '',
    loginRedirect: false,
  };

  /**
   * Parse Access Token from URL Hash if present
   */
  componentDidMount() {
    const urlToken = window.location.hash
      .substring(1)
      .split('&')[0]
      .split('=')[1];

    if (urlToken === undefined && !localStorage.getItem('apiToken')) {
      this.handleLogin();
    } else {
      this.loginSuccess(urlToken);
    }
  }

  /**
   * Build Spotify authentication URL and redirect user to it
   */
  handleLogin = (): void => {
    const authSpotifyBase = 'https://accounts.spotify.com/authorize';
    const clientId = '4b001924ecca49f9be8aa35c979548b2';
    const redirectURI = encodeURIComponent(window.location.origin);

    const authUrl = `${authSpotifyBase}?client_id=${clientId}&response_type=token&redirect_uri=${redirectURI}/`;
    this.setState({
      authUrl,
      loginRedirect: true,
    });
  };

  /**
   * Set state for Access Token from Url after login
   */
  loginSuccess = (urlToken: string): void => {
    localStorage.setItem('apiToken', urlToken);
    this.setState({
      apiToken: urlToken,
    });
  };

  render() {
    const { authUrl, apiToken, loginRedirect } = this.state;

    return (
      <>
        <AppHeader>
          {'Frontend Challenge: Spotify Search'}
          <a href={'https://github.com/martinfoakes/spotify-app-foakes'}>
            <img src={GitLogo} alt="github logo" />
          </a>
        </AppHeader>
        <AppBody>
          <BrowserRouter>
            <Switch>
              <Route exact={true} path="/">
                {loginRedirect ? (
                  <Redirect to="/login" />
                ) : (
                  <SearchBar apiToken={apiToken} />
                )}
              </Route>
              <Route
                exact={true}
                path="/login"
                render={(props) => <LoginPrompt {...props} link={authUrl} />}
              />
              <Route
                path="/track/:id"
                render={(props) => (
                  <TrackDetails {...props} apiToken={apiToken} />
                )}
              />
            </Switch>
          </BrowserRouter>
        </AppBody>
        <Footer author="Martin Foakes" />
      </>
    );
  }
}

export default App;
