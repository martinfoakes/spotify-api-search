import styled from 'styled-components';

export const AppFooter = styled.footer`
  height: 6rem;
  display: flex;
  align-items: center;
  position: relative;
  bottom: 0;
  font-size: 1em;
  font-weight: 400;

  > p {
    margin: 0;
    margin-right: 1rem;
    font-weight: 700;
  }

  > a {
    > img {
      width: 32px;
    }
  }
`;
