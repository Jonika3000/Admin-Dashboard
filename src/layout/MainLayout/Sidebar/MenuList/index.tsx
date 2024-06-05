import { MenuItems } from "../../../../config/SidebarMenuItems.ts";
import { ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import React from "react";

export const MenuList = () => {
  return (
    <>
      {MenuItems.items.map((item, index) => {
        return (
          <ListItemButton
          sx={{ borderRadius: "10px" }}
          key={index}
          >
          <ListItemIcon>
            {React.createElement(item.icon)}
          </ListItemIcon>
          <ListItemText
            primary={<Typography variant="h6">{item.title}</Typography>} />
        </ListItemButton>
        );
      })}
    </>
  );
};
