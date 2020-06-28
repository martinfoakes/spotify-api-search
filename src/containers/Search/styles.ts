import styled, { css } from 'styled-components';
import { largeTablet } from '../../helper/constants/mediaRules';

interface ContainerProps {
  readonly showTracks: boolean;
}

export const SearchContainer = styled.div<ContainerProps>`
  transition: all 0.3s ease-in;
  margin-top: ${(props) => (props.showTracks ? '2rem' : '10rem')};
  margin-bottom: 6rem;
`;

export const SearchTitle = styled.h2`
  font-weight: 700;
  margin-bottom: 1.8rem;
`;

export const SearchBarContainer = styled.div`
  width: 100%;
  max-width: 40rem;
  margin: 0 auto 4rem;
`;

export const TrackList = styled.ul`
  list-style: none;
  padding-inline-start: 0px;
  width: 100%;
  max-width: 42rem;
  margin: 3rem 0;

  ${largeTablet(css`
    width: 80%;
    margin: 3rem auto 0;
  `)}
`;

export const TrackElement = styled.li`
  margin: 1.4rem auto;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;
