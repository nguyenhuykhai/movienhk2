import React, { useState, useEffect, useContext } from "react";
import { Route, Switch, useRouteMatch, Link } from "react-router-dom";
import ScrollToTop from '../../components/GlobalFunctions/ScrollToTop'
import FunctionContext from "../../components/GlobalFunctions/FunctionContext";

export default function Movies() {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1); // Initialize current page state

  // Define the number of movies per page
  const moviesPerPage = 12;

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;

  // Function to handle page change
  const handleChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://649152be2f2c7ee6c2c804cb.mockapi.io/movienhk/v1/movie?status=true"
      );
      const responseJSON = await response.json();

      setMovies(responseJSON);
    };

    fetchData();
  }, []);

  return (
    <div className="movies" id="movies">
      <ScrollToTop />
      <h2 className="heading">Opening This Week</h2>

      <div className="movies-container">
        {movies.slice(startIndex, endIndex).map((item, index) => (
          <div key={item.id} className="box">
            <div className="box-img">
            <Link key={index} to={`/movie/${item.id}`}>
                <img src={item.thumb_url} alt="" />
            </Link>
            </div>
            <h3 className="name">{item.name}</h3>
            <p className="year">Year: {item.year}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <ul className="numberPage">
        <li onClick={() => handleChangePage((currentPage === 1) ? 1 : currentPage - 1)} className="number">
          <a><b>Prev</b></a>
        </li>
        {Array.from({ length: Math.ceil(movies.length / moviesPerPage) }, (_, index) => (
          <li key={index} onClick={() => handleChangePage(index + 1)} className="number">
            <a>{index + 1}</a>
          </li>
        ))}
        <li onClick={() => handleChangePage(currentPage + 1)} className="number">
          <a><b>Next</b></a>
        </li>
      </ul>
    </div>
  );
}
