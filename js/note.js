$(function () {
  $('#back').click(function () {
    window.location.href = "./profile.html"
  })
  $('#my-channel').on('click', 'li', function () {
    $('#dropdown').hide();
    $('#text').show();
    $('#text').text($(this).text());
  })
  const change = document.getElementById('change');
  const pull = document.getElementById('pull')
  change.addEventListener('touchstart', function () {
    $('#dropdown').show();
  }, false);
  pull.addEventListener('touchstart', function () {
    $('#dropdown').hide();
  }, false);

  // 上传图像
  let image;
  $(".file1").change(
    function () {
      console.log(2);
      var file = this.files[0]; //获取文件信息
      if (window.FileReader) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        //监听文件读取结束后事件    
        reader.onloadend = function (e) {
          image = e.target.result;
          $(".fileName").attr("src", e.target.result);
        };
      }
    }
  )
  let list = localStorage.getItem("list");
  let totalList = JSON.parse(list);
  // 发表笔记
  $('#publish').click(function () {
    let title = $('#title').val();
    let content = $('#content').val();
    let channel = $('#text').text();
    if (title != '' && content != '' && text != '' && image != null) {
      let newNote = {};
      newNote.title = title;
      newNote.image = image;
      newNote.content = content;
      newNote.channel = channel;
      totalList.push(newNote);
      localStorage.setItem("list", JSON.stringify(totalList));
      console.log(totalList);
      window.location.href = './profile.html';
    } else {
      alert('请正确填写')
    }
  })




})