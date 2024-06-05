import { Avatar, Box, Stack, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const userAvatarUrl =
  "https://cdn.britannica.com/53/252953-050-30D00122/Mickey-Mouse-Steamboat-Willie-Walt-Disney-Public-Domain.jpg?w=500";

export const ProfileHeader = () => {
  return (
    <>
      <Stack gap={1} flexDirection="row" alignItems="center">
        <Avatar alt="avatar" src={userAvatarUrl} />
        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}
             sx={{ display: { xs: "none", md: "block" } }}>
          < Typography variant="h5">Admin Admin</Typography>
          <Typography variant="h6">admin</Typography>
        </Box>
        <ArrowDropDownIcon sx={{ color: "white" }} />
      </Stack>
    </>
  );
};
