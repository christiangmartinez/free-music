var apiKey = require('./../.env').apiKey;

Music = function(){

}

Music.prototype.getAlbums = function (genre, displayAlbums) {
  $.get('https://freemusicarchive.org/api/get/albums.json?api_key='+ apiKey + '&genre_handle=' + genre)
  .then(function(response) {
    var albums = JSON.parse(response).dataset;
    displayAlbums(albums);
  })
  .fail(function(error) {
    console.log("didn't work");
  });
}

Music.prototype.getTracks = function (albumId, displayTracks) {
  $.get('https://freemusicarchive.org/api/get/tracks.json?api_key=' + apiKey + '&album_id=' + albumId)
  .then(function(response) {
    var tracks = JSON.parse(response).dataset;
    displayTracks(tracks);
    console.log(tracks);
  })
  .fail(function(error) {
    console.log("didn't work");
  });
}

Music.prototype.getTrackDetails = function (trackId, trackDetails) {
  $.get('https://freemusicarchive.org/api/get/tracks.json?api_key=' + apiKey + '&track_id=' + trackId)
  .then(function(response) {
    var track = JSON.parse(response).dataset[0];
    trackDetails(track);
  })
  .fail(function(error) {
    console.log("didn't work");
  });
}

exports.musicModule = Music;
