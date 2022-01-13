import * as React from 'react';
import Box from '@mui/material/Box';
import IntegrationIcon from '@mui/icons-material/Web';
import StatisticIcon from '@mui/icons-material/BarChart';
import TrackerIcon from '@mui/icons-material/AutoGraph';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Integration" icon={<IntegrationIcon  />} />
        <BottomNavigationAction label="Statistic" icon={<StatisticIcon  />} />
        <BottomNavigationAction label="Tracker" icon={<TrackerIcon  />} />
      </BottomNavigation>
    </Box>
  );
}

