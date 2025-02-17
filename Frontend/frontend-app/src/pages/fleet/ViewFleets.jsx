import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Button,
  Box,
} from "@mui/material";

export default function ViewFleet() {
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

  const { id } = useParams();

  useEffect(() => {
    loadFleet();
  }, []);

  const loadFleet = async () => {
    const result = await axios.get(`http://localhost:8085/fleet-api/fleets/${id}`);
    console.log(result.data);
    setFleet(result.data);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      {/* Header */}
      <Typography variant="h4" gutterBottom align="center">
        Fleet Details
      </Typography>

      {/* Fleet Card */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Fleet ID: {fleet.id}
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Fleet Description" secondary={fleet.description} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Guide No1 ID" secondary={fleet.guide1Id} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Guide No2 ID" secondary={fleet.guide2Id} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Vehicle No1 ID" secondary={fleet.vehicle1Id} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Vehicle No2 ID" secondary={fleet.vehicle2Id} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Booking No1 ID" secondary={fleet.booking1Id} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Booking No2 ID" secondary={fleet.booking2Id} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Booking No3 ID" secondary={fleet.booking3Id} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Booking No4 ID" secondary={fleet.booking4Id} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Tour Date" secondary={fleet.date} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Tour Days" secondary={fleet.nDays} />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      {/* Back Button */}
      <Box sx={{ textAlign: "center" }}>
        <Button component={Link} to="/fleets" variant="contained" color="primary">
          Back to Fleets
        </Button>
      </Box>
    </Container>
  );
}