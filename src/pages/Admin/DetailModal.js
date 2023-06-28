import * as React from "react";
import { useState, useContext } from "react";
import FunctionContext from "../../components/GlobalFunctions/FunctionContext";

//IMPORT HOOKS
import { useFormik } from "formik";
import * as Yup from "yup";

//IMPORT MUI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import EditIcon from "@mui/icons-material/Edit";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";

export default function BasicModal(params) {
  const { updateMovie } = useContext(FunctionContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //KHAI BÁO INITIAL VALUES
  const formik = useFormik({
    initialValues: {
      id: params.value.id,
      name: params.value.name,
      thumb_url: params.value.thumb_url,
      poster_url: params.value.poster_url,
      year: params.value.year,
      content: params.value.content,
      category: params.value.category,
      country: params.value.country,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),
      thumb_url: Yup.string().required("Required."),
      poster_url: Yup.string().required("Required."),
      year: Yup.number()
        .required()
        .positive()
        .integer()
        .typeError("Please enter a valid number"),
      content: Yup.string()
        .required("Required.")
        .min(10, "Must be 10 characters or more"),
      category: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),
      country: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),
    }),
    onSubmit: (values) => {
      updateMovie(values);
      handleClose();
    },
  });

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
        <form onSubmit={formik.handleSubmit}>
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
                    fullWidth
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <Typography variant="caption" color="red">
                      {formik.errors?.name}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={3}>
                  <Item
                    id="category"
                    name="category"
                    label="Category"
                    variant="standard"
                    fullWidth
                    value={formik.values.category}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.category && formik.errors.category && (
                    <Typography variant="caption" color="red">
                      {formik.errors?.category}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={3}>
                  <Item
                    id="country"
                    name="country"
                    label="Country"
                    variant="standard"
                    fullWidth
                    value={formik.values.country}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.country && formik.errors.country && (
                    <Typography variant="caption" color="red">
                      {formik.errors?.country}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={3}>
                  <Item
                    id="year"
                    name="year"
                    label="Year"
                    variant="standard"
                    fullWidth
                    value={formik.values.year}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.year && formik.errors.year && (
                    <Typography variant="caption" color="red">
                      {formik.errors?.year}
                    </Typography>
                  )}
                </Grid>

                {/* LINK IMAGE */}
                <Grid item xs={6}>
                  <Item
                    id="thumb_url"
                    name="thumb_url"
                    label="Thumbnail"
                    variant="standard"
                    fullWidth
                    multiline
                    rows={2}
                    value={formik.values.thumb_url}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.thumb_url && formik.errors.thumb_url && (
                    <Typography variant="caption" color="red">
                      {formik.errors?.thumb_url}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={6}>
                  <Item
                    id="poster_url"
                    name="poster_url"
                    label="Poster"
                    variant="standard"
                    fullWidth
                    multiline
                    rows={2}
                    value={formik.values.poster_url}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.poster_url && formik.errors.poster_url && (
                    <Typography variant="caption" color="red">
                      {formik.errors?.poster_url}
                    </Typography>
                  )}
                </Grid>

                {/* CONTENT */}
                <Grid item xs={12}>
                  <Item
                    id="content"
                    name="content"
                    label="Content"
                    variant="standard"
                    fullWidth
                    multiline
                    rows={4}
                    value={formik.values.content}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.content && formik.errors.content && (
                    <Typography variant="caption" color="red">
                      {formik.errors?.content}
                    </Typography>
                  )}
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

const MyTypography = styled(Typography)({
  color: "black",
});

const Item = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  padding: theme.spacing(1),
  textAlign: "center",
}));
