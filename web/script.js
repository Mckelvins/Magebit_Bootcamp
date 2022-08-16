var masivs=[];


   
// add button------------------------

document.getElementById("addinput").onsubmit = function(event){
    event.preventDefault();
    var input=document.getElementById('addin').value;
    retrieve();
    //vertibas validacija if not Null
    if(input===''){
        alert("Please Enter a Task")
    }
    else{
        console.log(input);
        
        //ievieto vetibu masiva
        masivs.push(document.getElementById('addin').value);
        
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
    console.log("start retrieve");
    fetch("/var/www/web/APIdata.json")
    .then(response => {
        console.log("this is response");
       return response.json();
    })
    .then(jsondata => console.log(jsondata));
    /*
    const GetRecords=localStorage.getItem("ToDoList");
    if(GetRecords!=0){
        var AllRecords = JSON.parse(GetRecords);
        document.getElementById("demo").innerHTML = GetRecords;
        console.log("recors retrieved: "+ AllRecords)
    }
    */
}


function getback(){
    console.log("start retrieve");
    fetch("/var/www/web/APIdata.json")
    .then(response => {
        console.log("this is response");
       return response.json();
    })
    .then(jsondata => console.log(jsondata));
    /*
    const GetRecords=localStorage.getItem("ToDoList");
    if(GetRecords!=0){
        var AllRecords = JSON.parse(GetRecords);
        document.getElementById("demo").innerHTML = GetRecords;
        console.log("recors retrieved: "+ AllRecords)
    }
    */
}


