import * as React from "react";
import { useState, useContext } from "react";
import FunctionContext from "../../components/GlobalFunctions/FunctionContext";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import VideoCallRoundedIcon from "@mui/icons-material/VideoCallRounded";
import { styled } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const MyButton = styled(Button)({
  backgroundColor: "#fa2828",
  "&:hover": {
    backgroundColor: "#ff0000",
  },
});

export default function Create() {
  const { createNewMovie } = useContext(FunctionContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const MyTypography = styled(Typography)({
    color: "black",
  });

  const Item = styled(TextField)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    padding: theme.spacing(1),
    textAlign: "center",
  }));

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const movieName = data.get("name");
    const thumb_url = data.get("thumb_url");
    const poster_url = data.get("poster_url");
    const year = data.get("year");
    const movieStatus = true;
    const content = data.get("content");
    const category = data.get("category");
    const country = data.get("country");
    const time = data.get("time");
    const link_embed = data.get("link_embed");
    createNewMovie(
      movieName,
      thumb_url,
      poster_url,
      year,
      movieStatus,
      content,
      category,
      country,
      time,
      link_embed
    );

    handleClose();
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        <VideoCallRoundedIcon />
        Create New
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form onSubmit={handleSubmit}>
          <Box sx={style}>
            <MyTypography
              gutterBottom
              pb={5}
              align="center"
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Create New Movie
            </MyTypography>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                {/* ITEMS */}
                <Grid item xs={3}>
                  <Item
                    id="name"
                    name="name"
                    label="Name"
                    variant="standard"
                    placeholder="Name"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={3}>
                  <Item
                    id="category"
                    name="category"
                    label="Category"
                    variant="standard"
                    placeholder="Category"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={3}>
                  <Item
                    id="country"
                    name="country"
                    label="Country"
                    variant="standard"
                    placeholder="Country"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={3}>
                  <Item
                    id="year"
                    name="year"
                    label="Year"
                    variant="standard"
                    placeholder="Year"
                    fullWidth
                  />
                </Grid>

                {/* CONTENT */}
                <Grid item xs={12}>
                  <Item
                    id="content"
                    name="content"
                    label="Content"
                    variant="standard"
                    placeholder="Content"
                    fullWidth
                    multiline
                    rows={4}
                  />
                </Grid>

                {/* LINK IMAGE */}
                <Grid item xs={6}>
                  <Item
                    id="thumb_url"
                    name="thumb_url"
                    label="Thumbnail"
                    variant="standard"
                    placeholder="Thumbnail"
                    fullWidth
                    multiline
                    rows={2}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Item
                    id="poster_url"
                    name="poster_url"
                    label="Poster"
                    variant="standard"
                    placeholder="Poster"
                    fullWidth
                    multiline
                    rows={2}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Item
                    id="link_embed"
                    name="link_embed"
                    label="Movie"
                    variant="standard"
                    placeholder="Movie"
                    fullWidth
                    multiline
                    rows={2}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Item
                    id="time"
                    name="time"
                    label="Time"
                    variant="standard"
                    placeholder="Time"
                    fullWidth
                    multiline
                    rows={2}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <MyButton
                      type="submit"
                      variant="contained"
                      sx={{ mt: 3, ml: 1 }}
                    >
                      Create
                    </MyButton>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </form>
      </Modal>
    </div>
  );
}
