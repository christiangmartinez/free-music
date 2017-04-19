var apiKey = require('./../.env').apiKey;

Music = function(){

}

Music.prototype.getAlbums = function (genre, displayAlbums) {
  $.get('https://freemusicarchive.org/api/get/albums.json?api_key='+ apiKey + '&genre_handle=' + genre)
  .then(function(response) {
    var obj = JSON.parse(response);
    var albums = (obj.dataset);
    displayAlbums(albums);
  })
  .fail(function(error) {
    console.log("didn't work");
  });
}

Music.prototype.getTracks = function (albumId, displayTracks) {
  $.get('https://freemusicarchive.org/api/get/tracks.json?api_key=' + apiKey + '&album_id=' + albumId)
  .then(function(response) {
    var obj = JSON.parse(response);
    var tracks = (obj.dataset);
    displayTracks(tracks);
    console.log(tracks);
  })
  .fail(function(error) {
    console.log("didn't work");
  });
}

exports.musicModule = Music;
