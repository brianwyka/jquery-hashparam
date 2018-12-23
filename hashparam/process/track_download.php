<?php

	header('Content-type: application/json');

	try {
		
		$userAgent = $_SERVER['HTTP_USER_AGENT'];
		$minified = ($_POST['minified'] == "true") ? 1 : 0;
		$version = mysql_escape_string($_POST['version']);
		
		$to = 'brian.wyka@gmail.com';
		$subject = 'wykaPedia #hashparam Download';
		$from = 'wykaPedia hashparam <noreply@hashparam.wykapedia.org>';
		
		$message = "<p><b>New Download of Version:</b> $version</p>";
		
		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		$headers .= "From: $from\r\n";
		
		$sql = "INSERT INTO hashparam_downloads(user_agent,minified,version) ";
		$sql .= " VALUES ('$userAgent',$minified,'$version')";
		
		$response = array();
		
		$link = mysql_connect('mysql1001.mochahost.com', 'wykaman_wyka', 'FA*O&nfo9n&SA(');
		mysql_select_db('wykaman_wykapedia', $link);
		mysql_query($sql, $link);
		mysql_close($link);
		
		mail($to, $subject, $message, $headers);
		
		$response['status'] = 'success';
		
	} catch (Exception $e) {
		$response['status'] = 'alert';
	}
	
	echo json_encode($response);

?>