import { KeyboardAlt } from "@mui/icons-material";
import Dns from "@mui/icons-material/Dns";
import People from "@mui/icons-material/People";
import PermMedia from "@mui/icons-material/PermMedia";
import Public from "@mui/icons-material/Public";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import * as React from "react";

const data = [
  { icon: <People />, label: "Keyboard Shortcuts" },
  { icon: <Dns />, label: "Commands" },
  { icon: <PermMedia />, label: "About" },
  { icon: <Public />, label: "Connect With Us" },
];

const FireNav = styled(List)<{ component?: React.ElementType }>({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});

export default function SideNavList({ routeList, onNavClick }: any) {
  const [open, setOpen] = React.useState(true);
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Paper elevation={0} sx={{ maxWidth: 256, width: "100%" }}>
        <FireNav component="nav" disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ my: 4, fontSize: 20 }}>
              <KeyboardAlt color="primary" />
            </ListItemIcon>
            <ListItemText
              sx={{ my: 0 }}
              primary="KeyCombo"
              primaryTypographyProps={{
                fontSize: 20,
                fontWeight: "medium",
                letterSpacing: 0,
              }}
            />
          </ListItemButton>
          <Divider />
          {routeList?.map((item: any, index: number) => (
            <ListItemButton key={index} sx={{ py: 2 }}>
              <ListItemText
                primary={item.title}
                primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: "medium",
                }}
                onClick={() => {
                  onNavClick(item.href);
                }}
              />
            </ListItemButton>
          ))}
        </FireNav>
      </Paper>
    </Box>
  );
}
