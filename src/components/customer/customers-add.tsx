import React,{ useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { date } from "yup/lib/locale";

const states = [
  {
    id:1,
    value: "TPHCM",
    label: "Công an TP.HCM",
  },
  {
    id:2,
    value: "quan1",
    label: "Quận 1",
  },
  {
    id:3,
    value: "quan2",
    label: "Quận 2",
  },
  {
    id:4,
    value: "quan3",
    label: "Quận 3",
  },
  {
    id:5,
    value: "quan4",
    label: "Quận 4",
  },
  {
    id:6,
    value: "quan5",
    label: "Quận 5",
  },
];

export const CustomersAdd = (props) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address:"",
    country:"",
    workUnit:"",
    jobPosition:"",
    directManagement:"",
    titles:"",
    probationDay:"",
    officialDate:""
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form autoComplete="off" noValidate {...props}>
      <Card sx={{ width: 1000 , height: 600}}>
        <CardHeader subheader="The information can be edited" title="Add profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12} >
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                onChange={handleChange}
                type="number"
                value={values.address}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText
                InputLabelProps={{
                  shrink: true,
                }}
                label="Date of birth"
                name="dateOfBirth"
                onChange={handleChange}
                type="date"
                required
                value={values.dateOfBirth}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  row
                >
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                label="Address"
                name="address"
                onChange={handleChange}
                required
                value={values.country}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Work unit"
                name="workUnit"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.workUnit}
                variant="outlined"
              >
                {states.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Job position"
                name="jobPosition"
                onChange={handleChange}
                required
                value={values.jobPosition}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Direct management"
                name="directManagement"
                onChange={handleChange}
                required
                value={values.directManagement}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Titles"
                name="titles"
                onChange={handleChange}
                required
                value={values.titles}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText
                InputLabelProps={{
                  shrink: true,
                }}
                label="Probation Day"
                name="probationDay"
                onChange={handleChange}
                type="date"
                required
                value={values.probationDay}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText
                InputLabelProps={{
                  shrink: true,
                }}
                label="Official date"
                name="officialDate"
                onChange={handleChange}
                type="date"
                required
                value={values.officialDate}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button color="primary" variant="contained">
            Add
          </Button>
        </Box>
      </Card>
    </form>
  );
};
