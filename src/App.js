import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import {
  AppBar,
  CssBaseline,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Chip
} from "@material-ui/core";
import {
  Info,
  Menu,
  Work
} from "@material-ui/icons";
import {
  makeStyles,
  useTheme,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import { blue, grey } from "@material-ui/core/colors";
import DarkModeToggle from "react-dark-mode-toggle";
import { UniqRandom, RandomColors, Error } from "./page";
import "./styles/main.css";
import "./App.css";

const drawerWidth = 240;

function App(props) {
  const { wind } = props;
  const container = wind !== undefined ? () => wind().document.body : undefined;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const localDark = localStorage.getItem("dark");
  const isDark = localDark === null ? prefersDark : localDark === "true";

  let location = useLocation();
  let pathname = location.pathname.replace("/", "");
  if (pathname === "") pathname = "about";

  const [state, setState] = React.useState({
    mobileOpen: false,
    darkState: isDark,
    repo: []
  });
  const { mobileOpen, darkState, repo } = state;

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex"
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth
      }
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none"
      },
      backgroundColor: darkState ? grey[900] : blue[500]
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      color: "#ffffff",
      backgroundColor: darkState ? grey[900] : blue[500]
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    }
  }));

  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? grey[900] : blue[500];
  const mainSecondaryColor = darkState ? grey[800] : blue[300];
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor
      },
      secondary: {
        main: mainSecondaryColor
      }
    }
  });

  const classes = useStyles();
  const theme = useTheme();
  const handleDrawerToggle = () =>
      setState((prev) => ({ ...prev, mobileOpen: !mobileOpen }));
  const changePage = (page) => setState((prev) => ({ ...prev, page }));
  const handleThemeChange = React.useCallback(() => {
    localStorage.setItem("dark", !darkState);
    setState((prev) => ({ ...prev, darkState: !prev.darkState }));
  }, []);

  const menu = [
    { title: "uniqColor", path: "uniqColor"},
    { title: "randomColor", path: "randomColor" }
  ];

  const routeObj = [
    { path: "/", obj: <UniqRandom darkState={darkState} /> },
    { path: "uniqColor", obj: <UniqRandom darkState={darkState} /> },
    {
      path: "randomColor",
      obj: <RandomColors darkState={darkState} />
    }
  ];

  React.useEffect(() => {
    Promise.all([
      fetch("https://api.github.com/users/gaetanozappi/repos?per_page=1000"),
      fetch(
          "https://api.github.com/users/TheCaponeBrothers/repos?per_page=1000"
      )
    ])
        .then(([resUser, resGroup]) =>
            Promise.all([resUser.json(), resGroup.json()])
        )
        .then(([dataUser, dataGroup]) =>
            setState((prev) => ({
              ...prev,
              repo: [...prev.repo, ...dataUser, ...dataGroup]
            }))
        )
        .catch((e) => {
          console.error("Error", e);
        });
  }, []);

  const drawer = (
      <div className="mt-32">
        <div className={classes.toolbar} />
        <List>
          {menu.map(({ title, path, icon, badge }, index) => (
              <Link to={`/${path}`} key={title}>
                <ListItem button key={title} onClick={() => changePage(path)}>
                  <ListItemIcon
                      style={{ color: path === pathname ? "#ffffff" : "#ffffff80" }}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                      primary={<span className="font-bold">{title}</span>}
                      style={{ color: path === pathname ? "#ffffff" : "#ffffff80" }}
                  />
                  {badge && (
                      <Chip
                          label={badge}
                          size="small"
                          color="secondary"
                          className="font-bold"
                          style={{ color: "#ffffff" }}
                      />
                  )}
                </ListItem>
              </Link>
          ))}
        </List>
      </div>
  );

  return (
      <ThemeProvider theme={darkTheme}>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
              position="fixed"
              className={classes.appBar}
              style={{
                backgroundColor: darkState ? "#303030" : grey[50],
                boxShadow: "none"
              }}
          >
            <Toolbar className={"shadow-none"}>
              <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  className={classes.menuButton}
              >
                <Menu />
              </IconButton>
              <div className="ml-auto text-right flex">
                <DarkModeToggle
                    onChange={handleThemeChange}
                    checked={darkState}
                    size={60}
                />
              </div>
            </Toolbar>
          </AppBar>

          <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
              <Drawer
                  container={container}
                  variant="temporary"
                  anchor={theme.direction === "rtl" ? "right" : "left"}
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  classes={{
                    paper: classes.drawerPaper
                  }}
                  ModalProps={{
                    keepMounted: true // Better open performance on mobile.
                  }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer
                  classes={{
                    paper: classes.drawerPaper
                  }}
                  variant="permanent"
                  open
              >
                {drawer}
              </Drawer>
            </Hidden>
          </nav>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
              {routeObj.map(({ path, obj }, key) => (
                  <Route exact path={`/${path}`} component={() => obj} key={key} />
              ))}
              <Route component={() => <Error darkState={darkState} />} />
            </Switch>
          </main>
        </div>
      </ThemeProvider>
  );
}

App.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  wind: PropTypes.func
};

export default App;
