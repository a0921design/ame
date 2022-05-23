const btn = document.getElementById('navBtn');
const link = document.getElementsByClassName('scrollLink');

btn.addEventListener('click',function() {
  document.getElementById('nav').classList.toggle('show');
  document.getElementById('navBtn').classList.toggle('bgAlpha');
  document.getElementById('btnLine1').classList.toggle('rotate1');
  document.getElementById('btnLine2').classList.toggle('rotate2');
});

link.addEventListener('click',function() {
  document.getElementById('nav').classList.remove('show');
});