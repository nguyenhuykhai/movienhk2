import * as React from "react";
import { useState, useContext } from "react";
import FunctionContext from "../../components/GlobalFunctions/FunctionContext";
import Admin from "./index";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import EditIcon from "@mui/icons-material/Edit";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
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

export default function BasicModal(params) {
  const { updateMovie } = useContext(FunctionContext);
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
    updateMovie(
      params.value.id,
      data.get("name"),
      data.get("thumb_url"),
      data.get("poster_url"),
      data.get("year"),
      data.get("content"),
      data.get("category"),
      data.get("country")
    );
    handleClose()
  };

  return (
    <div>
      <Button onClick={handleOpen} >
        <EditIcon />
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
              {params.value.name}
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
                    defaultValue={params.value.name}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={3}>
                  <Item
                    id="category"
                    name="category"
                    label="Category"
                    variant="standard"
                    defaultValue={params.value.category}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={3}>
                  <Item
                    id="country"
                    name="country"
                    label="Country"
                    variant="standard"
                    defaultValue={params.value.country}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={3}>
                  <Item
                    id="year"
                    name="year"
                    label="Year"
                    variant="standard"
                    defaultValue={params.value.year}
                    fullWidth
                  />
                </Grid>

                {/* LINK IMAGE */}
                <Grid item xs={6}>
                  <Item
                    id="thumb_url"
                    name="thumb_url"
                    label="Thumbnail"
                    variant="standard"
                    defaultValue={params.value.thumb_url}
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
                    defaultValue={params.value.poster_url}
                    fullWidth
                    multiline
                    rows={2}
                  />
                </Grid>

                {/* CONTENT */}
                <Grid item xs={12}>
                  <Item
                    id="content"
                    name="content"
                    label="Content"
                    variant="standard"
                    defaultValue={params.value.content}
                    fullWidth
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <MyButton
                      type="submit"
                      variant="contained"
                      sx={{ mt: 3, ml: 1 }}
                    >
                      Update
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
