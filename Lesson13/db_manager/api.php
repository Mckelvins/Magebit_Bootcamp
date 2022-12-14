<?php

include(__DIR__ . '/config.php');
include(__DIR__ . '/DbManager.php');
$db = new DbManager('todo_list');

if (hasGetKey('api-name')) {
    echo "new listtttt";
    switch ($_GET['api-name']) {
        case 'insert':
            echo "<h1>insert</h1>";
            if (isset($_REQUEST['entry']) && is_array($_REQUEST['entry'])) {
                $accepted_keys = ['task' => null, 'status' => null];
                $entry = array_intersect_key($_REQUEST['entry'], $accepted_keys);
                foreach ($entry as $value) {
                    if (!is_string($value)) {
                        echo "some of value are not strings";
                        exit;
                    }
                }

                $db->add($entry);
            }
            else {
                echo 'something went wrong';
            }

            break;
        case 'select-all':
            echo "<h1>select</h1>";
            $db->update();
    }
}

function hasGetKey($key) {
    return (isset($_GET[$key]) && is_string($_GET[$key]));
}

function hasPostKey($key) {
    return (isset($_POST[$key]) && is_string($_POST[$key]));
}