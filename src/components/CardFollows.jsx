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
    const { currentObject, dashBoardSelected } = state

    console.log(currentObject)

    const followItems = [
        {
          id: 1,
          socialmedia: "facebook",
          following: <>{currentObject ? "holi" : "se murio"}</>,
          followers: <>{783}</>,
          icon:<FacebookIcon color="primary" style={{ fontSize: 25 }}/>
        },
        {
            id: 2,
            socialmedia: "twitter",
            following: <>{342}</>,
            followers: <>{458}</>,
            icon:<TwitterIcon color="primary" style={{ fontSize: 25 }}/>
          }
        ,
        {
            id: 3,
            socialmedia: "linkedin",
            following: <>{250}</>,
            followers: <>{300}</>,
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
                        {currentObject ? currentObject.followsSM && currentObject.followsSM.map((fol)=> (
                            <TableRow
                            key={fol.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0}}}
                            >
                            <TableCell align="center">{fol.id==1? <FacebookIcon color="primary"/> : fol.id ==2 ? <TwitterIcon color="primary"/> : <LinkedInIcon color="primary"/>}</TableCell>
                            <TableCell align="center" sx={{fontSize:"1.25rem"}}>{fol.followers}</TableCell>
                            <TableCell align="center" sx={{fontSize:"1.25rem"}}>{fol.following}</TableCell>
                            </TableRow>
                        )): ''}
                    </TableBody>
               </Table>
            </TableContainer>
        </div>
    )
}