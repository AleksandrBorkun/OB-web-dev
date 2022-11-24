import { ImageConstructor } from "components/Image";

import { Box, Typography, Button } from "@mui/material";

const ImageWithButton = ({
  title,
  description,
  image,
  buttonText,
  buttonLink,
}) => (
  <Box height={"100%"} pr={2} pl={2}>
    <ImageConstructor
      {...image.fields}
      styles={`max-height : 350px;  border-radius: 20px;`}
    />
    <Typography component={"h2"} variant="h4">
      {title}
    </Typography>
    <Typography component={"h4"} variant="h6" sx={{ marginTop: 2 }}>
      {description}
    </Typography>
    <Button variant="text" href={buttonLink} size="large" sx={{ marginTop: 4 }}>
      {buttonText}
    </Button>
  </Box>
);

export default ImageWithButton;
