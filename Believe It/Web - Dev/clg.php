<?php
$un = "kalyan";
$pw = "kalyan";
$sn= "localhost";
$db = "clg";
$conn = new mysqli($sn,$un,$pw,$db);
if($conn->connect_error)
{
    die("Connection failed: " . $conn->connect_error);
}
$sql="SELECT clgname,enrollno FROM Colleges where enrollno Between 20000 and 50000";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html>

<head>
    <title>College Details</title>
    <style>
    table,
    th,
    td {
        border: 1px solid black;
        border-collapse: collapse;
    }

    th,
    td {
        padding: 10px;
    }
    </style>
</head>

<body>
    <table>
        <tr>
            <th>
                College Name
            </th>
            <th>
                Enrollment Number
            </th>
        </tr>
        <?php
            if($result->num_rows>0){
                while($row=$result->fetch_assoc()){
                    echo "<tr>";
                    foreach($row as $value){
                        echo "<td> {$value} </td>";
                    }
                    echo "</tr>";
                }
            }else{
                echo "No records found";
            }
            $conn->close();
            ?>
    </table>
</body>

</html>