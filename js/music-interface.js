var Music = require('./../js/music.js').musicModule;

var displayAlbums = function(albums) {
  albums.forEach(function(album) {
    $('.showAlbums').append('<input type="button" id="' + album.album_id + '" class="tracksByAlbum" value="'+ album.album_title +'"/>');
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
  console.log($(this).attr('id'));
  // var albumId = $('.albumId').val();
  var albumId = $(this).attr('id');
  var currentMusicObject = new Music();
  currentMusicObject.getTracks(albumId, displayTracks);
});
