import styled, { css } from 'styled-components';
import { SPOTIFY_GREEN, SUBTITLE_GREY } from '../../helper/constants/styles';
import { smallTablet } from '../../helper/constants/mediaRules';

export const SongTitle = styled.h3`
  transition: all 0.2s;
  font-size: 18px;
  margin-top: 1.2rem;
  margin-bottom: 0;

  ${smallTablet(css`
    margin-top: 0;
  `)}

  &:hover {
    color: ${SPOTIFY_GREEN};
  }
`;

export const AlbumName = styled.h4`
  transition: all 0.2s;
  font-size: 16px;
  color: ${SUBTITLE_GREY};
  margin-top: 0.2rem;

  &:hover {
    color: ${SPOTIFY_GREEN};
  }
`;

export const ArtistName = styled.h4`
  font-size: 16px;
  margin-top: 1rem;
  color: ${SUBTITLE_GREY};
`;

export const AudioControls = styled.audio`
  transform: translate(-56%, 24%);
  z-index: 2;
  position: fixed;

  ${smallTablet(css`
    position: static;
    transform: translate(0px, 0px);
  `)}
`;
