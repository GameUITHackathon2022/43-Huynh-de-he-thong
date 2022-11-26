import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Avatar, Button, Divider, MenuList } from "@mui/material";
import Popover from "@mui/material/Popover";
import img1 from "../../assets/logo.png";
import HoverMenu from "material-ui-popup-state/HoverMenu";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListAltIcon from "@mui/icons-material/ListAlt";
import {
  usePopupState,
  bindHover,
  bindMenu,
} from "material-ui-popup-state/hooks";

import ColorLensIcon from "@mui/icons-material/ColorLens";
import PetsIcon from "@mui/icons-material/Pets";
import DomainIcon from "@mui/icons-material/Domain";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import CameraEnhanceIcon from "@mui/icons-material/CameraEnhance";
import Person2Icon from "@mui/icons-material/Person2";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
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
    [theme.breakpoints.up("md")]: {
      width: "80ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem sx={{ paddingY: 1, paddingX: 2 }} onClick={handleMenuClose}>
        Profile
      </MenuItem>
      <Divider />
      <MenuItem sx={{ paddingY: 1, paddingX: 2 }} onClick={handleMenuClose}>
        My account
      </MenuItem>
      <Divider />
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem sx={{ paddingY: 1, paddingX: 2 }}>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <Divider />
      <MenuItem sx={{ paddingY: 1, paddingX: 2 }}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem
        sx={{ paddingY: 1, paddingX: 2 }}
        onClick={handleProfileMenuOpen}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  // popover
  const popupState1 = usePopupState({
    variant: "popover",
    popupId: "demoMenu",
  });
  // popover2
  const popupState2 = usePopupState({
    variant: "popover",
    popupId: "demoMenu",
  });
  // popover3
  const popupState3 = usePopupState({
    variant: "popover",
    popupId: "demoMenu",
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "transparent" }}
        elevation={0}
      >
        <Toolbar>
          {/* <Avatar sx={{mr:"16px"}}/> */}
          <img
            style={{ width: "100px", height: "auto", marginRight: "16px" }}
            src={img1}
            alt="ditconmemay"
          />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 0.5 }} />

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 0.2,
              justifyContent: "space-around",
              gap: "32px",
              alignItems: "center",
            }}
          >
            {/* popover 1 */}
            <React.Fragment>
              <Button
                variant="outlined"
                sx={{ border: "0" }}
                color="inherit"
                {...bindHover(popupState1)}
              >
                Explore
              </Button>
              <HoverMenu
                {...bindMenu(popupState1)}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
              >
                {/* start menu item */}
                <MenuItem
                  sx={{ paddingY: 1, paddingX: 2 }}
                  onClick={popupState2.close}
                >
                  <ListItemIcon>
                    <ListAltIcon fontSize="medium" />
                  </ListItemIcon>
                  <ListItemText>All NFTs</ListItemText>
                </MenuItem>
                <Divider />
                {/* end menu item */}
                {/* start menu item */}
                <MenuItem sx={{ p: 2 }} onClick={popupState2.close}>
                  <ListItemIcon>
                    <ColorLensIcon fontSize="medium" />
                  </ListItemIcon>
                  <ListItemText>Art</ListItemText>
                </MenuItem>
                <Divider />
                {/* end menu item */}
                {/* start menu item */}
                <MenuItem sx={{ p: 2 }} onClick={popupState2.close}>
                  <ListItemIcon>
                    <PetsIcon fontSize="medium" />
                  </ListItemIcon>
                  <ListItemText>Collectibles</ListItemText>
                </MenuItem>
                <Divider />
                {/* end menu item */}
                {/* start menu item */}
                <MenuItem sx={{ p: 2 }} onClick={popupState2.close}>
                  <ListItemIcon>
                    <DomainIcon fontSize="medium" />
                  </ListItemIcon>
                  <ListItemText>Domain Names</ListItemText>
                </MenuItem>
                <Divider />
                {/* end menu item */}
                {/* start menu item */}
                <MenuItem sx={{ p: 2 }} onClick={popupState2.close}>
                  <ListItemIcon>
                    <MusicNoteIcon fontSize="medium" />
                  </ListItemIcon>
                  <ListItemText>Music</ListItemText>
                </MenuItem>
                <Divider />
                {/* end menu item */}
                {/* start menu item */}
                <MenuItem
                  sx={{ paddingY: 1, paddingX: 2 }}
                  onClick={popupState2.close}
                >
                  <ListItemIcon>
                    <CameraEnhanceIcon fontSize="medium" />
                  </ListItemIcon>
                  <ListItemText>Photography</ListItemText>
                </MenuItem>
                {/* end menu item */}
              </HoverMenu>
            </React.Fragment>
            {/* end popover 1 */}

            {/* popover 2 */}
            <React.Fragment>
              <Button
                variant="outlined"
                sx={{ border: "0" }}
                color="inherit"
                {...bindHover(popupState2)}
              >
                Resources
              </Button>
              <HoverMenu
                {...bindMenu(popupState2)}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
              >
                {/* start menu item */}
                <MenuItem
                  sx={{ paddingY: 1, paddingX: 2 }}
                  onClick={popupState2.close}
                >
                  <ListItemText>Learn</ListItemText>
                </MenuItem>
                <Divider />
                {/* end menu item */}
                {/* start menu item */}
                <MenuItem
                  sx={{ paddingY: 1, paddingX: 2 }}
                  onClick={popupState2.close}
                >
                  <ListItemText>Help Center</ListItemText>
                </MenuItem>
                <Divider />
                {/* end menu item */}
                {/* start menu item */}
                <MenuItem
                  sx={{ paddingY: 1, paddingX: 2 }}
                  onClick={popupState2.close}
                >
                  <ListItemText>Platform Status</ListItemText>
                </MenuItem>
                <Divider />
                {/* end menu item */}
                {/* start menu item */}
                <MenuItem
                  sx={{ paddingY: 1, paddingX: 2 }}
                  onClick={popupState2.close}
                >
                  <ListItemText>Partners</ListItemText>
                </MenuItem>
                <Divider />
                {/* end menu item */}
                {/* start menu item */}
                <MenuItem
                  sx={{ paddingY: 1, paddingX: 2 }}
                  onClick={popupState2.close}
                >
                  <ListItemText>Taxes</ListItemText>
                </MenuItem>
                <Divider />
                {/* end menu item */}
                {/* start menu item */}
                <MenuItem
                  sx={{ paddingY: 1, paddingX: 2 }}
                  onClick={popupState2.close}
                >
                  <ListItemText>Blog</ListItemText>
                </MenuItem>
                {/* end menu item */}
              </HoverMenu>
            </React.Fragment>
            {/* end popover 2 */}

            {/* popover 3 */}
            <React.Fragment>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                color="inherit"
                {...bindHover(popupState3)}
              >
                <AccountCircle />
              </IconButton>

              <HoverMenu
                {...bindMenu(popupState3)}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
              >
                {/* start menu item */}
                <MenuItem
                  sx={{ paddingY: 1, paddingX: 2 }}
                  onClick={popupState2.close}
                >
                  <ListItemIcon>
                    <Person2Icon fontSize="medium" />
                  </ListItemIcon>
                  <ListItemText>Profile</ListItemText>
                </MenuItem>
                <Divider />
                {/* end menu item */}
                {/* start menu item */}
                <MenuItem sx={{ p: 2 }} onClick={popupState2.close}>
                  <ListItemIcon>
                    <FavoriteBorderIcon fontSize="medium" />
                  </ListItemIcon>
                  <ListItemText>Favourite</ListItemText>
                </MenuItem>
                <Divider />
                {/* end menu item */}
                {/* start menu item */}
                <MenuItem sx={{ p: 2 }} onClick={popupState2.close}>
                  <ListItemIcon>
                    <RemoveRedEyeOutlinedIcon fontSize="medium" />
                  </ListItemIcon>
                  <ListItemText>Watchlist</ListItemText>
                </MenuItem>
                <Divider />
                {/* end menu item */}
                {/* start menu item */}
                <MenuItem sx={{ p: 2 }} onClick={popupState2.close}>
                  <ListItemIcon>
                    <AppsOutlinedIcon fontSize="medium" />
                  </ListItemIcon>
                  <ListItemText>Collections</ListItemText>
                </MenuItem>
                <Divider />
                {/* end menu item */}
                {/* start menu item */}
                <MenuItem sx={{ p: 2 }} onClick={popupState2.close}>
                  <ListItemIcon>
                    <MusicNoteIcon fontSize="medium" />
                  </ListItemIcon>
                  <ListItemText>Music</ListItemText>
                </MenuItem>
                <Divider />
                {/* end menu item */}
                {/* start menu item */}
                <MenuItem
                  sx={{ paddingY: 1, paddingX: 2 }}
                  onClick={popupState2.close}
                >
                  <ListItemIcon>
                    <CameraEnhanceIcon fontSize="medium" />
                  </ListItemIcon>
                  <ListItemText>Photography</ListItemText>
                </MenuItem>
                {/* end menu item */}
              </HoverMenu>
            </React.Fragment>
            {/* end popover 3 */}

            {/* button wallets */}
            <IconButton color="inherit" component="label">
              <AccountBalanceWalletOutlinedIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
