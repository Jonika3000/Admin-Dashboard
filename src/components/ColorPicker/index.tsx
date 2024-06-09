import { Box, Stack, useTheme } from '@mui/material';
import { useState } from 'react';
import { colors } from '../../theme.ts';
export const ColorPicker = ({ onColorChange }: { onColorChange: (selectedColors: string[]) => void }) => {
  const theme = useTheme();
  const color = colors(theme.palette.mode);
  const colorsPicker = [
    { name: 'Black', hex: '#000000' },
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Red', hex: '#FF0000' },
    { name: 'Lime', hex: '#00FF00' },
    { name: 'Blue', hex: '#0000FF' },
    { name: 'Yellow', hex: '#FFFF00' },
    { name: 'Cyan', hex: '#00FFFF' },
    { name: 'Magenta', hex: '#FF00FF' },
    { name: 'Silver', hex: '#C0C0C0' },
    { name: 'Gray', hex: '#808080' },
    { name: 'Orange', hex: '#FFA500' },
    { name: 'Brown', hex: '#A52A2A' },
    { name: 'Pink', hex: '#FFC0CB' },
    { name: 'Violet', hex: '#EE82EE' },
  ];
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const handleColorClick = (hex: string) => {
    const newSelectedColors = selectedColors.includes(hex)
      ? selectedColors.filter((color) => color !== hex)
      : [...selectedColors, hex];

    setSelectedColors(newSelectedColors);
    onColorChange(newSelectedColors);
  };

  return (
    <Stack flexDirection="row" gap={1} flexWrap="wrap">
      {colorsPicker.map((colorPicker, index) => (
        <Box
          onClick={() => handleColorClick(colorPicker.hex)}
          key={index}
          sx={{
            backgroundColor: colorPicker.hex,
            width: 20,
            height: 20,
            borderRadius: '50%',
            cursor: 'pointer',
            border: selectedColors.includes(colorPicker.hex) ? '2px solid ' + color.primary[0] : '',
          }}
        />
      ))}
    </Stack>
  );
};
