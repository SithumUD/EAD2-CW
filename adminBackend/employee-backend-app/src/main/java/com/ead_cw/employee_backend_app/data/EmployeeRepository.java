package com.ead_cw.employee_backend_app.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

    //Optional<Employee> findByEmail(String email); //just use jpql as told
    @Query("SELECT e FROM Employee e WHERE e.email = :email AND e.status NOT IN ('disabled')")
    Optional<Employee> findByEmail(@Param("email") String email);

    @Query("SELECT e FROM Employee e WHERE e.role = 'guide' AND e.status = 'active'")
    List<Employee> findAllActiveGuides();
}
