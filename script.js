function saveTable(id){
    const form = document.getElementById(id);
    const formdata = new FormData(form);
    const data = {};
    formdata.forEach((value, key) => {
        data[key] = value;
    });
    console.log(data);
}
function saveTextarea(id)
{
    const externalAgency = document.getElementById(id).value;
    const data = {
        Answer: externalAgency
    };
    console.log(data);
}
function saveData() {
    saveTable('question1-form')
    saveTextarea('question2-textarea')
    saveTable('question3-form')
    saveTextarea('question4-textarea')
    saveTable('question5-form')
    saveTable('question6-form')
    saveTextarea('question7-textarea')
    saveTable('question8-form')
    saveTextarea('question9-textarea')
    saveTable('question10-form')
    saveTable('question11-form')
    saveTable('question12-form')
}

function addRow(tableId) {
    const table = document.getElementById(tableId);
    const rowCount = table.rows.length;
    const row = table.insertRow(rowCount);

    const colCount = table.rows[0].cells.length;

    for (let i = 0; i < colCount; i++) {
        const cell = row.insertCell(i);
        const input = document.createElement('input');
        input.type = 'text';
        input.name = `column_${i}[]`; 
        cell.appendChild(input);
    }
}
