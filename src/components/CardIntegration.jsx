import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@mui/material/Typography';

export default function CardIntegration({item}) {
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          action={
            <IconButton >
              {item.icon}
            </IconButton>
          }
          title={
            <Typography variant='h5' >{item.text}</Typography>
          }
        />
        <CardContent>
          <Typography variant="h6" color="textSecondary">
            {item.comp}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}
