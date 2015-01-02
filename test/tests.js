// Configure QUnit appropriately
QUnit.config.reorder = false;
QUnit.jsDump.maxDepth = 10;

// Define hash parameters for tests
var p_string, p_date, p_boolean, p_number, p_array, p_object, hashParamMap;

var HashParamTest = { };

/**
 * Initialize the globals
 */
HashParamTest.initGlobals = function () {
    
    // Define hash parameters for tests
    p_string = "God Bless America!";
    p_date = new Date(Date.parse("1776/07/04"));
    p_boolean = true;
    p_number = 1;
    p_array = [ "yes", 3, false, p_date, { "question": "answer" } ];
    p_object = { "key1": "value1", "key2": 2, "key3": [ 1, 2, 3 ], "key4": { "d": new Date() } };
    
    hashParamMap = {
        "string": p_string,
        "date": p_date,
        "boolean": p_boolean,
        "number": p_number,
        "array": p_array,
        "object": p_object
    };
    
};

/**
 * Initialize the writing portion
 */
HashParamTest.initWrite = function () {
    HashParamTest.initGlobals();
    $.fn.hashparam.clear();
};

/**
 * Initialize the reading portion
 */
HashParamTest.initRead = function () {
    HashParamTest.initGlobals();
    $.fn.hashparam.clear();
    $.fn.hashparam(hashParamMap);
};

/**
 * Destroy the test
 */
HashParamTest.destroy = function () {
    // Clear the current Hash and start fresh
    $.fn.hashparam.clear();
};

// Setup hooks for each module
HashParamTest.writeHooks = {
    beforeEach: HashParamTest.initWrite,
    afterEach: HashParamTest.destroy
};
HashParamTest.readHooks = {
    beforeEach: HashParamTest.initRead,
    afterEach: HashParamTest.destroy
};




/*******************************************************************/
/*******                  WRITING VALUES                     *******/
/*******************************************************************/
QUnit.module("WRITING VALUES", HashParamTest.writeHooks);

// Test writing an entire map
QUnit.test("$.fn.hashparam(map)", function (assert) {
    $.fn.hashparam(hashParamMap);
    var params = $.fn.hashparam();
    assert.deepEqual(params, hashParamMap, "Write hash parameter map");
});

// Test overwriting an exisitng parameter
QUnit.test("$.fn.hashparam(name, value)", function (assert) {
    var newString = "New String";
    $.fn.hashparam("string", newString);
    assert.strictEqual(newString, $.fn.hashparam("string"), "Overwriting existing parameter");
});

// Test removing a parameter
QUnit.test("$.fn.hashparam.remove(name)", function (assert) {
    $.fn.hashparam.remove("string");
    assert.strictEqual(null, $.fn.hashparam("string"), "Removing existing parameter");
});

// Test clearing all parameters
QUnit.test("$.fn.hashparam.clear()", function (assert) {
    $.fn.hashparam.clear();
    assert.deepEqual({}, $.fn.hashparam(), "Clearing all parameters");
});




/*******************************************************************/
/*******                  READING VALUES                     *******/
/*******************************************************************/
QUnit.module("READING VALUES", HashParamTest.readHooks);

// Test	Existence of parameter with name "string"
QUnit.test("$.fn.hashparam.exists(name)", function (assert) {
    assert.strictEqual(true, $.fn.hashparam.exists("string"), "Checking existence of parameter");
});

// Test	Reading String value
QUnit.test("[String] - $.fn.hashparam(string)", function (assert) {
    var h_string = $.fn.hashparam("string");
    assert.strictEqual(h_string, p_string, "Reading string parameter value");
});

// Test	Reading Date value
QUnit.test("[Date] - $.fn.hashparam(date)", function (assert) {
    var h_date = $.fn.hashparam("date");
    assert.strictEqual(h_date.getTime(), p_date.getTime(), "Reading date parameter value");
});

// Test	Reading Boolean value
QUnit.test("[Boolean] - $.fn.hashparam(boolean)", function (assert) {
    var h_boolean = $.fn.hashparam("boolean");
    assert.strictEqual(h_boolean, p_boolean, "Reading boolean parameter value");
});

// Test	Reading Number value
QUnit.test("[Number] - $.fn.hashparam(number)", function (assert) {
    var h_number = $.fn.hashparam("number");
    assert.strictEqual(h_number, p_number, "Reading number parameter value");
});

// Test	Reading Array value
QUnit.test("[Array] - $.fn.hashparam(array)", function (assert) {
    var h_array = $.fn.hashparam("array");
    assert.deepEqual(h_array, p_array, "Reading array parameter value");
});

// Test	Reading Object value
QUnit.test("[Object] - $.fn.hashparam(object)", function (assert) {
    var h_object = $.fn.hashparam("object");
    assert.deepEqual(h_object, p_object, "Reading object parameter values");
});