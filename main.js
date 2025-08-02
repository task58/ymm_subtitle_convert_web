/** @type HTMLInputElement */
let submitButton;

/** @type HTMLTextAreaElement */
let inputElement;

/** @type HTMLTextAreaElement */
let outputElement;

/** @type HTMLInputElement */
let addNameInputButton;

/** @type HTMLTableElement */
let nameInputTable;


/** @type Map<number,string[]> */
let replaceNames = new Map();
let replaceNamesKey = 0;

window.addEventListener("load",()=>{
	submitButton = document.getElementById("submit");
	inputElement = document.getElementById("input");
	outputElement = document.getElementById("output");

	addNameInputButton = document.getElementById("add_name_input");
	nameInputTable = document.getElementById("name_input_table");


	submitButton.addEventListener("click",()=>{
		let txt = "" + inputElement.value;

		replaceNames.forEach((val,key)=>{
			txt = txt.replaceAll(`>> ${val[0]}\n`,val[1]);
			console.log(val);
		})

		outputElement.value = txt
	})

	addNameInputButton.addEventListener("click",()=>{
		replaceNamesKey++;

		let key = replaceNamesKey;
		replaceNames.set(key,["",""]);

		let trElem = document.createElement("tr");
		trElem.id = `name_input_${key}_tr`;

		let fromInput = document.createElement("input");
		fromInput.id = `name_input_${key}_from`

		let toInput = document.createElement("input");
		toInput.id = `name_input_${key}_to`

		function inputFunc(){
			let data = replaceNames.get(key);
			data[0] = fromInput.value;
			data[1] = toInput.value;
			replaceNames.set(key,data);
			console.log(key,data);
		}

		fromInput.addEventListener("input",inputFunc);
		toInput.addEventListener("input",inputFunc)


		let fromTd = document.createElement("td");
		fromTd.appendChild(fromInput);

		let toTd = document.createElement("td");
		toTd.appendChild(toInput);

		trElem.appendChild(fromTd);
		trElem.appendChild(toTd);

		nameInputTable.appendChild(trElem);

	})
})
