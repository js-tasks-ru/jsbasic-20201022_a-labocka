function toggleText() {
  // ваш код...
  let btn1 = document.querySelector('.toggle-text-button');
  let btn2 = document.getElementById('text');
  btn1.addEventListener ('click',function(){
    btn2.hidden = !btn2.hidden;
    
  })
}
