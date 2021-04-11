'User strict';


let total;
let time = ['6:00AM','7:00AM','8:00AM','9:00AM','10:00AM','11:00AM','12:00PM','1:00PM','2:00PM','3:00PM','4:00PM','5:00PM','6:00PM','7:00PM','8:00PM'];
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



