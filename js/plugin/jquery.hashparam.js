
/**
 * jQuery hashparam - v1.0 - 11/01/2014
 * http://hashparam.wykapedia.org/
 * 
 * Copyright (c) 2014 wykaPedia [Brian Wyka]
 * MIT License
 * http://hashparam.wykapedia.org/license
 */

;( function ($, $window, $document, undefined) {
			 
	var HASH_SYMBOL = "#",
		NAME_VALUE_DELIMITER = "=",
		PARAMETER_DELIMITER = "&";
	
	/**
	 * Format a name value pair for the hash
	 * @param String - the parameter name
	 * @param String - the parameter value
	 * @return String - the formatted name,value pair
	 */
	var formatNameValuePair = function (name, value) {
		return encodeURIComponent(name) + NAME_VALUE_DELIMITER + encodeURIComponent(value);
	};
	
	/**
	 * Get a name, value pair from the given string
	 * @param String - the name, value pair string
	 * @return Map - name, value pair
	 */
	var getNameValuePair = function (nameValuePairString) {
		var nameValuePair = {},
			tokens = [];
			
		tokens = nameValuePairString.split(NAME_VALUE_DELIMITER);
		
		if (tokens.length == 2) {
			nameValuePair['name'] = $.trim(decodeURIComponent(tokens[0]));
			nameValuePair['value'] = $.trim(decodeURIComponent(tokens[1]));
		} else if (tokens.length == 1) {
			nameValuePair['name'] = $.trim(decodeURIComponent(tokens[0]));
			nameValuePair['value'] = "";
		} else {
			returnValue = null;
		}
		
		return nameValuePair;
	};
	
	/**
	 * Get the hash value in the URL
	 * @return String - the hash value (after the "#")
	 */
	var getHash = function () {
		var hash = window.location.hash.slice(1);
		if (hash == "") {
			return null;
		} else {
			return hash;
		}
	};
	
	/**
	 * Set the hash value in the URL
	 * @param Map - key / value map of hash parameters
	 */
	var setHash = function (hashParamMap) {
		var nameValuePairs = [],
			nameValuePair = "";
		
		for (var name in hashParamMap) {
			nameValuePair = formatNameValuePair(name, hashParamMap[name]);
			nameValuePairs.push(nameValuePair);	
		}
		
		window.location.hash = HASH_SYMBOL + nameValuePairs.join(PARAMETER_DELIMITER);
	};
	
	/**
	 * Get a map of hash parameter names and values
	 * @return Map - map of hash parameters
	 */
	var getHashParamMap = function () {
		var hashParamMap = {},
			nameValuePair = [],
			hash = "",
			hashParams = [];
		
		hash = getHash();
		if (hash != null) {
			hashParams = hash.split(PARAMETER_DELIMITER);
		}
		
		for (var i in hashParams) {
			nameValuePair = getNameValuePair(hashParams[i]);
			if (nameValuePair) {
				hashParamMap[nameValuePair.name] = nameValuePair.value;
			}
		}
		
		return hashParamMap;
	};
	
	/**
	 * Determine if a particular hash param exists
	 * @param String - the parameter name
	 * @return boolean - true if exists and the value is non-empty and not null
	 */
	var hasHashParam = function (name) {
		var hasHashParam = false,
			hashParamMap = getHashParamMap();
		var hashParam = hashParamMap[name];
		
		if ((hashParam == null) || (hashParam === undefined)) {
			hasHashParam = false;
		} else if ($.trim(hashParam) == "") {
			hasHashParam = false;	
		} else {
			hasHashParam = true;
		}
		
		return hasHashParam;
	};
	
	/**
	 * Get a particular parameter in the hash
	 * @param String - the name of the parameter
	 * @return String - the parameter value, or null if it does not exist
	 */
	var getHashParam = function (name) {
		var hashParamMap = getHashParamMap(),
			hashParam = null;
			
		if (hasHashParam(name)) {
			hashParam = hashParamMap[name];
		}
		
		return hashParam;
	};
	
	/**
	 * Seet a particular parameter in the hash
	 * @param String - the name of the parameter
	 * @param String - the parameter value
	 * @return String - the previous value of the parameter, or null if it was not previously set
	 */
	var setHashParam = function (name, value) {
		var hashParamMap = getHashParamMap(),
			previousHash = null;
		
		if (hasHashParam(name)) {
			previousHash = hashParamMap[name];
		}
		
		hashParamMap[name] = value;
		setHash(hashParamMap);
		
		return previousHash;
	};
	
	/**
	 * Remove the given hash parameter
	 * @param String - the name of the parameter to remove
	 */
	var removeHashParam = function (name) {
		var hashParamMap = getHashParamMap();
		delete hashParamMap[name];
		setHash(hashParamMap);
	};
	
	/**
	 * Remove the given hash parameter
	 * @param String - the name of the parameter to remove
	 */
	var clear = function (name) {
		window.location.hash = HASH_SYMBOL;
	};
	
	/**
	 * Get or set a hash parameter value
	 * @param String | Map - the name of the parameter OR map of name, value pairs (if setting)
	 * @param String - the value of the parameter, if setting (optional)
	 * @return String | Map - the hash param (for the given name if getting, the previous value if setting)
	 */
	$.fn.hashparam = function (nameOrMap, value) {
		if ($.isPlainObject(nameOrMap)) {
			var hashParamMap = getHashParamMap();
			for (var name in nameOrMap) {
				setHashParam(name, nameOrMap[name]);
			}
			return hashParamMap;
		} else if (value) {
			return setHashParam(nameOrMap, value);
		} else if (nameOrMap) {
			return getHashParam(nameOrMap);	
		} else {
			return getHashParamMap();	
		}
	};
	
	/**
	 * Remove a hash parameter from the URL
	 * @param String - the name of the parameter
	 * @return String - the previous value of the hash parameter
	 */
	$.fn.hashparam.remove = function (name) {
		var hashParam = $.fn.hashparam(name);
		
		removeHashParam(name);
		
		return hashParam;
	};
	
	/**
	 * Remove all hash parameters
	 * @return Map - the previous hash parameters
	 */
	$.fn.hashparam.clear = function () {
		var hashParamMap = getHashParamMap();
		
		clear();
		
		return hashParamMap;
	};
	
} (jQuery, window, document) );