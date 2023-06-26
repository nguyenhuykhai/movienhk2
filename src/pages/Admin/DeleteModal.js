import * as React from "react";
import { useState, useContext } from "react";
import FunctionContext from "../../components/GlobalFunctions/FunctionContext";
import Admin from "./index";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
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

export default function Delete(params) {
  const { deleteMovie } = useContext(FunctionContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const MyTypography = styled(Typography)({
    color: "black",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    deleteMovie(params.value.id);

    handleClose();
  };

  return (
    <div>
      <IconButton onClick={handleOpen} aria-label="delete">
        <DeleteIcon />
      </IconButton>
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
              Are you sure you want to delete movie {params.value.name}
            </MyTypography>
            <MyTypography>
              This item will be deleted immediately. You can't undo this action
            </MyTypography>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                {/* ITEMS */}
                <Grid item xs={12}>
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <MyButton
                      onClick={handleClose}
                      variant="contained"
                      sx={{ mt: 3, ml: 1 }}
                    >
                      Cancel
                    </MyButton>
                    <MyButton
                      type="submit"
                      variant="contained"
                      sx={{ mt: 3, ml: 1 }}
                    >
                      Delete
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
