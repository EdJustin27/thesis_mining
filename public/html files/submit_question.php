<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "help_feedback_support";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $question = $_POST['question'];

    $stmt = $conn->prepare("INSERT INTO user_questions (question) VALUES (?)");
    $stmt->bind_param("s", $question);
    $stmt->execute();

    echo "Question submitted successfully";
    $stmt->close();
}

$conn->close();
?>
