import { css } from 'styled-components';
import { MEDIA_BREAKPOINTS } from './styles';

export const smallTablet = (inner: any) => css`
  @media only screen and (min-width: ${MEDIA_BREAKPOINTS[0]}) {
    ${inner}
  }
`;

export const largeTablet = (inner: any) => css`
  @media only screen and (min-width: ${MEDIA_BREAKPOINTS[1]}) {
    ${inner}
  }
`;
