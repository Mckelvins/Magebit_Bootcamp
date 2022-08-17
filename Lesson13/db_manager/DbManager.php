<?php
class DbManager
{
    private $conn;
    private $table_name;
    public function __construct($table_name) {
        $this->table_name = $table_name;

        // Create connection
        $this->conn = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
        // Check connection
        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }
    }

    public function add($entry) {
        $columns_str = '';
        $values_str = '';
        foreach($entry as $key => $value) {
            $columns_str .= $key . ',';
            $values_str .= "'" . $this->conn->real_escape_string($value) . "',";
        }

        $columns_str = rtrim($columns_str, ',');
        $values_str = rtrim($values_str, ',');

        $sql = "INSERT INTO " . $this->table_name . " ($columns_str)
        VALUES ($values_str)";


        echo $sql;

        if ($this->conn->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }

    public function update() {
        $json_record = file_get_contents('todo.json');
        $decoded_json = json_decode($json_record, true);

        //izvada datus uz json
        var_dump( $decoded_json);


    }

    public function getAll() {
        $todo_table_all = $this->table_name;
        $sql = "SELECT * FROM $todo_table_all";
        $result = $this->conn->query($sql);

        if ($result != false) {
            $all_todos = $result->fetch_all(MYSQLI_ASSOC);
            print_r($all_todos);
        }
        else {
            echo $this->conn->error;
        }

    }


    public function getAllByUser($id) {
        $todo_table_name = $this->table_name;
        $sql = "SELECT $todo_table_name.id, $todo_table_name.task, user.username, user.id
        FROM $todo_table_name
        INNER JOIN user
        ON $todo_table_name.user_id=user.id where user.id = $id;";
        $result = $this->conn->query($sql);

        if ($result != false) {
            $all_todos = $result->fetch_all();
            print_r($all_todos);
        }
        else {
            echo $this->conn->error;
        }

    }

    public function __desctruct() {
        $this->conn->close();
    }
}