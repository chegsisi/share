let liList=[];
flag=true;
$('#re-channel').on('click','li',function(){
  let index=$(this).index();
  flag=true;
  for(let i=0;i<liList.length;i++){
    if(liList[i]==index){
     alert('已经存在')
     flag=false;    
    }
  }
  if(flag){
    liList.push(index);
    let length=$(this).text().length;
    let str=$(this).text().slice(1,length);
    $('#my-channel').append('<li>'+str+'</li>')
  }
})

