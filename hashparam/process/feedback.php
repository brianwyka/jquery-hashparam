<?php

	header('Content-type: application/json');

	try {
		
		//include('validate/recaptcha.php');
		
		$emailAddress = $_POST['email_address'];
		$feedback = nl2br($_POST['feedback']);
		
		$to = 'brian.wyka@gmail.com';
		$subject = 'wykaPedia #hashparam Feedback';
		$from = 'wykaPedia hashparam <noreply@hashparam.wykapedia.org>';
		
		$message = "<p><b>Email Address:</b>$emailAddress</p>";
		$message .= "<p>$feedback</p>";
		
		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		$headers .= "From: $from\r\n";
		
		$response = array();
		
		mail($to, $subject, $message, $headers);
		$response['status'] = 'success';
		
	} catch (Exception $e) {
		$response['status'] = 'alert';
	}
	
	echo json_encode($response);

?>