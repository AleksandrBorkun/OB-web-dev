import { useState, useRef, useEffect } from "react";

import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";

import { Circle, Title } from "components/OBDev";
import { Link } from "components/Link";
import { getTranslation } from "translations";
import { List, ListItem } from "@mui/material";

import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const data = [
  {
    url: "/learn/integraciya-saita-s-email-maktetingovoi-platformoi-mailchimp",
    isLesson: true,
    isVideo: true,
    title: "Интеграция сайта с email мактетинговой платформой Mailchimp",
  },
  {
    url: "/learn/responsive-web-app-with-html",
    isLesson: true,
    isVideo: true,
    title: "Онлайн Курс: Адаптивное веб приложение на HTML CSS и JS с нуля",
  },
  {
    url: "/blog/kak-sdelat-html5-igru-na-chistom-js-delaem-flappy-bird-chast-1",
    isLesson: false,
    isVideo: true,
    title: "Как сделать HTML5 игру на чистом JS. Делаем Flappy Bird часть 1",
  },
  {
    url: "/blog/dinamicheskii-import-ui-komponentov-v-react-js",
    isLesson: false,
    isVideo: true,
    title: "Динамический импорт UI компонентов в React JS",
  },
  {
    url: "/blog/zadacha-na-poisk-chisel-dlya-zadannoi-summy-sum-two",
    isLesson: false,
    isVideo: true,
    title: "Задача на поиск чисел для заданной суммы Sum Two",
  },
  {
    url: "/blog/array-filter-in-js",
    isLesson: false,
    isVideo: true,
    title: "Фильтр данных в массиве в JS/React",
  },
  {
    url: "/blog/array-sorting-js",
    isLesson: false,
    isVideo: true,
    title: "Сортировка массивов в JS",
  },
];

const SearchContainer = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  maxWidth: "auto",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
    maxWidth: "auto",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100px",
  },
  ["@media (max-width: 600px)"]: {
    display: "none",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const pages = ["learn", "blog", "about"];
const searchPlaceholderTxt = "search";

const Logo = ({ mobile }) => (
  <Link href="/">
    <Box
      sx={{
        display: { xs: mobile ? "flex" : "none", md: mobile ? "none" : "flex" },
        minWidth: "140px",
      }}
    >
      <Circle />
      <Title>OB Web Dev</Title>
    </Box>
  </Link>
);

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                // maxWidth: '20%'
              }}
            >
              {pages.map((page) => (
                <Link href={`/${page.toLocaleLowerCase()}`} key={page}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color="white">
                      {getTranslation(page)}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexDirection: { xs: "row-reverse", md: "row" },
            }}
          >
            <Logo mobile />
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  href={`/${page.toLocaleLowerCase()}`}
                  variant="h2"
                  sx={{ my: 2, ml: 5, color: "white", display: "block" }}
                >
                  {getTranslation(page)}
                </Button>
              ))}
            </Box>
            <Search />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

const Search = () => {
  const [searchResults, setResults] = useState([]);
  const [value, setValue] = useState("");
  const [isActive, setActive] = useState(false);
  const ref = useRef(null);
  useOutsideClick(
    ref,
    () => setActive(false),
    () => setActive(true)
  );

  const handleOnClick = () => {
    setResults([]);
    setValue("");
  };
  const handleSearch = (e) => {
    const value = e.target.value;
    setValue(value);
    if (value.trim().length < 2) {
      setResults([]);
      return;
    }
    setActive(true);
    const results = data.filter((it) => {
      return it.title.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });

    setResults(results);
  };

  return (
    <SearchContainer ref={ref}>
      <SearchIconWrapper>
        <SearchIcon width={"48px"} height={"48px"} />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={getTranslation(searchPlaceholderTxt)}
        inputProps={{ "aria-label": "search" }}
        onChange={handleSearch}
        value={value}
      />
      {isActive && searchResults.length ? (
        <List
          sx={{
            mt: 2,
            position: "absolute",
            backgroundColor: "background.paper",
            zIndex: 4,
            width: "300px",
            right: { md: ".1em" },
          }}
        >
          {searchResults.map((result, key) => (
            <Link href={result.url} passHref key={key}>
              <ListItem
                onClick={handleOnClick}
                sx={{
                  borderBottom: "1px solid",
                  borderColor: " palette.divider",
                  color: "white",
                  whiteSpace: "nowrap",
                  ":hover": {
                    backgroundColor: "action.hover",
                    whiteSpace: "normal",
                  },
                }}
              >
                {result.isVideo ? <SmartDisplayIcon /> : <MenuBookIcon />}
                <Typography
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {result.title}
                </Typography>
              </ListItem>
            </Link>
          ))}
        </List>
      ) : (
        ""
      )}
    </SearchContainer>
  );
};

function useOutsideClick(ref, close, open) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        close();
      } else {
        open();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
}
