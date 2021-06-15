"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchMovie = exports.getMovies = void 0;

var _axios = require("axios");

var getMovies = function getMovies() {
  var moviesUrl;
  return regeneratorRuntime.async(function getMovies$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap((0, _axios.get)("".concat(process.env.REACT_APP_API_DOMAIN, "/movie/now_playing?api_key=").concat(process.env.REACT_APP_MOVIE_DB_API_KEY)));

        case 3:
          moviesUrl = _context.sent;
          return _context.abrupt("return", moviesUrl);

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", "Error fetching movies");

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getMovies = getMovies;

var searchMovie = function searchMovie(input) {
  var searchUrl;
  return regeneratorRuntime.async(function searchMovie$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap((0, _axios.get)("".concat(process.env.REACT_APP_API_DOMAIN, "/search/movie?api_key=").concat(process.env.REACT_APP_MOVIE_DB_API_KEY, "&query=").concat(input)));

        case 3:
          searchUrl = _context2.sent;
          return _context2.abrupt("return", searchUrl);

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", "Error searching for this movie \" ".concat(input, " \""));

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.searchMovie = searchMovie;