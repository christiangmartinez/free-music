var Music = require('./../js/music.js').musicModule;

var displayAlbums = function(albums) {
  albums.forEach(function(album) {
    $('.showAlbums').append('<input type="button" id="' + album.album_id + '" class="tracksByAlbum" value="'+ album.album_title +'"/>');
  });
};

var displayTracks = function(tracks) {
  $('.showTracks').text("");
  tracks.forEach(function(track) {
    $('.showTracks').append('<li><input type="button" id="' + track.track_id + '" class="trackDetails" value="'+ track.track_title +'"/></li>');
  });
};

var displayArtists = function(artists) {
  clearResults();
  artists.forEach(function(artist) {
    $('.showArtists').append('<input type="button" id="' + artist.artist_id + '" class="albumsByArtist" value="'+ artist.artist_name +'"/>');
  });
};

var trackDetails = function(track) {
  // tracks.forEach(function(track) {
  $('#showTrackDetails').append('Track name: ' + track.track_title + '; Album: ' + track.album_title + '; Artist name: ' + track.artist_name);
  // });
}

$(document).ready(function() {
  var newMusicObject = new Music();
  $('#genreSearch').click(function() {
    clearResults();
    var genre = $('#genreName').val();
    $('#albumQueryMessage').text("Here are " + genre + " albums.");
    newMusicObject.getAlbumsByGenre(genre, displayAlbums);
  });
  $('#artistSearch').click(function() {
    var artist = $('#artistName').val();
    newMusicObject.getArtistsByName(artist, displayArtists);
  });
});

var clearResults = function() {
  $('.showArtists').empty();
  $('.showAlbums').empty();
  $('#albumQueryMessage').empty();
  $('.showTracks').empty();
}

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

$(document).on("click", ".albumsByArtist", function() {
  var artistId = $(this).attr('id');
  var artistName = $(this).attr('value');
  $('#albumQueryMessage').text("Here are " + artistName + "'s albums.");
  var currentMusicObject = new Music();
  currentMusicObject.getAlbumsByArtist(artistId, displayAlbums);
});
