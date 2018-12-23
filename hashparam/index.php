<?php

	include('inc/config.php');
	
	if (empty($_PATH)) {
		$_PATH = 'home';
	}
	$pagePath = 'pages/' . $_PATH . '.php';
	
	include('inc/header.inc.php');
	
	if (file_exists($pagePath)) {
		include($pagePath);
	} else {
		include('pages/404.php');
	}
	
	include('inc/footer.inc.php');
	
?>