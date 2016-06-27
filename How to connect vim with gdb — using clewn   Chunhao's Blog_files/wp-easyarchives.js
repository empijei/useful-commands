(function() {

var xmlHttp;
var year = '';
var authorId = '';

function getXmlHttpObject() {
	var xmlHttp = null;
	try {
		xmlHttp = new XMLHttpRequest();
	} catch(e) {
		try {
			xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
		} catch(e) {
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	return xmlHttp;
}

function change(wpurl, args, loading) {
	xmlHttp = getXmlHttpObject();
	if (xmlHttp == null) {
		alert ("Oop! Browser does not support HTTP Request.")
		return;
	}

	var url = wpurl;
	url += "?action=ea_monthly_ajax";
	url += "&year=" + year;
	url += "&author_id=" + authorId;
	url += "&args=" + args;

	xmlHttp.onreadystatechange = function(){runChange(loading)};
	xmlHttp.open("GET", url, true);
	xmlHttp.setRequestHeader("Content-type", "charset=UTF-8");
	xmlHttp.send(null);
}

function runChange(loading) {
	var archives = $("easy-archives");
	var filter = getElementsByClassName("filter", "div", archives)[0];

	if (xmlHttp.readyState < 4 && !$('ea_ajax_loader')) {
		document.body.style.cursor = "wait";
		if (filter) {
			filter.innerHTML = '<div id="ea_ajax_loader">' + ((loading == undefined) ? 'Loading...' : loading + '...') + '</div>';
		}

	} else if (xmlHttp.readyState == 4 || xmlHttp.readyState=="complete") {
		archives.innerHTML = xmlHttp.responseText;
		document.body.style.cursor = "auto";
	}
}

function changeYear(wpurl, args, select, loading) {
	year = select.value;
	change(wpurl, args, loading);
}

function changeAuthor(wpurl, args, select, loading) {
	authorId = select.value;
	change(wpurl, args, loading);
}

function toggle(button) {
	if (button.className == "open-button") {
		button.className = "closed-button";
	} else {
		button.className = "open-button";
	}

	var parent = button.parentNode;
	var dailyArchives = parent.nextSibling;
	if (dailyArchives.className == "open") {
		dailyArchives.className = "closed";
	} else {
		dailyArchives.className = "open";
	}
}

function expandAll() {
	var elements = getElementsByClassName("closed-button", "a", $("easy-archives"));
	for (var i = 0; i < elements.length; i++) {
		toggle(elements[i]);
	}
}

function collapseAll(target) {
	var elements = getElementsByClassName("open-button", "a", $("easy-archives"));
	for (var i = 0; i < elements.length; i++) {
		toggle(elements[i]);
	}
}

function $(id) {
	return document.getElementById(id);
}

function getElementsByClassName(className, tag, parent) {
	var allTags = (tag == "*" && parent.all) ? parent.all : parent.getElementsByTagName(tag);
	var matchingElements = new Array();

	className = className.replace(/\-/g, "\\-");
	var regex = new RegExp("(^|\\s)" + className + "(\\s|$)");

	var element;
	for (var i = 0; i < allTags.length; i++) {
		element = allTags[i];
		if (regex.test(element.className)) {
			matchingElements.push(element);
		}
	}

	return matchingElements;
}

window["EAJS"] = {};
window["EAJS"]["change"] = change;
window["EAJS"]["changeYear"] = changeYear;
window["EAJS"]["changeAuthor"] = changeAuthor;
window["EAJS"]["toggle"] = toggle;
window["EAJS"]["expandAll"] = expandAll;
window["EAJS"]["collapseAll"] = collapseAll;

})();
