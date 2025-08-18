package com.spring.boot.problem;

import lombok.Getter;

@Getter
// インターン生のお２人へ @Getterは無視して大丈夫です。
public class Review {
    private String productName;
    private int rating;
    private String comment;

    public Review(String productName, int rating, String comment) {
        this.productName = productName;
        this.rating = rating;
        this.comment = comment;
    }

}
