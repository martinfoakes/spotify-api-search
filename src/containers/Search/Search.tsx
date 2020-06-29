// tslint:disable: jsx-no-lambda ban-types
import React from 'react';
import { connect } from 'react-redux';
import { Input, Spin } from 'antd';

import { searchTracks } from '../../redux/actions';
import { ReduxStoreState } from '../../redux/reducers';
import { TrackResult } from '../../components/';
import {
  SearchContainer,
  SearchTitle,
  SearchBarContainer,
  TrackList,
  TrackElement,
} from './styles';
import './Search.less';

const { Search } = Input;

interface SearchProps {
  apiToken: string;
  searchTracks: Function;
  tracks: {
    items: [];
    total: number;
  };
}

interface SearchState {
  newQuery: string;
  oldQuery: string;
  searching: boolean;
  searchError: boolean;
}

class SearchBarComp extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);

    this.state = {
      newQuery: '',
      oldQuery: '',
      searching: false,
      searchError: false,
    };
  }

  /**
   * Detect if the input field value changed, set new state
   */
  handleChange = (event: any): void => {
    this.setState({ newQuery: event.target.value });
  };

  /**
   * Query API through Redux Action
   */
  handleSubmitSearch = (value: string): void => {
    if (value === this.state.oldQuery || value === '') {
      return;
    }

    this.setState({
      searching: true,
    });

    const authToken =
      this.props.apiToken === ''
        ? localStorage.getItem('apiToken')
        : this.props.apiToken;

    const searchQuery = value.replace(' ', '%20');
    this.props.searchTracks(searchQuery, authToken);
  };

  /**
   * Remove Spinner element when request complete
   */
  componentDidUpdate(prevProps: SearchProps) {
    if (!prevProps.tracks.items.length && this.props.tracks.items.length) {
      this.setState({
        searching: false,
      });
    }
  }

  /**
   * Render List of Track Items on Data fetch
   */
  renderList(): JSX.Element[] {
    return this.props.tracks.items.map((track: any) => (
      <TrackElement key={track.id}>
        <TrackResult
          trackId={track.id}
          coverSrc={track.album.images[0].url}
          artistName={track.artists[0].name}
          trackName={track.name}
        />
      </TrackElement>
    ));
  }

  render() {
    return (
      <SearchContainer showTracks={!!this.props.tracks.items.length}>
        <SearchTitle>{'Search for a Song'}</SearchTitle>
        <SearchBarContainer>
          <Search
            placeholder="Enter song name"
            onChange={this.handleChange}
            onSearch={() => this.handleSubmitSearch(this.state.newQuery)}
            loading={this.state.searching}
            enterButton={true}
          />
        </SearchBarContainer>
        {this.state.searching && <Spin />}
        {!!this.props.tracks.items.length && (
          <TrackList>{this.renderList()}</TrackList>
        )}
      </SearchContainer>
    );
  }
}

const mapStateToProps = ({
  tracks,
}: ReduxStoreState): {
  tracks: {
    items: [];
    total: number;
  };
} => {
  return { tracks };
};

export const SearchBar = connect(mapStateToProps, { searchTracks })(
  SearchBarComp,
);
