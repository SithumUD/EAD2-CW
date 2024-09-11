package com.example.ms_app.controller;

import com.example.ms_app.data.Employee;
import com.example.ms_app.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;


    @GetMapping(path = "/employees")
    public List<Employee> findAllEmployees(){
        return employeeService.getEmployees();
    }

    @GetMapping(path = "/employees/{id}")
    public Employee findEmployeeById(@PathVariable int id){
        return employeeService.getEmployeeById(id);
    }

    @PostMapping(path = "/employees")
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeService.createEmployee(employee);
    }
/*
    @PutMapping(path = "/employees/{id}")
    public Employee updateEmployee(@RequestBody Employee employee){
        return employeeService.updateEmployee(employee);
    }
*/
    @PutMapping(path = "/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable int id, @RequestBody Employee employee) {
        if (employeeService.getEmployeeById(id) != null) {
            employee.setId(id);
            return ResponseEntity.ok(employeeService.updateEmployee(employee));
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @DeleteMapping(path = "/employees/{id}")
    public Employee deleteEmployee(@PathVariable int id){
        return employeeService.deleteEmployee(id);
    }

    @PostMapping("/employees/login")
    public ResponseEntity<String> loginUser(@RequestBody Employee employee) {
        boolean isValid = employeeService.validateEmployeeLogin(employee.getEmail(), employee.getPassword());
        if (isValid) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(401).body("Invalid email or password");
        }
    }
}