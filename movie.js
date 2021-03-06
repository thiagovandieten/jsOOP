function Movie(title, duration, year) {
  Media.call(this, title, duration);
  this.year = year;
}

Movie.prototype = Object.create(Media.prototype);

Movie.prototype.toHTML = function() {
  var htmlString = '<li';
  this.isPlaying ? htmlString += ' class="current">' : htmlString += '>'
  htmlString += this.title;
  htmlString += ' (';
  htmlString += this.year;
    htmlString += ') ';
  htmlString += '<span class="duration">';
  htmlString += this.duration;
  htmlString += '</span></li>';
  
  return htmlString;
};