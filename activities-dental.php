<?php 
session_start();
include_once('define.php');
include_once('connect-db.php');

if(!isset($_SESSION['SESS_USERID'])){
	header("Location:login.php");
}
?>

	<!--header-->
	<?php include_once('variables/header.php');?>


<html>
<body>	
    <!-- Tab Menu -->
	<?php include_once('variables/tabmenu.php');?>
	<h1 id="top"><?php echo $_SESSION['SESS_USERNAME'];?>, <? echo $_SESSION['SESS_TITLE']; ?></h1>
	
	<div id="inside">
	<!-- Side Menu -->
	<?php include_once("variables/sidemenu.php");?>
		<div id="content">
            <br/><br/>
			<h3 align="center">Activities</h3>
			<input type="button" value="Back" onclick="goBack()" class="buttonSave" />
			<br/><br/>
			
			<a href = "add.activity-dental.php">Add new activity</a>
			<table>
				<tr>
					<th>Date</th>
					<th>Activity Name</th>
					<th>Place</th>
					<th>Edit</th>
					<th>Delete</th>
				</tr>			
			<?php
				$cmd = "SELECT * FROM ".TBL_DENTALACTIVITIES." ORDER BY Date DESC";
				if($data = mysql_query($cmd))
				{
					while($res = mysql_fetch_array($data))
					{
						$date = $res['date'];
						if($date == '0000-00-00')
						{	$date = '';	}
						$activityName = $res['activityName'];
						$activityPlace = $res['activityPlace'];
						$activityID = $res['dentalActID'];
						
						$newactivityName = str_replace("\"", "'", $activityName);
						$newactivityPlace = str_replace("\"", "'", $activityPlace);
						
						?>
							<tr>
								<td><?=$date?></td>
								<td><?=$newactivityName?></td>
								<td><?=$newactivityPlace?></td>
								<td><a href = "editconfirm.activity-dental.php?id=<?=$activityID?>">[edit]</a></td>
								<td><a href = "deleteconfirm.activity-dental.php?id=<?=$activityID?>">[delete]</a></td>
							</tr>
						<?php
					}
				}
				else
				{
					die(mysql_error());
				}
			?>
			</table>

				
        </div>		
	</div><!-- end of inside -->
	<!-- Footer -->
	<?php include_once('variables/footer.php');?>

</body>
</html>