function Ticket() {
  this.movies = {}
  this.currentId = 0
}
Ticket.assignId() = function () {
  this.currentId = +1
  return currentId
}
Ticket.addMovie() = function (movie) {
  movie.id = assignId()
  this.movies[movie.Id] = movie
}




function Movie(movieName, movieTime, viewerAge) {
  this.movieName = movieName
  this.movieTime = movieTime
  this.viewerAge = viewerAge
}


