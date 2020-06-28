import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Button } from 'antd';

import SpotLogo from '../../img/spot-logo.png';
import { LoginContainer, LoginLink, ButtonImg } from './styles';

interface LoginProps {
  link: string;
}

export const LoginPrompt: React.SFC<LoginProps> = (props): JSX.Element => (
  <Fade delay={200} triggerOnce={true} duration={1500}>
    <LoginContainer>
      <h1>{'Hello there!'}</h1>
      <h2>{'Please login to your Spotify Account to use this Search App'}</h2>
      <LoginLink href={props.link}>
        <Button type="primary" shape="round" size={'large'}>
          <span>{'LOGIN'}</span>
          <ButtonImg src={SpotLogo} alt="Spotify" />
        </Button>
      </LoginLink>
    </LoginContainer>
  </Fade>
);
