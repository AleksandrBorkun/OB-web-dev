import { PURPLE_MAIN } from "./const/colors";
import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { StarIcon } from "./Icons";
import MuiMarkdown from "mui-markdown";
import { getTranslation } from "translations";
import { markdownOverrides } from "./Paragraph";

const CoursesWrapper = styled.div`
  margin: 35px 0;
  overflow-x: scroll;
  @media (min-width: 1000px) {
    overflow: visible;
  }
`;
const CoursesHolder = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  width: 900px;
  @media (min-width: 1000px) {
    width: auto;
    gap: 2.25rem;
  }
  @media (min-width: 1200px) {
    gap: 5.625rem;
  }
`;

const CardHolder = styled.div`
  width: 290px;
  background-color: rgba(255, 255, 255, 0.09);
  border-radius: 20px;
  display: flex;
  flex-direction: column;

  display: grid;
  grid-column: 1;
  grid-template-rows: 100px 66px 163px 42px 68px 44px;
  transition: .5s ease;

@media (min-width: 1200px){

  grid-template-rows: 100px 66px 163px 42px 68px 60px;
}

  &:hover{
  @media (min-width: 1000px) {

    ${({ angle }) =>
      angle < 3
        ? `
    transform: perspective(800px) rotateY(10deg) scale(1.1) rotateX(5deg);
    box-shadow: 0 0 0 2px ${PURPLE_MAIN},-40px 4px 16px -18px rgba(255,255,255,.09);
    `
        : `
        transform: perspective(800px) rotateY(-10deg) scale(1.1) rotateX(5deg);
        box-shadow: 0 0 0 2px ${PURPLE_MAIN},40px 4px 16px -18px rgba(255,255,255,.09);
        `}
  }
}
}
`;

const StarHolder = styled.div`
  padding-top: 32px;
  padding-bottom: 14px;
  display: flex;
  justify-content: center;
  gap: 48px;
`;

const Info = styled.div`
  background-color: #121212;

  ${({ withPadding }) =>
    withPadding &&
    `
  padding: 13px;
`}

  ul {
    margin: 0;
    margin-top: 2px;
  }
`;

const Disclaimer = styled.div`
  padding: 12px 13px;
`;

const CourseCard = ({ title, subtitle, info, btnHref, discalimer, stars }) => (
  <CardHolder angle={stars}>
    <StarHolder>
      {new Array(stars).fill(1).map((_, key) => (
        <StarIcon key={key} />
      ))}
    </StarHolder>

    <Typography component={"h3"} variant={"h3"} textAlign="center">
      {title}
    </Typography>
    <Typography
      sx={{
        fontSize: {
          lg: "1rem",
        },
      }}
      component={"p"}
      variant={"body1"}
      padding={"13px"}
    >
      {subtitle}
    </Typography>
    <Info withPadding={!btnHref}>
      <MuiMarkdown>
        {btnHref ? info : getTranslation("course.unfinished")}
      </MuiMarkdown>
    </Info>
    <Button
      variant={btnHref ? "contained" : "text"}
      href={btnHref || "#sign-up-form"}
      size="large"
      sx={{ marginTop: 4 }}
      target={btnHref && "_blank"}
      color="info"
    >
      {btnHref ? getTranslation("course.buy") : getTranslation("course.notify")}
    </Button>
    <Disclaimer>
      <MuiMarkdown
        overrides={{
          a: { component: markdownOverrides.link },
        }}
      >
        {discalimer}
      </MuiMarkdown>
    </Disclaimer>
  </CardHolder>
);

export const CourseCardsGrid = ({ content, title }) => (
  <>
    <Typography
      component={"h2"}
      variant={"h2"}
      color={PURPLE_MAIN}
      maxWidth="1100px"
      sx={{
        margin: "auto",
      }}
    >
      {title}
    </Typography>
    <CoursesWrapper>
      <CoursesHolder>
        {content.map((course) => (
          <CourseCard key={course.title} {...course} />
        ))}
      </CoursesHolder>
    </CoursesWrapper>
  </>
);
