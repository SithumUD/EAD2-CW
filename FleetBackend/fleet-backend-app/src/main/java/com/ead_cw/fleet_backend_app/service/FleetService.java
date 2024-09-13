package com.ead_cw.fleet_backend_app.service;

import com.ead_cw.fleet_backend_app.data.Fleet;
import com.ead_cw.fleet_backend_app.data.FleetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FleetService {

    @Autowired
    private FleetRepository fleetRepository;


    // Method to get all Fleets
    public List<Fleet> getAllFleets() {
        return fleetRepository.findAll();
    }

    // Method to create a new Fleet
    public Fleet createFleet(Fleet fleet) {
        return fleetRepository.save(fleet);
    }

    // Method to get a Fleet by its ID
    public Optional<Fleet> getFleetById(int id) {
        return fleetRepository.findById(id);
    }

    // Method to update an existing Fleet
    public Fleet updateFleet(int id, Fleet fleet) {
        if (fleetRepository.existsById(id)) {
            fleet.setId(id);
            return fleetRepository.save(fleet);
        } else {
            throw new RuntimeException("Fleet not found with id: " + id);
        }
    }

    // Method to delete a Fleet by its ID
    public void deleteFleet(int id) {
        if (fleetRepository.existsById(id)) {
            fleetRepository.deleteById(id);
        } else {
            throw new RuntimeException("No fleet found with id: " + id);
        }
    }

}
