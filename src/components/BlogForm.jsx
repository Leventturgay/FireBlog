import React, { useContext } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { BlogContext } from "../contexts/BlogContext";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const initialValues = {
  title: "",
  imageUrl: "",
  content: "",
};

const BlogForm = () => {
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser.email)
  const navigate = useNavigate();
  const { addBlog, setAddBlog } = useContext(BlogContext);
  console.log(addBlog);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(addBlog);

    // AddBlog(addBlog, navigate, currentUser);
    setAddBlog(initialValues);
  };

  return (
    <Container maxWidth="sm" align="center">
      {/* <img src={blok} alt="" /> */}
      {/* There is already an h1 in the page, let's not duplicate it. */}
      <Typography variant="h3" component="h2">
        <code>-NEW BLOG-</code>
      </Typography>
      ;
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Box
          textAlign="center"
          component="form"
          onSubmit={handleSubmit}
          sx={{
            "& .MuiTextField-root": { m: 1, width: "50ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="outlined-email-input"
              label="Title"
              type="text"
              autoComplete="current-password"
              name="title"
              value={addBlog.title}
              onChange={(e) =>
                setAddBlog({ ...addBlog, title: e.target.value })
              }
              required
            />
          </div>
          <div>
            <TextField
              id="outlined-password-input"
              label="Image URL"
              type="text"
              autoComplete="current-password"
              name="imageUrl"
              value={addBlog?.imageUrl || " "}
              required
              onChange={(e) =>
                setAddBlog({ ...addBlog, imageUrl: e.target.value })
              }
            />
          </div>
          <div>
            <TextField
              id="standard-multiline-flexible"
              label="Content"
              type="text"
              autoComplete="current-password"
              name="content"
              value={addBlog?.content || " "}
              required
              onChange={(e) =>
                setAddBlog({ ...addBlog, content: e.target.value })
              }
              multiline
              rows={10}
            />
          </div>
          <div>
            <Button
              variant="contained"
              type="submit"
              sx={{ marginTop: "1rem", width: "100%" }}
            >
              SUBMIT
            </Button>
          </div>
        </Box>
      </Grid>
    </Container>
  );
};

export default BlogForm;
