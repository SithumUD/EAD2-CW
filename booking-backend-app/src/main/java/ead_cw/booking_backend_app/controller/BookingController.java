package ead_cw.booking_backend_app.controller;

import ead_cw.booking_backend_app.data.Booking;
import ead_cw.booking_backend_app.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173")

public class BookingController {

    @Autowired
    private BookingService bookingService;

    @GetMapping(path = "/bookings")
    public List<Booking> findAllBookings() {
        return bookingService.getBookings();
    }

    @GetMapping(path = "/bookings/{id}")
    public Booking findBookingById(@PathVariable int id) { return bookingService.getBookingById(id); }

    @PostMapping(path = "/bookings")
    public Booking createBooking(@RequestBody Booking booking) { return bookingService.createBooking(booking); }

    @PutMapping(path = "/bookings/{id}")
    public ResponseEntity<Booking> updateBooking(@PathVariable int id, @RequestBody Booking booking) {
        if (bookingService.getBookingById(id) != null) {
            booking.setId(id);
            return ResponseEntity.ok(bookingService.updateBooking(booking));
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping(path = "/bookings/{id}")
    public Booking deleteBooking(@PathVariable int id) {
        return bookingService.deleteBooking(id);
    }
}