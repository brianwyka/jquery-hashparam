<?php

	define('VERSION', '1');
	
	$path = $_GET['path'];
	$path = trim($path);
	$path = str_replace('-', '_', $path);
	$path = strtolower($path);
	if (substr($path, -1) === "/") {
		$path = substr($path, 0, (strlen($path) - 1));
	}
	
	$_TITLE = ucfirst($path) . " | ";
	
	$_KEYWORDS = 'jquery hash param,jquery hash,hash parameter,jquery hashparam,jquery param,jquery hash parameter,jquery hash parameters,jquery hash';
	$_DESCRIPTION = '#hashparam is a jQuery plugin which abstracts getting and setting hash parameters in the URL. 
        This plugin is very useful when using the hash portion of the URL for event handling through jQuery 
		as well as hash-based navigation.  This is an alternative to using request parameters which 
        require a full page reload when changing. With this plugin, all parameter changes can be handled 
        on the client-side and can be dispatched from there within your own custom javascript implementation.';
	
	if ($path == "") {
		$_TITLE = "Home | ";
	} else if ($path == "home") {
		$path = "";
	}
	
	$_URL = "http://$_SERVER[HTTP_HOST]/";
	$_PATH = $path;
	
	$_CANONICAL = $_URL . $_PATH;
	if ((substr($_CANONICAL, -1) != "/")) {
		$_CANONICAL .= "/";
	}
	
	unset($_GET['path']);
	
?>