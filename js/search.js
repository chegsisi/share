$(function(){
  $('#back').click(function(){
    window.location.href='./index.html'
  })
  $('#deter').click(function(){
    let val=$('#s-input').val();
    let span='<span>'+val+'</span>';
    $('.history').append(span);
  })

  $('#delete').click(function(){
    $('.history span').remove();
  })

})