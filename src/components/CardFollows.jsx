import React, { useContext } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper } from '@material-ui/core'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import AppContext from '@context/AppContext'


export default function CardFollows() {

    const { state } = useContext(AppContext)
    const { facebook, linkedin, twitter } = state

    const followItems = [
        {
          id: "1",
          socialmedia: "facebook",
          following: <>{facebook.follow_people}</>,
          followers: <>{facebook.followers}</>,
          icon:<FacebookIcon color="primary" style={{ fontSize: 25 }}/>
        },
        {
            id: "2",
            socialmedia: "twitter",
            following: <>{twitter.follow_people}</>,
            followers: <>{twitter.followers}</>,
            icon:<TwitterIcon color="primary" style={{ fontSize: 25 }}/>
          }
        ,
        {
            id: "3",
            socialmedia: "linkedin",
            following: <>{linkedin.follow_people}</>,
            followers: <>{linkedin.followers}</>,
            icon:<LinkedInIcon color="primary" style={{ fontSize: 25 }} />
          }
      ]
;

    return (
        <div>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{"& th": {fontSize:"1.5rem"}, backgroundColor:"#f6f6f6"}}>
                            <TableCell align="center">Social Media</TableCell>
                            <TableCell align="center">Following</TableCell>
                            <TableCell align="center">Followers</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {followItems.map((item)=> (
                            <TableRow
                            key={item.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0}}}
                            >
                            <TableCell align="center">{item.icon}</TableCell>
                            <TableCell align="center" sx={{fontSize:"1.25rem"}}>{item.followers}</TableCell>
                            <TableCell align="center" sx={{fontSize:"1.25rem"}}>{item.following}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
               </Table>
            </TableContainer>
        </div>
    )
}