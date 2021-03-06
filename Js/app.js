'use strict';


let total;
let main = document.getElementById('cookie');
let table = document.createElement('table');
main.appendChild(table);
let firstRow = document.createElement('tr');
table.appendChild(firstRow);
// let cookieNum = [];
let time = ['6:00AM','7:00AM','8:00AM','9:00AM','10:00AM','11:00AM','12:00PM',
  '1:00PM','2:00PM','3:00PM','4:00PM','5:00PM','6:00PM','7:00PM'];
function numCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
} // I used this function from MDN web docs


//creating the constructor function
let arraOfObjects = [];
function Shop(location,minCust,maxCust,avgCust) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCust = avgCust;
  this.randomCust = [];
  this.cookieNum = [];
  this.totalCookie = 0;
  arraOfObjects.push(this);
  console.log(this);
}


//creating the objects - instances
let seattle = new Shop('Seattle',23,65,6.3);
let tokyo = new Shop('Tokyo',3,24,1.2);
let dubai = new Shop('Dubai',11,38,3.7);
let paris = new Shop('Paris',20,38,2.3);
let lima = new Shop('Lima',2,16,4.6);
// let location1 = new Shop('Italy', 5, 2, 9);


// creating the function-methods using prototypes
//1- This randomCustomer function is to show a random numbers of customers per hour depending on the min and max values
Shop.prototype.randomCustomer = function() {
  for(let i=0; i<time.length; i++){
    this.randomCust.push(numCust(this.minCust,this.maxCust));
  }
};

//2- This cookieSale function is to show the expected number of sales of cookies
Shop.prototype.cookieSale = function() {
  total = 0;
  for (let i=0; i<time.length; i++){
    this.cookieNum.push(Math.ceil(this.randomCust[i] * this.avgCust));
    total += this.cookieNum[i];
  }
  this.totalCookie += total;
};

for (let i = 0; i<arraOfObjects.length; i++) {
  arraOfObjects[i].randomCustomer();
  arraOfObjects[i].cookieSale();
} // to call the function for each object



function header(){
  let headerRow = null;
  headerRow = document.createElement('th');
  firstRow.appendChild(headerRow);
  headerRow.textContent;
  for (let i=0; i<time.length; i++){
    headerRow = document.createElement('th');
    firstRow.appendChild(headerRow);
    headerRow.textContent = time[i];
  }
  headerRow = document.createElement('th');
  firstRow.appendChild(headerRow);
  headerRow.textContent = 'Daily Location Total';
}
header();



Shop.prototype.renderData = function() {
  let headRow = null;
  let dataRow = null;
  let secondRow = document.createElement('tr');
  table.appendChild(secondRow);
  headRow = document.createElement('th');
  dataRow = document.createElement('td');
  secondRow.appendChild(headRow);
  for (let i=0; i<this.cookieNum.length; i++){
    headRow.textContent = this.location;
    dataRow = document.createElement('td');
    secondRow.appendChild(dataRow);
    dataRow.textContent = this.cookieNum[i];
  } // I replaced my previous code with this that the instructor mentioned because it makes sense more than mine
  // for (let j=0; j<time.length; j++){
  //   dataRow = document.createElement('td');
  //   secondRow.appendChild(dataRow);
  //   dataRow.textContent = this.cookieNum[j];
  // }
  dataRow = document.createElement('td');
  secondRow.appendChild(dataRow);
  dataRow.textContent = this.totalCookie;
};



for (let i=0; i<arraOfObjects.length; i++){
  arraOfObjects[i].renderData();
} //calling the renderData function for each instance


// seattle.renderData();
// tokyo.renderData();
// paris.renderData();
// dubai.renderData();
// lima.renderData();






let megaTotal = 0;
let sum;
let thirdRow = document.createElement('tr');
table.appendChild(thirdRow);
let dataRow02 = null;
function footer() {
  dataRow02 = document.createElement('th');
  thirdRow.appendChild(dataRow02);
  dataRow02.textContent = 'Totals'; // first cell
  for (let j=0; j<time.length; j++){
    sum = 0;
    for (let i=0; i<arraOfObjects.length; i++){
      sum += arraOfObjects[i].cookieNum[j];
    }
    dataRow02 = document.createElement('th');
    thirdRow.appendChild(dataRow02);
    dataRow02.textContent = sum;
    megaTotal += sum;
  }
  let finalTotals = document.createElement('th');
  thirdRow.appendChild(finalTotals);
  finalTotals.textContent = megaTotal;

  // dataRow02.textContent += sum;
}

footer();


// We are gitting the id of the form
const form = document.getElementById('newLocation');
form.addEventListener('submit', handleSubmitting);

