
let comments = [];

function add_content(){
  event.preventDefault();
  let commentName = document.getElementById('name-comment');
  let commentBody = document.getElementById('body-comment');
  let commentTime = document.getElementById('time-comment');
  let commentHour = document.getElementById('hour-comment')
  if(commentName.value == "" || commentBody.value == ""){
    alert("Одно из поля пустое")
    return false;
  }
  
  

  
  let comment = {
    name : commentName.value,
    body : commentBody.value,
    time : commentTime.value,
    hour: commentHour.value
  }
  console.log(typeof(commentTime.value))


  commentName.value = "";
  commentBody.value = "";
  let i = 0
  comments.push(comment);
  showComments(i);
}

function showComments(e){
  let commentStore = document.getElementById('show_comments')
  let div = ''
  let i = e
  i++
  comments.forEach((el) => {
    
    let like =0
    
    let id = `app_${i}`
    div += `
    
      <div id="${id}">
        <p style="color:gray; font-size:12px;">
          ${checkingDate(el.time, currentTime(), el.hour)}
        </p>
        <div class="commentname">
          <a style="color:black;text-decoration:none;" href="">
            ${el.name}:
          </a>
          <p style="margin-left:10px;">
            ${el.body}
          </p>
        </div>
        
        <div style="margin-top:30px;">
          <label class="label" style="cursor:pointer;">
            <input class="checkbox${i}" id="in${i}" type="checkbox">
            <i id="heart1${i}" class="fa-regular fa-heart"></i>
            <i id="heart2${i}" class="fa-solid fa-heart"></i>
          </label>
          <i style="cursor:pointer;margin-left:18px;" class="fa-solid fa-trash" onclick="deleteBlock('${id}')"></i>
        </div>

      </div>

      <style>
        #${id}{
          display: flex;
          flex-direction: column;
        }
        
        .label{
          display: flex;
        }
        #heart2${i}{
          display: none;
        }
        .checkbox${i}{
          display: none;
          
          cursor: pointer;
        }
        .checkbox${i}:checked ~ #heart1${i}{
            display: none;
          
        }
        .checkbox${i}:checked ~ #heart2${i}{
          display:block;
        }
      </style>
    `;
    
    




  })
  
  commentStore.innerHTML = div;
}


function onLike(i){
  
}


function deleteBlock(el){
  let element = document.getElementById(el)
  document.getElementById('show_comments').removeChild(element)
}
function currentTime(){
  let date = new Date();
  const time = date

  return time
}
function checkingDate(d1, d2, hour) {
  const time1 = new Date(d1); 
  const time2 = new Date(d2); 
  const date = time1.getDate();
  const date2 = time2.getDate();
  const month = time1.getMonth();
  const month2 = time2.getMonth();
  if(!hour){
    hour = time2.toLocaleString("ru", {hour12: false, hour: '2-digit', minute: '2-digit'})
  }

  if(date == date2 || !date){
      return `Сегодня ${hour}`
  }
  else if(month < month2){
    let monthminus = month2 - month
    if(monthminus == 1){
      return "Месяц назад"
    }
    if(monthminus < 4){
      return `${monthminus} Месяца назад`
    }
    if(monthminus > 4){
      return `${monthminus} Месяцев назад`
    }
  }

  else if(date < date2){
    let dateminus = date2 - date
    if(dateminus == 1){
      

      return `Вчера ${hour}`
    }
    if(dateminus == 2){
      return "Позавчера"
    }
    if(dateminus < 3){
      return `${dateminus} дня назад`
    }
    if(dateminus > 3){
      return `${dateminus} дней назад`
    }
  }
  
  else if(date > date2){
    console.log("Ты в будущем")
    return "Ошибка! Вы в будущем сэр?"
  }

}
