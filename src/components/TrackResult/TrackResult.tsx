import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import './TrackResult.less';

const { Meta } = Card;

interface ResultProps {
  trackId: string;
  coverSrc: string;
  artistName: string;
  trackName: string;
}

export const TrackResult: React.SFC<ResultProps> = (props): JSX.Element => (
  <Link to={`/track/${props.trackId}`}>
    <Card
      size={'default'}
      hoverable={true}
      cover={
        !!props.coverSrc.length ? (
          <img alt="example" src={props.coverSrc} />
        ) : (
          <Avatar shape="square" icon={<UserOutlined />} />
        )
      }
    >
      <Meta title={props.artistName} description={props.trackName} />
    </Card>
  </Link>
);