function handleSubmitting(event){
  event.preventDefault();
  let location = event.target.locationField.value;
  let minCust = parseInt(event.target.minField.value);
  let maxCust = parseInt(event.target.maxField.value);
  let avgCust = parseFloat(event.target.avgField.value);
  let newLocation = new Shop(location, minCust, maxCust, avgCust);
  validateForm();
  newLocation.randomCustomer();
  newLocation.cookieSale();
  thirdRow.remove();
  newLocation.renderData();
  thirdRow = document.createElement('tr');
  table.appendChild(thirdRow);
  dataRow02 = document.createElement('th');
  thirdRow.appendChild(dataRow02);
  dataRow02.textContent = 'Totals'; // first cell
  for (let j=0; j<time.length; j++){
    sum = 0;
    for (let i=0; i<arraOfObjects.length; i++){
      sum += arraOfObjects[i].cookieNum[j];
    }
    dataRow02 = document.createElement('th');
    thirdRow.appendChild(dataRow02);
    dataRow02.textContent = sum;
    megaTotal += sum;
  }
  let finalTotals = document.createElement('th');
  thirdRow.appendChild(finalTotals);
  finalTotals.textContent = megaTotal;
}

function validateForm() {
  let x = document.forms['located']['min'].value;
  if (x === '') {
    alert('Fields must be filled out');
    return false;
  }
}









// ------------------------------------------------------------------------------------------------------------------------------
// for (let j=0; j<time.length; j++){
//   for (let i=0; i<arraOfObjects.length; i++){
//     arrayOfTotal.push(arraOfObjects[i].cookieNum[j]);
//     thirdRow.appendChild(dataRow02);
//     result += arrayOfTotal[i];
//   }
// }



// table.appendChild(thirdRow);
// thirdRow.appendChild(dataRow02);
// dataRow02.textContent = result;


// for (let i=0; i<arraOfObjects.length; i++){
//   if (arraOfObjects.length>5){
//     thirdRow.remove();
//   }
// }


// let globalArray = [];
// for (let j=0; j<time.length; j++){
//   for (let i=0; i<arraOfObjects.length; i++){
//     globalArray.push(arraOfObjects[i].cookieNum[j]);
//   }
// }
// console.log(globalArray);


// dataRow02.textContent = val;
// console.log(arraOfObjects[0].cookieNum[0]);
// for (let i=0; i<time.length; i++){
//   table.appendChild(thirdRow);
//   dataRow02 = document.createElement('td');
//   thirdRow.appendChild(dataRow02);
//   // dataRow02.textContent = arraOfObjects[i].cookieNum[j]
//   for (let j =0; j<arraOfObjects.length; j++){
//     dataRow02.textContent = arraOfObjects[i].cookieNum[j];
//   // }
// }

// console.log(result);

// console.log(rowsNumber-1);
// let dataRow02 = null;
// let thirdRow = document.createElement('tr');
// table.appendChild(thirdRow);
// dataRow02 = document.createElement('td');
// thirdRow.appendChild(dataRow02);
// dataRow02.textContent = 'Totals';
// for (let i=0; i<time.length; i++){
//   table.appendChild(thirdRow);
//   dataRow02 = document.createElement('td');
//   thirdRow.appendChild(dataRow02);

// table.appendChild(thirdRow);
// dataRow02 = document.createElement('td');
// thirdRow.appendChild(dataRow02);
// dataRow02.textContent += arraOfObjects.totalCookie;
//   dataRow02.textContent = this.arraOfObjects.totalCookie;
// };


// for (let i=0; i<arraOfObjects.length; i++){
//   arraOfObjects[i][1].render();
// }


// const Seattle = {
//   location: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCust: 6.3,
//   randomeCust: [],
//   cookieNum: [],
//   randomCustomer: function() {
//     for(let i=0; i<time.length; i++){
//       this.randomeCust.push(numCust(this.minCust,this.maxCust));
//     }
//   },
//   cookieSale: function (){
//     total = 0;
//     for ( let i = 0; i < time.length; i++ ) {
//       this.cookieNum.push(Math.ceil( this.randomeCust[i] * this.avgCust ));
//       total = total + this.cookieNum[i];
//     }
//   },
//   unorderDisplay: function(){
//     let main = document.getElementById('cookie');
//     let unorderlist = document.createElement('ul');
//     unorderlist.textContent = this.location;
//     main.appendChild(unorderlist);
//     let li = null;
//     for(let i = 0 ; i < time.length ; i++){
//       li = document.createElement('li');
//       unorderlist.appendChild(li);
//       li.textContent = `${time[i]}: ${this.cookieNum[i]} cookies`;
//     }
//     li = document.createElement( 'li' );
//     unorderlist.appendChild( li );
//     li.textContent = `Total: ${total} cookies.`;
//   }
// };

// Seattle.randomCustomer();
// Seattle.cookieSale();
// Seattle.unorderDisplay();
// console.log(Seattle.cookieNum);



