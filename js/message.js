let uName = getCookie('name');
// 获取当前时间
function getNow(s) {
  return s < 10 ? '0' + s : s;
}

function showNowTime() {
  let myDate = new Date();
  let year = myDate.getFullYear(); //获取当前年
  let month = myDate.getMonth() + 1; //获取当前月
  let date = myDate.getDate(); //获取当前日 
  let h = myDate.getHours(); //获取当前小时数(0-23)
  let m = myDate.getMinutes(); //获取当前分钟数(0-59)
  let s = myDate.getSeconds();
  let now = year + '-' + getNow(month) + "-" + getNow(date) + " " + getNow(h) + ':' + getNow(m) + ":" + getNow(s);
  return now;
}
let nowTime = showNowTime();
let time = nowTime.slice(5, nowTime.length)
console.log(time);
console.log(uName);

function showMess() {
  for (let i = 0; i < message.length; i++) {
    let item = '<div class="m-item"><div class="image"><img src="' + message[i].image + '" alt=""></div><div class="text"><div class="name">' + message[i].sendName + '</div> <span>亲爱的用户' + uName + '</sapn></div><div class="time">' + time + '</div></div>'
    $('#mess').prepend(item);
  }
}
if (uName != null) {
  $('.num').text('(1)')
  showMess();
}

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

let mode=localStorage.getItem('mode')
if(mode!=null&&mode==1){
  $('html').css('background','#222')
  $('footer').css('background','#222')
  $('nav').css('background','#222')
  $('footer a').css('color','#fff')
  $('.social .text').css('color','#fff')
  $('.title span').css('color','#fff')
  $('.title em').css('color','#fff')



}