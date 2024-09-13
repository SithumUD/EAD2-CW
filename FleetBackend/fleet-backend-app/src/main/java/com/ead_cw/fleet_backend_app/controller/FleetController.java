package com.ead_cw.fleet_backend_app.controller;


import com.ead_cw.fleet_backend_app.data.Fleet;
import com.ead_cw.fleet_backend_app.service.FleetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:5173")
@RequestMapping("/fleets")
public class FleetController {

    @Autowired
    private FleetService fleetService;

/*
    @GetMapping
    public ResponseEntity<List<Fleet>> getAllFleets() {
        List<Fleet> fleets = fleetService.getAllFleets();
        return new ResponseEntity<>(fleets, HttpStatus.OK);
    }
*/

    @GetMapping
    public List<Fleet> findAllFleets(){
        return fleetService.getAllFleets();
    }


    @PostMapping
    public ResponseEntity<Fleet> createFleet(@RequestBody Fleet fleet) {
        Fleet createdFleet = fleetService.createFleet(fleet);
        return new ResponseEntity<>(createdFleet, HttpStatus.CREATED);
    }


    @GetMapping("/{id}")
    public ResponseEntity<Fleet> getFleetById(@PathVariable int id) {
        Optional<Fleet> fleet = fleetService.getFleetById(id);
        if (fleet.isPresent()) {
            return new ResponseEntity<>(fleet.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @PutMapping("/{id}")
    public ResponseEntity<Fleet> updateFleet(@PathVariable int id, @RequestBody Fleet fleet) {
        try {
            Fleet updatedFleet = fleetService.updateFleet(id, fleet);
            return new ResponseEntity<>(updatedFleet, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFleet(@PathVariable int id) {
        try {
            fleetService.deleteFleet(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


}
