    $('#left').click(function(){
      window.location.href='./profile.html'
    })

    let totalList = localStorage.getItem("list");
    let list = JSON.parse(totalList);
    let title=localStorage.getItem("noteTitle")
    let noteItem={}
    list.forEach((item)=>{
      if(item.title==title){
        noteItem=item;

      }
    })
    let div='<div id="detail"><img src="' +noteItem.image+ '" alt=""><div class="title">'+noteItem.title+'</div><div class="content">'+noteItem.content+'</div></div>';
    $('#center').prepend(div)
    //  分享
    $('#forward').click(function(){
      $('.bottom-toast').show();
    })

    $('#close').click(function(){
      $('.bottom-toast').hide();
    })