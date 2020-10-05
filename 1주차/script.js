var list = document.getElementById('list');
var button = document.getElementById('button');
var input = document.getElementById('input');
var oldNode = undefined;

var count = 1;

button.addEventListener('click', clickButton);

function clickButton() {
    
    var li = document.createElement('li');
  
    li.setAttribute("id", "li"+count);
    li.setAttribute("class", "list-group-item");

    li.innerHTML = "<p>"+input.value+"</p>";
    li.innerHTML += "<button class='btn-sm btn-secondary' type='button' onclick='remove("+count+")'>삭제</button>";
    li.innerHTML += "<button class='btn-sm btn-secondary' type='button' onclick='update("+count+")'>수정</button>";

    if(button.innerText === "수정" && oldNode !== undefined)
    {
        list.replaceChild(li, oldNode);

        input.value = "";

        button.innerText = "입력";
    }
    else if (button.innerText === "입력")
    {
        list.appendChild(li);
        input.value = "";
        count = count+1;
    }
}

function update(count) {
    var li = document.getElementById('li'+count);

    oldNode = li;

    console.log(li.firstChild.innerHTML);

    input.value = li.firstChild.innerHTML;

    button.innerText = "수정";
    
    //remove(count);
}

function remove(count) {
    var li = document.getElementById('li'+count);
    list.removeChild(li);
}