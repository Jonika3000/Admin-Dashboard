import { Stack, Typography } from "@mui/material";
import { useTranslation } from 'react-i18next';
import { UnitedStatesFlag } from "../../../../assets/Flags/UnitedStatesFlag.tsx";
import { PolishFlag } from "../../../../assets/Flags/PolishFlag.tsx";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const selectedLanguage = i18n.language;

  return (
    <>
      <Stack gap={0.5} flexDirection={"row"}  mr={2} height={30} alignItems={'center'}>
        {selectedLanguage === 'en'? <UnitedStatesFlag width={30} height={30}/> : <PolishFlag width={40} height={27}/>}
        <Typography variant='h6' sx={{display: {xs: 'none', md: 'block'}}}>{selectedLanguage === 'en'? 'English': 'Polska'}</Typography>
        <ArrowDropDownIcon sx={{color: 'white'}}/>
      </Stack>
    </>
  );
};
