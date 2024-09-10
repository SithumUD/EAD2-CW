package ead_cw.booking_backend_app.service;

import ead_cw.booking_backend_app.data.Booking;
import ead_cw.booking_backend_app.data.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingService {
    @Autowired
    public BookingRepository bookingRepository;

    public List<Booking> getBookings() {
        return bookingRepository.findAll();
    }

    public Booking getBookingById(int id){
        Optional<Booking> booking = bookingRepository.findById(id);
        if (booking.isPresent()){
            return booking.get();
        }
        return null;
    }

    public Booking createBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    public Booking updateBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    public Booking deleteBooking(int id){
        Optional<Booking> booking = bookingRepository.findById(id);
        if (booking.isPresent()){
            bookingRepository.deleteById(id);
        }
        return null;
    }
}