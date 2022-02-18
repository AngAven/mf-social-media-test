import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { makeStyles } from '@material-ui/core'

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const useStyles = makeStyles({
    field: {
      marginTop: 20,
      marginBottom: 20,
    }
  })
  const classes = useStyles()

  const [institute, setInstitute] = useState('')
  const [time_period, setTimePeriod] = useState('')
  const [title, setTitle] = useState('')
  const [country, setCountry] = useState('')
  const logo = '/static/logos/platzi.jpeg'
  const [instituteError, setInstituteError] = useState(false)
  const [timeError, setTimeError] = useState(false)
  const [titleError, setTitleError] = useState(false)
  const [countryError, setCountryError] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault()
    setInstituteError(false)
    setTimeError(false)
    setTitleError(false)
    setCountryError(false)


    if (institute == '') {
      setInstituteError(true)
    }
    if (time_period == '') {
      setTimeError(true)
    }
    if (title == '') {
      setTitleError(true)
    }
    if (country == '') {
      setCountryError(true)
    }
    if (institute && time_period && title && country) {
      fetch('http://localhost:8000/data', {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ logo, institute, time_period, title, country })
      }).then(() =>setOpen(false))
    }
  }

  return (

    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Education</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add an education record, enter all the information.
          </DialogContentText>

          <TextField className={classes.field}
            onChange={(e) => setInstitute(e.target.value)}
            label="Institute"
            variant="standard"
            fullWidth
            required
            error={instituteError}
          />
          <TextField className={classes.field}
            onChange={(e) => setTimePeriod(e.target.value)}
            label="Time Period"
            variant="standard"
            fullWidth
            required
            error={timeError}
          />
          <TextField className={classes.field}
            onChange={(e) => setTitle(e.target.value)}
            label="Title"
            variant="standard"
            fullWidth
            required
            error={titleError}
          />
          <TextField className={classes.field}
            onChange={(e) => setCountry(e.target.value)}
            label="Country"
            variant="standard"
            fullWidth
            required
            error={countryError}
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handleSubmit}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
