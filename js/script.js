var btnArray = document.getElementsByClassName('button');

for (var i = 0; i < btnArray.length; i++) {
    console.log('Button ' + (i + 1) + ': ' + btnArray[i].innerText);
}