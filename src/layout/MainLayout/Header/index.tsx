import MenuIcon from "@mui/icons-material/Menu";
import { Badge, Box, ButtonBase, useTheme } from "@mui/material";
import { SearchHeader } from "./SearchHeader";
import { useState } from "react";
import { ProfileHeader } from "./ProfileHeader";
import { LanguageSelector } from "./LanguageSelector";
import NotificationsIcon from "@mui/icons-material/Notifications";

export const Header = () => {
  const theme = useTheme();
  const [value, setValue] = useState<string>("");

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        sx={{
          [theme.breakpoints.down("md")]: {
            width: "auto"
          }
        }}
      >
        <ButtonBase sx={{ overflow: "hidden" }}>
          <MenuIcon sx={{ color: "white" }} />
        </ButtonBase>
      </Box>
      {/*search*/}
      <SearchHeader value={value} setValue={setValue} />
      <Box sx={{ flexGrow: 1 }} />
      {/*notification*/}
      <Badge badgeContent={2} color={"error"} sx={{ margin: "0px 30px", cursor: "pointer" }}>
        <NotificationsIcon color="action" />
      </Badge>
      {/*language*/}
      <LanguageSelector />
      {/*profile*/}
      <ProfileHeader />
    </>
  );
};
