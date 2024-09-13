package com.ead_cw.review_backend_app.service;


import com.ead_cw.review_backend_app.data.Review;
import com.ead_cw.review_backend_app.data.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    public List<Review> getReview() {
        return reviewRepository.findAll();
    }

    public Review getReviewById(int id) {
        Optional<Review> user = reviewRepository.findById(id);
        if (user.isPresent()) {
            return user.get();
        }
        return null;
    }

    public Review createReview(Review review) {
        String currentDate = LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));
        review.setDate(currentDate);
        return reviewRepository.save(review);
    }

    public Review updateReview(Review review) {
        if (reviewRepository.existsById(review.getId())) {
            return reviewRepository.save(review);
        }
        return null;
    }


    public void deleteReview(int id) {
        reviewRepository.deleteById(id);
    }

    public Review upadateReview(Review review) {
        return reviewRepository.save(review);
    }


}
