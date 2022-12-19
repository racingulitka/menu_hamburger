
window.onload = () => {
	menuWork();
}

const menuWork = () => {
	let count = false;
	let burgerCase = document.getElementsByClassName("burgerCase")[0];
	let upperLine = document.getElementById("upperLine");
	let middleLine = document.getElementById("middleLine");
	let bottomLine = document.getElementById("bottomLine");
	let menuBody = document.getElementById("menuBody");

	burgerCase.addEventListener("click", () => {
		if (count == false) {
			count = true;
			upperLine.style.cssText = "transform:rotate(45deg); top:27px; left:4px; transition:0.3s;";
			middleLine.style.cssText = "opacity:0; transition:0.3s;";
			bottomLine.style.cssText = "transform:rotate(-45deg); top:27px; left:4px; transition:0.3s;";
			menuBody.style.cssText = "transform:scaleY(100%);transition:0.3s;";
			
		} else {
			count = false;
			upperLine.style.cssText = "transform:rotate(0deg); top:10px; left:3px; transition:0.3s;";
			middleLine.style.cssText = "opacity:1; transition:0.3s;";
			bottomLine.style.cssText = "transform:rotate(0deg); top:46px; left:3px; transition:0.3s;";
			menuBody.style.cssText = "height:fit-content;transform:scaleY(0%); transition:0.3s;";
		}
	});
}
