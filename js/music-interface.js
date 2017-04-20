var Music = require('./../js/music.js').musicModule;

var displayAlbums = function(albums) {
  albums.forEach(function(album) {
    $('.showAlbums').append('<input type="button" id="' + album.album_id + '" class="tracksByAlbum" value="'+ album.album_title +'"/>');
  });
}

var displayTracks = function(tracks) {
  $('.showTracks').text("");
  tracks.forEach(function(track) {
    $('.showTracks').append('<li><input type="button" id="' + track.track_id + '" class="trackDetails" value="'+ track.track_title +'"/></li>');
  });
}

var trackDetails = function(track) {
  // tracks.forEach(function(track) {
  $('#showTrackDetails').append('Track name: ' + track.track_title + '; Album: ' + track.album_title + '; Artist name: ' + track.artist_name);
  // });
}

$(document).ready(function() {
  var newMusicObject = new Music();
  $('#genreSearch').click(function() {
    var genre = $('#genreName').val();
    newMusicObject.getAlbums(genre, displayAlbums);

  });
});


$(document).on("click", ".tracksByAlbum", function() {
  var albumId = $(this).attr('id');
  var currentMusicObject = new Music();
  currentMusicObject.getTracks(albumId, displayTracks);
});

$(document).on("click", ".trackDetails", function() {
  $("#showTrackDetails").remove();
  $(this).after('<span id="showTrackDetails"></span>');
  var trackId = $(this).attr('id');
  var currentMusicObject = new Music();
  currentMusicObject.getTrackDetails(trackId, trackDetails);
});
