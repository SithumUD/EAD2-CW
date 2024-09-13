package com.ead_cw.vehicle_backend_app.data.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "vehicle")
public class Vehicle {


        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Integer id;

        @Column(name = "name", nullable = false)
        private String name;

        @Column(name = "type", nullable = false)
        private String type;

        @Column(name = "status")
        private String status;

        @Column(name = "n_seats")
        private int nSeats;

        // Constructors
        public Vehicle() {}

        public Vehicle(String name, String type, int quantity, String status, int nSeats) {
            this.name = name;
            this.type = type;
            this.status = status;
            this.nSeats = nSeats;
        }

        // Getters and Setters
        public Integer getId() {
            return id;
        }

        public void setId(Integer id) {
            this.id = id;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getType() {
            return type;
        }

        public void setType(String type) {
            this.type = type;
        }

        public String getStatus() {
            return status;
        }

        public void setStatus(String status) {
            this.status = status;
        }

        public int getNSeats() {
            return nSeats;
        }

        public void setNSeats(int nSeats) {
            this.nSeats = nSeats;
        }

}
