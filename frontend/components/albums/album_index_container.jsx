import { connect } from 'react-redux';
import albumsIndex from './albums_index';

import { fetchAlbum, fetchArtistAlbums, fetchUserAlbums, fetchAlbumsByIds } from '../../actions/albums_actions';
import { togglePlay, toggleRepeat, toggleMute, nextSong, prevSong } from '../../actions/player_actions';
import { fetchArtistSongs, fetchAlbumSongs } from '../../actions/songs_actions';

const mapStateToProps = (state, ownProps) => {
  let img_path;
  if (state.entities.albums[state.playback.albumId]) {
    img_path = state.entities.albums[state.playback.albumId].img_path;
  }

  let albums;
  if (ownProps && ownProps.match.params.artistId) {
    albums = Object.values(state.entities.albums).filter(
      album => album.artist_id === parseInt(ownProps.match.params.artistId)
    );
  } else {
      albums = Object.values(state.entities.albums).filter(
        album => state.session.currentUser.albums_ids.includes(album.id)
      );
      // albums = Object.values(state.entities.albums);
    }

  return {
    albums,
    album: ownProps.album,
    currentUser: state.session.currentUser,

    /*--------------from player container------------*/
    artists: Object.values(state.entities.artists),
    audio: state.playback,
    tracks: state.entities.songs,
    // img_path: ownProps.album.img_path
    /*-----------------------------------------------*/

  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchArtistAlbums: (artistId) => dispatch(fetchArtistAlbums(artistId)),
  fetchUserAlbums: (userId) => dispatch(fetchUserAlbums(userId)),
  fetchAlbumsByIds: (IDsArr) => dispatch(fetchAlbumsByIds(IDsArr)),
  fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId)),

  togglePlay: () => dispatch(togglePlay()),
  fetchAlbumSongs: (albumId) => dispatch(fetchAlbumSongs(albumId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(albumsIndex);
