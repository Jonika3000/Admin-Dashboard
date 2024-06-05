import { Avatar, Stack } from '@mui/material';

const userAvatarUrl =
  'https://cdn.britannica.com/53/252953-050-30D00122/Mickey-Mouse-Steamboat-Willie-Walt-Disney-Public-Domain.jpg?w=500';

export const ProfileHeader = () => {
  return (
    <>
      <Stack spacing={1} flexDirection="row" alignItems="center">
        <Avatar alt="avatar" src={userAvatarUrl} />
      </Stack>
    </>
  );
};
