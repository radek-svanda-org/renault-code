// nothing here yet
console.log('hello from lib');

var i = document.createElement("input");
i.setAttribute('type', "text");
i.setAttribute('name', "precode");
i.setAttribute('placeholder', "your pre code");

var app = document.getElementById('app');
app.appendChild(i);
