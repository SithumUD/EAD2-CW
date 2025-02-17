import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import FleetNavbar from "../../layout/fleets/FleetNavbar";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export default function Fleets() {
  const [fleets, setFleets] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    console.log("Loading fleets...");
    loadFleets();
  }, []);

  const loadFleets = async () => {
    const result = await axios.get("http://localhost:8085/fleet-api/fleets");
    console.log(result.data);
    setFleets(result.data);
  };

  const deleteFleet = async (id) => {
    await axios.delete(`http://localhost:8085/fleet-api/fleets/${id}`);
    loadFleets();
  };

  return (
    <>
      <FleetNavbar />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {/* Table View */}
        <Typography variant="h4" gutterBottom>
          Fleet List
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Fleet ID</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Launch Date</TableCell>
                <TableCell>Tour Days</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {fleets.map((fleet, index) => (
                <TableRow key={index}>
                  <TableCell>{fleet.id}</TableCell>
                  <TableCell>{fleet.description}</TableCell>
                  <TableCell>{fleet.date}</TableCell>
                  <TableCell>{fleet.nDays}</TableCell>
                  <TableCell>
                    <Button
                      component={Link}
                      to={`/fleets/view/${fleet.id}`}
                      variant="contained"
                      color="primary"
                      size="small"
                      sx={{ mr: 1 }}
                    >
                      View
                    </Button>
                    <Button
                      component={Link}
                      to={`/fleets/edit/${fleet.id}`}
                      variant="outlined"
                      color="primary"
                      size="small"
                      sx={{ mr: 1 }}
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => deleteFleet(fleet.id)}
                      variant="contained"
                      color="error"
                      size="small"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Card View */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            Fleet Details
          </Typography>
          {fleets.map((fleet, index) => (
            <Card key={index} sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Fleet ID: {fleet.id}
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText primary="Description" secondary={fleet.description} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Tour Date" secondary={fleet.date} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Tour Days" secondary={fleet.nDays} />
                  </ListItem>
                </List>
                <Box display="flex" gap={1}>
                  <Button
                    component={Link}
                    to={`/fleets/view/${fleet.id}`}
                    variant="contained"
                    color="primary"
                  >
                    View
                  </Button>
                  <Button
                    component={Link}
                    to={`/fleets/edit/${fleet.id}`}
                    variant="outlined"
                    color="primary"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => deleteFleet(fleet.id)}
                    variant="contained"
                    color="error"
                  >
                    Delete
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Go Back Button */}
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Button component={Link} to="/admin" variant="outlined">
            Go Back
          </Button>
        </Box>
      </Container>
    </>
  );
}