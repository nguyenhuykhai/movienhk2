import { createContext, useState, useEffect } from "react";

import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import { styled } from "@mui/system";

const FunctionContext = createContext();

export const FunctionProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [reRender, setReRender] = useState(false);
  const [alert, setAlert] = useState({});
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => setOpen(false), 2000);
  };

  // UPDATE STATUS MOVIE
  const updateMovieStatus = async (movieId, newStatus) => {
    let type = {};
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
        type = {
          alert: "success",
          message: "Movie status updated successfully!",
        };
        setAlert(type);
        handleOpen();
      } else {
        type = {
          alert: "error",
          message: "Failed to update movie status.",
        };
        setAlert(type);
        handleOpen();
      }
    } catch (error) {
      console.error("An error occurred while updating movie status:", error);
      type = {
        alert: "error",
        message: "Failed to update movie status.",
      };
      setAlert(type);
      handleOpen();
    }
  };

  // CREATE MOVIE
  const createNewMovie = async (
    // name,
    // thumb_url,
    // poster_url,
    // year,
    // status,
    // content,
    // category,
    // country,
    // time,
    // link_embed
    data
  ) => {
    console.log("FUNCTION CREATE: ", data);
    let type = {};
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
            name: data.name,
            thumb_url: data.thumb_url,
            poster_url: data.poster_url,
            year: data.year,
            status: data.status,
            content: data.content,
            category: data.category,
            country: data.country,
            time: data.time,
            link_embed: data.link_embed,
          }),
        }
      ).then((response) => {
        setReRender(!reRender);
        return response;
      });

      if (response.ok) {
        type = {
          alert: "success",
          message: "Create movie successfully!",
        };
        setAlert(type);
        handleOpen();
      } else {
        type = {
          alert: "error",
          message: "Failed to create movie.",
        };
        setAlert(type);
        handleOpen();
      }
    } catch (error) {
      console.error("An error occurred while updating movie:", error);
      type = {
        alert: "error",
        message: "Failed to create movie.",
      };
      setAlert(type);
      handleOpen();
    }
  };

  // UPDATE MOVIE
  const updateMovie = async (data) => {
    let type = {};
    try {
      const response = await fetch(
        `https://649152be2f2c7ee6c2c804cb.mockapi.io/movienhk/v1/movie/${data.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: data.name,
            thumb_url: data.thumb_url,
            poster_url: data.poster_url,
            year: data.year,
            content: data.content,
            category: data.category,
            country: data.country,
          }),
        }
      ).then((response) => {
        setReRender(!reRender);
        return response;
      });

      if (response.ok) {
        type = {
          alert: "success",
          message: "Movie updated successfully!",
        };
        setAlert(type);
        handleOpen();
      } else {
        type = {
          alert: "error",
          message: "Failed to update movie.",
        };
        setAlert(type);
        handleOpen();
      }
    } catch (error) {
      console.error("An error occurred while updating movie:", error);
      type = {
        alert: "error",
        message: "Failed to update movie.",
      };
      setAlert(type);
      handleOpen();
    }
  };

  // DELETE MOVIE
  const deleteMovie = async (id) => {
    let type = {};
    try {
      const response = await fetch(
        `https://649152be2f2c7ee6c2c804cb.mockapi.io/movienhk/v1/movie/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((response) => {
        setReRender(!reRender);
        return response;
      });

      if (response.ok) {
        type = {
          alert: "success",
          message: "Delete Movie successfully!",
        };
        setAlert(type);
        handleOpen();
      } else {
        type = {
          alert: "error",
          message: "Failed to delete movie.",
        };
        setAlert(type);
        handleOpen();
      }
    } catch (error) {
      console.error("An error occurred while delete movie:", error);
      type = {
        alert: "error",
        message: "Failed to delete movie.",
      };
      setAlert(type);
      handleOpen();
    }
  };

  return (
    <FunctionContext.Provider
      value={{
        reRender,
        movies,
        alert,
        updateMovieStatus,
        updateMovie,
        createNewMovie,
        deleteMovie,
      }}
    >
      <MyAlert direction="right" spacing={2} in={open}>
        <Alert severity={alert.alert}>{alert.message}</Alert>
      </MyAlert>
      {children}
    </FunctionContext.Provider>
  );
};

const MyAlert = styled(Slide)({
  width: "50%",
  position: "absolute",
  top: "4.5rem",
  zIndex: "100",
});

export default FunctionContext;
