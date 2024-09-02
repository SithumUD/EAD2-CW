package com.example.ms_app.service;

import com.example.ms_app.data.Admin;
import com.example.ms_app.data.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminService {
    @Autowired
    public AdminRepository adminRepository;

    public List<Admin> getAdmins(){
        return adminRepository.findAll();
    }

    public Admin getAdminById(int id){
        Optional<Admin> admin = adminRepository.findById(id);
        if (admin.isPresent()){
            return admin.get();
        }
        return null;
    }

    public Admin createAdmin(Admin admin){
        return adminRepository.save(admin);
    }

    public Admin updateAdmin(Admin admin){
        return adminRepository.save(admin);
    }

    public Admin deleteAdmin(int id){
        Optional<Admin> admin = adminRepository.findById(id);
        if (admin.isPresent()){
            adminRepository.deleteById(id);
        }
        return null;
    }
}