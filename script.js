const inputBox= document.getElementById("inputbox");
const list= document.getElementById("list-container");

function add(){
    if(inputBox.value===""){
        alert("Write a Task!");
    }else{
        let li= document.createElement("li");
        li.innerHTML=inputBox.value;
        list.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    inputBox.value="";
}

list.addEventListener("click", function (e) {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
      } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
      }
    },
    false
);


function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
    if (hh === 0) {
      hh = 12;
    }
    if (hh > 12) {
      hh = hh - 12;
      session = "PM";
    }
    hh = hh < 10 ? "0" + hh : hh;
    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;
    let time = hh + ":" + mm + ":" + ss + " " + session;
    document.getElementById("clock").innerText = time;
    let t = setTimeout(function () {
      currentTime();
    }, 1000);
  }
  currentTime();

  window.addEventListener("keydown",function(e){
    switch(e.keyCode){
        case 13:
            add();
            break;
    }
})