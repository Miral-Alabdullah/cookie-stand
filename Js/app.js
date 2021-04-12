'User strict';


let total;
let time = ['6:00AM','7:00AM','8:00AM','9:00AM','10:00AM','11:00AM','12:00PM','1:00PM','2:00PM','3:00PM','4:00PM','5:00PM','6:00PM','7:00PM'];
function numCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const Seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCust: 6.3,
  randomeCust: [],
  cookieNum: [],
  randomCustomer: function() {
    for(let i=0; i<time.length; i++){
      this.randomeCust.push(numCust(this.minCust,this.maxCust));
    }
  },
  cookieSale: function (){
    total = 0;
    for ( let i = 0; i < time.length; i++ ) {
      this.cookieNum.push(Math.ceil( this.randomeCust[i] * this.avgCust ));
      total = total + this.cookieNum[i];
    }
  },
  unorderDisplay: function(){
    let main = document.getElementById('cookie');
    let unorderlist = document.createElement('ul');
    unorderlist.textContent = this.location;
    main.appendChild(unorderlist);
    let li = null;
    for(let i = 0 ; i < time.length ; i++){
      li = document.createElement('li');
      unorderlist.appendChild(li);
      li.textContent = `${time[i]}: ${this.cookieNum[i]} cookies`;
    }
    li = document.createElement( 'li' );
    unorderlist.appendChild( li );
    li.textContent = `Total: ${total} cookies.`;
  }
};

Seattle.randomCustomer();
Seattle.cookieSale();
Seattle.unorderDisplay();
console.log(Seattle.cookieNum);



const Tokyo = {
  location: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCust: 1.2,
  randomeCust: [],
  cookieNum: [],
  randomCustomer: function() {
    for(let i=0; i<time.length; i++){
      this.randomeCust.push(numCust(this.minCust,this.maxCust));
    }
  },
  cookieSale: function (){
    total = 0;
    for ( let i = 0; i < time.length; i++ ) {
      this.cookieNum.push(Math.ceil( this.randomeCust[i] * this.avgCust ));
      total = total + this.cookieNum[i];
    }
  },
  unorderDisplay: function(){
    let parent = document.getElementById('cookie');
    let unorderlist = document.createElement('ul');
    unorderlist.textContent = this.location;
    parent.appendChild(unorderlist);
    let li;
    for(let i = 0 ; i < time.length ; i++){
      li = document.createElement('li');
      unorderlist.appendChild(li);
      li.textContent = `${time[i]}: ${this.cookieNum[i]} cookies.`;
    }
    li = document.createElement( 'li' );
    unorderlist.appendChild( li );
    li.textContent = `Total: ${total} cookies.`;
  }
};

Tokyo.randomCustomer();
Tokyo.cookieSale();
Tokyo.unorderDisplay();
console.log(Tokyo.cookieNum);


const Dubai = {
  location: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCust: 3.7,
  randomeCust: [],
  cookieNum: [],
  randomCustomer: function() {
    for(let i=0; i<time.length; i++){
      this.randomeCust.push(numCust(this.minCust,this.maxCust));
    }
  },
  cookieSale: function (){
    total = 0;
    for ( let i = 0; i < time.length; i++ ) {
      this.cookieNum.push(Math.ceil( this.randomeCust[i] * this.avgCust ));
      total = total + this.cookieNum[i];
    }
  },
  unorderDisplay: function(){
    let parent = document.getElementById('cookie');
    let unorderlist = document.createElement('ul');
    unorderlist.textContent = this.location;
    parent.appendChild(unorderlist);
    let li;
    for(let i = 0 ; i < time.length ; i++){
      li = document.createElement('li');
      unorderlist.appendChild(li);
      li.textContent = `${time[i]}: ${this.cookieNum[i]} cookies.`;
    }
    li = document.createElement( 'li' );
    unorderlist.appendChild( li );
    li.textContent = `Total: ${total} cookies.`;
  }
};

Dubai.randomCustomer();
Dubai.cookieSale();
Dubai.unorderDisplay();
console.log(Dubai.cookieNum);



const Paris = {
  location: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCust: 2.3,
  randomeCust: [],
  cookieNum: [],
  randomCustomer: function() {
    for(let i=0; i<time.length; i++){
      this.randomeCust.push(numCust(this.minCust,this.maxCust));
    }
  },
  cookieSale: function (){
    total = 0;
    for ( let i = 0; i < time.length; i++ ) {
      this.cookieNum.push(Math.ceil( this.randomeCust[i] * this.avgCust ));
      total = total + this.cookieNum[i];
    }
  },
  unorderDisplay: function(){
    let parent = document.getElementById('cookie');
    let unorderlist = document.createElement('ul');
    unorderlist.textContent = this.location;
    parent.appendChild(unorderlist);
    let li;
    for(let i = 0 ; i < time.length ; i++){
      li = document.createElement('li');
      unorderlist.appendChild(li);
      li.textContent = `${time[i]}: ${this.cookieNum[i]} cookies.`;
    }
    li = document.createElement( 'li' );
    unorderlist.appendChild( li );
    li.textContent = `Total: ${total} cookies.`;
  }
};

Paris.randomCustomer();
Paris.cookieSale();
Paris.unorderDisplay();
console.log(Paris.cookieNum);



const Lima = {
  location: 'Lima	',
  minCust: 2,
  maxCust: 16,
  avgCust: 4.6,
  randomeCust: [],
  cookieNum: [],
  randomCustomer: function() {
    for(let i=0; i<time.length; i++){
      this.randomeCust.push(numCust(this.minCust,this.maxCust));
    }
  },
  cookieSale: function (){
    total = 0;
    for ( let i = 0; i < time.length; i++ ) {
      this.cookieNum.push(Math.ceil( this.randomeCust[i] * this.avgCust ));
      total = total + this.cookieNum[i];
    }
  },
  unorderDisplay: function(){
    let parent = document.getElementById('cookie');
    let unorderlist = document.createElement('ul');
    unorderlist.textContent = this.location;
    parent.appendChild(unorderlist);
    let li;
    for(let i = 0 ; i < time.length ; i++){
      li = document.createElement('li');
      unorderlist.appendChild(li);
      li.textContent = `${time[i]}: ${this.cookieNum[i]} cookies.`;
    }
    li = document.createElement( 'li' );
    unorderlist.appendChild( li );
    li.textContent = `Total: ${total} cookies.`;
  }
};

Lima.randomCustomer();
Lima.cookieSale();
Lima.unorderDisplay();
console.log(Lima.cookieNum);


