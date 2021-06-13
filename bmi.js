var wght=document.getElementById('weight');
var hght=document.getElementById('height');
var calc=document.getElementById('calculate');
calc.addEventListener('click',function(){

  document.getElementById('output').innerHTML=wght.value/Math.pow(hght.value,2);
})