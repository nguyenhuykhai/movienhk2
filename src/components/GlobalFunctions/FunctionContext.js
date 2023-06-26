import { createContext, useState, useEffect } from "react";

const FunctionContext = createContext();

export const FunctionProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [reRender, setReRender] = useState(false);

  // CREATE MOVIE JSON
  const createMovie = async ({
    id,
    name,
    thumb_url,
    poster_url,
    year,
    status,
    content,
    category,
    country,
    time,
    link_embed,
  }) => {
    const response = await fetch(
      "https://649152be2f2c7ee6c2c804cb.mockapi.io/movienhk/v1/movie/",
      {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          name,
          thumb_url,
          poster_url,
          year,
          status,
          content,
          category,
          country,
          time,
          link_embed,
        }),
      }
    );
  };

  // UPDATE STATUS MOVIE
  const updateMovieStatus = async (movieId, newStatus) => {
    try {
      const response = await fetch(
        `https://649152be2f2c7ee6c2c804cb.mockapi.io/movienhk/v1/movie/${movieId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      if (response.ok) {
        console.log("Movie status updated successfully!");
      } else {
        console.error("Failed to update movie status.");
      }
    } catch (error) {
      console.error("An error occurred while updating movie status:", error);
    }
  };

  // CREATE MOVIE
  const createNewMovie = async (
    name,
    thumb_url,
    poster_url,
    year,
    status,
    content,
    category,
    country,
    time,
    link_embed
  ) => {
    try {
      const response = await fetch(
        "https://649152be2f2c7ee6c2c804cb.mockapi.io/movienhk/v1/movie",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Add any additional headers as needed
          },
          body: JSON.stringify({
            name: name,
            thumb_url: thumb_url,
            poster_url: poster_url,
            year: year,
            status: status,
            content: content,
            category: category,
            country: country,
            time: time,
            link_embed: link_embed,
          }),
        }
      )
        .then((response) => {
          setReRender(!reRender);
          return response
        })

        if (response.ok) {
          console.log("Create Movie successfully!");
        } else {
          console.error("Failed to create movie.");
        }
    } catch (error) {
      console.error("An error occurred while updating movie:", error);
    }
  };

  // UPDATE MOVIE
  const updateMovie = async (
    movieId,
    name,
    thumb_url,
    poster_url,
    year,
    content,
    category,
    country
  ) => {
    try {
      const response = await fetch(
        `https://649152be2f2c7ee6c2c804cb.mockapi.io/movienhk/v1/movie/${movieId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            thumb_url: thumb_url,
            poster_url: poster_url,
            year: year,
            content: content,
            category: category,
            country: country,
          }),
        }
      ).then((response) => {
        setReRender(!reRender);
        return response;
      });

      if (response.ok) {
        console.log("Movie updated successfully!");
      } else {
        console.error("Failed to update movie.");
      }
    } catch (error) {
      console.error("An error occurred while updating movie:", error);
    }
  };

  // DELETE MOVIE
  const deleteMovie = async (id) => {
    try {
      const response = await fetch(
        `https://649152be2f2c7ee6c2c804cb.mockapi.io/movienhk/v1/movie/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          }
        }
      )
        .then((response) => {
          setReRender(!reRender);
          return response
        })

        if (response.ok) {
          console.log("Delete Movie successfully!");
        } else {
          console.error("Failed to delete movie.");
        }
    } catch (error) {
      console.error("An error occurred while delete movie:", error);
    }
  };

  return (
    <FunctionContext.Provider
      value={{
        reRender,
        movies,
        createMovie,
        updateMovieStatus,
        updateMovie,
        createNewMovie,
        deleteMovie
      }}
    >
      {children}
    </FunctionContext.Provider>
  );
};

export default FunctionContext;
