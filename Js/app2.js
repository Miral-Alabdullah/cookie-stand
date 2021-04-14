
'use strict';

let locations = ['Seattle','Tokyo','Paris','Dubai','Lima'];
let headings = ['Locations','Address', 'Open Hours'];
let address = ['(206) 443-9398 2600 2nd Ave #803 Seattle, Washington(WA), 9812',
  '4-23-7 Shindou, Matsubara, Osaka', '4-23-7 Shindou, Matsubara, Osaka',
  'Sheikh Mohammed Bin Rashed Blvd PO Box 123234', 'Calle de la Prosa, 104 San Borja, Lima-Perú'];
let openingHours = ['6:00AM','7:00AM','8:00AM','9:00AM','10:00AM','11:00AM','12:00PM',
  '1:00PM','2:00PM','3:00PM','4:00PM','5:00PM','6:00PM','7:00PM'];


let home = document.getElementById('section');
let firstSection = document.createElement('section');
home.appendChild(firstSection);
let image = document.createElement('img');
firstSection.appendChild(image);
image.setAttribute('src', 'img/family.jpg');


let secondSection = document.createElement('section');
home.appendChild(secondSection);
let firstCard = document.createElement('img');
secondSection.appendChild(firstCard);
firstCard.setAttribute('src', 'img/cutter.jpeg');
let fourthCard = document.createElement('img');
secondSection.appendChild(fourthCard);
fourthCard.setAttribute('src', 'img/frosted-cookie.jpg');


let thirdSection = document.createElement('section');
home.appendChild(thirdSection);
let secondCard = document.createElement('img');
thirdSection.appendChild(secondCard);
secondCard.setAttribute('src', 'img/fish.jpg');
let thirdCard = document.createElement('img');
thirdSection.appendChild(thirdCard);
thirdCard.setAttribute('src', 'img/shirt.jpg');


let fourthSection = document.createElement('section');
home.appendChild(fourthSection);
let table1 = document.createElement('table');
fourthSection.appendChild(table1);
let rowHeading = document.createElement('tr');
let headingRow = null;
table1.appendChild(rowHeading);
for (let i = 0; i<headings.length; i++){
  headingRow = document.createElement('th');
  rowHeading.appendChild(headingRow);
  headingRow.textContent = headings[i];
}
let rowLocations = null;
let rowData = null;
for (let i = 0; i<locations.length; i++){
  rowLocations = document.createElement('tr');
  table1.appendChild(rowLocations);
  rowLocations.textContent = locations[i];
  rowData = document.createElement('td');
  rowLocations.appendChild(rowData);
  rowData.textContent = address[i];
  rowData = document.createElement('td');
  rowLocations.appendChild(rowData);
  rowData.textContent = openingHours[i];
}



