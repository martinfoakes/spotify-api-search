import styled from 'styled-components';
import { SPOTIFY_GREEN, SUBTITLE_GREY } from '../../helper/constants/styles';

export const SongTitle = styled.h3`
  transition: all 0.2s;
  font-size: 18px;
  margin-bottom: 0;

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
