import {Box, Button, Grid, Stack, Typography, useTheme} from "@mui/material";
import {useTranslation} from "react-i18next";
import {Form, Formik} from "formik";
import {defaultData} from "./FormAddProduct/default-data.ts";
import {Product} from "../../utils/types.ts";
import {FormAddProduct} from "./FormAddProduct";

const AddProduct = () => {
    const {t} = useTranslation();
    const theme = useTheme();

    const handleSubmit = (data: Product) => {
        console.log('product data', data);
    }

    return (
        <>
            <Box p={3}>
                {/*header*/}
                <Stack
                    spacing={2}
                    justifyContent="space-between"
                    flexWrap="wrap"
                    flexDirection="row"
                    alignItems="center"
                >
                <Typography variant="h2" fontWeight={600}>
                    {t('Add new product')}
                </Typography>
                    <Button color="info" size="medium" variant="contained" sx={{marginLeft: 2}}>
                        <Typography variant="h6">{t('Add product')}</Typography>
                    </Button>
                </Stack>
                {/*add product form*/}
                <Formik initialValues={defaultData} onSubmit={handleSubmit}>
                    <Form>
                        <FormAddProduct/>
                    </Form>
                </Formik>
            </Box>
        </>
    )
}

export default AddProduct;
