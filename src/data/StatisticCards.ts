import PeopleIcon from '@mui/icons-material/People';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import HistoryIcon from '@mui/icons-material/History';

export const StatisticCards = [
  {
    name: 'Total User',
    data: '40,689',
    statisticUp: true,
    statisticPercent: '8,9%',
    statisticTime: 'from yesterday',
    icon: PeopleIcon,
    iconColor: "#8280FF"
  },
  {
    name: 'Total Order',
    data: '10293',
    statisticUp: true,
    statisticPercent: '1.3%',
    statisticTime: 'from past week',
    icon: Inventory2Icon,
    iconColor: "#FEC53D"
  },
  {
    name: 'Total Sales',
    data: '$89,000',
    statisticUp: false,
    statisticPercent: '4.3%',
    statisticTime: 'from yesterday',
    icon: LeaderboardIcon,
    iconColor: "#4AD991"
  },
  {
    name: 'Total Pending',
    data: '2040',
    statisticUp: true,
    statisticPercent: '1.8%',
    statisticTime: 'from yesterday',
    icon: HistoryIcon,
    iconColor: "#FF9066"
  }
]