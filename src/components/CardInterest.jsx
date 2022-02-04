import React, { useContext,useState } from 'react'
import { Divider, Stack } from '@mui/material'
import { Chip } from '@mui/material'
import AppContext from '@context/AppContext'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function CardInterest() {

    const { state } = useContext(AppContext)
    const { facebook, linkedin, twitter } = state

    const [clicked, setClicked] = useState(false);
    const handleClick=()=>{
        setClicked(true)
    }


    return (
        <div>
            <Divider style={{width:'100%',padding:1, fontSize:'1rem'}}>FACEBOOK</Divider>
            <Stack
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={1}
                flexWrap='wrap'
            >
                {facebook.groups && facebook.groups.map(group=>(
                    <Chip key={group.id} label={group.name} icon={<VisibilityIcon/>}>
                    </Chip>
                ))}
            </Stack>
            <Divider style={{width:'100%',padding:1, fontSize:'1rem'}}>TWITTER</Divider>
            <Stack
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={1}
                flexWrap='wrap'
            >
                {twitter.groups && twitter.groups.map(group=>(
                    <Chip key={group.id}
                    label={group.name}
                    icon={<VisibilityOffIcon/> }
                    >
                    </Chip>
                ))}
            </Stack>
            <Divider style={{width:'100%',padding:1, fontSize:'1rem'}}>LINKEDIN</Divider>
            <Stack
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={1}
                flexWrap='wrap'
            >
                {linkedin.groups && linkedin.groups.map(group=>(
                    <Chip key={group.id} label={group.name} icon={<VisibilityIcon/>}>
                    </Chip>
                ))}
            </Stack>
        </div>
    )
}