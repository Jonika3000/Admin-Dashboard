import { MenuItems } from '../../../../config/SidebarMenuItems.ts';
import { ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { colors } from '../../../../theme.ts';

export const MenuList = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const theme = useTheme();
  const color = colors(theme.palette.mode);

  return (
    <>
      {MenuItems.items.map((item, index) => {
        const isSelected = location.pathname === item.url;

        return (
          <ListItemButton
            sx={{ borderRadius: '10px', backgroundColor: isSelected ? color.primary[400] : 'transparent' }}
            key={index}
            onClick={() => {
              navigate(item.url);
            }}
          >
            <ListItemIcon>{React.createElement(item.icon)}</ListItemIcon>
            <ListItemText primary={<Typography variant="h6">{t(item.title)}</Typography>} />
          </ListItemButton>
        );
      })}
    </>
  );
};
