import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

class Review {
    private String productName;
    private int rating; // 1 to 5
    private String comment;

    public Review(String productName, int rating, String comment) {
        this.productName = productName;
        this.rating = rating;
        this.comment = comment;
    }

    public String getProductName() {
        return productName;
    }

    public int getRating() {
        return rating;
    }

    public String getComment() {
        return comment;
    }

    @Override
    public String toString() {
        return "Product: " + productName + "\nRating: " + rating + "/5\nComment: " + comment + "\n";
    }
}

public class ProductReviewApp {
    private static List<Review> reviews = new ArrayList<>();
    private static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        while (true) {
            System.out.println("1. Add a review");
            System.out.println("2. Show all reviews");
            System.out.println("3. Exit");
            System.out.print("Select an option: ");

            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume newline

            switch (choice) {
                case 1:
                    addReview();
                    break;
                case 2:
                    showReviews();
                    break;
                case 3:
                    System.out.println("Exiting...");
                    return;
                default:
                    System.out.println("Invalid choice. Please select 1, 2, or 3.");
            }
        }
    }

    private static void addReview() {
        System.out.print("Enter product name: ");
        String productName = scanner.nextLine();

        System.out.print("Enter rating (1-5): ");
        int rating = scanner.nextInt();
        scanner.nextLine(); // Consume newline

        System.out.print("Enter your comment: ");
        String comment = scanner.nextLine();

        Review review = new Review(productName, rating, comment);
        reviews.add(review);

        System.out.println("Review added successfully!\n");
    }

    private static void showReviews() {
        if (reviews.isEmpty()) {
            System.out.println("No reviews available.");
        } else {
            System.out.println("\n--- All Reviews ---");
            for (Review review : reviews) {
                System.out.println(review);
            }
        }
    }
}
