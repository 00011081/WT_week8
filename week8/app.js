let time = document.getElementById('time');


window.addEventListener('load',function(){
  setInterval(function(){
  let d = new Date();

  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();


    let content = `${hours} : ${minutes} : ${seconds}`;
    let color = `rgb(${hours} : ${minutes} : ${seconds} )`;

   time.textContent = content;
   document.body.style.backgroundColor = color;

   },1000);
})
