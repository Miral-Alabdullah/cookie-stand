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
