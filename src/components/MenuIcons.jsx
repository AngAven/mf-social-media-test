import * as React from 'react';
import Box from '@mui/material/Box';
import TrackerIcon from '@mui/icons-material/AutoGraph';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import { Typography } from '@mui/material';

export default function SimpleBottomNavigation() {


  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue,theme) => {
          setValue(newValue,theme);

        }}
      >
      <BottomNavigationAction label={<Typography sx={{fontSize:14}}>Integrations</Typography>} icon={<DynamicFeedIcon sx={{fontSize:23}} />}/>
      <BottomNavigationAction label={<Typography sx={{fontSize:14}}>Statistic</Typography>} icon={<ExtensionOutlinedIcon  sx={{fontSize:23}}/>}/>
      <BottomNavigationAction label={<Typography sx={{fontSize:14}}>Tracker</Typography>} icon={<SavedSearchIcon  sx={{fontSize:23}}/>}/>
      <BottomNavigationAction label={<Typography sx={{fontSize:14}}>Analytics</Typography>} icon={<TrackerIcon sx={{fontSize:23}} />}/>
      </BottomNavigation>
    </Box>
  );
}

