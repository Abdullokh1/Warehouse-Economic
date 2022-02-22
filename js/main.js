let elsettings = document.getElementById('settingBtn');

let elhideContent = document.getElementById('hideSetting');

let elmenubtn = document.getElementById('menuButton');

let eldemos = document.getElementById('navbarItemdemos');

let elbody = document.getElementById('body');

let elshowdemos = document.getElementById('showdemos');

let closebtn = document.getElementById('closeCanvas')

elsettings.addEventListener('click', function(){
  elhideContent.classList.toggle('show');
})

elmenubtn.addEventListener('click', function(){
  elbody.classList.add('move');
})
closebtn.addEventListener('click', function(){
  elbody.classList.remove('move');
})
eldemos.addEventListener('click', function(){
  elshowdemos.classList.toggle('display');
})