import React from 'react';
import { Card } from 'antd';

import { SongTitle, ArtistName, AlbumName } from './styles';

interface CardProps {
  trackData: {
    album: {
      name: string;
      images: {
        url: string;
      }[];
      external_urls: {
        spotify: string;
      };
    };
    external_urls: {
      spotify: string;
    };
    name: string;
    artists: {
      name: string;
      external_urls: {
        spotify: string;
      };
    }[];
    duration_ms: number;
    preview_url: string;
  };
}

export const DetailsCard: React.SFC<CardProps> = ({
  trackData,
}): JSX.Element => {
  /**
   * Format Milliseconds Duration into MM:SS
   */
  const formatDuration = (ms: number): string => {
    const minutes = Math.floor(ms / 60000);
    const seconds = +((ms % 60000) / 1000).toFixed(0);
    return seconds === 60
      ? minutes + 1 + ':00'
      : (minutes < 10 ? '0' : '') +
          minutes +
          ':' +
          (seconds < 10 ? '0' : '') +
          seconds;
  };

  return (
    <>
      <Card
        cover={
          <img alt={trackData.album.name} src={trackData.album.images[0].url} />
        }
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={trackData.external_urls.spotify}
        >
          <SongTitle>{trackData.name}</SongTitle>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={trackData.album.external_urls.spotify}
        >
          <AlbumName>{trackData.album.name}</AlbumName>
        </a>
        <ArtistName>
          {'by '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={trackData.artists[0].external_urls.spotify}
          >
            {trackData.artists[0].name}
          </a>
        </ArtistName>
        <p>{formatDuration(trackData.duration_ms)}</p>
        <audio className="audio-element" controls={true}>
          <source src={trackData.preview_url} />
        </audio>
      </Card>
    </>
  );
};
