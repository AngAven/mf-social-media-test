import * as React from 'react';
import Box from '@mui/material/Box';
import IntegrationIcon from '@mui/icons-material/Web';
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
      </BottomNavigation>
    </Box>
  );
}

