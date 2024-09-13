package com.ead_cw.fleet_backend_app.data;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "fleet")
public class Fleet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Size(max = 100)
    @Column(name = "description")
    private String description;

    @NotNull
    @Column(name = "guide_1_id")
    private Integer guide1Id;

    @Column(name = "guide_2_id")
    private Integer guide2Id;

    @NotNull
    @Column(name = "vehicle_1_id")
    private Integer vehicle1Id;

    @Column(name = "vehicle_2_id")
    private Integer vehicle2Id;

    @NotNull
    @Column(name = "booking_1_id")
    private Integer booking1Id;

    @Column(name = "booking_2_id")
    private Integer booking2Id;

    @Column(name = "booking_3_id")
    private Integer booking3Id;

    @Column(name = "booking_4_id")
    private Integer booking4Id;

    @NotNull
    @Column(name = "date")
    private String date;

    @NotNull
    @Column(name = "n_days")
    private Integer nDays;

    // Getters and setters

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getGuide1Id() {
        return guide1Id;
    }

    public void setGuide1Id(Integer guide1Id) {
        this.guide1Id = guide1Id;
    }

    public Integer getGuide2Id() {
        return guide2Id;
    }

    public void setGuide2Id(Integer guide2Id) {
        this.guide2Id = guide2Id;
    }

    public Integer getVehicle1Id() {
        return vehicle1Id;
    }

    public void setVehicle1Id(Integer vehicle1Id) {
        this.vehicle1Id = vehicle1Id;
    }

    public Integer getVehicle2Id() {
        return vehicle2Id;
    }

    public void setVehicle2Id(Integer vehicle2Id) {
        this.vehicle2Id = vehicle2Id;
    }

    public Integer getBooking1Id() {
        return booking1Id;
    }

    public void setBooking1Id(Integer booking1Id) {
        this.booking1Id = booking1Id;
    }

    public Integer getBooking2Id() {
        return booking2Id;
    }

    public void setBooking2Id(Integer booking2Id) {
        this.booking2Id = booking2Id;
    }

    public Integer getBooking3Id() {
        return booking3Id;
    }

    public void setBooking3Id(Integer booking3Id) {
        this.booking3Id = booking3Id;
    }

    public Integer getBooking4Id() {
        return booking4Id;
    }

    public void setBooking4Id(Integer booking4Id) {
        this.booking4Id = booking4Id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Integer getnDays() {
        return nDays;
    }

    public void setnDays(Integer nDays) {
        this.nDays = nDays;
    }
}