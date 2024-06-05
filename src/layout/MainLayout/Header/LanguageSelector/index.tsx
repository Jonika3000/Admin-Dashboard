import {
  ClickAwayListener,
  List,
  ListItemButton, ListItemIcon, ListItemText,
  Paper,
  Popper,
  Stack,
  Typography, useTheme
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { UnitedStatesFlag } from "../../../../assets/Flags/UnitedStatesFlag.tsx";
import { PolishFlag } from "../../../../assets/Flags/PolishFlag.tsx";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useRef, useState } from "react";
import { colors } from "../../../../theme.ts";

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const anchorRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const selectedLanguage = i18n.language;
  const theme = useTheme();
  const color = colors(theme.palette.mode);
  const handleClickAway = (event: any) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };
  const handleChangeLanguage = () => {
    if(selectedLanguage === "en")
      i18n.changeLanguage("pl")
    else
      i18n.changeLanguage("en");
  };

  return (
    <>
      <Stack gap={0.5} flexDirection={"row"} mr={2} height={30} alignItems={"center"} onClick={() => {
        setOpen(!open);
      }} ref={anchorRef} sx={{cursor: 'pointer'}}>
        {selectedLanguage === "en" ? <UnitedStatesFlag width={30} height={30} /> :
          <PolishFlag width={30} height={30} />}
        <Typography variant="h6" sx={{
          display: {
            xs: "none",
            md: "block"
          }
        }}>{selectedLanguage === "en" ? "English" : "Polish"}</Typography>
        <ArrowDropDownIcon sx={{ color: "white" }} />
      </Stack>
      <Popper
        placement="bottom-end"
        open={open}
        role={undefined}
        disablePortal
        anchorEl={anchorRef.current}
        popperOptions={{
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 5]
              }
            }
          ]
        }}
      >
        <Paper sx={{ backgroundColor: color.primary[600] }}>
          <ClickAwayListener onClickAway={handleClickAway}>
            <List>
              <ListItemButton
                sx={{ borderRadius: "10px" }}
                onClick={handleChangeLanguage}
              >
                <ListItemIcon>
                  {selectedLanguage === "en" ? <PolishFlag width={30} height={30} /> :
                    <UnitedStatesFlag width={30} height={30} />}
                </ListItemIcon>
                <ListItemText
                  primary={<Typography variant="h6">{selectedLanguage === "en" ? "Polish" : "English"}</Typography>} />
              </ListItemButton>
            </List>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </>
  );
};
