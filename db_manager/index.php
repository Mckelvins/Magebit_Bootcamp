<?php

echo "hello";


if (hasGetKey('api-name')) {
  switch ($_GET['api-name']) {
      case 'create-db':
          echo "<h1>CREATE DB</h1>";
          createDatabase('project_managment2');
          break;
      case 'create-table':
          echo "<h1>CREATE TABLE</h1>";
          createTable('todo_list');
  }
}

function hasGetKey($key) {
  echo "key";
  return (isset($_GET[$key]) && is_string($_GET[$key]));
}

function create_DB($_tname){
    require 'login.php';  

    // sql to create table
    $sql = "CREATE TABLE $t_name (
      id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
      task VARCHAR(100) NOT NULL,
      status INT(1) NOT NULL
  )";

  if ($conn->query($sql) === TRUE) {
      echo "Table $t_name created successfully";
  } else {
      echo "Error creating table: " . $conn->error;
  }

  $conn->close();
}

function createDatabase($db_name) {
      require 'login.php'; 
      
      // Create database
      $sql = "CREATE DATABASE $db_name";
        if ($conn->query($sql) === TRUE) {
            echo "Database created successfully";
        } else {
            echo "Error creating database: " . $conn->error;
        }

        $conn->close();
}
?>
