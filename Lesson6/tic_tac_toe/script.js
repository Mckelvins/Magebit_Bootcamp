var cells =document.querySelectorAll(".value1")
for (let index = 0; index < cells.length; index++) {
    const element = cells[index];

    element.onclick=myFunction;
    
}

function delete_XO() {
    console.log('delete all');
    location.reload();
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

function check(){
    if(
    (this.Button1.value==vertiba && this.Button2.value==vertiba && this.Button3.value==vertiba )||
    (this.Button4.value==vertiba && this.Button5.value==vertiba && this.Button6.value==vertiba )||
    (this.Button7.value==vertiba && this.Button8.value==vertiba && this.Button9.value==vertiba )||
    (this.Button1.value==vertiba && this.Button4.value==vertiba && this.Button7.value==vertiba )||
    (this.Button2.value==vertiba && this.Button5.value==vertiba && this.Button8.value==vertiba )||
    (this.Button3.value==vertiba && this.Button6.value==vertiba && this.Button9.value==vertiba )||
    (this.Button1.value==vertiba && this.Button5.value==vertiba && this.Button9.value==vertiba )||
    (this.Button3.value==vertiba && this.Button5.value==vertiba && this.Button7.value==vertiba )
    )
    {
        document.getElementById("p1").innerHTML = vertiba + " is the Winner!";
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









    
