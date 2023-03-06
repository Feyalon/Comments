let comments = [];

function add_content(){
  event.preventDefault();
  let commentName = document.getElementById('name-comment');
  let commentBody = document.getElementById('body-comment');
  if(commentName.value == "" || commentBody.value == ""){
    alert("Одно из поля пустое")
    return false;
  }
  let comment = {
    name : commentName.value,
    body : commentBody.value,
    time : Date.now()/1000
  }



  commentName.value = "";
  commentBody.value = "";
  
  comments.push(comment);
  showComments();
}

function saveComments(){

}

function showComments(){
  let commentStore = document.getElementById('show_comments')
  let out = ''
  comments.forEach((el) => {
    out += `
      <div>
        <p>
          
        </p>
        <p>
          ${el.name}:
        </p>
        <p>
          ${el.body}
        </p>
      </div>
    `;




  })
  commentStore.innerHTML = out;
}


function timeConverter(){
  
}
