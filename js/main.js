
var Page = { };

Page.init = function () {
	Forms.init();
};

var Forms = { };

Forms.init = function () {
	
	$("form.ajax").submit(function () {
		var form = $(this);
		var request = $.ajax({
			dataType: "json",
			type: $(this).attr("method"),
			url: $(this).attr("action"),
			data: $(this).serialize(),
		}).done(function (response) {
			form.trigger("reset");
		}).fail(function (error) {
			form.find("div.alert-box.alert").show();
		}).always(function (response) {
			form.find("div.alert-box." + response.status).show();
		});
		return false;
	});
	
};

Page['demo'] = function () {
	
	
	
};

Page['download'] = function () {
	
	$("a.download-link").click(function () {
		var link = $(this), href = $(this).attr("href");
		$.ajax({
			url: "/process/track_download.php",
			type: "post",
			data: {
				version: link.attr("data-version"),
				minified: link.attr("data-minified")
			},
			dataType: "json"
		}).done(function () {
			window.location = href;
		});
		return false;
	});
	
};

Page['test'] = function () {
	
	$.fn.hashparam.clear();
	
	QUnit.test("$.fn.hashparam(name, value)", function (assert) {
		var name = "plugin";
		var value = "hashparam";
        $.fn.hashparam(name, value);
		assert.ok(value == $.fn.hashparam(name), "Setting a hash parameter with a specific value");
	});
	
	QUnit.test("$.fn.hashparam(map)", function (assert) {
        $.fn.hashparam({
			author: "wykapedia",
			version: "1.0"
		});
		var params = $.fn.hashparam();
		assert.ok(params.plugin == "hashparam", "Getting newly added hash parameter");
		assert.ok(params.author == "wykapedia", "Getting hashparameter from map");
		assert.ok(params.version == "1.0", "Getting hashparameter from map");
	});
	
	QUnit.test("$.fn.hashparam.remove(name)", function (assert) {
		var previousAuthor = $.fn.hashparam.remove("author");
		var params = $.fn.hashparam();
		assert.ok(previousAuthor == "wykapedia", "Removal of parameter returns its previous value");
		assert.ok(null == $.fn.hashparam.remove("doesntExist"), "Removal of parameter returns null if did not previously exist");
		assert.ok(params.author == null, "Removed hash parameter is null");
	});
	
	QUnit.test("$.fn.hashparam(name)", function (assert) {
		var version = $.fn.hashparam("version");
		assert.ok(version = "1.0", "Getting an individual hash parameter value");
	});	
	
	QUnit.test("$.fn.hashparam.clear()", function (assert) {
		$.fn.hashparam.clear();
		var params = $.fn.hashparam();
		assert.ok($.isPlainObject(params), "Hash parameter map is empty after clear");
	});	
	
};

$(document).ready(Page.init);