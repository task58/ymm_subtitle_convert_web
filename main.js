let submitButton;
let inputElement;
let outputElement;

window.addEventListener("load",()=>{
	submitButton = document.getElementById("submit");
	inputElement = document.getElementById("input");
	outputElement = document.getElementById("output");


	submitButton.addEventListener("click",()=>{
		let txt = "" + inputElement.value;

		txt = txt.replaceAll(">> ゆっくり霊夢-130\n","")
		txt = txt.replaceAll(">> ゆっくり魔理沙-130\n","")
		txt = txt.replaceAll(">> ゆっくり霊夢(字幕のみ)\n","")
		txt = txt.replaceAll(">> ゆっくり魔理沙(字幕のみ)\n","")

		outputElement.value = txt
	})
})
