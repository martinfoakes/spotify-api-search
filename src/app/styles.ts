import styled from 'styled-components';
import { MOCKUP_GREEN } from '../helper/constants/styles';

export const AppHeader = styled.header`
  height: 4.6rem;
  display: flex;
  align-items: center;
  background-color: ${MOCKUP_GREEN};
  font-size: 1.5em;
  margin: 0 -2rem;
  padding: 0 2rem;
  font-weight: 700;

  > a {
    margin-left: 12px;

    > img {
      width: 32px;
    }
  }
`;

export const AppBody = styled.section`
  margin: 1rem 4rem 8rem;
  text-align: center;
  display: flex;
  flex-direction: column;
`;
