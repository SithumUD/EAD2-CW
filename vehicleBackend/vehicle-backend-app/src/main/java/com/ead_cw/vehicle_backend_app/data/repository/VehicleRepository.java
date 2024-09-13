package com.ead_cw.vehicle_backend_app.data.repository;

import com.ead_cw.vehicle_backend_app.data.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Integer> {

    @Query("SELECT v FROM Vehicle v WHERE v.status = 'available'")
    List<Vehicle> findAllAvailableVehicles();
}
