<?php
include 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user_id = $_POST["user_id"];
    $book_id = $_POST["book_id"];
    $quantity = $_POST["quantity"];

    $sql = "INSERT INTO orders (user_id, book_id, quantity) VALUES ('$user_id', '$book_id', '$quantity')";
    if ($conn->query($sql) === TRUE) {
        echo "Order placed successfully!";
    } else {
        echo "Error: " . $conn->error;
    }
}
?>
