
/**
 * jQuery hashparam - v2.0 - 01/02/2015
 * http://hashparam.wykapedia.org/
 * 
 * Copyright (c) 2014 wykaPedia [Brian Wyka]
 * MIT License
 * http://hashparam.wykapedia.org/license
 */

;( function ($, $window, $document, undefined) {
			 
	var HASH_CHARACTER = "#",
		NAME_VALUE_DELIMITER = "=",
		PARAMETER_DELIMITER = "&",
		ARRAY_PARAM_DELIMITER = "@@";
	
	/**
	 * Format a name value pair for the hash
	 * @param String - the parameter name
	 * @param String - the parameter value
	 * @return String - the formatted name,value pair
	 */
	var formatNameValuePair = function (name, value) {
		var nameValuePair;
		
		nameValuePair = serializeName(name);
		nameValuePair += NAME_VALUE_DELIMITER;
		nameValuePair += serializeValue(value);
		
		return nameValuePair;
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
			nameValuePair.name = unserializeName(tokens[0]);
            nameValuePair.value = unserializeValue(tokens[1]);
		} else if (tokens.length == 1) {
			nameValuePair.name = unserializeName(tokens[0]);
			nameValuePair.value = "";
		} else {
			nameValuePair = null;
		}
		
		return nameValuePair;
	};
    
	/**
	 * Serialize the name for URL serialization
	 * @param String - the name to serialize
	 * @return String - the serialized name
	 */
	var serializeName = function (name) {
		return encodeURIComponent($.trim(name));
	};
	
	/**
	 * Serialize the value for URL serialization
	 * @param Object - the value to serialize
	 * @return String - the serialized value
	 */
	var serializeValue = function (value) {
        var replacer = function (k, v) {
            if ($.type(this[k]) === "date") {
                return "{hpDate=" + this[k].getTime() + "}";
            }
            return v;
        };
        var jsonString = JSON.stringify(value, replacer);
		return encodeURIComponent(jsonString);
	};
    
	/**
	 * Unserialize the name from the URL
	 * @param String - the name to unserialize
	 * @return String - the unserialized name
	 */
	var unserializeName = function (name) {
		return decodeURIComponent(name);
	};
	
	/**
	 * Unserialize the value from the URL
	 * @param Object - the value to unserialize
	 * @return String - the unserialized value
	 */
	var unserializeValue = function (value) {
        var reviver = function (k, v) {
            var regex = /\{hpDate=(.*)\}/;
            if ($.type(v) === "string" && regex.test(v)) {
                var matches = v.match(regex);
                if (matches.length == 2) {
                    var time = new Number(matches[1]).valueOf();
                    return new Date(time);
                }
            }
            return v;
        };
        var jsonString = decodeURIComponent(value);
        try {
            return JSON.parse(jsonString, reviver);
        } catch (e) {
            // Most likely a plain string
            return jsonString;
        }
	};
	
	/**
	 * Get the raw hash value in the URL
	 * @return String - the hash value (after the "#")
	 */
	var getRawHash = function () {
		var hash = $window.location.hash.slice(1);
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
		
		$window.location.hash = HASH_CHARACTER + nameValuePairs.join(PARAMETER_DELIMITER);
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
		
		hash = getRawHash();
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
		var hashParam = hashParamMap[$.trim(name)];
		
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
		var hashParamMap = null,
			hashParam = null;
			
		if (hasHashParam(name)) {
			hashParamMap = getHashParamMap();
			hashParam = hashParamMap[$.trim(name)];
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
	 */
	var clear = function () {
		$window.location.hash = HASH_CHARACTER;
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
	 * Determine if a particular hash parameter exists
	 * @param String - the name of the parameter
	 * @return Boolean - true if parameter exists, false otherwise
	 */
	$.fn.hashparam.exists = function (name) {
		return hasHashParam(name);
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