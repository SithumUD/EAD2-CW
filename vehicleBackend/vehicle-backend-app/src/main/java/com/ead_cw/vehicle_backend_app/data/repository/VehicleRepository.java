package com.ead_cw.vehicle_backend_app.data.repository;

import com.ead_cw.vehicle_backend_app.data.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Integer> {
}
