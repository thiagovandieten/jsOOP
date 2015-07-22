var playlist = new Playlist();

var touchFluffyTail = new Song("Touch Fluffy Tail", "Ken Ashcorp", "4:19");
var inspectorNorse = new Song("Inspector Norse", "Todd Terje", "6:59");

var manOfSteel = new Movie("Man of Steel", "2:23:00", "2013");
playlist.add(touchFluffyTail);
playlist.add(inspectorNorse);
playlist.add(manOfSteel);

var playlistElement = document.getElementById('playlist');

playlist.renderInElement(playlistElement);

var playButton = document.getElementById('play');
playButton.onclick = function () {
  playlist.play();
  playlist.renderInElement(playlistElement);

};

var nextButton = document.getElementById('next');
nextButton.onclick = function () {
  playlist.next();
  playlist.renderInElement(playlistElement);

};

var stopButton = document.getElementById('stop');
stopButton.onclick = function () {
  playlist.stop();
  playlist.renderInElement(playlistElement);

};