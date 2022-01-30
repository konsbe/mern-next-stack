import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { pages } from "./pagesData";
import { loginform, logoutform } from "./pagesData";
import styles from "../styles/Navbar.module.scss";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { setUserAction } from "../../redux/User/user.actions";

import useStyles from "./styles";

const settings = ["Profile", "Account", "Dashboard", "Logout"];
const ResponsiveAppBar = ({ data }) => {
  const classes = useStyles();
  const router = useRouter();
  const dispatch = useDispatch();
  // const location = useLocation();
  const [state, setState] = React.useState({
    left: false,
  });
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem("userProfile")));
    console.log(user, "user!!!");
    // if (user) {
    //   const formData = {
    //     ...JSON.parse(localStorage.getItem("userProfile")).result,

    //     //   password: JSON.parse(localStorage.getItem("userProfile")).result.password,
    //   };
    //   dispatch(setUserAction(formData));
    // }
  }, [router]);

  // console.log(user, "user");
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("userProfile");
    setUser(null);
    router.push("/");
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className={styles.navBarBox}
    >
      <div className={styles.profStyles}>
        <div className={classes.boxClass}>
          <div className={classes.profilePhone}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar
                  className={classes.purple}
                  alt={user?.result.name}
                  src={user?.result.imageUrl}
                >
                  {user?.result.name.charAt(0)}
                </Avatar>
              </IconButton>
            </Tooltip>
          </div>
          <div>
            <Typography className={classes.userNamePhone} variant="body2">
              {user?.result.name}
            </Typography>
          </div>
        </div>
      </div>
      <Divider />
      <List>
        {pages.map((page, index) => (
          <Link key={index} href={page.path}>
            <ListItem
              button
              key={index}
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "black",
                // display: "block",
                justifyContent: "flex-end",
              }}
              className={styles.phoneBut}
            >
              {page.title}
              <p className={styles.icons}>{page.icon}</p>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
  console.log(data, "serverSideprops");

  return (
    <AppBar className={styles.navBar} position="sticky">
      <Container className={styles.navbarContainer}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Avatar alt="logo" src="/logo.png" />
          </Typography>

          <Box
            className={styles.burger}
            sx={{ flexGrow: 0, display: { xs: "flex" } }}
          >
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  // onClick={handleOpenNavMenu}
                  onClick={toggleDrawer(anchor, true)}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  color="white"
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="white"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Kober.tech
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Link key={index} href={page.path}>
                <Button
                  key={index}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                  className={styles.colorButtons}
                >
                  {page.title}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {!user ? (
              <Link href={loginform[0].path}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                  className={styles.colorButtons}
                >
                  {loginform[0].title}
                </Button>
              </Link>
            ) : (
              <div className={styles.profData}>
                <div className={classes.profile}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu}>
                      <Avatar
                        className={classes.purple}
                        alt={user?.result.name}
                        src={user?.result.imageUrl}
                      >
                        {user?.result.name.charAt(0)}
                      </Avatar>
                    </IconButton>
                  </Tooltip>
                  <Typography className={classes.userName} variant="h6">
                    {user?.result.name}
                  </Typography>
                </div>
              </div>
            )}
          </Box>
          {user ? (
            <Button
              onClick={logout}
              sx={{ my: 2, color: "white", display: "block" }}
              className={styles.colorButtons}
            >
              {logoutform[0].title}
            </Button>
          ) : (
            <></>
          )}
          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src=" " />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/user/login`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}


export default ResponsiveAppBar;
