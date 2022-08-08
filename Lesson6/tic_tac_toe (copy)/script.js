let array=[];
let i, j;
for(i=0; i<10; i++){
    for(j=0; j<10; j++){
        let button=document.createElement("Button");
        array.push(document.getElementById("table").append(button));

    }
    
}

var cells = document.querySelector("table")

for (let index = 0; index < cells.length; index++) {
    const element = cells[index];
    element.onclick=myFunction;
    
    
}

var vertiba=0;
var count=0;

function change(){
    
    if(count % 2 === 0){
        vertiba="X";       
    }
    else {
        vertiba="O";       
    }
}
function myFunction(){
    if(this.value==""){
        count++;
        change();
        this.value=vertiba;
        check();
    }
}