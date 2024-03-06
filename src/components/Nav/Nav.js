import React from "react";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;
const navItems = [
  "About",
  "projects",
  "experience",
  // "Blog",
  // "Contact",
];
const handleClick = (id) => {
  // const element = document.getElementById(id);
  // if (element) {
  //   element.scrollIntoView({ behavior: "smooth" });
  // }
  console.log("clicked");
};

const Nav = (props) => {
  const { window } = props;
  const children = props.children;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Joshua Achorn
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => handleClick()}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", maxWidth: "1020px" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        elevation={0}
        sx={{
          background: "white",
          color: "primary",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: "1020px",
            width: "100%",
            margin: "auto",
          }}
        >
          <IconButton
            // color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, ml: 0 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: "text.secondary",
              flexGrow: 1,
              textAlign: "left",
              display: { xs: "none", sm: "block" },
            }}
          >
            Joshua Achorn
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: "text.secondary" }}
                onClick={() => handleClick()}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
};

export default Nav;
