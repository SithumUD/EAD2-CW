package com.ead_cw.employee_backend_app.data;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;

@Entity
@Table(name = "Admin")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name = "name")
    @NotEmpty(message = "name field is required")
    private String name;

    @Column(name = "email")
    @Email(message = "please enter a valid email")
    @NotEmpty(message = "email field is required")
    private String email;

    @Column(name = "password")
    @NotEmpty(message = "password field is required")
    private String password;

    @Column(name = "role")
    @NotEmpty(message = "role field is required")
    private String role;

    @Column(name = "status")
    @NotEmpty(message = "status field is required")
    private String status;


    public int getId(){
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}