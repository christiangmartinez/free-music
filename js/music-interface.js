var Music = require('./../js/music.js').musicModule;
var apiKey = require('./../.env').apiKey;

var displayAlbums = function(albums) {
  albums.forEach(function(album) {
    $('.showAlbums').append('<div class="form-group">' +
            '<button onclick=programTrack(' + album.album_id + ') class="btn btn-primary">' + album.album_title + '</button>' +
            '</div>');
  });
}

var programTrack = function(albumId) {
  newMusicObject.getTracks(albumId, displayTracks);
}

var displayTracks = function(tracks) {
  tracks.forEach(function(track) {
    $('.showTracks').append("<li>" + track.track_title + "</li>");
  });
}

var newMusicObject = new Music();

$(document).ready(function() {
  $('#genreSearch').click(function() {
    var genre = $('#genreName').val();
    newMusicObject.getAlbums(genre, displayAlbums);
  });
  $('.tracksByAlbum').on("click", function() {
    console.log("Hi, Mom!");
    var albumId = $('.albumId').val();
    var currentMusicObject = new Music();
    currentMusicObject.getTracks(albumId, displayTracks);
  });
});
