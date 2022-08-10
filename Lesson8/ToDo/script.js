let masivs=[];
window.onload =retrieve();
   
// add button------------------------

document.getElementById("addinput").onsubmit = function(event){
    event.preventDefault();
    var input=document.getElementById('addin').value;
     
    //vertibas validacija if not Null
    if(input==''){
        alert("Please Enter a Task")
    }
    else{
        //ievieto vetibu masiva
        masivs.push(input);

        //ievieto "task" datus local storage
        var key = "ToDoList";
        window.localStorage.setItem(key,JSON.stringify(masivs));  
        console.log(" ievietoti dati local storage: "+masivs);

        // izveido "task" sarakstu ar vertibu
        document.getElementById('tasks').innerHTML +=`
        <div class="task">
            <div id="taskname">
                ${document.getElementById('addin').value}
            </div>
            <button class="delete">
            X
            </button>
         </div>     
    `;
    document.getElementById('addin').value='';
    }
//delete button------------------------
var delete_tasks = document.querySelectorAll(".delete");
for(var i=0; i<delete_tasks.length; i++){
    delete_tasks[i].onclick = function(){
        this.parentNode.remove();
    }
}

}


//retrieve  local data
function retrieve(){
    const GetRecords=localStorage.getItem("ToDoList");
    var AllRecords = JSON.parse(GetRecords);
    document.getElementById("demo").innerHTML = GetRecords;
    if(
        GetRecords!=0){
        masivs=AllRecords;
    }
    
    console.log("recors retrieved: "+ AllRecords)

    //make list of records-------------
    if(!AllRecords==''){
    for(x=0; x< AllRecords.length; ++x){
        document.getElementById('tasks').innerHTML +=`
        <div class="task">
            <div id="taskname">
                ${AllRecords[x]}
            </div>
            <button class="delete">
            X
            </button>
         </div>     
    `;
    }
}
}


function DisplayTask(){

}