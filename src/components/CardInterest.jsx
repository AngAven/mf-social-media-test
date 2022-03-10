import React, { useContext,useState } from 'react'
import { Divider, Stack } from '@mui/material'
import { Chip } from '@mui/material'
import AppContext from '@context/AppContext'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function CardInterest() {

    const { state } = useContext(AppContext)
    const { facebook, linkedin, twitter } = state
    const { currentObject, dashBoardSelected } = state

    const [clicked, setClicked] = useState(false);
    const handleClick=()=>{
        setClicked(true)
    }


    return (
        <div>
            <Stack
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={1}
                flexWrap='wrap'
            >
                {currentObject ? currentObject.groups && currentObject.groups.map(group=>(
                    <Chip key={group.id} label={group.name} icon={<VisibilityIcon/>}>
                    </Chip>
                )): ''}
            </Stack>
                   </div>
    )
}