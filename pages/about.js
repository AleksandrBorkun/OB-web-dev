import {
  Stack,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  FormControl,
  Button,
} from "@mui/material";
import axios from "axios";
import MetaHead from "components/MetaHead";
import { getEntries } from "contentful/client";
import { renderComponent } from "contentful/utils";
import { useState } from "react";
import { getTranslation } from "translations";

export const SignUpForm = ({ title }) => {
  const [checked, setChecked] = useState(false);
  const [isSubmitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!checked) {
      return false;
    }
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
    };
    axios
      .post("/api/subscribe", data)
      .then(() => setSubmitted(true))
      .catch((e) => console.error(e));
  };

  return !isSubmitted ? (
    <FormControl
      component="form"
      sx={{ maxWidth: { md: 600, xs: "100%", margin: "2em auto" } }}
      onSubmit={handleSubmit}
    >
      <Typography
        variant="h3"
        component={"h2"}
        textAlign={"center"}
        id={"sign-up-form"}
      >
        {title || getTranslation("form.title")}
      </Typography>
      <TextField
        required
        id="name"
        type={"text"}
        minLength={5}
        maxLength="120"
        label={getTranslation("form.name")}
        variant="outlined"
        sx={{ mt: 2 }}
      />
      <TextField
        required
        id="email"
        type={"email"}
        minLength={5}
        maxLength="120"
        label={getTranslation("form.email")}
        variant="outlined"
        sx={{ mt: 2 }}
      />
      <Typography variant="body2" sx={{ mt: 2 }}>
        {getTranslation("form.disclaimer")}
      </Typography>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            required
            onChange={() => setChecked(!checked)}
          />
        }
        label={getTranslation("form.acceptTerms")}
        sx={{ mt: 2 }}
      />
      <Button sx={{ mt: 4 }} variant="contained" type="submit">
        {getTranslation("form.submit")}
      </Button>
    </FormControl>
  ) : (
    <Box m={5} textAlign={"center"}>
      <Typography variant="h3" component={"h2"}>
        {getTranslation("form.subscribed")}
      </Typography>
    </Box>
  );
};

const About = ({ metaHead, content }) => (
  <>
    <MetaHead {...metaHead} metaUrl={"https://mirakids.net/about"} />
    <Stack>
      <Box
        height={"300px"}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "divider",
          mt: 2,
        }}
      >
        <Typography
          textAlign={"center"}
          margin={"auto 0"}
          component={"h1"}
          variant={"h1"}
        >
          {getTranslation("about")}
        </Typography>
      </Box>

      {renderComponent(content[0])}

      <SignUpForm />
    </Stack>
  </>
);

export const getStaticProps = async () => {
  const article = (
    await getEntries({
      content_type: "blogArticle",
      "fields.slug": "about",
    })
  ).items[0];
  return {
    props: { ...article.fields },
  };
};

export default About;
