function addHeightAuto() {
	const tables = document.getElementsByClassName('v-data-table__wrapper');
	const tablesLength = tables.length;
	for(let i=0; i < tablesLength; i++ ){
        if(tables[i].innerText)
		tables[i].style.height = "auto";
	}
}
addHeightAuto();