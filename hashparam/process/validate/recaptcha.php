<?php

	require_once('recaptchalib.php');

	$privateKey = '6LeK_vwSAAAAACMd3OGSB9iu0OcV3Yg7fBsv93dX';
	$response = recaptcha_check_answer(
		$privateKey, 
		$_SERVER["REMOTE_ADDR"],
		$_POST["recaptcha_challenge_field"], 
		$_POST["recaptcha_response_field"]
	);
	
	if (!$response->is_valid) {
		throw new Exception('Recaptcha validation failed.');
	}

?>