import {Checkbox, FormControlLabel } from '@mui/material'
import React from 'react'

const CheckBox = () => {
  return (
    <FormControlLabel control={<Checkbox defaultChecked />} label="I Agree to MyApp Terms and Policies"/>
  )
}

export default CheckBox