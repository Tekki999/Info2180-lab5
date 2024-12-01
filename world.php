<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");


$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);

if (isset($_GET['country'])) {
  $country = $_GET['country'];
  $stmt = $conn->prepare("SELECT * FROM countries WHERE name LIKE :country");
  $stmt->bindValue(':country', '%' . $country . '%', PDO::PARAM_STR);
  $stmt->execute();
} else {
  $stmt = $conn->query("SELECT * FROM countries");
}

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

?>
<table border="1">
    <thead>
        <tr>
            <th>Country Name</th>
            <th>Continent</th>
            <th>Independence Year</th>
            <th>Head of State</th>
        </tr>
    </thead>
    <tbody>
    <?php foreach ($results as $row): ?>
        <tr>
            <td><?= htmlspecialchars($row['name']); ?></td>
            <td><?= htmlspecialchars($row['continent']); ?></td>
            <td><?= htmlspecialchars($row['independence_year'] ?? 'N/A'); ?></td>
            <td><?= htmlspecialchars($row['head_of_state']); ?></td>
        </tr>
    <?php endforeach; ?>
    </tbody>
</table>
