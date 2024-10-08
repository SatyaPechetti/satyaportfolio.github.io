<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $number = $_POST["number"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    $to = "satya5782@yahoo.com"; // Replace with the recipient's email address
    $subject = "New Contact Form Portfolio";
    $headers = "From: $email\r\n";
    
    // Optionally, you can add more headers or modify the message content here.
    // For example, you might want to add a "Reply-To" header or format the email content.

    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you! Your message has been sent.";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
}
?>
