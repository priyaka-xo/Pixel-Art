// set up variables 
const formGridSize = document.getElementById('sizePicker');
const tableCanvas = document.getElementById('pixelCanvas');
const gridHeight = document.getElementById('inputHeight');
const gridWidth = document.getElementById('inputWidth');

// set up load handler to do the main startup work once page is fully loaded
window.addEventListener("load", startup, false);

// once the page is loaded, the load event handler, startup(), is called
function startup() {
  // When height/width is submitted by the user, call makeGrid()
  formGridSize.addEventListener('submit', (function(event) {
    event.preventDefault(); makeGrid(); }), false);
  // When user clicks on <td> element, call addColorPixel()  
  tableCanvas.addEventListener("click", (function(event) {
    addColorPixel(event); }), false);
  // When user double clicks on <td> element, call removeColorPixel()
  tableCanvas.addEventListener("dblclick", (function(event) {
      removeColorPixel(event); }), false);
  }

// this function creates the table based on height and width inputs by user
function makeGrid() {
 // this if statement clears any previously created table
 if (tableCanvas.hasChildNodes()) {
    tableCanvas.removeChild(tableCanvas.firstChild);cl
 }
 //create variables to collect user inputs on height and width 
let tableHeight = gridHeight.value;
let tableWidth = gridWidth.value;  
// create <tbody> element of table
const tableBodyGrid = document.createElement('tbody');  
// this for loop creates the table 
for (let i = 0; i < tableHeight; i++) {
  // creates a table row
  let row = document.createElement('tr'); 
    for (let j = 0; j < tableWidth; j++) {
      // create <td> for row
      let cell = document.createElement('td');
      //attach the <td> at the end of the table row
      row.appendChild(cell);
    }
  //add the row to the end of <tbody>
  tableBodyGrid.appendChild(row);
}  
//add the <tbody> into the <table>
tableCanvas.appendChild(tableBodyGrid);
}

//this function changes color of <td> based on user color selection
function addColorPixel(event) {
  let colorValue = document.getElementById('colorPicker');
  if (event.target.nodeName === 'TD') {
    event.target.style.backgroundColor = colorValue.value;
    event.target.style.borderColor = colorValue.value;
  }
}

//this function removes color from <td>  
function removeColorPixel(event) {
  if (event.target.nodeName === 'TD') {
    event.target.style.backgroundColor = "#ffffff";
    event.target.style.borderColor = "#000000";
  }
}
