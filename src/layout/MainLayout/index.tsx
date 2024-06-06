import { Box, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { Header } from "./Header";
import { useContext, useState } from "react";
import { ThemeModeContext, colors } from "../../theme.ts";
import { Sidebar } from "./Sidebar";

export const MainLayout = () => {
  const theme = useTheme();
  const color = colors(theme.palette.mode);
  const colorMode = useContext(ThemeModeContext);
  const matchMd = useMediaQuery(theme.breakpoints.up("md"));
  const [open, setOpen] = useState<boolean>(matchMd);

  return (
    <>
      <Box display="flex">
        {/*sidebar*/}
        <Sidebar drawerToggle={() => {
          setOpen(false);
        }} open={open} />
        {/*header*/}
        <Box sx={{ flexGrow: 1, background: color.primary[500] }}>
          <Toolbar>
            <Header collapseClick={() => {
              setOpen(!open);
            }} />
          </Toolbar>
        </Box>
      </Box>
    </>
  );
};
