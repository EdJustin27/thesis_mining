<?php
header('Content-Type: application/json');

$servername = "localhost";
$username = "root"; // Replace with your MySQL username
$password = ""; // Replace with your MySQL password
$dbname = "user_management_system"; // Replace with your database name

// Create a connection to the database
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if the 'username' and 'password' fields are set in the POST request
    if (isset($_POST['username']) && isset($_POST['password'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];

        // TODO: Perform database validation here
        // You need to check if the username and password match your database records
        // Example validation:
        if ($username === 'abug_francis' && $password === 'nopassword') {
            // Login successful
            $response = array('success' => true);
        } else {
            // Login failed
            $response = array('success' => false, 'message' => 'Invalid username or password');
        }
    } else {
        $response = array('success' => false, 'message' => 'Missing username or password');
    }
} else {
    $response = array('success' => false, 'message' => 'Invalid request method');
}

echo json_encode($response);
?>
