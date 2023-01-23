// LOCALSTORAGE
// Switch state
const colorswitch = localStorage.getItem("colorpickerReborn");

// Set the user's selection
if (colorswitch == "orange") {
	// $("head").append(
	// 	'<link rel="stylesheet" href="./styles/HexagonRebornAdaptive/theme/orange.css" type="text/css" />'
	// );
	document.querySelector("#HexagonRebornColor").remove();
	document.querySelector(
		"#HexagonRebornColorPicker"
	).href = `./styles/HexagonRebornAdaptive/theme/${colorswitch}.css`;
	// $(".colororange").addClass("active");
}
if (colorswitch == "green") {
	// $("head").append(
	// 	'<link rel="stylesheet" href="./styles/HexagonRebornAdaptive/theme/green.css" type="text/css" />'
	// );
	document.querySelector("#HexagonRebornColor").remove();
	document.querySelector(
		"#HexagonRebornColorPicker"
	).href = `./styles/HexagonRebornAdaptive/theme/${colorswitch}.css`;
	// $(".colorgreen").addClass("active");
}
if (colorswitch == "blue") {
	// $("head").append(
	// 	'<link rel="stylesheet" href="./styles/HexagonRebornAdaptive/theme/blue.css" type="text/css" />'
	// );
	document.querySelector("#HexagonRebornColor").remove();
	document.querySelector(
		"#HexagonRebornColorPicker"
	).href = `./styles/HexagonRebornAdaptive/theme/${colorswitch}.css`;
	// $(".colorblue").addClass("active");
}
if (colorswitch == "cyan") {
	// $("head").append(
	// 	'<link rel="stylesheet" href="./styles/HexagonRebornAdaptive/theme/cyan.css" type="text/css" />'
	// );
	document.querySelector("#HexagonRebornColor").remove();
	document.querySelector(
		"#HexagonRebornColorPicker"
	).href = `./styles/HexagonRebornAdaptive/theme/${colorswitch}.css`;
	// $(".colorcyan").addClass("active");
}
if (colorswitch == "violet") {
	// $("head").append(
	// 	'<link rel="stylesheet" href="./styles/HexagonRebornAdaptive/theme/violet.css" type="text/css" />'
	// );
	document.querySelector("#HexagonRebornColor").remove();
	document.querySelector(
		"#HexagonRebornColorPicker"
	).href = `./styles/HexagonRebornAdaptive/theme/${colorswitch}.css`;
	// $(".colorviolet").addClass("active");
}
if (colorswitch == "custom") {
	// $("head").append(
	// 	'<link rel="stylesheet" href="./styles/HexagonRebornAdaptive/theme/custom.css" type="text/css" />'
	// );
	document.querySelector("#HexagonRebornColor").remove();
	document.querySelector(
		"#HexagonRebornColorPicker"
	).href = `./styles/HexagonRebornAdaptive/theme/${colorswitch}.css`;
	// $(".colorcustom").addClass("active");
}
// This calls the color from localstorage and set it on page load
const root = document.documentElement;

if (localStorage.getItem("accent") === null) {
	root.style.setProperty("--accent-color", "#de7300");
} else {
	let accentColor = localStorage.getItem("accent");
	root.style.setProperty("--accent-color", accentColor);
}
// if (colorswitch == null) {
// 	$(".colororange").addClass("active");
// }
// $(document).ready(function () {
// 	// COLORSWITCH:

// 	// When orange is clicked:
// 	$(".colororange").click(function () {
// 		$("head").append(
// 			'<link rel="stylesheet" href="./styles/HexagonRebornAdaptive/theme/orange.css" type="text/css" />'
// 		);
// 		$(".colorbutton").removeClass("active");
// 		$(".colororange").addClass("active");
// 		localStorage.setItem("colorpickerReborn", "orange");
// 	});

// 	// When green is clicked:
// 	$(".colorgreen").click(function () {
// 		$("head").append(
// 			'<link rel="stylesheet" href="./styles/HexagonRebornAdaptive/theme/green.css" type="text/css" />'
// 		);
// 		$(".colorbutton").removeClass("active");
// 		$(".colorgreen").addClass("active");
// 		localStorage.setItem("colorpickerReborn", "green");
// 	});

// 	// When blue is clicked:
// 	$(".colorblue").click(function () {
// 		$("head").append(
// 			'<link rel="stylesheet" href="./styles/HexagonRebornAdaptive/theme/blue.css" type="text/css" />'
// 		);
// 		$(".colorbutton").removeClass("active");
// 		$(".colorblue").addClass("active");
// 		localStorage.setItem("colorpickerReborn", "blue");
// 	});

// 	// When cyan is clicked:
// 	$(".colorcyan").click(function () {
// 		$("head").append(
// 			'<link rel="stylesheet" href="./styles/HexagonRebornAdaptive/theme/cyan.css" type="text/css" />'
// 		);
// 		$(".colorbutton").removeClass("active");
// 		$(".colorcyan").addClass("active");
// 		localStorage.setItem("colorpickerReborn", "cyan");
// 	});

// 	// When violet is clicked:
// 	$(".colorviolet").click(function () {
// 		$("head").append(
// 			'<link rel="stylesheet" href="./styles/HexagonRebornAdaptive/theme/violet.css" type="text/css" />'
// 		);
// 		$(".colorbutton").removeClass("active");
// 		$(".colorviolet").addClass("active");
// 		localStorage.setItem("colorpickerReborn", "violet");
// 	});

// 	// When custom is clicked:
// 	$(".colorcustom").click(function () {
// 		$("head").append(
// 			'<link rel="stylesheet" href="./styles/HexagonRebornAdaptive/theme/custom.css" type="text/css" />'
// 		);
// 		$(".colorbutton").removeClass("active");
// 		$(".colorcustom").addClass("active");
// 		localStorage.setItem("colorpickerReborn", "custom");
// 	});
// 	// When trashbin is clicked:
// 	$(".clearstorage").click(function () {
// 		localStorage.removeItem("colorpickerReborn");
// 		window.location.reload(true);
// 	});
// });
