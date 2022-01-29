import React, { useContext, useState } from 'react'
import { Divider, Stack } from '@mui/material'
import { Chip } from '@mui/material'
import { Grid } from '@material-ui/core'
import AppContext from '@context/AppContext'
import { Box } from '@mui/system';

export default function CardInterest() {

    const { state } = useContext(AppContext)
    const { facebook, linkedin, twitter } = state

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
                    <Chip key={group.id} label={group.name} >
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
                    <Chip key={group.id} label={group.name}>
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
                    <Chip key={group.id} label={group.name}>
                    </Chip>
                ))}
            </Stack>
        </div>
    )
}