import { Box, Stack, Typography, useTheme } from '@mui/material';
import { colors } from '../../theme.ts';
import { useState } from 'react';

export const SizePicker = ({ onSizeChange }: { onSizeChange: (sizes: string[]) => void }) => {
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const theme = useTheme();
  const color = colors(theme.palette.mode);

  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const handleSizeClick = (size: string) => {
    const newSelectedSizes = selectedSizes.includes(size)
      ? selectedSizes.filter((s) => s !== size)
      : [...selectedSizes, size];

    setSelectedSizes(newSelectedSizes);
    onSizeChange(newSelectedSizes);
  };

  return (
    <>
      <Stack flexDirection="row" gap={1} flexWrap="wrap">
        {sizes.map((size, index) => {
          return (
            <Box
              key={index}
              sx={{
                borderRadius: 2,
                height: 30,
                width: 50,
                backgroundColor: color.primary[400],
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: selectedSizes.includes(size) ? '1px solid ' + color.primary[0] : '',
                cursor: 'pointer',
              }}
              onClick={() => {
                handleSizeClick(size);
              }}
            >
              <Typography variant="h6">{size}</Typography>
            </Box>
          );
        })}
      </Stack>
    </>
  );
};
