import React, { useState, useContext, useLayoutEffect } from "react";
import styles from "./Detail.module.scss";
import clsx from "clsx";
import { Helmet } from "react-helmet";
import ScrollToMiddle from "../../components/GlobalFunctions/ScrollToMiddle";
import FunctionContext from "../../components/GlobalFunctions/FunctionContext";

//Import MUI styles
import PropTypes from "prop-types";
import { Box, styled } from "@mui/system";
import Modal from "@mui/base/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/base/Button";

export default function Detail() {
  const { movies } = useContext( FunctionContext )
  //Get API
  const url = window.location.pathname;
  const pathSegments = url.split("/");
  const desiredSegment = pathSegments.pop();
  
  const [data, setData] = useState(movies);

  //MUI: Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useLayoutEffect(() => {
    const fetchData = async () => {
        const response = await fetch(`https://649152be2f2c7ee6c2c804cb.mockapi.io/movienhk/v1/movie/${desiredSegment}`)
        const responseJSON = await response.json()
        setData(responseJSON)
    }
    fetchData()
},[])

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
        />
      </Helmet>
      <ScrollToMiddle />
      <div className={clsx(styles.wrapper)}>
        <div className={clsx(styles.content)}>
          <div className={clsx(styles.videobox)}>
            <div className={clsx(styles.videoBoxImage)}>
              <img src={data.thumb_url} alt="" />
            </div>

            <div className={clsx(styles.videoBoxContent)}>
              <h2 className={clsx(styles.title)}>{data.name}</h2>
              <p className={clsx(styles.type)}>
                Duration: {data.time} <br></br>Type: {data.category}
                <br></br>Country: {data.country}
              </p>
              <p className={clsx(styles.description)}>
                {data.content}
              </p>
            </div>
          </div>

          <div className={clsx(styles.popup)}>
            <TriggerButton onClick={handleOpen}>WATCH NOW</TriggerButton>
            <div className="popup2"></div>
          </div>

          <StyledModal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: StyledBackdrop }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <iframe
                  src={data.link_embed}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  width="100%"
                  height="100%"
                ></iframe>
              </Box>
            </Fade>
          </StyledModal>
        </div>
      </div>
    </>
  );
}

const Backdrop = React.forwardRef((props, ref) => {
  const { open, ...other } = props;
  return (
    <Fade in={open}>
      <div ref={ref} {...other} />
    </Fade>
  );
});

Backdrop.propTypes = {
  open: PropTypes.bool,
};

const blue = {
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = (theme) => ({
  position: "absolute",
  margin: "1em auto",
  width: "80%",
  height: "calc(.5256 * 80vw)",
  maxWidth: "1280px",
  maxHeight: "720px",
  minWidth: "320",
  minHeight: "180px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "12px",
  padding: "16px 32px 24px 32px",
  backgroundColor: theme.palette.mode === "white" ? "dark" : "#020307",
  boxShadow: `0px 2px 24px ${
    theme.palette.mode === "dark" ? "#000" : "#383838"
  }`,
});

const TriggerButton = styled(Button)(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  border-radius: 12px;
  padding: 6px 12px;
  line-height: 1.5;
  background: transparent;
  border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
  color: white;

  &:hover {
    background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
    color: black;
  }

  &:focus-visible {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[500] : blue[200]};
  }
  `
);
