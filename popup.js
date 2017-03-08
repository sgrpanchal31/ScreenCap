// $(document).ready(function(){
// 	$(document).on("click", "#ScreenCaptureButton", function(){
// 		// chrome.storage.sync.set({'myLine':'hellohello'}, function(){
// 		// 	alert("success");
// 		// });
// 		alert("hola");
// 	});

// });
window.onload = function(){
	document.getElementById('ScreenCaptureButton').onclick = function(){
		var word = "hehe";
		chrome.storage.sync.set({'myLine' : word}, function(){
			console.log("success");
		});
	}
}