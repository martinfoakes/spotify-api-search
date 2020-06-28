// tslint:disable: jsx-no-lambda
import React from 'react';
import axios from 'axios';

import { DetailsCard, DetailsHeader } from '../../components/';

interface TrackDetailsProps {
  apiToken: string;
}

interface TrackDetailsState {
  trackId: string;
  trackData: any;
}

export class TrackDetails extends React.Component<
  TrackDetailsProps,
  TrackDetailsState
> {
  constructor(props: TrackDetailsProps) {
    super(props);

    this.state = {
      trackId: window.location.pathname.split('/')[2],
      trackData: null,
    };
  }

  componentDidMount() {
    if (this.state.trackData === null) {
      this.fetchTrackData();
    }
  }

  /**
   * Get API Data Return for Single Track from ID
   */
  async fetchTrackData() {
    const authToken =
      this.props.apiToken === ''
        ? localStorage.getItem('apiToken')
        : this.props.apiToken;
    const trackGetUrl = `https://api.spotify.com/v1/tracks/${this.state.trackId}`;
    const response = await axios.get(trackGetUrl, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    this.setState({
      trackData: response.data,
    });
  }

  render() {
    return (
      <>
        <DetailsHeader />
        {this.state.trackData && (
          <DetailsCard trackData={this.state.trackData} />
        )}
      </>
    );
  }
}
