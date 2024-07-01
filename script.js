var audio=new Audio('MemoryReboot.mp3');
const input=document.querySelector(".input textarea");
const list=document.querySelector(".lists");
const PendingNumber=document.querySelector(".PendingNumber");
const Clear=document.querySelector(".clear");
audio.play();
input.addEventListener("keyup",(e)=>{
    let inputValue=input.value.trim();
    if(e.key === "Enter" && inputValue.length>0 ){
        let liTag=`<li class="items pending" onclick="handleStatus(this)">
                <input type="checkbox" />
                <span class="task">${inputValue}</span>
                <b onclick="deleteTask(this)">🗑️</b>
            </li>`;
        input.value="";
        list.insertAdjacentHTML("beforeend",liTag);  
        allTasks();  
    }
})
function deleteTask(e){
    e.parentElement.remove();
    allTasks();  
}
function handleStatus(e){
    const checkbox=e.querySelector("input");
    checkbox.checked=checkbox.checked ? false : true
    e.classList.toggle("pending");
    allTasks(); 
}

function allTasks(){
    let tasks=document.querySelectorAll(".pending");
    PendingNumber.textContent=tasks.length === 0 ? "no":tasks.length;
    let allLists=document.querySelectorAll(".items");
    if(allLists.length > 0){
        list.style.marginTop="20px";
        return
    }
    list.style.marginTop="0px";
}
Clear.addEventListener("click",()=>{
    list.innerHTML="";
    allTasks(); 
})