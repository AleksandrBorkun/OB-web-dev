import { Divider, Typography } from "@mui/material";

import MuiMarkdown from "mui-markdown";
import styled from "@emotion/styled";
import { BLUE, PURPLE_MAIN, PURPLE_SECONDARY } from "components/const/colors";
import { Quote } from "components/Quote";
import { CourseCardsGrid } from "components/CourseCardsGrid";
import { SignUpForm } from "./about";
import { Box } from "@mui/system";
import { getTranslation } from "translations";
import { getEntries } from "contentful/client";
import MetaHead from "components/MetaHead";

const FaQBlockWrapper = styled.div`
  max-width: 1100px;
  margin: auto;
`;

export const FaQBlock = ({ title, content }) => (
  <FaQBlockWrapper>
    <Typography component={"h2"} variant={"h2"} color={PURPLE_MAIN}>
      {title}
    </Typography>
    <MuiMarkdown>{content}</MuiMarkdown>
  </FaQBlockWrapper>
);

const Landing = ({
  title,
  subtitle,
  myQuote,
  courses,
  comments,
  who,
  requrenments,
  what,
  metaHead,
}) => (
  <>
    <MetaHead {...metaHead} metaUrl={"https://obweb.dev"} />
    <Typography
      component={"h1"}
      variant="h1"
      sx={{
        mt: 3,
        mb: 3,
        color: "rgba(255, 255, 255, 0.9)",
        textAlign: "center",
        rotate: "-5deg",
        color: PURPLE_MAIN,
        fontWeight: 700,
        textShadow: `2px -2px 0px ${BLUE}, -2px 2px 0px ${PURPLE_SECONDARY}`,
      }}
    >
      {title}
    </Typography>
    <Typography
      sx={{
        fontWeight: 700,
        lineHeight: "22px",
        textAlign: "center",
        color: "rgba(255, 255, 255, 0.9)",
      }}
      component={"p"}
      variant="p"
    >
      {subtitle}
    </Typography>
    <Quote {...myQuote} />
    <CourseCardsGrid {...courses} />

    <Typography
      component={"h2"}
      variant={"h2"}
      color={PURPLE_MAIN}
      maxWidth="1100px"
      sx={{
        margin: "auto",
      }}
    >
      {comments.title}
    </Typography>
    {comments.content.map((qoute, key) => (
      <Quote key={key} {...qoute} />
    ))}
    <FaQBlock {...who} />
    <FaQBlock {...requrenments} />
    <FaQBlock {...what} />
    <Divider variant="middle" />
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <SignUpForm title={getTranslation("course.notify.signup")} />
    </Box>
  </>
);
export default Landing;

export const getStaticProps = async (props) => {
  const DATA = {
    title: "OBWebDev LEARN",
    subtitle: `“Основы Web разработки: HTML/CSS/JS для начинающих” - это курс в котором содержится только необходимая информация для написания сайта с нуля. Вы узнаете как работать с HTML, CSS, JS, научитесь работать с GitHub и Figma, но главное - вы напишете с нуля сайт-резюме которое сможете использовать при поиске работы и как портфолио, добавите к нему браузерное хранилище данных и настроите бесплатный хостинг для вашего сайта!`,
    myQuote: {
      txt: `Так как это базовый курс, он подойдет для тебя, если ты только начинаешь свой путь в разработку, или QA Automation, или в другие направления IT. Даже если ты хочешь просто научится верстать сайты по готовому дизайну из Figma или заняться фрилансом.
`,
      src: "https://images.ctfassets.net/gmfhtos0wyy5/7eWQSEVMeMrJwsJ1JBegU6/c8b3a95991a8df8783721d36dc970e5a/Aleksandr_Borkun.jpg",
      author: "Oleksandr Borkun, course instructor",
    },
    courses: {
      title: "Мои Курсы",
      content: [
        {
          stars: 1,
          title: "For Begineers",
          subtitle:
            "Это первый курс в серии web разработки где вы познакомитесь с редактором кода, настроите свой компьютер для работы, узнаете что такое Git, как работать с JavaScript, CSS и HTML.",
          info: `- 6ч. видеоматериалов\n- лекции + практика + тесты`,
          btnHref:
            "https://www.udemy.com/course/basic-web-dev/?couponCode=DBFBCD3496071D0F9084",
          discalimer:
            "Альтернативная ссылка [boosty](https://boosty.to/obwebdev/posts/ad1e2929-3478-4d80-bf23-07671b9e46b1?share=post_link)",
        },
        {
          stars: 2,
          title: "React + NextJS",
          subtitle:
            "Вы уже изучили основы и готовы двинуться дальше к изучению современных библиотек и написанию полноценного сайта с динамическими данными.",
          btnHref:
            "https://www.udemy.com/course/react-nextjs-dev/?couponCode=5596E8E4888C41406955",
          info: `- динамические страницы\n- настройка CMS`,
          discalimer:
            "Альтернативная ссылка [boosty](https://boosty.to/obwebdev/posts/4cc6322d-fb69-4583-8c73-91719428c149?share=post_link)",
        },
        {
          stars: 3,
          title: "Full Stack app",
          subtitle:
            "Вы уже изучили основы и знаете чего хотите. Вы готовы не только написать сайт но и хотите поработать с базой данных и настроить CI/CD для вашего веб приложения.",
        },
      ],
    },
    comments: {
      title: "Отзывы",
      content: [
        {
          txt: `Очень хорошая подача материала, рекомендую курс к прохождению`,
          src: "https://images.ctfassets.net/gmfhtos0wyy5/7KSMyCLKj1zGKm5sEztriL/53179aba9ca8dd85de4114165690fc0b/GR.png",
          author: "course student",
        },
        {
          txt: `Супер, инструктор очень понятно доносит информацию. Теперь у меня есть свой сайт на GitHub.`,
          src: "https://images.ctfassets.net/gmfhtos0wyy5/66VdNOWuNADxK50aVBA0Eu/b7acbd0cb5a7dc3fa3eee02cc565f67d/MX.png",
          author: "course student",
        },
      ],
    },
    who: {
      title: "Для кого этот курс",
      content: `- Для тех у кого нет опыта и кто только начинаешь свой путь в разработку
- Для тех кто хочет научится верстать сайты и заняться фрилансом
- Для тех кто хочет узнать как работать с дизайн проектами и переносить их на сайт
- Для ручных тестировщиков которые хотят переквалифицироваться в автоматизацию или разработку
- Для тех кто хочет узнать как создать свой сайт самостоятельно и разместить его в интернете`,
    },
    requrenments: {
      title: "Предварительные требования курса",
      content: `- Никаких предварительных знаний не требуется, все программы установятся во время курса и вы научитесь всему необходимому на занятиях.`,
    },
    what: {
      title: "Что студенты будут изучать на курсе?",
      content: `- Вы научитесь работать с редактором кода VSCode
- Вы научитесь самостоятельно верстать сайты по готовым дизайнам из Figma
- Вы получите глубокие знания HTML и CSS необходимые для дальнейшего развития в сфере Web разработки
- Вы познакомитесь с основами JavaScript с помощью которых сможете добавлять функционал к вашему сайту
- Вы напишете полностью рабочий сайт-портфолио который сможете использовать при поиске работы
- Вы узнаете что такое Git и его базовые команды
- Вы узнаете как разместить свой сайт на бесплатном хостинге, т.е. опубликовать ваш сайт в интернете`,
    },
  };
  const entries = await getEntries({
    content_type: "page",
    "fields.slug": "home",
  });

  return {
    props: {
      metaHead: entries.items[0].fields.metaHead.fields,
      ...DATA,
    },
  };
};
