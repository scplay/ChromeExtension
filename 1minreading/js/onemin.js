window.onload = function () {
	init();
}

function init() {

	document.onclick = function (e) {

		var txt = e.target;
		var docFrames = document.getElementsByTagName("iframe");
		for (var i = 0; i < frames.length; i++) {
			if (docFrames[i].attributes["name"].nodeValue == "onemincontent") {
				docFrames[i].attributes["height"].nodeValue = "1000px";
				frames[i].document.querySelector(".content_text").style.fontSize = "inherit";
				frames[i].document.querySelector(".content_text").style.lineHeight = "inherit";
			} else
				continue;
		}
	}

}

window.onkeydown = function (e) {

	if (e.keyCode == "38") {
		var docFrames = document.getElementsByTagName("iframe");
		for (var i = 0; i < frames.length; i++) {
			if (docFrames[i].attributes["name"].nodeValue == "onemincontent") {
				docFrames[i].attributes["height"].nodeValue = "1000px";
				frames[i].document.querySelector(".content_text").style.fontSize = "inherit";
				frames[i].document.querySelector(".content_text").style.lineHeight = "inherit";
			} else
				continue;
		}
	}
}
