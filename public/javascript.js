var myArray = [ 'BLOOM' ];
var n = 1;
setInterval(function(){ 
  $(".flip").html(myArray[n]);
  if(myArray.length-1 == n){
    n = 0;
  }else{
      n++;
  }
}, 5000);
//Script for diabling button
function disableButton() {
  var btn = document.getElementById('btn');
  btn.disabled = true;
  btn.innerText = 'Loading...'
}
function disableButton1() {
    var btn = document.getElementById('btn1');
    btn.disabled = true;
    btn.innerText = 'Loading...'
}