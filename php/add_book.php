<?php
include 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $title = $_POST["title"];
    $author = $_POST["author"];
    $price = $_POST["price"];
    $cover_image = $_POST["cover_image"];

    $sql = "INSERT INTO books (title, author, price, cover_image) VALUES ('$title', '$author', '$price', '$cover_image')";
    if ($conn->query($sql) === TRUE) {
        echo "Book added successfully!";
    } else {
        echo "Error: " . $conn->error;
    }
}
?>
