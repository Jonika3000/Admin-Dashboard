import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import GroupsIcon from '@mui/icons-material/Groups';

export const MenuItems = {
  items: [
    {
      id: 'Dashboard',
      title: 'dashboard',
      url: '/dashboard',
      icon: DashboardIcon,
    },
    {
      id: 'Products',
      title: 'products',
      url: '/products',
      icon: InventoryIcon,
    },
    {
      id: 'orders',
      title: 'orderLists',
      url: '/orders',
      icon: LocalShippingIcon,
    },
    {
      id: 'team',
      title: 'team',
      url: '/team',
      icon: GroupsIcon,
    },
  ],
};
