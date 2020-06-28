import React from 'react';

import { AppFooter } from './styles';

interface FooterProps {
  author: string;
}

export const Footer: React.SFC<FooterProps> = (props): JSX.Element => (
  <AppFooter>
    <p>{`${props.author} 2020`}</p>
  </AppFooter>
);
