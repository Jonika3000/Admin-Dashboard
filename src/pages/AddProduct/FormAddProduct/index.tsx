import {Box, Stack, useTheme} from "@mui/material";
import {useTranslation} from "react-i18next";
import {colors} from "../../../theme.ts";
import {useFormikContext} from "formik";

export const FormAddProduct = () => {
    const {t} = useTranslation();
    const theme = useTheme();
    const color = colors((theme.palette.mode));
    const formik = useFormikContext();

    return(
        <>
            <Stack flexDirection='row' flexWrap='wrap'>
                <Stack flexDirection='column'>
                    <Box></Box>
                </Stack>
            </Stack>
        </>
    )
}
