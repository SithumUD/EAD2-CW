package com.ead_cw.review_backend_app.controller;


import com.ead_cw.review_backend_app.data.Review;
import com.ead_cw.review_backend_app.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin("http://localhost:5173")
public class ReviewController {
    @Autowired
    private ReviewService reviewService;

    @GetMapping(path = "/reviews")
    public List<Review> findAllUsers(){
        return reviewService.getReview();
    }

    @GetMapping(path = "/reviews/{id}")
    public Review findReviewById(@PathVariable int id){
        return reviewService.getReviewById(id);
    }

    @PostMapping(path = "/reviews")
    public Review createReview(@RequestBody Review review){
        return reviewService.createReview( review);
    }

    @PutMapping("/reviews/{id}")
    public ResponseEntity<Review> updateReview(@PathVariable int id, @RequestBody Review review) {
        if (reviewService.getReviewById(id) != null) {
            review.setId(id);
            return ResponseEntity.ok(reviewService.upadateReview(review));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping(path = "/reviews/{id}")
    public void deleteReview(@PathVariable int id) {
        reviewService.deleteReview(id);
    }

}
