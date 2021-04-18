

'use strict';

let locations = ['Seattle','Tokyo','Paris','Dubai','Lima'];
let headings = ['Locations','Address', 'Open Hours'];
let address = ['(206) 443-9398 2600 2nd Ave #803 Seattle, Washington(WA), 9812',
  '4-23-7 Shindou, Matsubara, Osaka', '4-23-7 Shindou, Matsubara, Osaka',
  'Sheikh Mohammed Bin Rashed Blvd PO Box 123234', 'Calle de la Prosa, 104 San Borja, Lima-Perú'];


let home = document.getElementById('section');
let firstSection = document.createElement('section');
firstSection.setAttribute('id', 'section');
home.appendChild(firstSection);
let image = document.createElement('img');
image.setAttribute('id', 'sec1');
firstSection.appendChild(image);
image.setAttribute('src', 'img/family.jpg');


let secondSection = document.createElement('section');
secondSection.setAttribute('id', 'section2');
home.appendChild(secondSection);
let firstCard = document.createElement('img');
firstCard.setAttribute('class', 'card');
secondSection.appendChild(firstCard);
let div = document.createElement('div');
firstCard.appendChild(div);
let text1 = document.createElement('p');
div.setAttribute('class', 'text');
text1.textContent = 'HELLO!';

firstCard.setAttribute('src', 'img/cutter.jpeg');
let fourthCard = document.createElement('img');
fourthCard.setAttribute('class', 'card');
secondSection.appendChild(fourthCard);
fourthCard.setAttribute('src', 'img/frosted-cookie.jpg');


let thirdSection = document.createElement('section');
thirdSection.setAttribute('class', 'section3');
home.appendChild(thirdSection);
let secondCard = document.createElement('img');
secondCard.setAttribute('class', 'card');
thirdSection.appendChild(secondCard);
secondCard.setAttribute('src', 'img/fish.jpg');
let thirdCard = document.createElement('img');
thirdCard.setAttribute('class', 'card');
thirdSection.appendChild(thirdCard);
thirdCard.setAttribute('src', 'img/shirt.jpg');


let fourthSection = document.createElement('section');
fourthSection.setAttribute('id','tableCheck');
home.appendChild(fourthSection);
let table1 = document.createElement('table');
fourthSection.appendChild(table1);
let rowHeading = document.createElement('tr');
let headingRow = null;
table1.appendChild(rowHeading);
for (let i = 0; i<headings.length; i++){
  headingRow = document.createElement('th');
  headingRow.setAttribute('id', 'tHeading');
  rowHeading.appendChild(headingRow);
  headingRow.textContent = headings[i];
}
let rowLocations = null;
let rowData = null;
for (let i = 0; i<locations.length; i++){
  rowLocations = document.createElement('tr');
  rowLocations.setAttribute('id', 'tRow');
  table1.appendChild(rowLocations);
  rowLocations.textContent = locations[i];
  rowData = document.createElement('td');
  rowData.setAttribute('id','dataRow');
  rowLocations.appendChild(rowData);
  rowData.textContent = address[i];
  rowData = document.createElement('td');
  rowLocations.appendChild(rowData);
  rowData.textContent = '6:00AM - 7:00PM';
}
