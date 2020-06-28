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
  tracks: [];
}

interface SearchState {
  query: string;
  searching: boolean;
}

class SearchBarComp extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);

    this.state = {
      query: '',
      searching: false,
    };
  }

  /**
   * Detect if the input field value changed, set new state
   */
  handleChange = (event: any): void => {
    this.setState({ query: event.target.value });
  };

  /**
   * Query API through Redux Action
   */
  handleSubmitSearch = (value: string): void => {
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
    if (!prevProps.tracks.length && this.props.tracks.length) {
      this.setState({
        searching: false,
      });
    }
  }

  /**
   * Render List of Track Items on Data fetch
   */
  renderList(): JSX.Element[] {
    return this.props.tracks.map((track: any) => (
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
      <SearchContainer showTracks={!!this.props.tracks.length}>
        <SearchTitle>{'Search for a Song'}</SearchTitle>
        <SearchBarContainer>
          <Search
            placeholder="Enter song name"
            onChange={this.handleChange}
            onSearch={() => this.handleSubmitSearch(this.state.query)}
            loading={this.state.searching}
            enterButton={true}
          />
        </SearchBarContainer>
        {this.state.searching && <Spin />}
        {this.props.tracks.length > 0 && (
          <TrackList>{this.renderList()}</TrackList>
        )}
      </SearchContainer>
    );
  }
}

const mapStateToProps = ({ tracks }: ReduxStoreState): { tracks: [] } => {
  return { tracks };
};

export const SearchBar = connect(mapStateToProps, { searchTracks })(
  SearchBarComp,
);
