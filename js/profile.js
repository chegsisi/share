$(function () {
  let uName = getCookie('name')
  let uImg = getCookie('img')
  let uPass = getCookie('pass')
  let mode = localStorage.getItem('mode')
  if (mode != null && mode == 1) {
    $('html').css('background', '#222')
    $('footer').css('background', '#222')
    $('.tab ul li').css('color', '#fff')
    $('footer a').css('color', '#fff')
  }
  $('#login').click(function () {
    window.location.href = "./login.html"
  })
  // 登录 注销
  $('#cancel').click(function () {
    window.location.href = './profile.html'
    setCookie('name', uName, -1);
    setCookie('img', uImg, -1);
    setCookie('pass', uPass, -1);
    localStorage.removeItem('list')
    isUser();
  })
  // 判断用户是否登录成功
  function isUser() {
    if (uName == null) {
      $('#login').show();
      $('.name').text('请登录');
      $('.user').hide();
      // $('#u-img').attr('src', './images/user1.jpg')
    } else {
      $('#login').hide();
      $('#cancel').show();
      $('.user').show();
      $('.name').text(uName);
      // $('#u-img').attr('src', uImg)
    }
  }
  isUser();
  //跳转到发布笔记页面
  $('#add').click(function () {
    if (uName == null) {
      alert('请先登录，才可以发表笔记')
    } else {
      window.location.href = './note.html'
    }
   

  })
  // 上传图像
  let image;
  $(".file1").change(
    function () {
      var file = this.files[0]; //获取文件信息
      if (window.FileReader) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        //监听文件读取结束后事件    
        reader.onloadend = function (e) {
          image = e.target.result;
          localStorage.setItem('userImg', image)
          $(".fileName").attr("src", e.target.result);
          window.location.href = './profile.html'
        };
      }
    }
  )
  // 判断用户是否上传头像
  let userImg = localStorage.getItem('userImg');
  let noteImg;
  if (userImg != null) {
    $(".fileName").attr("src", userImg);
    noteImg = userImg;
  } else {
    noteImg = "./images/avat.svg";
  }
  // 展示笔记
  let totalList = localStorage.getItem("list");
  let list = JSON.parse(totalList);
  function showNote(){
    if (totalList != null && totalList.length != 0) {
      console.log(list);
      for (let i = 0; i < list.length; i++) {
        let div = '<div class="item" data-titile="' +list[i].title+ '"><img src="' + list[i].image + '" alt=""><p>' + list[i].title + '</p><div class="info"><img src="' + noteImg + '" alt="">' + uName + '<div class="heart"><em class="iconfont icon-changyongicon-"></em><span>赞</span> </div></div>'
        $('.notelist').append(div);
      }
    }
  }
  showNote();
  // 选项卡切换
  $(".tab ul").on('click', 'li', function () {
    $(this).addClass("tab-show").siblings().removeClass("tab-show");
  })
  // 侧边栏显示与隐藏
  $('#show-menu').click(function () {
    $('#side-bar').show();
  })
  $('#back').click(function () {
    $("#side-bar").hide();
  })
  $('#exit').click(function () {
    window.location.href = './login.html'
    localStorage.removeItem('list')
    // isUser();
    setCookie('name', uName, -1);
    setCookie('img', uImg, -1);
    setCookie('pass', uPass, -1);
  })
  // 换肤
  let num = 0;
  $('.change').click(function () {
    if (num < 5) {
      num++;
      let img = 'url(./images/bg' + num + '.jpg)';
      $('#profile').css("background-image", img)
    } else {
      num = 0;
    }

  })

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

  // 深色模式
  $('#dark').click(function () {
    localStorage.setItem('mode', 1);
    window.location.href = './profile.html';
  })
  $('#day').click(function () {
    localStorage.removeItem('mode')
    window.location.href = './profile.html';
  })
  // 笔记详情
  $(".notelist").on("click", '.item', function () {
    window.location.href='./detail.html';
    localStorage.setItem('noteTitle',$(this).attr('data-titile'));
  });

})

