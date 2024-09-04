package com.example.ms_app.controller;

import com.example.ms_app.data.Admin;
import com.example.ms_app.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AdminController {

    @Autowired
    private AdminService adminService;

    @GetMapping(path = "/admins")
    public List<Admin> findAllAdmins(){
        return adminService.getAdmins();
    }

    @GetMapping(path = "/admins/{id}")
    public Admin findAdminById(@PathVariable int id){
        return adminService.getAdminById(id);
    }

    @PostMapping(path = "/admins")
    public Admin createAdmin(@RequestBody Admin admin){
        return adminService.createAdmin(admin);
    }

    @PutMapping(path = "/admins/{id}")
    public Admin updateAdmin(@RequestBody Admin admin){
        return adminService.updateAdmin(admin);
    }

    @DeleteMapping(path = "/admins/{id}")
    public Admin deleteAdmin(@PathVariable int id){
        return adminService.deleteAdmin(id);
    }
}