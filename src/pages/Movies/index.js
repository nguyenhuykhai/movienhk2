import React, { useState, useEffect, useContext } from "react";
import { Route, Switch, useRouteMatch, Link } from "react-router-dom";
import ScrollToTop from '../../components/GlobalFunctions/ScrollToTop'
import FunctionContext from "../../components/GlobalFunctions/FunctionContext";

export default function Movies() {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1);

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

  const handleChangePage = (number) => {
    setPage(number);
    console.log('Page: ', number);
  }

  return (
    <div className="movies" id="movies">
      <ScrollToTop />
      <h2 className="heading">Opening This Week</h2>

      <div className="movies-container">
        {movies.map((item, index) => (
          <div key={item.id} className="box">
            <div className="box-img">
            <Link to={`/movie/${item.id}`}>
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
      <li onClick={() => handleChangePage((page == 1) ? 1 : page - 1)} className="number"><a><b>Prev</b></a></li>
        <li onClick={() => handleChangePage(1)} className="number"><a>1</a></li>
        <li onClick={() => handleChangePage(2)} className="number"><a>2</a></li>
        <li onClick={() => handleChangePage(3)} className="number"><a>3</a></li>
        <li onClick={() => handleChangePage(4)} className="number"><a>4</a></li>
        <li onClick={() => handleChangePage(5)} className="number"><a>5</a></li>
        <li onClick={() => handleChangePage(page + 1)} className="number"><a><b>Next</b></a></li>
      </ul>
    </div>
  );
}
