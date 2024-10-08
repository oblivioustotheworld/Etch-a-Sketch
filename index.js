let cont=document.querySelector(".contanier");

//add 16x16 grid
function sizeFun(){
    
    for(let i=0;i<17;i++){
        const row=document.createElement("div");
        row.classList.add("row");
        for(let j=0;j<17;j++){
            const col=document.createElement("div");
            col.classList.add("col");
            row.appendChild(col);
        }
        cont.appendChild(row);
    }
}

//Change Color hover
cont.addEventListener("mouseover",(e)=>{
    if (e.target.className === 'col') {
        e.target.classList.add('color');
    }
})

//remove existing 
function remove(){
    cont.innerHTML=''
}
//Enter size
let sizeChangeBtn=document.querySelector(".change");

sizeChangeBtn.addEventListener("click",()=>{
remove();
let size=prompt("Enter size. Number must be between 1-100.",16);
if(size >= 1 && size <= 100){
   sizeChangeFun(size);
}
else{
    alert("Number must be between 1-100.");
}
})

//Change size
function sizeChangeFun(size){
    for(let i=0;i<size;i++){
        const row=document.createElement("div");
        row.classList.add("row");
        for(let j=0;j<size;j++){
            const col=document.createElement("div");
            col.classList.add("col");
            row.appendChild(col);
        }
        cont.appendChild(row);
    }
}

sizeFun();