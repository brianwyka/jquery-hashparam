### HEAD

### 2.0 (January 2, 2015)

* Enhanced to maintain and preserve types when writing and reading hash parameters.  Parameter types are automatically detected before write and then are then converted to a string representation to be used in the URL.  Upon read, the parameters are then converted back to their respective types.
* Added $.fn.hashparam.exists(name) function to determine if a particular parameter exists
* Added QUnit tests for reading and writing parameters

### 1.0 (October 20, 2014)

* Initial version
