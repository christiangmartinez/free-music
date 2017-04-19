var Music = require('./../js/music.js').musicModule;
var apiKey = require('./../.env').apiKey;

var displayAlbums = function(albums) {
  albums.forEach(function(album) {
    $('.showAlbums').append('<div class="form-group">' +
            '<input class="albumId" type="hidden" value="' + album.album_id + '">' +
            '<button class="tracksByAlbum btn btn-primary">' + album.album_title + '</button>' +
            '</div>');
  });
}

var displayTracks = function(tracks) {
  $('.showTracks').text("");
  tracks.forEach(function(track) {
    $('.showTracks').append("<li>" + track.track_title + "</li>");
  });
}

$(document).ready(function() {
  var newMusicObject = new Music();
  $('#genreSearch').click(function() {
    var genre = $('#genreName').val();
    newMusicObject.getAlbums(genre, displayAlbums);

  });
});


$(document).on("click", ".tracksByAlbum", function() {
  console.log("Hi, Mom!");
  // var albumId = $('.albumId').val();
  var albumId = $('this.albumId').val();
  var currentMusicObject = new Music();
  currentMusicObject.getTracks(albumId, displayTracks);
});
