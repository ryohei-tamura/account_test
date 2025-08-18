package com.spring.boot.problem;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/reviews")
public class ReviewController {
    private List<Review> reviews = new ArrayList<>();

    @PostMapping
    public String addReview(@RequestBody Review review) {
        reviews.add(review);
        return "Reviewの追加に成功しました!";
    }

    @GetMapping
    public List<Review> getReviews() {
        return reviews;
    }
}
