/** @type HTMLInputElement */
let fileUploadElem;

/** @type HTMLInputElement */
let fileUploadButton;

/** @type HTMLInputElement */
let addNameInputButton;

/** @type HTMLTableElement */
let nameInputTable;


/** @type HTMLInputElement */
let submitButton;

/** @type HTMLTextAreaElement */
let inputElement;

/** @type HTMLTextAreaElement */
let outputElement;

/** @type Map<number,string[]> */
let replaceNames = new Map();
let replaceNamesKey = 0;

window.addEventListener("load",()=>{
	submitButton = document.getElementById("submit");
	inputElement = document.getElementById("input");
	outputElement = document.getElementById("output");

	addNameInputButton = document.getElementById("add_name_input");
	nameInputTable = document.getElementById("name_input_table");

	fileUploadElem = document.getElementById("file_input")
	fileUploadButton = document.getElementById("file_input_button")


	submitButton.addEventListener("click",()=>{
		let txt = "" + inputElement.value;

		replaceNames.forEach((val,key)=>{
			txt = txt.replaceAll(`>> ${val[0]}\n`,`${val[1]}\n`);
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

		let deleteButton = document.createElement("input");
		deleteButton.type = "button"
		deleteButton.value = "削除"
		deleteButton.addEventListener("click",()=>{
			replaceNames.delete(key);
			trElem.remove();
		})

		let fromTd = document.createElement("td");
		fromTd.appendChild(fromInput);

		let toTd = document.createElement("td");
		toTd.appendChild(toInput);

		let deleteTd = document.createElement("td");
		deleteTd.appendChild(deleteButton);

		trElem.appendChild(fromTd);
		trElem.appendChild(toTd);
		trElem.appendChild(deleteTd);

		nameInputTable.appendChild(trElem);

	})

	fileUploadButton.addEventListener("click",()=>{
		if(fileUploadElem.files.length < 1){
			alert("file not uploaded");
			return;
		}

		let file = fileUploadElem.files[0];

		let reader = new FileReader()
		reader.readAsText(file);

		function load(){
			inputElement.value = reader.result;
			reader.removeEventListener("load",load);
		}
		
		reader.addEventListener("load",load);

	})
})
