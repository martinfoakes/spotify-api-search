import styled from 'styled-components';

export const LoginContainer = styled.div`
  margin-top: 10rem;
  margin-bottom: 6rem;

  > h1 {
    font-size: 32px;
    line-height: 20px;
    margin-bottom: 2rem;
  }

  > h2 {
    font-size: 24px;
    font-weight: 400;
    line-height: 20px;
  }
`;

export const LoginLink = styled.a`
  > button {
    margin-top: 2rem;
    width: auto;
    height: 50px !important;
    font-size: 18px !important;
    font-weight: 400;
    padding: 0 20px;
    border-radius: 50px;
    text-align: center;
    display: inline-flex;
    align-items: center;
  }
`;

export const ButtonImg = styled.img`
  width: 32px;
  height: 32px;
  margin-left: 10px;
`;
