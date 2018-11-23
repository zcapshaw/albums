// This component retrieves the list of albums via API
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

export default class AlbumList extends Component {

  //set the initial state to an empty array
  state = { albums: [] };

  //upon API response, set state to response.data
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <Text key={album.title}>{album.title}</Text>
    );
  }

  render() {
    console.log(this.state);

    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}
