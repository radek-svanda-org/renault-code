var app = document.getElementById('app');

var precode = document.createElement("input");
precode.setAttribute('type', "text");
precode.setAttribute('name', "precode");
precode.setAttribute('placeholder', "your pre code");

app.appendChild(precode);

var submit = document.createElement("input");
submit.setAttribute('type', 'submit');
submit.setAttribute('value', 'Get your code');

app.appendChild(submit);

submit.onclick = (evt) => {
    document.getElementById('code').innerText = precode.value;
}