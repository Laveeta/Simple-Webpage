const inputBar = document.querySelector(".taskbar input");
const addBtn = document.querySelector(".taskbar button");
const tasks = document.querySelector(".tasks");
const clearBtn = document.querySelector(".clear");

addBtn.onclick = function () {
    if(inputBar.value.length > 0){
        tasks.innerHTML +=
        `<div>
        <input type="checkbox">
            <span>${inputBar.value}</span>
            <i class="bi bi-trash3" onclick="this.parentNode.remove()"></i>
        </div>`
    }
}