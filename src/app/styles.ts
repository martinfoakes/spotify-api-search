import styled, { css } from 'styled-components';
import { MOCKUP_GREEN } from '../helper/constants/styles';
import { smallTablet } from '../helper/constants/mediaRules';

export const AppHeader = styled.header`
  height: 4.6rem;
  display: flex;
  align-items: center;
  background-color: ${MOCKUP_GREEN};
  font-size: 1.5em;
  margin: 0 -2rem;
  padding: 0 2rem;
  font-weight: 700;
  justify-content: space-between;

  ${smallTablet(css`
    justify-content: normal;
  `)}

  > a {
    margin-left: 12px;

    > img {
      width: 32px;
    }
  }
`;

export const HeaderText = styled.h3`
  margin: 0;
  font-size: 0.8em;
  padding-right: 50px;

  ${smallTablet(css`
    font-size: inherit;
    padding-right: 0;
  `)}
`;

export const AppBody = styled.section`
  margin-top: 1rem;
  margin-bottom: 8rem;
  margin-left: 0;
  margin-right: 0;
  text-align: center;
  display: flex;
  flex-direction: column;

  ${smallTablet(css`
    margin: 1rem 4rem 8rem;
  `)}
`;
