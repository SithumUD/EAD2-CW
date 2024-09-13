package com.ead_cw.vehicle_backend_app.service;

import com.ead_cw.vehicle_backend_app.data.entity.Vehicle;
import com.ead_cw.vehicle_backend_app.data.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VehicleService {

    @Autowired
    private VehicleRepository vehicleRepository;

    public List<Vehicle> getAllVehicles() {
        return vehicleRepository.findAll();
    }

    public Vehicle getVehicleById(Integer id) {
        Optional<Vehicle> vehicle = vehicleRepository.findById(id);
        return vehicle.orElse(null);
    }

    public Vehicle createVehicle(Vehicle vehicle) {
        return vehicleRepository.save(vehicle);
    }

    public Vehicle updateVehicle(Vehicle vehicle) {
        if (vehicleRepository.existsById(vehicle.getId())) {
            return vehicleRepository.save(vehicle);
        }
        return null;
    }

    public void deleteVehicle(Integer id) {
        vehicleRepository.deleteById(id);
    }

    public List<Vehicle> getAvailableVehicles() {
        return vehicleRepository.findAllAvailableVehicles();
    }
}
