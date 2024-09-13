package com.ead_cw.employee_backend_app.service;


import com.ead_cw.employee_backend_app.data.Employee;
import com.ead_cw.employee_backend_app.data.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {
    @Autowired
    public EmployeeRepository employeeRepository;

    public List<Employee> getEmployees(){
        return employeeRepository.findAll();
    }

    public Employee getEmployeeById(int id){
        Optional<Employee> employee = employeeRepository.findById(id);
        if (employee.isPresent()){
            return employee.get();
        }
        return null;
    }

    public Employee createEmployee(Employee employee){
        return employeeRepository.save(employee);
    }

    public Employee updateEmployee(Employee employee){
        return employeeRepository.save(employee);
    }

    public Employee deleteEmployee(int id){
        Optional<Employee> employee = employeeRepository.findById(id);
        if (employee.isPresent()){
            employeeRepository.deleteById(id);
        }
        return null;
    }

    public boolean validateEmployeeLogin(String email, String password) {
        Optional<Employee> employeeOptional = employeeRepository.findByEmail(email);
        if (employeeOptional.isPresent()) {
            Employee employee = employeeOptional.get();
            // Simple password validation (in production, use encrypted passwords)
            return employee.getPassword().equals(password);
        }
        return false;  // Return false if user not found or password is incorrect
    }

    public List<Employee> findAllActiveGuides() {
        return employeeRepository.findAllActiveGuides();
    }

}