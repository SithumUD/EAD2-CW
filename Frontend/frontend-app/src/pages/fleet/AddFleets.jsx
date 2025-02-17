import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Box,
  Grid,
} from "@mui/material";

export default function AddFleet() {
  const [vehicles, setVehicles] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [employees, setEmployees] = useState([]);

  const navigate = useNavigate();

  const [fleet, setFleet] = useState({
    id: "",
    description: "",
    guide1Id: "",
    guide2Id: "",
    vehicle1Id: "",
    vehicle2Id: "",
    booking1Id: "",
    booking2Id: "",
    booking3Id: "",
    booking4Id: "",
    date: "",
    nDays: "",
  });

  const {
    description,
    guide1Id,
    guide2Id,
    vehicle1Id,
    vehicle2Id,
    booking1Id,
    booking2Id,
    booking3Id,
    booking4Id,
    date,
    nDays,
  } = fleet;

  const onInputChange = (e) => {
    setFleet({ ...fleet, [e.target.name]: e.target.value || "" });
  };

  useEffect(() => {
    loadVehicles();
    loadBookings();
    loadEmployees();
  }, []);

  const loadVehicles = async () => {
    const result = await axios.get("http://localhost:8083/vehicle-api/available-vehicles");
    setVehicles(result.data);
  };

  const loadBookings = async () => {
    const result = await axios.get("http://localhost:8082/booking-api/bookings");
    setBookings(result.data);
  };

  const loadEmployees = async () => {
    const result = await axios.get("http://localhost:8081/employee-api/available-guides");
    setEmployees(result.data);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8085/fleet-api/fleets", fleet);
    navigate("/fleets");
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Register Fleet
      </Typography>
      <Box component="form" onSubmit={onSubmit} sx={{ mt: 2 }}>
        <Grid container spacing={3}>
          {/* Fleet Description */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Fleet Description"
              name="description"
              value={description}
              onChange={onInputChange}
            />
          </Grid>

          {/* Guide No1 Id */}
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Guide No1 Id</InputLabel>
              <Select
                name="guide1Id"
                value={guide1Id}
                label="Guide No1 Id"
                onChange={onInputChange}
              >
                <MenuItem value="">Select a guide id</MenuItem>
                {employees.map((employee) => (
                  <MenuItem key={employee.id} value={employee.id}>
                    {employee.id} - {employee.name} ({employee.email})
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Guide No2 Id */}
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Guide No2 Id</InputLabel>
              <Select
                name="guide2Id"
                value={guide2Id}
                label="Guide No2 Id"
                onChange={onInputChange}
              >
                <MenuItem value="">Select a guide id</MenuItem>
                {employees.map((employee) => (
                  <MenuItem key={employee.id} value={employee.id}>
                    {employee.id} - {employee.name} ({employee.email})
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Vehicle No1 Id */}
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Vehicle No1 Id</InputLabel>
              <Select
                name="vehicle1Id"
                value={vehicle1Id}
                label="Vehicle No1 Id"
                onChange={onInputChange}
              >
                <MenuItem value="">Select a vehicle id</MenuItem>
                {vehicles.map((vehicle) => (
                  <MenuItem key={vehicle.id} value={vehicle.id}>
                    {vehicle.id} - {vehicle.name} ({vehicle.type})
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Vehicle No2 Id */}
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Vehicle No2 Id</InputLabel>
              <Select
                name="vehicle2Id"
                value={vehicle2Id}
                label="Vehicle No2 Id"
                onChange={onInputChange}
              >
                <MenuItem value="">Select a vehicle id</MenuItem>
                {vehicles.map((vehicle) => (
                  <MenuItem key={vehicle.id} value={vehicle.id}>
                    {vehicle.id} - {vehicle.name} ({vehicle.type})
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Booking No1 Id */}
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Booking No1 Id</InputLabel>
              <Select
                name="booking1Id"
                value={booking1Id}
                label="Booking No1 Id"
                onChange={onInputChange}
              >
                <MenuItem value="">Select a booking id</MenuItem>
                {bookings.map((booking) => (
                  <MenuItem key={booking.id} value={booking.id}>
                    {booking.id} - {booking.budget} ({booking.days}-pax) on {booking.date}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Repeat similar structure for Booking No2, No3, No4 */}

          {/* Tour Days */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Tour Days"
              name="nDays"
              type="number"
              value={nDays}
              onChange={onInputChange}
            />
          </Grid>

          {/* Tour Date */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Tour Date"
              name="date"
              type="date"
              value={date}
              onChange={onInputChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          {/* Submit and Cancel Buttons */}
          <Grid item xs={12}>
            <Box display="flex" justifyContent="space-between">
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
              <Button component={Link} to="/fleets" variant="outlined">
                Cancel
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}