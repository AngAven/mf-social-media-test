import * as React from 'react';
import Box from '@mui/material/Box';
import TrackerIcon from '@mui/icons-material/AutoGraph';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import { Typography } from '@mui/material';
import { useHistory } from 'react-router-dom'


export default function SimpleBottomNavigation() {

  const [value, setValue] = React.useState(0);
  const history = useHistory();

  const handleChange = (event, newValue) => {
    history.push(`/${newValue}`);
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleChange}
      >
      <BottomNavigationAction value={""} label={<Typography sx={{ fontSize: 12 }}>Integrations</Typography>} icon={<DynamicFeedIcon sx={{ fontSize: 23 }} />} />
        <BottomNavigationAction href={" https://get-hired-code-tracker.vercel.app/"} label={<Typography sx={{ fontSize: 12 }}>Tracker</Typography>} icon={<ExtensionOutlinedIcon sx={{ fontSize: 23 }} />} />
        {/* <BottomNavigationAction href="https://mf-extensions.vercel.app/" label={<Typography sx={{ fontSize: 12 }}>Tracker</Typography>} icon={<SavedSearchIcon sx={{ fontSize: 23 }} />} /> */}
        <BottomNavigationAction href="https://dashboard-integrations.herokuapp.com/ " label={<Typography sx={{ fontSize: 12 }}>Analytics</Typography>} icon={<TrackerIcon sx={{ fontSize: 23 }} />} />
      </BottomNavigation>
    </Box>
  );
}

