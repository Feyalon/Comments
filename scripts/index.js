let comments = [];

document.getElementById('add_comment').onclick = function(){
  event.preventDefault();
  let commentName = document.getElementById('name-comment');
  let commentBody = document.getElementById('body-comment');
  let comment = {
    name : commentName.value,
    body : commentBody.value,
    time : Date.now()/1000
  }
  console.log(comment)
}