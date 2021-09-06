const drop = document.getElementById('drop');
const pull = document.getElementById('pull')
$('#my-channel').on('click', 'li', function () {
  $('#dropdown').hide();
  $('#first-li').text($(this).text());

})
drop.addEventListener('touchstart', function () {
  $('#dropdown').show();
}, false);
pull.addEventListener('touchstart', function () {
  $('#dropdown').hide();
}, false);

$("footer").on('click', 'div', function () {
  let index = $(this).index();
  console.log(index);
  switch (index) {
    case 0:
      window.location.href = './index.html';
      break;

    case 1:
      window.location.href = './message.html';
      break;
    case 2:
      window.location.href = './profile.html';
      break;
  }
})

$('.search').click(function(){
  window.location.href='./search.html'
})

$('#second-nav ul').on('click','li',function(){
  console.log(1);
  $(this).addClass("active").siblings().removeClass("active");
})
let mode=localStorage.getItem('mode')
if(mode!=null&&mode==1){
  $('html').css('background','#222')
  $('footer').css('background','#222')
  $('nav').css('background','#222')
  $('.search input').css('background','#222')
  $('#card span').css('color','#fff')
  $('#second-nav li').css('color','#fff')
  $('#main').css('color','#fff')
  $('.box').css('color','#fff')
  $('.box .title').css('color','#fff')
  $('footer a').css('color','#fff')
}