// const Tokyo = {
//   location: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCust: 1.2,
//   randomeCust: [],
//   cookieNum: [],
//   randomCustomer: function() {
//     for(let i=0; i<time.length; i++){
//       this.randomeCust.push(numCust(this.minCust,this.maxCust));
//     }
//   },
//   cookieSale: function (){
//     total = 0;
//     for ( let i = 0; i < time.length; i++ ) {
//       this.cookieNum.push(Math.ceil( this.randomeCust[i] * this.avgCust ));
//       total = total + this.cookieNum[i];
//     }
//   },
//   unorderDisplay: function(){
//     let parent = document.getElementById('cookie');
//     let unorderlist = document.createElement('ul');
//     unorderlist.textContent = this.location;
//     parent.appendChild(unorderlist);
//     let li;
//     for(let i = 0 ; i < time.length ; i++){
//       li = document.createElement('li');
//       unorderlist.appendChild(li);
//       li.textContent = `${time[i]}: ${this.cookieNum[i]} cookies.`;
//     }
//     li = document.createElement( 'li' );
//     unorderlist.appendChild( li );
//     li.textContent = `Total: ${total} cookies.`;
//   }
// };

// Tokyo.randomCustomer();
// Tokyo.cookieSale();
// Tokyo.unorderDisplay();
// console.log(Tokyo.cookieNum);


// const Dubai = {
//   location: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCust: 3.7,
//   randomeCust: [],
//   cookieNum: [],
//   randomCustomer: function() {
//     for(let i=0; i<time.length; i++){
//       this.randomeCust.push(numCust(this.minCust,this.maxCust));
//     }
//   },
//   cookieSale: function (){
//     total = 0;
//     for ( let i = 0; i < time.length; i++ ) {
//       this.cookieNum.push(Math.ceil( this.randomeCust[i] * this.avgCust ));
//       total = total + this.cookieNum[i];
//     }
//   },
//   unorderDisplay: function(){
//     let parent = document.getElementById('cookie');
//     let unorderlist = document.createElement('ul');
//     unorderlist.textContent = this.location;
//     parent.appendChild(unorderlist);
//     let li;
//     for(let i = 0 ; i < time.length ; i++){
//       li = document.createElement('li');
//       unorderlist.appendChild(li);
//       li.textContent = `${time[i]}: ${this.cookieNum[i]} cookies.`;
//     }
//     li = document.createElement( 'li' );
//     unorderlist.appendChild( li );
//     li.textContent = `Total: ${total} cookies.`;
//   }
// };

// Dubai.randomCustomer();
// Dubai.cookieSale();
// Dubai.unorderDisplay();
// console.log(Dubai.cookieNum);



// const Paris = {
//   location: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCust: 2.3,
//   randomeCust: [],
//   cookieNum: [],
//   randomCustomer: function() {
//     for(let i=0; i<time.length; i++){
//       this.randomeCust.push(numCust(this.minCust,this.maxCust));
//     }
//   },
//   cookieSale: function (){
//     total = 0;
//     for ( let i = 0; i < time.length; i++ ) {
//       this.cookieNum.push(Math.ceil( this.randomeCust[i] * this.avgCust ));
//       total = total + this.cookieNum[i];
//     }
//   },
//   unorderDisplay: function(){
//     let parent = document.getElementById('cookie');
//     let unorderlist = document.createElement('ul');
//     unorderlist.textContent = this.location;
//     parent.appendChild(unorderlist);
//     let li;
//     for(let i = 0 ; i < time.length ; i++){
//       li = document.createElement('li');
//       unorderlist.appendChild(li);
//       li.textContent = `${time[i]}: ${this.cookieNum[i]} cookies.`;
//     }
//     li = document.createElement( 'li' );
//     unorderlist.appendChild( li );
//     li.textContent = `Total: ${total} cookies.`;
//   }
// };

// Paris.randomCustomer();
// Paris.cookieSale();
// Paris.unorderDisplay();
// console.log(Paris.cookieNum);



// const Lima = {
//   location: 'Lima	',
//   minCust: 2,
//   maxCust: 16,
//   avgCust: 4.6,
//   randomeCust: [],
//   cookieNum: [],
//   randomCustomer: function() {
//     for(let i=0; i<time.length; i++){
//       this.randomeCust.push(numCust(this.minCust,this.maxCust));
//     }
//   },
//   cookieSale: function (){
//     total = 0;
//     for ( let i = 0; i < time.length; i++ ) {
//       this.cookieNum.push(Math.ceil( this.randomeCust[i] * this.avgCust ));
//       total = total + this.cookieNum[i];
//     }
//   },
//   unorderDisplay: function(){
//     let parent = document.getElementById('cookie');
//     let unorderlist = document.createElement('ul');
//     unorderlist.textContent = this.location;
//     parent.appendChild(unorderlist);
//     let li;
//     for(let i = 0 ; i < time.length ; i++){
//       li = document.createElement('li');
//       unorderlist.appendChild(li);
//       li.textContent = `${time[i]}: ${this.cookieNum[i]} cookies.`;
//     }
//     li = document.createElement( 'li' );
//     unorderlist.appendChild( li );
//     li.textContent = `Total: ${total} cookies.`;
//   }
// };

// Lima.randomCustomer();
// Lima.cookieSale();
// Lima.unorderDisplay();
// console.log(Lima.cookieNum)
